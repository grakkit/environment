const stdlib = require('@grakkit/stdlib');
require('@grakkit/js');

Object.assign(globalThis, {
   core: stdlib,
   manager: stdlib.env.content.manager,
   plugin: stdlib.env.content.plugin,
   server: stdlib.env.content.server
});

module.exports = stdlib;