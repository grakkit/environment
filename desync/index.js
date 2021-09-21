"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = exports.provide = void 0;
const stdlib_1 = require("@grakkit/stdlib");
const UUID = stdlib_1.type('java.util.UUID');
async function provide(handler) {
    const { data, uuid } = JSON.parse(stdlib_1.context.meta);
    try {
        stdlib_1.context.emit(uuid, JSON.stringify({ data: await handler(data), status: true }));
    }
    catch (error) {
        stdlib_1.context.emit(uuid, JSON.stringify({ data: error, status: false }));
    }
}
exports.provide = provide;
function request(path, data) {
    const uuid = UUID.randomUUID().toString();
    const promise = new Promise((resolve, reject) => {
        function dummy(response) {
            stdlib_1.context.off(uuid, dummy);
            const { data, status } = JSON.parse(response);
            (status ? resolve : reject)(data);
        }
        stdlib_1.context.on(uuid, dummy);
    });
    stdlib_1.context.create('file', stdlib_1.file(path).io.getAbsolutePath(), JSON.stringify({ data, uuid })).open();
    return promise;
}
exports.request = request;
