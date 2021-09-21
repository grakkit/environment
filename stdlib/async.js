"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("./index.js");
index_js_1.desync.provide(async (info) => {
    return await index_js_1.desync.shift(() => {
        try {
            let output;
            switch (info.operation) {
                case 'fetch.read':
                    output = index_js_1.fetch(info.link).read();
                    break;
                case 'file.read':
                    output = index_js_1.file(info.path).read() || '';
                    break;
                case 'file.write':
                    index_js_1.file(info.path).write(info.content);
                    break;
            }
            index_js_1.push(index_js_1.context.destroy);
            return output;
        }
        catch (error) {
            index_js_1.push(index_js_1.context.destroy);
            throw error;
        }
    });
});
