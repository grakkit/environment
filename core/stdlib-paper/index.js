const stdlib = require('@grakkit/stdlib');
require('@grakkit/js');

const addons = {
   core: stdlib,
   manager: stdlib.env.content.manager,
   plugin: stdlib.env.content.plugin,
   server: stdlib.env.content.server
};

Object.assign(globalThis, addons);

module.exports = Object.assign({}, stdlib, addons);