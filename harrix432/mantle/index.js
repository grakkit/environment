"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interface = exports.vector = exports.serialize = exports.select = exports.player = exports.parse = exports.meta = exports.location = exports.itemStack = exports.item = exports.drop = exports.dist = exports.data = exports.boundingBox = void 0;
const server_1 = require("@grakkit/server");
const ArrayList = server_1.type('java.util.ArrayList');
const Block = server_1.type('org.bukkit.block.Block');
const BlockStateMeta = server_1.type('org.bukkit.inventory.meta.BlockStateMeta');
const BoundingBox = server_1.type('org.bukkit.util.BoundingBox');
const CommandSender = server_1.type('org.bukkit.command.CommandSender');
const Entity = server_1.type('org.bukkit.entity.Entity');
const EntityType = server_1.type('org.bukkit.entity.EntityType');
const ItemFlag = server_1.type('org.bukkit.inventory.ItemFlag');
const ItemStack = server_1.type('org.bukkit.inventory.ItemStack');
const LivingEntity = server_1.type('org.bukkit.entity.LivingEntity');
const Location = server_1.type('org.bukkit.Location');
const Material = server_1.type('org.bukkit.Material');
const NamespacedKey = server_1.type('org.bukkit.NamespacedKey');
const OfflinePlayer = server_1.type('org.bukkit.OfflinePlayer');
const PersistentDataHolder = server_1.type('org.bukkit.persistence.PersistentDataHolder');
const PersistentDataType = server_1.type('org.bukkit.persistence.PersistentDataType');
const SpawnReason = server_1.type('org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason');
const UUID = server_1.type('java.util.UUID');
const Vector = server_1.type('org.bukkit.util.Vector');
const NMS = (() => {
    const item = new ItemStack(Material.STONE).ensureServerConversions();
    const meta = item.getItemMeta();
    meta.setDisplayName('sus');
    item.setItemMeta(meta);
    //@ts-expect-error
    return item.handle.getTag().getClass().getCanonicalName().split('.').slice(0, -1).join('.');
})();
//@ts-expect-error
const NBTTagByte = server_1.type(`${NMS}.NBTTagByte`);
//@ts-expect-error
const NBTTagByteArray = server_1.type(`${NMS}.NBTTagByteArray`);
//@ts-expect-error
const NBTTagCompound = server_1.type(`${NMS}.NBTTagCompound`);
//@ts-expect-error
const NBTTagDouble = server_1.type(`${NMS}.NBTTagDouble`);
//@ts-expect-error
const NBTTagFloat = server_1.type(`${NMS}.NBTTagFloat`);
//@ts-expect-error
const NBTTagInt = server_1.type(`${NMS}.NBTTagInt`);
//@ts-expect-error
const NBTTagIntArray = server_1.type(`${NMS}.NBTTagIntArray`);
//@ts-expect-error
const NBTTagList = server_1.type(`${NMS}.NBTTagList`);
//@ts-expect-error
const NBTTagLong = server_1.type(`${NMS}.NBTTagLong`);
//@ts-expect-error
const NBTTagLongArray = server_1.type(`${NMS}.NBTTagLongArray`);
//@ts-expect-error
const NBTTagShort = server_1.type(`${NMS}.NBTTagShort`);
//@ts-expect-error
const NBTTagString = server_1.type(`${NMS}.NBTTagString`);
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
function data(arg1, arg2 = 'default') {
    const thing = exports.parse(arg1);
    const store = `mantle/${arg2}`;
    if (typeof arg2 !== 'string') {
        throw new TypeError('Argument 2 (if specified) must be of type "string"');
    }
    else if (thing instanceof Block) {
        return server_1.core.data(`${store}/block/${thing.getWorld().getUID().toString()}/${thing.getBlockKey().toString(16)}`);
    }
    else if (thing instanceof OfflinePlayer) {
        return server_1.core.data(`${store}/player/${thing.getUniqueId().toString()}`);
    }
    else if (thing instanceof Entity) {
        return server_1.core.data(`${store}/entity/${thing.getUniqueId().toString()}`);
    }
    else if (thing instanceof ItemStack) {
        const meta = thing.getItemMeta();
        if (meta instanceof PersistentDataHolder) {
            const key = new NamespacedKey(plugin, `mantle/data/${arg2}`);
            //@ts-expect-error
            const type = PersistentDataType.STRING;
            const container = meta.getPersistentDataContainer();
            container.has(key, type) || (container.set(key, type, UUID.randomUUID().toString()), thing.setItemMeta(meta));
            // retroactively add key to serialized item stack input
            arg1 && 'class' in arg1 && arg1.class === 'ItemStack' && Object.assign(arg1, exports.serialize(thing));
            return server_1.core.data(`${store}/itemStack/${container.get(key, type)}`);
        }
    }
}
exports.data = data;
function dist(arg1, arg2, arg3 = false) {
    const from = vector(arg1);
    const to = vector(arg2);
    if (from === void 0) {
        throw new TypeError('Argument 1 must be of type "HasVector"');
    }
    else if (to === void 0) {
        throw new TypeError('Argument 2 must be of type "HasVector"');
    }
    else if (typeof arg3 !== 'boolean') {
        throw new TypeError('Argument 3 (if specified) must be of type "boolean"');
    }
    else {
        const fromLocation = location(arg1);
        const toLocation = location(arg2);
        if (fromLocation && toLocation && fromLocation.getWorld() !== toLocation.getWorld()) {
            return Infinity;
        }
        else {
            const delta = vector(from).subtract(to);
            arg3 && delta.setY(0);
            return Math.sqrt(Math.pow(delta.getX(), 2) + Math.pow(delta.getY(), 2) + Math.pow(delta.getZ(), 2));
        }
    }
}
exports.dist = dist;
function drop(arg1, arg2, arg3 = false) {
    const position = location(arg1);
    const item = itemStack(arg2);
    if (position === void 0) {
        throw new TypeError('Argument 1 must be of type "HasLocation"');
    }
    else if (item === void 0) {
        throw new TypeError('Argument 2 must be of type "HasItemStack"');
    }
    else if (typeof arg3 !== 'boolean') {
        throw new TypeError('Argument 3 (if specified) must be of type "boolean"');
    }
    else if (item) {
        position.getWorld()[arg3 ? 'dropItemNaturally' : 'dropItem'](position, item);
    }
}
exports.drop = drop;
function item(options) {
    const item = new ItemStack(options.type, options.amount || 1);
    meta(item, meta => {
        options.name && meta.setDisplayName(options.name);
        //@ts-expect-error
        options.lore && meta.setLore(options.lore);
        options.hide &&
            //@ts-expect-error
            meta.addItemFlags([
                ItemFlag.HIDE_ATTRIBUTES,
                ItemFlag.HIDE_DYE,
                ItemFlag.HIDE_ENCHANTS,
                ItemFlag.HIDE_POTION_EFFECTS
            ]);
        options.meta && options.meta(meta);
    });
    options.data && Object.assign(data(item), options.data);
    return item;
}
exports.item = item;
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
function meta(item, modifier) {
    const meta = item.getItemMeta();
    if (meta) {
        const result = modifier(meta);
        item.setItemMeta(meta);
        return result;
    }
}
exports.meta = meta;
const parse = (object) => {
    if (object && typeof object.class === 'string') {
        switch (object.class) {
            case 'BoundingBox':
                return BoundingBox.of(exports.parse(object.min), exports.parse(object.max));
            case 'Entity':
                try {
                    let entity = select().filter(entity => object.uuid === entity.getUniqueId().toString())[0];
                    if (!entity) {
                        const location = exports.parse(object.location);
                        entity = location.getWorld().spawnEntity(location, EntityType[object.type], SpawnReason.CUSTOM);
                    }
                    //@ts-expect-error
                    entity.getHandle().load(exports.parse(object.nbt));
                    return entity;
                }
                catch (error) {
                    console.error('An error occured while attempting to parse a serialized entity!');
                    console.error(error.stack || error.message || error);
                    return null;
                }
            case 'ItemStack':
                const item_stack = new ItemStack(Material[object.type], object.amount).ensureServerConversions();
                //@ts-expect-error
                item_stack.getHandle().setTag(exports.parse(object.nbt));
                return item_stack;
            case 'Location':
                return new Location(server_1.server.getWorld(UUID.fromString(object.world)), object.x, object.y, object.z, object.yaw, object.pitch);
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
function player(arg1) {
    if (typeof arg1 !== 'string') {
        throw new TypeError('Argument 1 must be of type "string"');
    }
    else {
        const online = server_1.server.getPlayer(arg1);
        if (online) {
            return online;
        }
        else {
            for (const offline of server_1.server.getOfflinePlayers()) {
                if (offline.getName().toLowerCase().startsWith(arg1.toLowerCase())) {
                    return offline;
                }
            }
        }
    }
}
exports.player = player;
function select(arg1 = '@e', arg2 = server_1.server.getConsoleSender()) {
    const context = exports.parse(arg2);
    if (typeof arg1 !== 'string') {
        throw new TypeError('Argument 1 (if specified) must be of type "string"');
    }
    else if (context instanceof CommandSender) {
        try {
            return [...server_1.server.selectEntities(context, arg1)];
        }
        catch (error) {
            throw new SyntaxError('The provided selector was invalid and could not be parsed.');
        }
    }
    else {
        throw new TypeError('Argument 2 (if specified) must be of type "HasEntity" or "CommandSender"');
    }
}
exports.select = select;
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
const interfaces = new Map();
class Interface {
    constructor(player, options, parent) {
        this.player = player;
        this.options = options;
        this.parent = parent;
    }
    get rows() {
        return this.options.rows;
    }
    set rows(value) {
        this.options.rows = value;
        this.generate().refresh();
    }
    get title() {
        return this.options.title;
    }
    set title(value) {
        this.options.title = value;
        this.generate().refresh();
    }
    get items() {
        return this.options.items;
    }
    set items(value) {
        this.options.items = value;
        this.put();
    }
    put(index) {
        if (index === void 0) {
            for (const index in this.items)
                this.put(+index);
        }
        else {
            const value = this.items[index];
            const stack = typeof value.item === 'function' ? value.item() : value.item;
            this.inventory.setItem(index, stack instanceof ItemStack ? stack : item(stack));
        }
        return this;
    }
    generate() {
        //@ts-expect-error
        this.inventory && interfaces.delete(this.inventory.hashCode());
        //@ts-expect-error
        this.inventory = server_1.server.createInventory(this.player, this.options.rows * 9, this.options.title);
        //@ts-expect-error
        interfaces.set(this.inventory.hashCode(), this);
        return this.put();
    }
    show() {
        this.inventory || this.generate();
        this.player.openInventory(this.inventory);
        return this;
    }
    refresh() {
        //@ts-expect-error
        this.inventory.getViewers().contains(this.player) && this.show();
    }
    item(index, input) {
        if (input) {
            this.options.items[index].item = input;
            return this.put(index);
        }
        else {
            return this.options.items[index];
        }
    }
    action(index, input) {
        if (input) {
            this.options.items[index].action = input;
            return this;
        }
        else {
            return this.options.items[index].action;
        }
    }
    child(options) {
        return new Interface(this.player, options, this);
    }
}
exports.Interface = Interface;
server_1.event('org.bukkit.event.inventory.InventoryClickEvent', event => {
    const inventory = event.getWhoClicked().getOpenInventory().getTopInventory();
    if (inventory) {
        //@ts-expect-error
        const code = inventory.hashCode();
        if (interfaces.has(code)) {
            let cancel = true;
            const ui = interfaces.get(code);
            const index = event.getSlot();
            const value = ui.items[index];
            if (value) {
                handle(value.action);
                ui.put(index);
                function handle(action) {
                    switch (typeof action) {
                        case 'object':
                            (action instanceof Interface ? action : new Interface(ui.player, action)).show();
                            break;
                        case 'function':
                            handle(action({ event, ui, item: value.item }));
                            break;
                        case 'string':
                            switch (action) {
                                case 'exit':
                                    ui.player.closeInventory();
                                    break;
                                case 'return':
                                    ui.parent ? ui.parent.show() : ui.player.closeInventory();
                                    break;
                                case 'take':
                                    cancel = false;
                                    break;
                            }
                    }
                }
            }
            cancel && event.setCancelled(true);
        }
    }
});
