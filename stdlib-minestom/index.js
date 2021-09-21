const base = require('@grakkit/stdlib');
base.context.meta === 'grakkit' && require('@grakkit/js');

const addons = {
   extension: base.env.content.extension,
   manager: base.env.content.manager,
   server: base.env.content.server
};

const stdlib = Object.assign({}, base, addons);

Object.assign(globalThis, addons, { core: stdlib });

module.exports = stdlib;
