const stdlib = require('@grakkit/stdlib');
require('@grakkit/js');

const addons = {
   core: stdlib,
   extension: stdlib.env.content.extension,
   manager: stdlib.env.content.manager,
   server: stdlib.env.content.server
};

Object.assign(globalThis, addons);

module.exports = Object.assign({}, stdlib, addons);
