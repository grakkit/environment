interface FileInstance extends Instance {
   main: string;
}

interface Instance {
   context: import('@grakkit/types').ogpContext;
   hooks: Queue;
   messages: import('@grakkit/types').juLinkedList<Message>;
   meta: string;
   root: string;
   tasks: Queue;
   close (): void;
   destroy (): void;
   execute (): void;
   open (): void;
   tick (): void;
};

interface Message {
   channel: string;
   content: string;
}

interface Queue {
   list: import('@grakkit/types').juLinkedList<Function>;
   release (): void;
}

interface ScriptInstance extends Instance {
   code: string;
}

/** @deprecated */
declare const Core: any;

declare const Grakkit: {
   destroy(): void;
   emit(channel: string, message: string): void;
   fileInstance(main: string, meta?: string): FileInstance;
   getMeta(): string;
   getRoot(): string;
   hook(script: Function);
   load(source: import('@grakkit/types').jiFile, name: string): import('@grakkit/types').jlClass<unknown>;
   off(channel: string, listener: (data: string) => void): boolean;
   on(channel: string): Promise<string>;
   on(channel: string, listener: (data: string) => void): void;
   push(script: Function);
   scriptInstance(code: string, meta?: string): ScriptInstance;
   swap(): void;
   /** @deprecated */
   sync(script: Function);
};

declare const Java: any;
declare const Polyglot: any;

declare function atob (data: string): string
declare function btoa (data: string): string
declare function clearImmediate (handle?: number): void
declare function clearInterval (handle?: number): void
declare function clearTimeout (handle?: number): void
declare function toString (): string
declare function queueMicrotask (...args: any[]): void
declare function setImmediate (script: string | Function, ...args: any[]): number
declare function setInterval (script: string | Function, period?: number, ...args: any[]): number
declare function setTimeout (script: string | Function, period?: number, ...args: any[]): number

declare const __dirname: string;
declare const __filename: string;

declare const console: {
   // memory: any;
   assert(condition?: boolean, ...data: any[]): void;
   clear(): void;
   count(label?: string): void;
   countReset(label?: string): void;
   debug(...data: any[]): void;
   dir(item?: any, options?: any): void;
   // dirxml(...data: any[]): void;
   error(...data: any[]): void;
   // exception(message?: string, ...optionalParams: any[]): void;
   group(...data: any[]): void;
   groupCollapsed(...data: any[]): void;
   groupEnd(): void;
   info(...data: any[]): void;
   log(...data: any[]): void;
   // table(tabularData?: any, properties?: string[]): void;
   time(label?: string): void;
   timeEnd(label?: string): void;
   timeLog(label?: string, ...data: any[]): void;
   // timeStamp(label?: string): void;
   // trace(...data: any[]): void;
   warn(...data: any[]): void;
};
