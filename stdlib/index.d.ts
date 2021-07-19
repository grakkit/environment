/// <reference path="scope.d.ts" />
import { classes } from './classes';
export { classes } from './classes';
import { jiFile, jiInputStream, jnHttpURLConnection } from '@grakkit/types';
/** A set of listeners attached to an event. */
export declare type cascade = Set<((event: any) => void) | {
    script: (event: any) => void;
    priority: priority;
}>;
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
/** A session container for this module. */
export declare const session: {
    data: Map<string, any>;
    event: Map<"java.awt.desktop.AboutEvent" | "com.sun.jdi.event.AccessWatchpointEvent" | "java.awt.event.ActionEvent" | "java.awt.ActiveEvent" | "java.awt.event.AdjustmentEvent" | "javax.swing.event.AncestorEvent" | "java.awt.desktop.AppEvent" | "java.awt.desktop.AppForegroundEvent" | "java.awt.desktop.AppHiddenEvent" | "java.awt.desktop.AppReopenedEvent" | "com.sun.nio.sctp.AssociationChangeNotification.AssocChangeEvent" | "java.awt.AWTEvent" | "java.beans.beancontext.BeanContextEvent" | "java.beans.beancontext.BeanContextMembershipEvent" | "java.beans.beancontext.BeanContextServiceAvailableEvent" | "java.beans.beancontext.BeanContextServiceRevokedEvent" | "com.sun.jdi.event.BreakpointEvent" | "javax.swing.event.CaretEvent" | "javax.swing.event.ChangeEvent" | "com.sun.jdi.event.ClassPrepareEvent" | "com.sun.jdi.event.ClassUnloadEvent" | "java.awt.event.ComponentEvent" | "javax.sql.ConnectionEvent" | "java.awt.event.ContainerEvent" | "javax.swing.event.DocumentEvent" | "org.w3c.dom.events.DocumentEvent" | "java.awt.dnd.DragGestureEvent" | "java.awt.dnd.DragSourceDragEvent" | "java.awt.dnd.DragSourceDropEvent" | "java.awt.dnd.DragSourceEvent" | "java.awt.dnd.DropTargetDragEvent" | "java.awt.dnd.DropTargetDropEvent" | "java.awt.dnd.DropTargetEvent" | "com.sun.jdi.event.Event" | "jdk.jfr.Event" | "org.w3c.dom.events.Event" | "com.sun.jdi.event.ExceptionEvent" | "java.awt.desktop.FilesEvent" | "java.awt.datatransfer.FlavorEvent" | "java.awt.event.FocusEvent" | "javax.swing.text.html.FormSubmitEvent" | "javax.net.ssl.HandshakeCompletedEvent" | "java.awt.event.HierarchyEvent" | "javax.swing.text.html.HTMLFrameHyperlinkEvent" | "javax.swing.event.HyperlinkEvent" | "java.beans.IndexedPropertyChangeEvent" | "java.awt.event.InputEvent" | "java.awt.event.InputMethodEvent" | "javax.swing.event.InternalFrameEvent" | "java.awt.event.InvocationEvent" | "java.awt.event.ItemEvent" | "java.awt.event.KeyEvent" | "javax.sound.sampled.LineEvent" | "javax.swing.event.ListDataEvent" | "javax.swing.event.ListSelectionEvent" | "com.sun.jdi.event.LocatableEvent" | "org.w3c.dom.ls.LSLoadEvent" | "org.w3c.dom.ls.LSProgressEvent" | "javax.swing.event.MenuDragMouseEvent" | "javax.swing.event.MenuEvent" | "javax.swing.event.MenuKeyEvent" | "com.sun.jdi.event.MethodEntryEvent" | "com.sun.jdi.event.MethodExitEvent" | "javax.sound.midi.MidiEvent" | "com.sun.jdi.event.ModificationWatchpointEvent" | "com.sun.jdi.event.MonitorContendedEnteredEvent" | "com.sun.jdi.event.MonitorContendedEnterEvent" | "com.sun.jdi.event.MonitorWaitedEvent" | "com.sun.jdi.event.MonitorWaitEvent" | "java.awt.event.MouseEvent" | "org.w3c.dom.events.MouseEvent" | "java.awt.event.MouseWheelEvent" | "org.w3c.dom.events.MutationEvent" | "javax.naming.event.NamingEvent" | "javax.naming.event.NamingExceptionEvent" | "java.util.prefs.NodeChangeEvent" | "java.awt.desktop.OpenFilesEvent" | "java.awt.desktop.OpenURIEvent" | "java.awt.event.PaintEvent" | "com.sun.nio.sctp.PeerAddressChangeNotification.AddressChangeEvent" | "javax.swing.event.PopupMenuEvent" | "java.util.prefs.PreferenceChangeEvent" | "java.awt.desktop.PreferencesEvent" | "javax.print.event.PrintEvent" | "java.awt.desktop.PrintFilesEvent" | "javax.print.event.PrintJobAttributeEvent" | "javax.print.event.PrintJobEvent" | "javax.print.event.PrintServiceAttributeEvent" | "java.beans.PropertyChangeEvent" | "java.awt.desktop.QuitEvent" | "jdk.jfr.consumer.RecordedEvent" | "javax.sql.RowSetEvent" | "javax.swing.event.RowSorterEvent" | "java.awt.desktop.ScreenSleepEvent" | "jdk.jshell.SnippetEvent" | "javax.net.ssl.SSLSessionBindingEvent" | "javax.sql.StatementEvent" | "com.sun.jdi.event.StepEvent" | "java.awt.desktop.SystemSleepEvent" | "javax.swing.event.TableColumnModelEvent" | "javax.swing.event.TableModelEvent" | "com.sun.source.util.TaskEvent" | "java.awt.event.TextEvent" | "com.sun.jdi.event.ThreadDeathEvent" | "com.sun.jdi.event.ThreadStartEvent" | "javax.swing.event.TreeExpansionEvent" | "javax.swing.event.TreeModelEvent" | "javax.swing.event.TreeSelectionEvent" | "org.w3c.dom.events.UIEvent" | "javax.swing.event.UndoableEditEvent" | "javax.naming.ldap.UnsolicitedNotificationEvent" | "java.awt.desktop.UserSessionEvent" | "com.sun.jdi.event.VMDeathEvent" | "com.sun.jdi.event.VMDisconnectEvent" | "com.sun.jdi.event.VMStartEvent" | "java.nio.file.WatchEvent" | "com.sun.jdi.event.WatchpointEvent" | "java.awt.event.WindowEvent" | "javax.xml.stream.events.XMLEvent" | "org.graalvm.polyglot.management.ExecutionEvent" | "org.graalvm.polyglot.ResourceLimitEvent", cascade>;
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
/** It's complicated. */
export declare function chain<X, Y extends (input: X, chain: (object: X) => ReturnType<Y>) => any>(base: X, modifier: Y): void;
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
/** Stores data on a per-path basis. */
export declare function data(path: string, ...more: string[]): any;
/** The environment that this module is currently running in. */
export declare const env: {
    name: string;
    content: {
        EventPriority: any;
        instance: any;
        manager: any;
        plugin: any;
        server: any;
        ArgumentType?: undefined;
        Command?: undefined;
        extension?: undefined;
        node?: undefined;
        registry?: undefined;
        SuggestionEntry?: undefined;
    };
} | {
    name: string;
    content: {
        ArgumentType: any;
        Command: any;
        extension: any;
        node: any;
        registry: any;
        SuggestionEntry: any;
        EventPriority?: undefined;
        instance?: undefined;
        manager?: undefined;
        plugin?: undefined;
        server?: undefined;
    };
} | {
    name: string;
    content: {
        EventPriority?: undefined;
        instance?: undefined;
        manager?: undefined;
        plugin?: undefined;
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
export declare function event<X extends keyof classes & `${string}Event`>(name: X, ...listeners: (((event: InstanceType<classes[X]>) => void) | {
    script: (event: InstanceType<classes[X]>) => void;
    priority: priority;
})[]): void;
/** Sends a GET request to the given URL. */
export declare function fetch(link: string): response;
/** A utility wrapper for paths and files. */
export declare function file(path: string | record | jiFile, ...more: string[]): record;
/** Imports classes from external files. */
export declare function load(path: string | record | jiFile, name: string): any;
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
/** Runs an async function in another thread. */
export declare function sync<X>(script: (...args: any[]) => Promise<X>): Promise<X>;
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
