"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = exports.Client = void 0;
const events_1 = require("@harrix432/events");
const stdlib_1 = require("@grakkit/stdlib");
const ServerSocket = stdlib_1.type('java.net.ServerSocket');
const Socket = stdlib_1.type('java.net.Socket');
class Messenger {
    constructor(
    /** The internal socket for this messenger. */
    socket) {
        this.socket = socket;
        this.reader = this.socket.getInputStream();
        this.writer = this.socket.getOutputStream();
    }
    /** Reads bytes from this messenger's input stream. */
    read(capacity) {
        return new Uint8Array(this.reader.readNBytes(Math.min(capacity, this.reader.available())));
    }
    /** Writes data to this messenger's output stream. */
    write(data) {
        data.forEach(value => this.writer.write(value));
    }
}
/** A socket client. Sends and receives binary data to and from a socket server. */
class Client extends events_1.XHost {
    constructor(
    /** The client's server read capacity in bytes per tick. */
    size = 1024) {
        super();
        stdlib_1.task.interval(() => {
            const server = this.server;
            if (server) {
                if (server.socket.isClosed()) {
                    this.disconnect();
                }
                else if (server.socket.isConnected()) {
                    try {
                        const data = server.read(size);
                        data.length > 0 && this.fire('data', { data, server });
                    }
                    catch (error) {
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
    connect(
    /** The server's port. */
    port, 
    /** The server's address or hostname. */
    host = 'localhost', 
    /** The client's server connection timeout in ms. */
    wait = 500) {
        this.disconnect();
        const socket = new Socket(host, port);
        socket.setSoTimeout(wait);
        this.server = new Messenger(socket);
    }
    /** Disconnects this socket from the current server. */
    disconnect() {
        const server = this.server;
        if (server) {
            delete this.server;
            try {
                server.socket.close();
            }
            catch (error) {
                // socket could not be closed
            }
        }
    }
    /** Sends data to the server. */
    send(data) {
        const server = this.server;
        if (server) {
            server.write(data);
        }
    }
}
exports.Client = Client;
/** A socket server. Sends and receives binary data to and from a socket client. */
class Server extends events_1.XHost {
    constructor(
    /** The server's client polling rate in ticks. */
    rate = 1, 
    /** The server's client read capacity in bytes per tick. */
    size = 1024) {
        super();
        /** All connected clients. */
        this.clients = new Set();
        stdlib_1.task.interval(() => {
            const socket = this.socket;
            if (socket) {
                try {
                    const client = new Messenger(socket.accept());
                    this.clients.add(client);
                    this.fire('connect', { client });
                    const future = stdlib_1.task.interval(() => {
                        if (client.socket.isClosed()) {
                            stdlib_1.task.cancel(future);
                            this.clients.delete(client);
                            this.fire('disconnect', { client });
                        }
                        else if (client.socket.isConnected()) {
                            try {
                                const data = client.read(size);
                                data.length > 0 && this.fire('data', { client, data });
                            }
                            catch (error) {
                                this.fire('error', { error });
                            }
                        }
                    });
                }
                catch (error) {
                    // client did not connect
                }
            }
        }, rate);
        Grakkit.hook(() => {
            this.stop();
        });
    }
    /** Sends data to all connected clients. */
    send(data) {
        for (const client of this.clients)
            client.write(data);
    }
    /** Starts the server. If a server attached to this instance is already running, that server will be stopped before
     * a new one is started. */
    start(
    /** The server's port. */
    port) {
        this.stop();
        this.socket = new ServerSocket(port);
        this.socket.setSoTimeout(1);
    }
    /** Stops the server. */
    stop() {
        const socket = this.socket;
        if (socket) {
            delete this.socket;
            try {
                socket.close();
            }
            catch (error) {
                // socket could not be closed
            }
        }
    }
}
exports.Server = Server;
