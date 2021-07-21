/// <reference path="./scope.d.ts" />

import { classes } from './classes';
export { classes } from './classes';
import { jiFile, jiInputStream, jnHttpURLConnection } from '@grakkit/types';

/** A set of listeners attached to an event. */
export type cascade = Set<((event: any) => void) | { script: (event: any) => void; priority: priority }>;

/** A pending task. */
export type future = { tick: number; args: any[]; script: Function };

/** A valid event priority. */
export type priority = 'HIGH' | 'HIGHEST' | 'LOW' | 'LOWEST' | 'MONITOR' | 'NORMAL';

/** File system utilities for a specific path. */
export type record = {
   /** Returns an array of modifiers for the contents of the folder (if any) at the current path. */
   readonly children: record[];
   /** Creates a folder at the current path if no file or folder already exists there. */
   directory(): record;
   /** Creates a file at the current path if no file or folder already exists there. */
   entry(): record;
   /** Whether a file or folder exists at the current path or not. */
   readonly exists: boolean;
   /** Joins the current path and the given sub-path, and returns a new modifier for it. */
   file(...sub: string[]): record;
   /** Starting from the current path, removes parent folders upstream until a parent folder is non-empty. */
   flush(): record;
   /** The java file for the current path. */
   io: jiFile;
   /** Synchronously parses the JSON content (if any) of the file at the current path. */
   json(async?: false): any;
   /** Parses the JSON content (if any) of the file at the current path. */
   json(async: true): Promise<any>;
   /** The name of the current path. */
   readonly name: string;
   /** The current path. */
   readonly path: string;
   /** The record for the parent folder of the current path. */
   readonly parent: record;
   /** Synchronously returns the content (if any) of the file at the current path. */
   read(async?: false): string;
   /** Returns the content (if any) of the file at the current path. */
   read(async: true): Promise<string>;
   /** Removes and flushes the file or folder (if any) at the current path. */
   remove(): record;
   /** Whether the current path represents a folder, a file, or none of the above. */
   readonly type: 'folder' | 'file' | 'none';
   /** Synchronously writes the given content to the file (if any) at the current path. */
   write(content: string, async?: false): record;
   /** Writes the given content to the file (if any) at the current path. */
   write(content: string, async: true): Promise<record>;
};

/** A web response. */
export type response = {
   /** The connection instance used to make this request. */
   net: jnHttpURLConnection;
   /** Synchronously parses the JSON content (if any) of the response. */
   json(async?: false): any;
   /** Parses the JSON content (if any) of the response. */
   json(async: true): Promise<any>;
   /** Synchronously returns the content (if any) of the response. */
   read(async?: false): string;
   /** Returns the content (if any) of the response. */
   read(async: true): Promise<string>;
   /** Synchronously returns the response stream. */
   stream(async?: false): jiInputStream;
   /** Returns the response stream. */
   stream(async: true): Promise<jiInputStream>;
};

if ('Grakkit' in globalThis) {
   Object.assign(globalThis, { Core: Grakkit });
} else if ('Core' in globalThis) {
   Object.assign(globalThis, { Grakkit: Core });
} else {
   throw 'Grakkit was not detected in your current environment!';
}

/** A session container for this module. */
export const session = {
   data: new Map<string, any>(),
   event: new Map<keyof classes & `${string}Event`, cascade>(),
   load: new Map<string, any>(),
   poly: { index: 0, list: new Map<number, future>() },
   task: { list: new Set<future>(), tick: 0 },
   type: new Map<keyof classes, any>()
};

/** Imports the specified type from java. */
export function type<X extends keyof classes> (name: X): classes[X] {
   if (session.type.has(name)) {
      return session.type.get(name);
   } else {
      const value = Java.type(name);
      session.type.set(name, value);
      return value;
   }
}

