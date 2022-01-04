"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XHost = void 0;
class XHost {
    constructor() {
        this.events = {};
    }
    fire(name, ...data) {
        const list = this.events[name];
        if (list) {
            return list.map(handler => (typeof handler === 'function' ? handler : handler.listener)(...data));
        }
        else {
            return [];
        }
    }
    off(name, handler) {
        const list = this.events[name];
        if (list) {
            const index = list.indexOf(handler);
            if (index > -1) {
                list.splice(index, 1);
            }
        }
        return this;
    }
    on(name, a2 = 0) {
        if (typeof a2 === 'number') {
            return new Promise(resolve => {
                const singleton = {
                    listener: (...data) => {
                        this.off(name, singleton);
                        resolve(data);
                    },
                    priority: a2 || 0
                };
                this.on(name, singleton);
            });
        }
        else {
            const list = this.events[name] || (this.events[name] = []);
            list.push(a2);
            list
                .sort((handler1, handler2) => (typeof handler1 === 'function' ? 0 : handler1.priority) -
                (typeof handler2 === 'function' ? 0 : handler2.priority))
                .forEach((value, index) => {
                list[index] = value;
            });
            return this;
        }
    }
    wrapOn(name, provider) {
        return this.on(name, provider(this));
    }
    wrapOff(name, provider) {
        return this.off(name, provider(this));
    }
}
exports.XHost = XHost;
