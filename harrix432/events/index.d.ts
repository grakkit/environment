export declare type XListener<A extends any[] = any> = ((...data: A) => any) | {
    listener: ((...data: A) => any);
    priority: number;
};
export declare class XHost<A extends {
    [x in string]: any[];
} = {}> {
    events: {
        [B in keyof A]?: XListener<A[B]>[];
    };
    fire<B extends keyof A>(name: B, ...data: A[B]): any[];
    off<B extends keyof A>(name: B, handler: XListener<A[B]>): this;
    on<B extends keyof A>(name: B): Promise<A[B]>;
    on<B extends keyof A>(name: B, priority: number): Promise<A[B]>;
    on<B extends keyof A>(name: B, listener: XListener<A[B]>): this;
    wrapOn<B extends keyof A>(name: B, provider: (host: this) => XListener<A[B]>): this;
    wrapOff<B extends keyof A>(name: B, provider: (host: this) => XListener<A[B]>): this;
}