const Files = type('java.nio.file.Files');
const JavaString = type('java.lang.String');
const Paths = type('java.nio.file.Paths');
const Pattern = type('java.util.regex.Pattern');
const Scanner = type('java.util.Scanner');
const URL = type('java.net.URL');

/** It's complicated. */
export function chain<X, Y extends (input: X, chain: (object: X) => ReturnType<Y>) => any> (base: X, modifier: Y) {
   const chain = (object: X) => modifier(object, chain);
   chain(base);
}

/** Registers a custom command to the server. */
export function command (options: {
   name: string;
   message?: string;
   aliases?: string[];
   execute?: (sender: any, ...args: string[]) => void;
   namespace?: string;
   permission?: string;
   tabComplete?: (sender: any, ...args: string[]) => string[];
}) {
   switch (env.name) {
      case 'bukkit':
         {
            env.content.plugin.register(
               options.namespace || env.content.plugin.getName(),
               options.name,
               options.aliases || [],
               options.permission || '',
               options.message || '',
               (sender, label, args) => {
                  try {
                     if (!options.permission || sender.hasPermission(options.permission)) {
                        options.execute && options.execute(sender, ...args);
                     } else {
                        sender.sendMessage(options.message || '');
                     }
                  } catch (error) {
                     console.error(`An error occured while attempting to execute the "${label}" command!`);
                     console.error(error.stack || error.message || error);
                  }
               },
               (sender, alias, args) => {
                  try {
                     return (options.tabComplete && options.tabComplete(sender, ...args)) || [];
                  } catch (error) {
                     console.error(`An error occured while attempting to tab-complete the "${alias}" command!`);
                     console.error(error.stack || error.message || error);
                     return [];
                  }
               }
            );
         }
         break;
      case 'minestom': {
         const command = new env.content.Command(options.name);
         command.addSyntax(
            (sender, context) => {
               try {
                  options.execute && options.execute(sender, ...context.getInput().split(' ').slice(1));
               } catch (error) {
                  console.error(`An error occured while attempting to execute the "${options.name}" command!`);
                  console.error(error.stack || error.message || error);
               }
            },
            env.content.ArgumentType.StringArray(
               'tab-complete'
            ).setSuggestionCallback(
               (sender, context, suggestion) => {
                  for (const completion of options.tabComplete(sender, ...context.getInput().split(' ').slice(1)) || []) {
                     suggestion.addEntry(new env.content.SuggestionEntry(completion));
                  }
               }
            )
         );
         env.content.registry.register(command);
      }
   }
}

/** Stores data on a per-path basis. */
export function data (path: string, ...more: string[]) {
   const name = Paths.get(path, ...more).normalize().toString();
   if (session.data.has(name)) {
      return session.data.get(name);
   } else {
      const value = file(root, 'data', `${name}.json`).json() || {};
      session.data.set(name, value);
      return value;
   }
}

/** The environment that this module is currently running in. */
export const env = (() => {
   try {
      //@ts-expect-error
      const Bukkit: any = type('org.bukkit.Bukkit');

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
            EventPriority: type('org.bukkit.event.EventPriority') as any,
            //@ts-expect-error
            instance: new (Java.extend(type('org.bukkit.event.Listener'), {}))(),
            manager,
            plugin,
            server: Bukkit.getServer()
         }
      };
   } catch (error) {
      try {
         //@ts-expect-error
         const MinecraftServer: any = type('net.minestom.server.MinecraftServer');

         /* minestom detected */

         const manager = MinecraftServer.getExtensionManager();
         const extension = manager.getExtension('grakkit');

         return {
            name: 'minestom',
            content: {
               //@ts-expect-error
               ArgumentType: type('net.minestom.server.command.builder.arguments.ArgumentType') as any,
               //@ts-expect-error
               Command: type('net.minestom.server.command.builder.Command') as any,
               extension,
               manager,
               node: extension.getEventNode(),
               registry: MinecraftServer.getCommandManager(),
               server: MinecraftServer,
               //@ts-expect-error
               SuggestionEntry: type('net.minestom.server.command.builder.suggestion.SuggestionEntry') as any
            }
         };
      } catch (error) {
         return { name: 'unknown', content: {} };
      }
   }
})();

