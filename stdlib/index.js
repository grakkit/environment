"use strict";
/// <reference path="./scope.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.task = exports.sync = exports.simplify = exports.root = exports.reload = exports.regex = exports.load = exports.file = exports.fetch = exports.event = exports.env = exports.data = exports.command = exports.chain = exports.type = exports.session = void 0;
if ('Grakkit' in globalThis) {
    Object.assign(globalThis, { Core: Grakkit });
}
else if ('Core' in globalThis) {
    Object.assign(globalThis, { Grakkit: Core });
}
else {
    throw 'Grakkit was not detected in your current environment!';
}
/** A session container for this module. */
exports.session = {
    data: new Map(),
    event: new Map(),
    load: new Map(),
    poly: { index: 0, list: new Map() },
    task: { list: new Set(), tick: 0 },
    type: new Map()
};
/** Imports the specified type from java. */
function type(name) {
    if (exports.session.type.has(name)) {
        return exports.session.type.get(name);
    }
    else {
        const value = Java.type(name);
        exports.session.type.set(name, value);
        return value;
    }
}
exports.type = type;
const Files = type('java.nio.file.Files');
const JavaString = type('java.lang.String');
const Paths = type('java.nio.file.Paths');
const Pattern = type('java.util.regex.Pattern');
const Scanner = type('java.util.Scanner');
const URL = type('java.net.URL');
/** It's complicated. */
function chain(base, modifier) {
    const chain = (object) => modifier(object, chain);
    chain(base);
}
exports.chain = chain;
/** Registers a custom command to the server. */
function command(options) {
    switch (exports.env.name) {
        case 'bukkit':
            {
                exports.env.content.plugin.register(options.namespace || exports.env.content.plugin.getName(), options.name, options.aliases || [], options.permission || '', options.message || '', (sender, label, args) => {
                    try {
                        if (!options.permission || sender.hasPermission(options.permission)) {
                            options.execute && options.execute(sender, ...args);
                        }
                        else {
                            sender.sendMessage(options.message || '');
                        }
                    }
                    catch (error) {
                        console.error(`An error occured while attempting to execute the "${label}" command!`);
                        console.error(error.stack || error.message || error);
                    }
                }, (sender, alias, args) => {
                    try {
                        return (options.tabComplete && options.tabComplete(sender, ...args)) || [];
                    }
                    catch (error) {
                        console.error(`An error occured while attempting to tab-complete the "${alias}" command!`);
                        console.error(error.stack || error.message || error);
                        return [];
                    }
                });
            }
            break;
        case 'minestom': {
            const command = new exports.env.content.Command(options.name);
            command.addSyntax((sender, context) => {
                try {
                    options.execute && options.execute(sender, ...context.getInput().split(' ').slice(1));
                }
                catch (error) {
                    console.error(`An error occured while attempting to execute the "${options.name}" command!`);
                    console.error(error.stack || error.message || error);
                }
            }, exports.env.content.ArgumentType.StringArray('tab-complete').setSuggestionCallback((sender, context, suggestion) => {
                for (const completion of options.tabComplete(sender, ...context.getInput().split(' ').slice(1)) || []) {
                    suggestion.addEntry(new exports.env.content.SuggestionEntry(completion));
                }
            }));
            exports.env.content.registry.register(command);
        }
    }
}
exports.command = command;
/** Stores data on a per-path basis. */
function data(path, ...more) {
    const name = Paths.get(path, ...more).normalize().toString();
    if (exports.session.data.has(name)) {
        return exports.session.data.get(name);
    }
    else {
        const value = file(exports.root, 'data', `${name}.json`).json() || {};
        exports.session.data.set(name, value);
        return value;
    }
}
exports.data = data;
/** The environment that this module is currently running in. */
exports.env = (() => {
    try {
        //@ts-expect-error
        const Bukkit = type('org.bukkit.Bukkit');
        /* bukkit detected */
        const manager = Bukkit.getPluginManager();
        const plugin = manager.getPlugin('grakkit');
        Grakkit.hook(() => {
            //@ts-expect-error
            type('org.bukkit.event.HandlerList').unregisterAll(plugin);
        });
        return {
            name: 'bukkit',
            content: {
                //@ts-expect-error
                EventPriority: type('org.bukkit.event.EventPriority'),
                //@ts-expect-error
                instance: new (Java.extend(type('org.bukkit.event.Listener'), {}))(),
                manager,
                plugin,
                server: Bukkit.getServer()
            }
        };
    }
    catch (error) {
        try {
            //@ts-expect-error
            const MinecraftServer = type('net.minestom.server.MinecraftServer');
            /* minestom detected */
            const manager = MinecraftServer.getExtensionManager();
            const extension = manager.getExtension('grakkit');
            return {
                name: 'minestom',
                content: {
                    //@ts-expect-error
                    ArgumentType: type('net.minestom.server.command.builder.arguments.ArgumentType'),
                    //@ts-expect-error
                    Command: type('net.minestom.server.command.builder.Command'),
                    extension,
                    manager,
                    node: extension.getEventNode(),
                    registry: MinecraftServer.getCommandManager(),
                    server: MinecraftServer,
                    //@ts-expect-error
                    SuggestionEntry: type('net.minestom.server.command.builder.suggestion.SuggestionEntry')
                }
            };
        }
        catch (error) {
            return { name: 'unknown', content: {} };
        }
    }
})();
/** Attaches one or more listeners to a server event. */
function event(name, ...listeners) {
    switch (exports.env.name) {
        case 'bukkit':
            {
                let list;
                if (exports.session.event.has(name)) {
                    list = exports.session.event.get(name);
                }
                else {
                    list = new Set();
                    exports.session.event.set(name, list);
                }
                const targets = new Set();
                for (const listener of listeners) {
                    if (typeof listener === 'function') {
                        targets.has('HIGHEST') || targets.add('HIGHEST');
                    }
                    else {
                        targets.has(listener.priority) || targets.add(listener.priority);
                    }
                }
                for (const listener of list) {
                    if (typeof listener === 'function') {
                        targets.has('HIGHEST') && targets.delete('HIGHEST');
                    }
                    else {
                        targets.has(listener.priority) && targets.delete(listener.priority);
                    }
                }
                for (const target of targets) {
                    const emitter = type(name);
                    exports.env.content.manager.registerEvent(
                    // @ts-expect-error
                    emitter.class, exports.env.content.instance, exports.env.content.EventPriority.valueOf(target), (x, signal) => {
                        if (signal instanceof emitter) {
                            try {
                                for (const listener of list) {
                                    if (typeof listener === 'function') {
                                        target === 'HIGHEST' && listener(signal);
                                    }
                                    else {
                                        target === listener.priority && listener.script(signal);
                                    }
                                }
                            }
                            catch (error) {
                                console.error(`An error occured while attempting to handle the "${name}" event!`);
                                console.error(error.stack || error.message || error);
                            }
                        }
                    }, exports.env.content.plugin);
                }
                for (const listener of listeners)
                    list.has(listener) || list.add(listener);
            }
            break;
        case 'minestom':
            {
                let list;
                if (exports.session.event.has(name)) {
                    list = exports.session.event.get(name);
                }
                else {
                    list = new Set();
                    exports.session.event.set(name, list);
                }
                if (list.size === 0) {
                    const emitter = type(name);
                    // @ts-expect-error
                    exports.env.content.node.addListener(emitter.class, (signal) => {
                        try {
                            for (const listener of list) {
                                if (typeof listener === 'function') {
                                    listener(signal);
                                }
                                else {
                                    listener.script(signal);
                                }
                            }
                        }
                        catch (error) {
                            console.error(`An error occured while attempting to handle the "${name}" event!`);
                            console.error(error.stack || error.message || error);
                        }
                    });
                }
                for (const listener of listeners)
                    list.has(listener) || list.add(listener);
            }
            break;
    }
}
exports.event = event;
/** Sends a GET request to the given URL. */
function fetch(link) {
    const thing = {
        json(async) {
            if (async) {
                return sync(async () => thing.json());
            }
            else {
                try {
                    return JSON.parse(thing.read());
                }
                catch (error) {
                    throw error;
                }
            }
        },
        read(async) {
            if (async) {
                return sync(async () => thing.read());
            }
            else {
                return new Scanner(thing.stream()).useDelimiter('\\A').next();
            }
        },
        stream(async) {
            if (async) {
                return sync(async () => thing.stream());
            }
            else {
                return new URL(link).openStream();
            }
        }
    };
    return thing;
}
exports.fetch = fetch;
/** A utility wrapper for paths and files. */
function file(path, ...more) {
    path = typeof path === 'string' ? path : 'io' in path ? path.path : path.getPath();
    const io = Paths.get(path, ...more).normalize().toFile();
    const thing = {
        get children() {
            return thing.type === 'folder' ? [...io.listFiles()].map(sub => file(sub.getPath())) : null;
        },
        directory() {
            if (thing.type === 'none') {
                chain(io, (io, loop) => {
                    const parent = io.getParentFile();
                    parent && (parent.exists() || loop(parent));
                    io.mkdir();
                });
            }
            return thing;
        },
        entry() {
            thing.type === 'none' && thing.parent.directory() && io.createNewFile();
            return thing;
        },
        get exists() {
            return io.exists();
        },
        file(...path) {
            return file(io, ...path);
        },
        flush() {
            chain(io, (io, loop) => {
                const parent = io.getParentFile();
                parent && parent.isDirectory() && (parent.listFiles()[0] || (parent.delete() && loop(parent)));
            });
            return thing;
        },
        io,
        json(async) {
            if (async) {
                return sync(async () => thing.json());
            }
            else {
                try {
                    return JSON.parse(thing.read());
                }
                catch (error) {
                    return null;
                }
            }
        },
        get name() {
            return io.getName();
        },
        get parent() {
            return thing.file('..');
        },
        get path() {
            return exports.regex.replace(io.getPath(), '(\\\\)', '/');
        },
        //@ts-expect-error
        read(async) {
            if (async) {
                return sync(async () => thing.read());
            }
            else {
                return thing.type === 'file' ? new JavaString(Files.readAllBytes(io.toPath())).toString() : null;
            }
        },
        remove() {
            chain(io, (io, loop) => {
                io.isDirectory() && [...io.listFiles()].forEach(loop);
                io.exists() && io.delete();
            });
            return thing.flush();
        },
        get type() {
            return io.isDirectory() ? 'folder' : io.exists() ? 'file' : 'none';
        },
        //@ts-expect-error
        write(content, async) {
            if (async) {
                return sync(async () => thing.write(content));
            }
            else {
                thing.type === 'file' && Files.write(io.toPath(), new JavaString(content).getBytes());
                return thing;
            }
        }
    };
    return thing;
}
exports.file = file;
/** Imports classes from external files. */
function load(path, name) {
    if (exports.session.load.has(name)) {
        return exports.session.load.get(name);
    }
    else {
        const source = file(path);
        if (source.exists) {
            const value = Grakkit.load(source.io, name);
            exports.session.load.set(name, value);
            return value;
        }
        else {
            throw new ReferenceError(`The file "${source.path}" does not exist!`);
        }
    }
}
exports.load = load;
exports.regex = {
    test(input, expression) {
        //@ts-expect-error
        return input.matches(expression);
    },
    replace(input, expression, replacement) {
        //@ts-expect-error
        return Pattern.compile(expression).matcher(input).replaceAll(replacement);
    }
};
/** Reloads the JS environment. */
function reload() {
    Grakkit.push(Grakkit.swap);
}
exports.reload = reload;
/** The root folder of the environment. */
exports.root = file(Grakkit.getRoot());
/** Recursively removes or replaces the circular references in an object. */
function simplify(object, placeholder, objects) {
    if (object && typeof object === 'object') {
        objects || (objects = new Set());
        if (objects.has(object)) {
            return placeholder;
        }
        else {
            objects.add(object);
            const output = typeof object[Symbol.iterator] === 'function' ? [] : {};
            for (const key in object)
                output[key] = simplify(object[key], placeholder, new Set(objects));
            return output;
        }
    }
    else {
        return object;
    }
}
exports.simplify = simplify;
/** Runs an async function in another thread. */
function sync(script) {
    return new Promise((resolve, reject) => {
        Grakkit.sync(() => script().then(resolve).catch(reject));
    });
}
exports.sync = sync;
/** A simple task scheduler. */
exports.task = {
    /** Cancels a previously scheduled task. */
    cancel(handle) {
        exports.session.task.list.delete(handle);
    },
    /** Schedules a task to run infinitely at a set interval. */
    interval(script, period = 0, ...args) {
        const future = exports.task.timeout((...args) => {
            future.tick += Math.ceil(period < 1 ? 1 : period);
            script(...args);
        }, 0, ...args);
        return future;
    },
    /** Schedules a task to run after a set timeout. */
    timeout(script, period = 0, ...args) {
        const future = { tick: exports.session.task.tick + Math.ceil(period < 0 ? 0 : period), args, script };
        exports.session.task.list.add(future);
        return future;
    }
};
chain(void 0, (none, next) => {
    Grakkit.push(next);
    for (const task of exports.session.task.list) {
        if (exports.session.task.tick > task.tick) {
            exports.session.task.list.delete(task);
        }
        else if (exports.session.task.tick === task.tick) {
            try {
                task.script(...task.args);
            }
            catch (error) {
                console.error('An error occured while attempting to execute a task!');
                console.error(error.stack || error.message || error);
            }
        }
    }
    ++exports.session.task.tick;
});
Grakkit.hook(() => {
    for (const [name] of exports.session.data) {
        file(exports.root, 'data', `${name}.json`).entry().write(JSON.stringify(simplify(exports.session.data.get(name))));
    }
});
const base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
const promise = Promise.resolve();
Object.assign(globalThis, {
    atob(data) {
        var str = exports.regex.replace(String(data), '[=]+$', '');
        if (str.length % 4 === 1) {
            throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
        }
        for (var bc = 0, bs, buffer, idx = 0, output = ''; (buffer = str.charAt(idx++)); ~buffer && ((bs = bc % 4 ? bs * 64 + buffer : buffer), bc++ % 4)
            ? (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6))))
            : 0) {
            buffer = base.indexOf(buffer);
        }
        return output;
    },
    btoa(data) {
        var str = String(data);
        for (var block, charCode, idx = 0, map = base, output = ''; str.charAt(idx | 0) || ((map = '='), idx % 1); output += map.charAt(63 & (block >> (8 - (idx % 1) * 8)))) {
            charCode = str.charCodeAt((idx += 3 / 4));
            if (charCode > 0xff) {
                throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
            }
            block = (block << 8) | charCode;
        }
        return output;
    },
    clearImmediate(handle) {
        exports.task.cancel(exports.session.poly.list.get(handle));
    },
    clearInterval(handle) {
        exports.task.cancel(exports.session.poly.list.get(handle));
    },
    clearTimeout(handle) {
        exports.task.cancel(exports.session.poly.list.get(handle));
    },
    queueMicrotask(callback) {
        promise.then(callback).catch(error => {
            exports.task.timeout(() => {
                throw error;
            });
        });
    },
    setInterval(script, period = 0, ...args) {
        exports.session.poly.list.set(exports.session.poly.index, exports.task.interval(typeof script === 'string' ? () => Polyglot.eval('js', script) : script, Math.ceil(period / 50), ...args));
        return exports.session.poly.index++;
    },
    setTimeout(script, period = 0, ...args) {
        exports.session.poly.list.set(exports.session.poly.index, exports.task.timeout(typeof script === 'string' ? () => Polyglot.eval('js', script) : script, Math.ceil(period / 50), ...args));
        return exports.session.poly.index++;
    },
    setImmediate(script, ...args) {
        exports.session.poly.list.set(exports.session.poly.index, exports.task.timeout(typeof script === 'string' ? () => Polyglot.eval('js', script) : script, 0, ...args));
        return exports.session.poly.index++;
    }
});
