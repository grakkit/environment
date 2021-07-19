const stdlib = require('@grakkit/stdlib');
require('@grakkit/js');

Object.assign(globalThis, {
   core: stdlib,
   extension: stdlib.env.content.extension
});

module.exports = stdlib;