/** Attaches one or more listeners to a server event. */
export function event<X extends keyof classes & `${string}Event`> (
   name: X,
   ...listeners: (
      | ((event: InstanceType<classes[X]>) => void)
      | { script: (event: InstanceType<classes[X]>) => void; priority: priority })[]
) {
   switch (env.name) {
      case 'bukkit':
         {
            let list: cascade;
            if (session.event.has(name)) {
               list = session.event.get(name);
            } else {
               list = new Set();
               session.event.set(name, list);
            }
            const targets: Set<priority> = new Set();
            for (const listener of listeners) {
               if (typeof listener === 'function') {
                  targets.has('HIGHEST') || targets.add('HIGHEST');
               } else {
                  targets.has(listener.priority) || targets.add(listener.priority);
               }
            }
            for (const listener of list) {
               if (typeof listener === 'function') {
                  targets.has('HIGHEST') && targets.delete('HIGHEST');
               } else {
                  targets.has(listener.priority) && targets.delete(listener.priority);
               }
            }
            for (const target of targets) {
               const emitter = type(name);
               env.content.manager.registerEvent(
                  // @ts-expect-error
                  emitter.class,
                  env.content.instance,
                  env.content.EventPriority.valueOf(target),
                  (x: any, signal: any) => {
                     if (signal instanceof emitter) {
                        try {
                           for (const listener of list) {
                              if (typeof listener === 'function') {
                                 target === 'HIGHEST' && listener(signal);
                              } else {
                                 target === listener.priority && listener.script(signal);
                              }
                           }
                        } catch (error) {
                           console.error(`An error occured while attempting to handle the "${name}" event!`);
                           console.error(error.stack || error.message || error);
                        }
                     }
                  },
                  env.content.plugin
               );
            }
            for (const listener of listeners) list.has(listener) || list.add(listener);
         }
         break;
      case 'minestom':
         {
            let list: cascade;
            if (session.event.has(name)) {
               list = session.event.get(name);
            } else {
               list = new Set();
               session.event.set(name, list);
            }
            if (list.size === 0) {
               const emitter = type(name);
               // @ts-expect-error
               env.content.node.addListener(emitter.class, (signal: any) => {
                  try {
                     for (const listener of list) {
                        if (typeof listener === 'function') {
                           listener(signal);
                        } else {
                           listener.script(signal);
                        }
                     }
                  } catch (error) {
                     console.error(`An error occured while attempting to handle the "${name}" event!`);
                     console.error(error.stack || error.message || error);
                  }
               });
            }
            for (const listener of listeners) list.has(listener) || list.add(listener);
         }
         break;
   }
}

/** Sends a GET request to the given URL. */
export function fetch (link: string) {
   //@ts-expect-error
   const net: jnHttpURLConnection = new URL(link).openConnection();
   net.setDoOutput(true);
   net.setRequestMethod('GET');
   net.setInstanceFollowRedirects(true);
   const thing: response = {
      net,
      json (async?: boolean) {
         if (async) {
            return sync(async () => thing.json());
         } else {
            try {
               return JSON.parse(thing.read());
            } catch (error) {
               throw error;
            }
         }
      },
      //@ts-expect-error
      read (async?: boolean) {
         if (async) {
            return sync(async () => thing.read());
         } else {
            return new Scanner(thing.stream()).useDelimiter('\\A').next();
         }
      },
      //@ts-expect-error
      stream (async?: boolean) {
         if (async) {
            return sync(async () => thing.stream());
         } else {
            const code = net.getResponseCode();
            switch (code) {
               case 200:
                  return net.getInputStream();
               default:
                  throw new ReferenceError(`${code} ${net.getResponseMessage()}`);
            }
         }
      }
   };
   return thing;
}

