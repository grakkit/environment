/// <reference path="scope.d.ts" />
import { classes } from './classes';
export { classes } from './classes';
import { jiFile, jiInputStream } from '@grakkit/types';
/** A set of listeners attached to an event. */
export declare type cascade = Set<((event: any) => void) | {
    script: (event: any) => void;
    priority: priority;
}>;
/** A valid event name. */
export declare type events = keyof classes & `${string}Event`;
/** A pending task. */
export declare type future = {
    tick: number;
    args: any[];
    script: Function;
};
/** A valid event priority. */
export declare type priority = 'HIGH' | 'HIGHEST' | 'LOW' | 'LOWEST' | 'MONITOR' | 'NORMAL';
/** File system utilities for a specific path. */
export declare type record = {
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
export declare type response = {
    /** Synchronously parses the JSON content (if any) of the response. */
    json(async?: false): any;
    /** Parses the JSON content (if any) of the response. */
    json(async: true): Promise<any>;
    /** Synchronously returns the content (if any) of the response. */
    read(async?: false): string;
    /** Returns the content (if any) of the response. */
    read(async: true): Promise<string>;
    /** Returns the response stream. */
    stream(): jiInputStream;
};
/** A session container for this module. */
export declare const session: {
    data: Map<string, any>;
    event: Map<events, cascade>;
    load: Map<string, any>;
    poly: {
        index: number;
        list: Map<number, future>;
    };
    task: {
        list: Set<future>;
        tick: number;
    };
    type: Map<keyof classes, any>;
};
/** Imports the specified type from java. */
export declare function type<X extends keyof classes>(name: X): classes[X];
/** Runs a task off the main server thread. */
export declare function async<X>(script: (...args: any[]) => X | Promise<X>): Promise<X>;
/** It's even more complicated. */
export declare function chain<A, B extends (input: A, loop: (input: A) => C) => any, C extends ReturnType<B>>(input: A, handler: B): C;
/** Registers a custom command to the server. */
export declare function command(options: {
    name: string;
    message?: string;
    aliases?: string[];
    execute?: (sender: any, ...args: string[]) => void;
    namespace?: string;
    permission?: string;
    tabComplete?: (sender: any, ...args: string[]) => string[];
}): void;
/** A simple task scheduler. */
export declare const task: {
    /** Cancels a previously scheduled task. */
    cancel(handle: future): void;
    /** Schedules a task to run infinitely at a set interval. */
    interval(script: Function, period?: number, ...args: any[]): {
        tick: number;
        args: any[];
        script: Function;
    };
    /** Schedules a task to run after a set timeout. */
    timeout(script: Function, period?: number, ...args: any[]): {
        tick: number;
        args: any[];
        script: Function;
    };
};
export declare const context: {
    /** Creates a new context and returns its instance. If `type` is file, `content` refers to a JS file path relative to the JS root folder. If `type` is script, `content` refers to a piece of JS code. */
    create<X extends "file" | "script">(type: X, content: string, meta?: string): {
        file: FileInstance;
        script: ScriptInstance;
    }[X];
    /** Destroys the currently running context. */
    destroy(): void;
    emit(channel: string, message: string): void;
    meta: string;
    off(channel: string, listener: (data: string) => void): boolean;
    on: {
        (channel: string): Promise<string>;
        (channel: string, listener: (data: string) => void): void;
    };
} | {
    create(): never;
    destroy(): never;
    emit(channel: string, content: string): void;
    meta: string;
    off(channel: string, listener: (data: string) => void): void;
    on: {
        (channel: string): Promise<string>;
        (channel: string, listener: (data: string) => void): void;
    };
};
/** Stores data on a per-path basis. */
export declare function data(path: string, ...more: string[]): any;
/** The environment that this module is currently running in. */
export declare const env: {
    content: {
        EventPriority: any;
        instance: any;
        manager: any;
        plugin: any;
        Runnable: new (...args: any[]) => import("@grakkit/types").jlRunnable;
        server: any;
        ArgumentType?: undefined;
        Command?: undefined;
        extension?: undefined;
        node?: undefined;
        registry?: undefined;
        SuggestionEntry?: undefined;
    };
    name: string;
} | {
    content: {
        ArgumentType: any;
        Command: any;
        extension: any;
        manager: any;
        node: any;
        registry: any;
        server: any;
        SuggestionEntry: any;
        EventPriority?: undefined;
        instance?: undefined;
        plugin?: undefined;
        Runnable?: undefined;
    };
    name: string;
} | {
    name: string;
    content: {
        EventPriority?: undefined;
        instance?: undefined;
        manager?: undefined;
        plugin?: undefined;
        Runnable?: undefined;
        server?: undefined;
        ArgumentType?: undefined;
        Command?: undefined;
        extension?: undefined;
        node?: undefined;
        registry?: undefined;
        SuggestionEntry?: undefined;
    };
};
/** Attaches one or more listeners to a server event. */
export declare function event<X extends events>(name: X, ...listeners: (((event: InstanceType<classes[X]>) => void) | {
    script: (event: InstanceType<classes[X]>) => void;
    priority: priority;
})[]): void;
/** Sends a GET request to the given URL. */
export declare function fetch(link: string): response;
/** A utility wrapper for paths and files. */
export declare function file(path: string | record | jiFile, ...more: string[]): record;
/** Imports classes from external files. */
export declare function load(path: string | record | jiFile, name: string): any;
/** Runs a script on the next tick. */
export declare function push(script: Function): void;
/** Tools for using regex patterns. */
export declare const regex: {
    test(input: string, expression: string): any;
    replace(input: string, expression: string, replacement: string): string;
};
/** Reloads the JS environment. */
export declare function reload(): void;
/** The root folder of the environment. */
export declare const root: record;
/** Recursively removes or replaces the circular references in an object. */
export declare function simplify(object: any, placeholder?: any, objects?: Set<any>): any;
export declare function sync<X>(script: (...args: any[]) => Promise<X>): Promise<X>;
