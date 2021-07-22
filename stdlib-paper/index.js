const base = require('@grakkit/stdlib');
require('@grakkit/js');

const addons = {
   manager: base.env.content.manager,
   plugin: base.env.content.plugin,
   server: base.env.content.server
};

const stdlib = Object.assign({}, base, addons);

Object.assign(globalThis, addons, { core: stdlib });

module.exports = stdlib;
