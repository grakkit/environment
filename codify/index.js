"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serialize = exports.parse = exports.data = void 0;
const stdlib_paper_1 = require("@grakkit/stdlib-paper");
const spec_1 = require("./spec");
const ArrayList = stdlib_paper_1.type('java.util.ArrayList');
const Block = stdlib_paper_1.type('org.bukkit.block.Block');
const BoundingBox = stdlib_paper_1.type('org.bukkit.util.BoundingBox');
const Entity = stdlib_paper_1.type('org.bukkit.entity.Entity');
const EntityType = stdlib_paper_1.type('org.bukkit.entity.EntityType');
const ItemStack = stdlib_paper_1.type('org.bukkit.inventory.ItemStack');
const Location = stdlib_paper_1.type('org.bukkit.Location');
const Material = stdlib_paper_1.type('org.bukkit.Material');
const OfflinePlayer = stdlib_paper_1.type('org.bukkit.OfflinePlayer');
const Player = stdlib_paper_1.type('org.bukkit.entity.Player');
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
const NBTTagByteClass = stdlib_paper_1.type(`${NMS}.NBTTagByte`);
//@ts-expect-error
const NBTTagByteArrayClass = stdlib_paper_1.type(`${NMS}.NBTTagByteArray`);
//@ts-expect-error
const NBTTagCompoundClass = stdlib_paper_1.type(`${NMS}.NBTTagCompound`);
//@ts-expect-error
const NBTTagDoubleClass = stdlib_paper_1.type(`${NMS}.NBTTagDouble`);
//@ts-expect-error
const NBTTagFloatClass = stdlib_paper_1.type(`${NMS}.NBTTagFloat`);
//@ts-expect-error
const NBTTagIntClass = stdlib_paper_1.type(`${NMS}.NBTTagInt`);
//@ts-expect-error
const NBTTagIntArrayClass = stdlib_paper_1.type(`${NMS}.NBTTagIntArray`);
//@ts-expect-error
const NBTTagListClass = stdlib_paper_1.type(`${NMS}.NBTTagList`);
//@ts-expect-error
const NBTTagLongClass = stdlib_paper_1.type(`${NMS}.NBTTagLong`);
//@ts-expect-error
const NBTTagLongArrayClass = stdlib_paper_1.type(`${NMS}.NBTTagLongArray`);
//@ts-expect-error
const NBTTagShortClass = stdlib_paper_1.type(`${NMS}.NBTTagShort`);
//@ts-expect-error
const NBTTagStringClass = stdlib_paper_1.type(`${NMS}.NBTTagString`);
const data = (arg1, arg2 = 'default') => {
    const thing = exports.parse(arg1);
    if (thing instanceof Block) {
        return stdlib_paper_1.data('codify/block', thing.getWorld().getUID().toString(), `${(thing.getX() + 3e7).toString(16)}-${(thing.getY() + 2048).toString(16)}-${(thing.getZ() + 3e7).toString(16)}`, arg2);
    }
    else if (thing instanceof OfflinePlayer || thing instanceof Player) {
        return stdlib_paper_1.data('codify/player', thing.getUniqueId().toString(), arg2);
    }
    else if (thing instanceof Entity) {
        return stdlib_paper_1.data('codify/entity', thing.getUniqueId().toString(), arg2);
    }
    else {
        return {};
    }
};
exports.data = data;
exports.parse = ((object, subject) => {
    if (object && typeof object.class === 'string') {
        switch (object.class) {
            case 'BoundingBox':
                return BoundingBox.of(exports.parse(object.min), exports.parse(object.max));
            case 'Entity':
                try {
                    const entity = subject
                        .getWorld()
                        .spawnEntity(subject, EntityType.valueOf(object.type), SpawnReason.CUSTOM);
                    entity.getHandle().load(exports.parse(object.nbt));
                    return entity;
                }
                catch (error) {
                    console.error('ENTITY PARSING ERROR');
                    console.error(error.stack || error.message || error);
                    return null;
                }
            case 'ItemStack':
                const item_stack = new ItemStack(Material.valueOf(object.type), object.count).ensureServerConversions();
                //@ts-expect-error
                item_stack.getHandle().setTag(exports.parse(object.nbt));
                return item_stack;
            case 'Location':
                return new Location(
                //@ts-expect-error
                stdlib_paper_1.server.getWorld(UUID.fromString(object.world)), object.vector.x, object.vector.y, object.vector.z, object.yaw, object.pitch);
            case 'NBTTagByte':
                return NBTTagByteClass.a(object.value);
            case 'NBTTagByteArray':
                const nbt_tag_byte_array = new NBTTagByteArrayClass(new ArrayList());
                for (const value of object.value)
                    nbt_tag_byte_array.add(NBTTagByteClass.a(value));
                return nbt_tag_byte_array;
            case 'NBTTagCompound':
                const nbt_tag_compound = new NBTTagCompoundClass();
                for (const key in object.value)
                    nbt_tag_compound.set(key, exports.parse(object.value[key]));
                return nbt_tag_compound;
            case 'NBTTagDouble':
                return NBTTagDoubleClass.a(object.value);
            case 'NBTTagFloat':
                return NBTTagFloatClass.a(object.value);
            case 'NBTTagInt':
                return NBTTagIntClass.a(object.value);
            case 'NBTTagIntArray':
                const nbt_tag_int_array = new NBTTagIntArrayClass(new ArrayList());
                for (const value of object.value)
                    nbt_tag_int_array.add(NBTTagIntClass.a(value));
                return nbt_tag_int_array;
            case 'NBTTagList':
                const nbt_tag_list = new NBTTagListClass();
                for (const value of object.value)
                    nbt_tag_list.add(exports.parse(value));
                return nbt_tag_list;
            case 'NBTTagLong':
                return NBTTagLongClass.a(object.value);
            case 'NBTTagLongArray':
                const nbt_tag_long_array = new NBTTagLongArrayClass(new ArrayList());
                for (const value of object.value)
                    nbt_tag_long_array.add(NBTTagLongClass.a(value));
                return nbt_tag_long_array;
            case 'NBTTagShort':
                return NBTTagShortClass.a(object.value);
            case 'NBTTagString':
                return NBTTagStringClass.a(object.value);
            case 'Vector':
                return new Vector(object.x, object.y, object.z);
        }
    }
    return object;
});
exports.serialize = ((object) => {
    if (object instanceof BoundingBox) {
        return {
            class: 'BoundingBox',
            min: exports.serialize(object.getMin()),
            max: exports.serialize(object.getMax())
        };
    }
    else if (object instanceof Entity) {
        //@ts-expect-error
        const nbt = exports.serialize(object.getHandle().save(new spec_1.NBTTagCompound()));
        return {
            class: 'Entity',
            nbt,
            type: object.getType().name()
        };
    }
    else if (object instanceof ItemStack) {
        //@ts-expect-error
        const nbt = exports.serialize(object.ensureServerConversions().getHandle().getTag());
        return {
            class: 'ItemStack',
            count: object.getAmount(),
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
    else if (object instanceof NBTTagByteClass) {
        return { class: 'NBTTagByte', value: object.asByte() };
    }
    else if (object instanceof NBTTagByteArrayClass) {
        return { class: 'NBTTagByteArray', value: [...object].map(value => value.asByte()) };
    }
    else if (object instanceof NBTTagCompoundClass) {
        return {
            class: 'NBTTagCompound',
            value: Object.fromEntries([...object.getKeys()].map(key => [key, exports.serialize(object.get(key))]))
        };
    }
    else if (object instanceof NBTTagDoubleClass) {
        return { class: 'NBTTagDouble', value: object.asDouble() };
    }
    else if (object instanceof NBTTagFloatClass) {
        return { class: 'NBTTagFloat', value: object.asFloat() };
    }
    else if (object instanceof NBTTagIntClass) {
        return { class: 'NBTTagInt', value: object.asInt() };
    }
    else if (object instanceof NBTTagIntArrayClass) {
        return { class: 'NBTTagIntArray', value: [...object].map(value => value.asInt()) };
    }
    else if (object instanceof NBTTagListClass) {
        return { class: 'NBTTagList', value: [...object].map(exports.serialize) };
    }
    else if (object instanceof NBTTagLongClass) {
        return { class: 'NBTTagLong', value: object.asLong() };
    }
    else if (object instanceof NBTTagLongArrayClass) {
        return { class: 'NBTTagLongArray', value: [...object].map(value => value.asLong()) };
    }
    else if (object instanceof NBTTagShortClass) {
        return { class: 'NBTTagShort', value: object.asShort() };
    }
    else if (object instanceof NBTTagStringClass) {
        return { class: 'NBTTagString', value: object.asString() };
    }
    return object;
});
