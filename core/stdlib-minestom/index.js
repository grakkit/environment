const stdlib = require('@grakkit/stdlib');
require('@grakkit/js');

Object.assign(globalThis, {
   core: stdlib,
   extension: stdlib.env.content.extension,
   manager: stdlib.env.content.manager,
   server: stdlib.env.content.server
});

module.exports = stdlib;