/** A utility wrapper for paths and files. */
export function file (path: string | record | jiFile, ...more: string[]) {
   path = typeof path === 'string' ? path : 'io' in path ? path.path : path.getPath();
   const io = Paths.get(path, ...more).normalize().toFile();
   const thing: record = {
      get children () {
         return thing.type === 'folder' ? [ ...io.listFiles() ].map(sub => file(sub.getPath())) : null;
      },
      directory () {
         if (thing.type === 'none') {
            chain(io, (io, loop) => {
               const parent = io.getParentFile();
               parent && (parent.exists() || loop(parent));
               io.mkdir();
            });
         }
         return thing;
      },
      entry () {
         thing.type === 'none' && thing.parent.directory() && io.createNewFile();
         return thing;
      },
      get exists () {
         return io.exists();
      },
      file (...path) {
         return file(io, ...path);
      },
      flush () {
         chain(io, (io, loop) => {
            const parent = io.getParentFile();
            parent && parent.isDirectory() && (parent.listFiles()[0] || (parent.delete() && loop(parent)));
         });
         return thing;
      },
      io,
      json (async?: boolean) {
         if (async) {
            return sync(async () => thing.json());
         } else {
            try {
               return JSON.parse(thing.read());
            } catch (error) {
               return null;
            }
         }
      },
      get name () {
         return io.getName();
      },
      get parent () {
         return thing.file('..');
      },
      get path () {
         return regex.replace(io.getPath(), '(\\\\)', '/');
      },
      //@ts-expect-error
      read (async?: boolean) {
         if (async) {
            return sync(async () => thing.read());
         } else {
            return thing.type === 'file' ? new JavaString(Files.readAllBytes(io.toPath())).toString() : null;
         }
      },
      remove () {
         chain(io, (io, loop) => {
            io.isDirectory() && [ ...io.listFiles() ].forEach(loop);
            io.exists() && io.delete();
         });
         return thing.flush();
      },
      get type () {
         return io.isDirectory() ? 'folder' : io.exists() ? 'file' : 'none';
      },
      //@ts-expect-error
      write (content: string, async?: boolean) {
         if (async) {
            return sync(async () => thing.write(content));
         } else {
            thing.type === 'file' && Files.write(io.toPath(), new JavaString(content).getBytes());
            return thing;
         }
      }
   };
   return thing;
}

/** Imports classes from external files. */
export function load (path: string | record | jiFile, name: string) {
   if (session.load.has(name)) {
      return session.load.get(name);
   } else {
      const source = file(path);
      if (source.exists) {
         const value = Grakkit.load(source.io, name);
         session.load.set(name, value);
         return value;
      } else {
         throw new ReferenceError(`The file "${source.path}" does not exist!`);
      }
   }
}

export const regex = {
   test (input: string, expression: string) {
      //@ts-expect-error
      return input.matches(expression);
   },
   replace (input: string, expression: string, replacement: string) {
      //@ts-expect-error
      return Pattern.compile(expression).matcher(input).replaceAll(replacement);
   }
};

/** Reloads the JS environment. */
export function reload () {
   Grakkit.push(Grakkit.swap);
}

/** The root folder of the environment. */
export const root = file(Grakkit.getRoot());

/** Recursively removes or replaces the circular references in an object. */
export function simplify (object: any, placeholder?: any, objects?: Set<any>) {
   if (object && typeof object === 'object') {
      objects || (objects = new Set());
      if (objects.has(object)) {
         return placeholder;
      } else {
         objects.add(object);
         const output = typeof object[Symbol.iterator] === 'function' ? [] : {};
         for (const key in object) output[key] = simplify(object[key], placeholder, new Set(objects));
         return output;
      }
   } else {
      return object;
   }
}

/** Runs an async function in another thread. */
export function sync<X> (script: (...args: any[]) => Promise<X>): Promise<X> {
   return new Promise((resolve, reject) => {
      Grakkit.sync(() => script().then(resolve).catch(reject));
   });
}

