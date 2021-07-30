export type XListener<A extends any[] = any> =
   | ((...data: A) => any)
   | { listener: ((...data: A) => any); priority: number };

export class XHost<A extends { [x in string]: any[] } = {}> {
   events: { [B in keyof A]?: XListener<A[B]>[] } = {};
   fire<B extends keyof A> (name: B, ...data: A[B]) {
      const list = this.events[name];
      if (list) {
         return list.map(handler => (typeof handler === 'function' ? handler : handler.listener)(...data));
      } else {
         return [];
      }
   }
   off<B extends keyof A> (name: B, handler: XListener<A[B]>) {
      const list = this.events[name];
      if (list) {
         const index = list.indexOf(handler);
         if (index > -1) {
            list.splice(index, 1);
         }
      }
      return this;
   }
   on<B extends keyof A> (name: B): Promise<A[B]>;
   on<B extends keyof A> (name: B, priority: number): Promise<A[B]>;
   on<B extends keyof A> (name: B, listener: XListener<A[B]>): this;
   on<B extends keyof A> (name: B, a2: number | XListener<A[B]> = 0) {
      if (typeof a2 === 'number') {
         return new Promise(resolve => {
            const singleton = {
               listener: (...data: A[B]) => {
                  this.off(name, singleton);
                  resolve(data);
               },
               priority: a2 || 0
            };
            this.on(name, singleton);
         });
      } else {
         const list = this.events[name] || (this.events[name] = []);
         list!.push(a2);
         list!
            .sort(
               (handler1, handler2) =>
                  (typeof handler1 === 'function' ? 0 : handler1.priority) -
                  (typeof handler2 === 'function' ? 0 : handler2.priority)
            )
            .forEach((value, index) => {
               list![index] = value;
            });
         return this;
      }
   }
   wrapOn<B extends keyof A> (name: B, provider: (host: this) => XListener<A[B]>) {
      return this.on(name, provider(this));
   }
   wrapOff<B extends keyof A> (name: B, provider: (host: this) => XListener<A[B]>) {
      return this.off(name, provider(this));
   }
}
