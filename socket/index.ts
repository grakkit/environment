import * as types from '@grakkit/types';

import { XHost } from '@harrix432/events';
import { task, type } from '@grakkit/stdlib';

const ServerSocket = type('java.net.ServerSocket');
const Socket = type('java.net.Socket');

type ClientEvents = {
   data: [
      {
         /** The data being received. */
         data: Uint8Array;
         /** The server that this client received data from. */
         server: Messenger;
      }
   ];
   error: [
      {
         /** The error message. */
         error: any;
      }
   ];
};

type ExchangeEvents = {
   message: [
      {
         /** The message being received. */
         message: Uint8Array;
         /** The exchange which sent the message to this exchange. */
         client: Messenger;
      }
   ];
   error: [
      {
         /** The error message. */
         error: any;
      }
   ];
};

type ServerEvents = {
   connect: [
      {
         /** The client which connected this server. */
         client: Messenger;
      }
   ];
   data: [
      {
         /** The client which sent the data to this server. */
         client: Messenger;
         /** The data being received. */
         data: Uint8Array;
      }
   ];
   disconnect: [
      {
         /** The client which disconnected this server. */
         client: Messenger;
      }
   ];
   error: [
      {
         /** The error message. */
         error: any;
      }
   ];
};

class Messenger {
   /** The input stream for this messenger. */
   reader: types.jiInputStream;
   /** The internal socket for this messenger. */
   socket: types.jnSocket;
   /** The output stream for this messenger. */
   writer: types.jiOutputStream;
   constructor (
      /** The internal socket for this messenger. */
      socket: types.jnSocket
   ) {
      this.socket = socket;
      this.reader = this.socket.getInputStream();
      this.writer = this.socket.getOutputStream();
   }
   /** Reads bytes from this messenger's input stream. */
   read (capacity: number) {
      return new Uint8Array(this.reader.readNBytes(Math.min(capacity, this.reader.available())));
   }
   /** Writes data to this messenger's output stream. */
   write (data: Uint8Array) {
      data.forEach(value => this.writer.write(value));
   }
}

/** A socket client. Sends and receives binary data to and from a socket server. */
export class Client extends XHost<ClientEvents> {
   /** The server that this client will connect or is connected to. */
   server: Messenger | void;
   constructor (
      /** The client's server read capacity in bytes per tick. */
      size = 1024
   ) {
      super();
      task.interval(() => {
         const server = this.server;
         if (server) {
            if (server.socket.isClosed()) {
               this.disconnect();
            } else if (server.socket.isConnected()) {
               try {
                  const data = server.read(size);
                  data.length > 0 && this.fire('data', { data, server });
               } catch (error) {
                  this.fire('error', { error });
               }
            }
         }
      });
      Grakkit.hook(() => {
         this.disconnect();
      });
   }
   /** Connects this socket to a server. If a connection attached to this instance is already active, that connection
    * will be terminated before a new one is made. */
   connect (
      /** The server's port. */
      port: number,
      /** The server's address or hostname. */
      host = 'localhost',
      /** The client's server connection timeout in ms. */
      wait = 500
   ) {
      this.disconnect();
      const socket = new Socket(host, port);
      socket.setSoTimeout(wait);
      this.server = new Messenger(socket);
   }
   /** Disconnects this socket from the current server. */
   disconnect () {
      const server = this.server;
      if (server) {
         delete this.server;
         try {
            server.socket.close();
         } catch (error) {
            // socket could not be closed
         }
      }
   }
   /** Sends data to the server. */
   send (data: Uint8Array) {
      const server = this.server;
      if (server) {
         server.write(data);
      }
   }
}

/** A socket server. Sends and receives binary data to and from a socket client. */
export class Server extends XHost<ServerEvents> {
   /** All connected clients. */
   clients = new Set<Messenger>();
   /** The internal socket for this server. */
   socket: types.jnServerSocket | void;
   constructor (
      /** The server's client polling rate in ticks. */
      rate = 1,
      /** The server's client read capacity in bytes per tick. */
      size = 1024
   ) {
      super();
      task.interval(() => {
         const socket = this.socket;
         if (socket) {
            try {
               const client = new Messenger(socket.accept());
               this.clients.add(client);
               this.fire('connect', { client });
               const future = task.interval(() => {
                  if (client.socket.isClosed()) {
                     task.cancel(future);
                     this.clients.delete(client);
                     this.fire('disconnect', { client });
                  } else if (client.socket.isConnected()) {
                     try {
                        const data = client.read(size);
                        data.length > 0 && this.fire('data', { client, data });
                     } catch (error) {
                        this.fire('error', { error });
                     }
                  }
               });
            } catch (error) {
               // client did not connect
            }
         }
      }, rate);
      Grakkit.hook(() => {
         this.stop();
      });
   }
   /** Sends data to all connected clients. */
   send (data: Uint8Array) {
      for (const client of this.clients) client.write(data);
   }
   /** Starts the server. If a server attached to this instance is already running, that server will be stopped before
    * a new one is started. */
   start (
      /** The server's port. */
      port: number
   ) {
      this.stop();
      this.socket = new ServerSocket(port);
      this.socket.setSoTimeout(1);
   }
   /** Stops the server. */
   stop () {
      const socket = this.socket;
      if (socket) {
         delete this.socket;
         try {
            socket.close();
         } catch (error) {
            // socket could not be closed
         }
      }
   }
}