/** A simple task scheduler. */
export const task = {
   /** Cancels a previously scheduled task. */
   cancel (handle: future) {
      session.task.list.delete(handle);
   },
   /** Schedules a task to run infinitely at a set interval. */
   interval (script: Function, period = 0, ...args: any[]) {
      const future = task.timeout(
         (...args: any[]) => {
            future.tick += Math.ceil(period < 1 ? 1 : period);
            script(...args);
         },
         0,
         ...args
      );
      return future;
   },
   /** Schedules a task to run after a set timeout. */
   timeout (script: Function, period = 0, ...args: any[]) {
      const future = { tick: session.task.tick + Math.ceil(period < 0 ? 0 : period), args, script };
      session.task.list.add(future);
      return future;
   }
};

chain(void 0, (none, next) => {
   Grakkit.push(next);
   for (const task of session.task.list) {
      if (session.task.tick > task.tick) {
         session.task.list.delete(task);
      } else if (session.task.tick === task.tick) {
         try {
            task.script(...task.args);
         } catch (error) {
            console.error('An error occured while attempting to execute a task!');
            console.error(error.stack || error.message || error);
         }
      }
   }
   ++session.task.tick;
});

Grakkit.hook(() => {
   for (const [ name ] of session.data) {
      file(root, 'data', `${name}.json`).entry().write(JSON.stringify(simplify(session.data.get(name))));
   }
});

const base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
const promise = Promise.resolve();

Object.assign(globalThis, {
   atob (data: string) {
      var str = regex.replace(String(data), '[=]+$', '');
      if (str.length % 4 === 1) {
         throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
      }
      for (
         var bc = 0, bs, buffer, idx = 0, output = '';
         (buffer = str.charAt(idx++));
         ~buffer && ((bs = bc % 4 ? bs * 64 + buffer : buffer), bc++ % 4)
            ? (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6))))
            : 0
      ) {
         buffer = base.indexOf(buffer);
      }
      return output;
   },
   btoa (data: string) {
      var str = String(data);
      for (
         var block, charCode, idx = 0, map = base, output = '';
         str.charAt(idx | 0) || ((map = '='), idx % 1);
         output += map.charAt(63 & (block >> (8 - (idx % 1) * 8)))
      ) {
         charCode = str.charCodeAt((idx += 3 / 4));
         if (charCode > 0xff) {
            throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
         }
         block = (block << 8) | charCode;
      }
      return output;
   },
   clearImmediate (handle?: number) {
      task.cancel(session.poly.list.get(handle));
   },
   clearInterval (handle?: number) {
      task.cancel(session.poly.list.get(handle));
   },
   clearTimeout (handle?: number) {
      task.cancel(session.poly.list.get(handle));
   },
   queueMicrotask (callback: () => void) {
      promise.then(callback).catch(error => {
         task.timeout(() => {
            throw error;
         });
      });
   },
   setInterval (script: string | Function, period = 0, ...args: any[]) {
      session.poly.list.set(
         session.poly.index,
         task.interval(
            typeof script === 'string' ? () => Polyglot.eval('js', script) : script,
            Math.ceil(period / 50),
            ...args
         )
      );
      return session.poly.index++;
   },
   setTimeout (script: string | Function, period = 0, ...args: any[]) {
      session.poly.list.set(
         session.poly.index,
         task.timeout(
            typeof script === 'string' ? () => Polyglot.eval('js', script) : script,
            Math.ceil(period / 50),
            ...args
         )
      );
      return session.poly.index++;
   },
   setImmediate (script: string | Function, ...args: any[]) {
      session.poly.list.set(
         session.poly.index,
         task.timeout(typeof script === 'string' ? () => Polyglot.eval('js', script) : script, 0, ...args)
      );
      return session.poly.index++;
   }
});
