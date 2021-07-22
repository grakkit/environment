import * as types from '@grakkit/types';
import { XHost } from '@harrix432/events';
declare type ClientEvents = {
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
declare type ServerEvents = {
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
declare class Messenger {
    /** The input stream for this messenger. */
    reader: types.jiInputStream;
    /** The internal socket for this messenger. */
    socket: types.jnSocket;
    /** The output stream for this messenger. */
    writer: types.jiOutputStream;
    constructor(
    /** The internal socket for this messenger. */
    socket: types.jnSocket);
    /** Reads bytes from this messenger's input stream. */
    read(capacity: number): Uint8Array;
    /** Writes data to this messenger's output stream. */
    write(data: Uint8Array): void;
}
/** A socket client. Sends and receives binary data to and from a socket server. */
export declare class Client extends XHost<ClientEvents> {
    /** The server that this client will connect or is connected to. */
    server: Messenger | void;
    constructor(
    /** The client's server read capacity in bytes per tick. */
    size?: number);
    /** Connects this socket to a server. If a connection attached to this instance is already active, that connection
     * will be terminated before a new one is made. */
    connect(
    /** The server's port. */
    port: number, 
    /** The server's address or hostname. */
    host?: string, 
    /** The client's server connection timeout in ms. */
    wait?: number): void;
    /** Disconnects this socket from the current server. */
    disconnect(): void;
    /** Sends data to the server. */
    send(data: Uint8Array): void;
}
/** A socket server. Sends and receives binary data to and from a socket client. */
export declare class Server extends XHost<ServerEvents> {
    /** All connected clients. */
    clients: Set<Messenger>;
    /** The internal socket for this server. */
    socket: types.jnServerSocket | void;
    constructor(
    /** The server's client polling rate in ticks. */
    rate?: number, 
    /** The server's client read capacity in bytes per tick. */
    size?: number);
    /** Sends data to all connected clients. */
    send(data: Uint8Array): void;
    /** Starts the server. If a server attached to this instance is already running, that server will be stopped before
     * a new one is started. */
    start(
    /** The server's port. */
    port: number): void;
    /** Stops the server. */
    stop(): void;
}
export {};
