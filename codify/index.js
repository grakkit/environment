"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vector = exports.serialize = exports.parse = exports.location = exports.itemStack = exports.data = exports.boundingBox = exports.session = void 0;
const stdlib_paper_1 = require("@grakkit/stdlib-paper");
exports.session = { data: new Map() };
const ArrayList = stdlib_paper_1.type('java.util.ArrayList');
const Block = stdlib_paper_1.type('org.bukkit.block.Block');
const BlockStateMeta = stdlib_paper_1.type('org.bukkit.inventory.meta.BlockStateMeta');
const BoundingBox = stdlib_paper_1.type('org.bukkit.util.BoundingBox');
const Entity = stdlib_paper_1.type('org.bukkit.entity.Entity');
const EntityType = stdlib_paper_1.type('org.bukkit.entity.EntityType');
const ItemStack = stdlib_paper_1.type('org.bukkit.inventory.ItemStack');
const LivingEntity = stdlib_paper_1.type('org.bukkit.entity.LivingEntity');
const Location = stdlib_paper_1.type('org.bukkit.Location');
const Material = stdlib_paper_1.type('org.bukkit.Material');
const NamespacedKey = stdlib_paper_1.type('org.bukkit.NamespacedKey');
const OfflinePlayer = stdlib_paper_1.type('org.bukkit.OfflinePlayer');
const PersistentDataHolder = stdlib_paper_1.type('org.bukkit.persistence.PersistentDataHolder');
const PersistentDataType = stdlib_paper_1.type('org.bukkit.persistence.PersistentDataType');
const SpawnReason = stdlib_paper_1.type('org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason');
const UUID = stdlib_paper_1.type('java.util.UUID');
const Vector = stdlib_paper_1.type('org.bukkit.util.Vector');
const NMS = (() => {
    const item = new ItemStack(Material.STONE).ensureServerConversions();
    const meta = item.getItemMeta();
    meta.setDisplayName('sus');
    item.setItemMeta(meta);
    //@ts-expect-error
    return item.handle.getTag().getClass().getCanonicalName().split('.').slice(0, -1).join('.');
})();
//@ts-expect-error
const NBTTagByte = stdlib_paper_1.type(`${NMS}.NBTTagByte`);
//@ts-expect-error
const NBTTagByteArray = stdlib_paper_1.type(`${NMS}.NBTTagByteArray`);
//@ts-expect-error
const NBTTagCompound = stdlib_paper_1.type(`${NMS}.NBTTagCompound`);
//@ts-expect-error
const NBTTagDouble = stdlib_paper_1.type(`${NMS}.NBTTagDouble`);
//@ts-expect-error
const NBTTagFloat = stdlib_paper_1.type(`${NMS}.NBTTagFloat`);
//@ts-expect-error
const NBTTagInt = stdlib_paper_1.type(`${NMS}.NBTTagInt`);
//@ts-expect-error
const NBTTagIntArray = stdlib_paper_1.type(`${NMS}.NBTTagIntArray`);
//@ts-expect-error
const NBTTagList = stdlib_paper_1.type(`${NMS}.NBTTagList`);
//@ts-expect-error
const NBTTagLong = stdlib_paper_1.type(`${NMS}.NBTTagLong`);
//@ts-expect-error
const NBTTagLongArray = stdlib_paper_1.type(`${NMS}.NBTTagLongArray`);
//@ts-expect-error
const NBTTagShort = stdlib_paper_1.type(`${NMS}.NBTTagShort`);
//@ts-expect-error
const NBTTagString = stdlib_paper_1.type(`${NMS}.NBTTagString`);
function auto(path) {
    exports.session.data.has(path) || exports.session.data.set(path, stdlib_paper_1.root.file('codify', `${path}.json`).json() || {});
    return exports.session.data.get(path);
}
function boundingBox(arg1) {
    const thing = exports.parse(arg1);
    if (thing instanceof Block) {
        const bounds = thing.getBoundingBox();
        if (bounds.getVolume() === 0) {
            // don't use default zero-volume bounding box
            return BoundingBox.of(thing.getLocation(), 0, 0, 0);
        }
        else {
            return bounds;
        }
    }
    else if (thing instanceof BoundingBox) {
        return thing;
    }
    else if (thing instanceof Entity) {
        return thing.getBoundingBox();
    }
}
exports.boundingBox = boundingBox;
const data = (arg1, arg2 = 'default') => {
    const thing = exports.parse(arg1);
    if (thing instanceof Block) {
        return auto(`block/${thing.getWorld().getUID().toString()}/${(thing.getX() + 3e7).toString(16)}-${(thing.getY() +
            2048).toString(16)}-${(thing.getZ() + 3e7).toString(16)}/${arg2}`);
    }
    else if (thing instanceof OfflinePlayer) {
        return auto(`player/${thing.getUniqueId().toString()}/${arg2}`);
    }
    else if (thing instanceof Entity) {
        return auto(`entity/${thing.getUniqueId().toString()}/${arg2}`);
    }
    else if (thing instanceof ItemStack) {
        const meta = thing.getItemMeta();
        if (meta instanceof PersistentDataHolder) {
            const container = meta.getPersistentDataContainer();
            const key = new NamespacedKey(stdlib_paper_1.plugin, `codify/${arg2}`);
            return {
                get value() {
                    return container.has(key, string) ? JSON.parse(container.get(key, string)) : void 0;
                },
                set value(value) {
                    if (typeof value === 'undefined') {
                        //@ts-expect-error
                        container.has(key, string) && (container.remove(key), thing.setItemMeta(meta));
                    }
                    else {
                        const raw = JSON.stringify(stdlib_paper_1.simplify(value));
                        const match = container.has(key, string) && raw === container.get(key, string);
                        //@ts-expect-error
                        match || (container.set(key, string, raw), thing.setItemMeta(meta));
                    }
                }
            };
        }
        else {
            return {
                get value() {
                    return void 0;
                }
            };
        }
    }
};
exports.data = data;
function itemStack(arg1) {
    const stuff = exports.parse(arg1);
    if (stuff instanceof Block) {
        const item = new ItemStack(stuff.getType());
        const meta = item.getItemMeta();
        meta instanceof BlockStateMeta && (meta.setBlockState(stuff.getState()), item.setItemMeta(meta));
        return item;
    }
    else if (stuff instanceof Entity) {
        return stuff instanceof LivingEntity ? stuff.getEquipment().getItemInMainHand() : null;
    }
    else if (stuff instanceof ItemStack) {
        return stuff;
    }
}
exports.itemStack = itemStack;
function location(arg1) {
    const stuff = exports.parse(arg1);
    if (stuff instanceof Block || stuff instanceof Entity) {
        return stuff.getLocation();
    }
    else if (stuff instanceof Location) {
        return stuff;
    }
}
exports.location = location;
const parse = (object) => {
    if (object && typeof object.class === 'string') {
        switch (object.class) {
            case 'BoundingBox':
                return BoundingBox.of(exports.parse(object.min), exports.parse(object.max));
            case 'Entity':
                try {
                    let entity = [...stdlib_paper_1.server.selectEntities(sender, '@e')].filter(entity => object.uuid === entity.getUniqueId().toString())[0];
                    if (!entity) {
                        const location = exports.parse(object.location);
                        entity = location.getWorld().spawnEntity(location, EntityType[object.type], SpawnReason.CUSTOM);
                    }
                    //@ts-expect-error
                    entity.getHandle().load(exports.parse(object.nbt));
                    return entity;
                }
                catch (error) {
                    console.error('CODIFY - ENTITY PARSING ERROR:');
                    console.error(error.stack || error.message || error);
                    return null;
                }
            case 'ItemStack':
                const item_stack = new ItemStack(Material[object.type], object.amount).ensureServerConversions();
                //@ts-expect-error
                item_stack.getHandle().setTag(exports.parse(object.nbt));
                return item_stack;
            case 'Location':
                return new Location(
                //@ts-expect-error
                stdlib_paper_1.server.getWorld(UUID.fromString(object.world)), object.x, object.y, object.z, object.yaw, object.pitch);
            case 'NBTTagByte':
                return NBTTagByte.a(object.value);
            case 'NBTTagByteArray':
                const nbt_tag_byte_array = new NBTTagByteArray(new ArrayList());
                for (const value of object.value)
                    nbt_tag_byte_array.add(NBTTagByte.a(value));
                return nbt_tag_byte_array;
            case 'NBTTagCompound':
                const nbt_tag_compound = new NBTTagCompound();
                for (const key in object.value)
                    nbt_tag_compound.set(key, exports.parse(object.value[key]));
                return nbt_tag_compound;
            case 'NBTTagDouble':
                return NBTTagDouble.a(object.value);
            case 'NBTTagFloat':
                return NBTTagFloat.a(object.value);
            case 'NBTTagInt':
                return NBTTagInt.a(object.value);
            case 'NBTTagIntArray':
                const nbt_tag_int_array = new NBTTagIntArray(new ArrayList());
                for (const value of object.value)
                    nbt_tag_int_array.add(NBTTagInt.a(value));
                return nbt_tag_int_array;
            case 'NBTTagList':
                const nbt_tag_list = new NBTTagList();
                for (const value of object.value)
                    nbt_tag_list.add(exports.parse(value));
                return nbt_tag_list;
            case 'NBTTagLong':
                return NBTTagLong.a(object.value);
            case 'NBTTagLongArray':
                const nbt_tag_long_array = new NBTTagLongArray(new ArrayList());
                for (const value of object.value)
                    nbt_tag_long_array.add(NBTTagLong.a(value));
                return nbt_tag_long_array;
            case 'NBTTagShort':
                return NBTTagShort.a(object.value);
            case 'NBTTagString':
                return NBTTagString.a(object.value);
            case 'Vector':
                return new Vector(object.x, object.y, object.z);
        }
    }
    return object;
};
exports.parse = parse;
const serialize = (object) => {
    if (object instanceof BoundingBox) {
        return {
            class: 'BoundingBox',
            min: exports.serialize(object.getMin()),
            max: exports.serialize(object.getMax())
        };
    }
    else if (object instanceof Entity) {
        //@ts-expect-error
        const nbt = exports.serialize(object.getHandle().save(new NBTTagCompound()));
        return {
            class: 'Entity',
            location: exports.serialize(object.getLocation()),
            nbt,
            type: object.getType().name(),
            uuid: object.getUniqueId().toString()
        };
    }
    else if (object instanceof ItemStack) {
        //@ts-expect-error
        const nbt = exports.serialize(object.ensureServerConversions().getHandle().getTag());
        return {
            amount: object.getAmount(),
            class: 'ItemStack',
            nbt,
            type: object.getType().name()
        };
    }
    else if (object instanceof Location) {
        return {
            class: 'Location',
            pitch: object.getPitch(),
            world: object.getWorld().getUID().toString(),
            x: object.getX(),
            y: object.getY(),
            yaw: object.getYaw(),
            z: object.getZ()
        };
    }
    else if (object instanceof Vector) {
        return { class: 'Vector', x: object.getX(), y: object.getY(), z: object.getZ() };
    }
    else {
        // force VS code to shut the fuck up
        const nbt = object;
        if (nbt instanceof NBTTagByte) {
            return { class: 'NBTTagByte', value: nbt.asByte() };
        }
        else if (nbt instanceof NBTTagByteArray) {
            return { class: 'NBTTagByteArray', value: [...nbt].map(value => value.asByte()) };
        }
        else if (nbt instanceof NBTTagCompound) {
            return {
                class: 'NBTTagCompound',
                value: Object.fromEntries([...nbt.getKeys()].map(key => [key, exports.serialize(nbt.get(key))]))
            };
        }
        else if (nbt instanceof NBTTagDouble) {
            return { class: 'NBTTagDouble', value: nbt.asDouble() };
        }
        else if (nbt instanceof NBTTagFloat) {
            return { class: 'NBTTagFloat', value: nbt.asFloat() };
        }
        else if (nbt instanceof NBTTagInt) {
            return { class: 'NBTTagInt', value: nbt.asInt() };
        }
        else if (nbt instanceof NBTTagIntArray) {
            return { class: 'NBTTagIntArray', value: [...nbt].map(value => value.asInt()) };
        }
        else if (nbt instanceof NBTTagList) {
            return { class: 'NBTTagList', value: [...nbt].map(exports.serialize) };
        }
        else if (nbt instanceof NBTTagLong) {
            return { class: 'NBTTagLong', value: nbt.asLong() };
        }
        else if (nbt instanceof NBTTagLongArray) {
            return { class: 'NBTTagLongArray', value: [...nbt].map(value => value.asLong()) };
        }
        else if (nbt instanceof NBTTagShort) {
            return { class: 'NBTTagShort', value: nbt.asShort() };
        }
        else if (nbt instanceof NBTTagString) {
            return { class: 'NBTTagString', value: nbt.asString() };
        }
        else {
            return nbt;
        }
    }
};
exports.serialize = serialize;
function vector(arg1) {
    const stuff = exports.parse(arg1);
    if (stuff instanceof Block || stuff instanceof Entity) {
        return stuff.getLocation().toVector();
    }
    else if (stuff instanceof Location) {
        return stuff.toVector();
    }
    else if (stuff instanceof Vector) {
        return stuff;
    }
}
exports.vector = vector;
const sender = stdlib_paper_1.server.getConsoleSender();
//@ts-expect-error
const string = PersistentDataType.STRING;
Core.hook(() => {
    for (const [path, content] of exports.session.data) {
        const raw = JSON.stringify(stdlib_paper_1.simplify(content));
        const target = stdlib_paper_1.root.file('codify', `${path}.json`);
        if (raw === '{}') {
            target.exists && target.remove();
        }
        else {
            target.entry().write(raw);
        }
    }
});
