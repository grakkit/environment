"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.type = void 0;
const stdlib_1 = require("@grakkit/stdlib");
const source = stdlib_1.file(__dirname, 'JDA-4.3.0_277-withDependencies.jar');
function type(name) {
    return stdlib_1.load(source, name);
}
exports.type = type;
