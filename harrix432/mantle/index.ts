import { type, core, event, server } from '@grakkit/server';

import {
   obMaterial,
   obiInventory,
   obimItemMeta,
   obiItemStack,
   obuVector,
   obLocation,
   obePlayer,
   obuBoundingBox,
   obbBlock,
   obeEntity,
   obeItem,
   obcCommandSender,
   obOfflinePlayer,
   obpPersistentDataHolder,
   obeLivingEntity,
   obimBlockStateMeta
} from '@grakkit/server-classes';

const ArrayList = type('java.util.ArrayList');
const Block = type('org.bukkit.block.Block');
const BlockStateMeta = type('org.bukkit.inventory.meta.BlockStateMeta');
const BoundingBox = type('org.bukkit.util.BoundingBox');
const CommandSender = type('org.bukkit.command.CommandSender');
const Entity = type('org.bukkit.entity.Entity');
const EntityType = type('org.bukkit.entity.EntityType');
const ItemFlag = type('org.bukkit.inventory.ItemFlag');
const ItemStack = type('org.bukkit.inventory.ItemStack');
const LivingEntity = type('org.bukkit.entity.LivingEntity');
const Location = type('org.bukkit.Location');
const Material = type('org.bukkit.Material');
const NamespacedKey = type('org.bukkit.NamespacedKey');
const OfflinePlayer = type('org.bukkit.OfflinePlayer');
const PersistentDataHolder = type('org.bukkit.persistence.PersistentDataHolder');
const PersistentDataType = type('org.bukkit.persistence.PersistentDataType');
const SpawnReason = type('org.bukkit.event.entity.CreatureSpawnEvent.SpawnReason');
const UUID = type('java.util.UUID');
const Vector = type('org.bukkit.util.Vector');

const NMS: string = (() => {
   const item = new ItemStack(Material.STONE).ensureServerConversions();
   const meta = item.getItemMeta();
   meta.setDisplayName('sus');
   item.setItemMeta(meta);
   //@ts-expect-error
   return item.handle.getTag().getClass().getCanonicalName().split('.').slice(0, -1).join('.');
})();

//@ts-expect-error
const NBTTagByte: NBTTag = type(`${NMS}.NBTTagByte`);
//@ts-expect-error
const NBTTagByteArray: NBTTag = type(`${NMS}.NBTTagByteArray`);
//@ts-expect-error
const NBTTagCompound: NBTTag = type(`${NMS}.NBTTagCompound`);
//@ts-expect-error
const NBTTagDouble: NBTTag = type(`${NMS}.NBTTagDouble`);
//@ts-expect-error
const NBTTagFloat: NBTTag = type(`${NMS}.NBTTagFloat`);
//@ts-expect-error
const NBTTagInt: NBTTag = type(`${NMS}.NBTTagInt`);
//@ts-expect-error
const NBTTagIntArray: NBTTag = type(`${NMS}.NBTTagIntArray`);
//@ts-expect-error
const NBTTagList: NBTTag = type(`${NMS}.NBTTagList`);
//@ts-expect-error
const NBTTagLong: NBTTag = type(`${NMS}.NBTTagLong`);
//@ts-expect-error
const NBTTagLongArray: NBTTag = type(`${NMS}.NBTTagLongArray`);
//@ts-expect-error
const NBTTagShort: NBTTag = type(`${NMS}.NBTTagShort`);
//@ts-expect-error
const NBTTagString: NBTTag = type(`${NMS}.NBTTagString`);

type HasBoundingBox = obuBoundingBox | SerialBoundingBox | IsPhysical;
type HasItemStack = obiItemStack | SerialItemStack | IsPhysical;
type HasLocation = obLocation | SerialLocation | IsPhysical;
type HasVector = obuVector | SerialVector | HasLocation;

type InterfaceAction = string | Function | Interface | InterfaceOptions;
type InterfaceItem = obiItemStack | ItemOptions | ((...args: any[]) => obiItemStack | ItemOptions);
type InterfaceOptions = {
   rows: 1 | 2 | 3 | 4 | 5 | 6;
   title: string;
   items: { [x: number]: { item: InterfaceItem; action?: InterfaceAction } };
};

type IsContainer = obbBlock | IsEntity | obiItemStack | SerialEntity | SerialItemStack;
type IsEntity = obeEntity | obeItem | obePlayer | obOfflinePlayer;
type IsPhysical = obbBlock | IsEntity | SerialEntity;

type ItemOptions = {
   type: obMaterial;
   amount?: number;
   name?: string;
   lore?: string[];
   hide?: boolean;
   meta?: (meta: obimItemMeta) => any;
   data?: any;
};

type MantleParse = {
   (object: SerialBoundingBox): obuBoundingBox;
   (object: SerialEntity): obeEntity;
   (object: SerialItemStack): obiItemStack;
   (object: SerialLocation): obLocation;
   (object: SerialVector): obuVector;
   <X>(object: X): X;
};

type MantleSerialize = {
   (object: obuBoundingBox): SerialBoundingBox;
   (object: IsEntity): SerialEntity;
   (object: obiItemStack): SerialItemStack;
   (object: obLocation): SerialLocation;
   (object: obuVector): SerialVector;
   <X>(object: X): X;
};

type NBTTag = { new (...args: any[]): any; a(value: any): any };

type SerialBoundingBox = {
   class: 'BoundingBox';
   min: SerialVector;
   max: SerialVector;
};

type SerialEntity = {
   class: 'Entity';
   location: SerialLocation;
   nbt: SerialNBTTagCompound;
   type: string;
   uuid: string;
};

type SerialItemStack = {
   amount: number;
   class: 'ItemStack';
   nbt: SerialNBTTagCompound;
   type: string;
};

type SerialLocation = {
   class: 'Location';
   pitch: number;
   world: string;
   x: number;
   y: number;
   yaw: number;
   z: number;
};

type SerialNBTTag =
   | { class: 'NBTTagByte'; value: number }
   | { class: 'NBTTagByteArray'; value: number[] }
   | { class: 'NBTTagCompound'; value: { [x: string]: SerialNBTTag } }
   | { class: 'NBTTagDouble'; value: number }
   | { class: 'NBTTagFloat'; value: number }
   | { class: 'NBTTagInt'; value: number }
   | { class: 'NBTTagIntArray'; value: number[] }
   | { class: 'NBTTagList'; value: SerialNBTTag[] }
   | { class: 'NBTTagLong'; value: number }
   | { class: 'NBTTagLongArray'; value: number[] }
   | { class: 'NBTTagShort'; value: number }
   | { class: 'NBTTagString'; value: string };

type SerialNBTTagCompound = {
   class: 'NBTTagCompound';
   value: { [x: string]: SerialNBTTag };
};

type SerialVector = {
   class: 'Vector';
   x: number;
   y: number;
   z: number;
};

export function boundingBox (arg1: HasBoundingBox) {
   const thing = parse(arg1);
   if (thing instanceof Block) {
      const bounds = thing.getBoundingBox();
      if (bounds.getVolume() === 0) {
         // don't use default zero-volume bounding box
         return BoundingBox.of(thing.getLocation(), 0, 0, 0);
      } else {
         return bounds;
      }
   } else if (thing instanceof BoundingBox) {
      return thing;
   } else if (thing instanceof Entity) {
      return thing.getBoundingBox();
   }
}

export function data (arg1: IsContainer, arg2 = 'default') {
   const thing = parse(arg1);
   const store = `mantle/${arg2}`;
   if (typeof arg2 !== 'string') {
      throw new TypeError('Argument 2 (if specified) must be of type "string"');
   } else if (thing instanceof Block) {
      return core.data(`${store}/block/${thing.getWorld().getUID().toString()}/${thing.getBlockKey().toString(16)}`);
   } else if (thing instanceof OfflinePlayer) {
      return core.data(`${store}/player/${thing.getUniqueId().toString()}`);
   } else if (thing instanceof Entity) {
      return core.data(`${store}/entity/${thing.getUniqueId().toString()}`);
   } else if (thing instanceof ItemStack) {
      const meta = thing.getItemMeta();
      if (meta instanceof PersistentDataHolder) {
         const key = new NamespacedKey(plugin, `mantle/data/${arg2}`);
         //@ts-expect-error
         const type = PersistentDataType.STRING;
         const container = meta.getPersistentDataContainer();
         container.has(key, type) || (container.set(key, type, UUID.randomUUID().toString()), thing.setItemMeta(meta));
         // retroactively add key to serialized item stack input
         arg1 && 'class' in arg1 && arg1.class === 'ItemStack' && Object.assign(arg1, serialize(thing));
         return core.data(`${store}/itemStack/${container.get(key, type)}`);
      }
   }
}

export function dist (arg1: HasVector, arg2: HasVector, arg3 = false) {
   const from = vector(arg1);
   const to = vector(arg2);
   if (from === void 0) {
      throw new TypeError('Argument 1 must be of type "HasVector"');
   } else if (to === void 0) {
      throw new TypeError('Argument 2 must be of type "HasVector"');
   } else if (typeof arg3 !== 'boolean') {
      throw new TypeError('Argument 3 (if specified) must be of type "boolean"');
   } else {
      const fromLocation = location(arg1);
      const toLocation = location(arg2);
      if (fromLocation && toLocation && fromLocation.getWorld() !== toLocation.getWorld()) {
         return Infinity;
      } else {
         const delta = vector(from).subtract(to);
         arg3 && delta.setY(0);
         return Math.sqrt(Math.pow(delta.getX(), 2) + Math.pow(delta.getY(), 2) + Math.pow(delta.getZ(), 2));
      }
   }
}

export function drop (arg1: HasLocation, arg2: HasItemStack, arg3 = false) {
   const position = location(arg1);
   const item = itemStack(arg2);
   if (position === void 0) {
      throw new TypeError('Argument 1 must be of type "HasLocation"');
   } else if (item === void 0) {
      throw new TypeError('Argument 2 must be of type "HasItemStack"');
   } else if (typeof arg3 !== 'boolean') {
      throw new TypeError('Argument 3 (if specified) must be of type "boolean"');
   } else if (item) {
      position.getWorld()[arg3 ? 'dropItemNaturally' : 'dropItem'](position, item);
   }
}

export function item (options: ItemOptions) {
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

export function itemStack (arg1: HasItemStack) {
   const stuff = parse(arg1);
   if (stuff instanceof Block) {
      const item = new ItemStack(stuff.getType());
      const meta = item.getItemMeta();
      meta instanceof BlockStateMeta && (meta.setBlockState(stuff.getState()), item.setItemMeta(meta));
      return item;
   } else if (stuff instanceof Entity) {
      return stuff instanceof LivingEntity ? stuff.getEquipment().getItemInMainHand() : null;
   } else if (stuff instanceof ItemStack) {
      return stuff;
   }
}

export function location (arg1) {
   const stuff = parse(arg1);
   if (stuff instanceof Block || stuff instanceof Entity) {
      return stuff.getLocation();
   } else if (stuff instanceof Location) {
      return stuff;
   }
}

export function meta<X> (item: obiItemStack, modifier: (meta: obimItemMeta) => X): X {
   const meta = item.getItemMeta();
   if (meta) {
      const result = modifier(meta);
      item.setItemMeta(meta);
      return result;
   }
}

export const parse: MantleParse = (
   object: SerialBoundingBox | SerialEntity | SerialItemStack | SerialLocation | SerialNBTTag | SerialVector
) => {
   if (object && typeof object.class === 'string') {
      switch (object.class) {
         case 'BoundingBox':
            return BoundingBox.of(parse(object.min), parse(object.max));
         case 'Entity':
            try {
               let entity = select().filter(entity => object.uuid === entity.getUniqueId().toString())[0];
               if (!entity) {
                  const location = parse(object.location);
                  entity = location.getWorld().spawnEntity(location, EntityType[object.type], SpawnReason.CUSTOM);
               }
               //@ts-expect-error
               entity.getHandle().load(parse(object.nbt));
               return entity;
            } catch (error) {
               console.error('An error occured while attempting to parse a serialized entity!');
               console.error(error.stack || error.message || error);
               return null;
            }
         case 'ItemStack':
            const item_stack = new ItemStack(Material[object.type], object.amount).ensureServerConversions();
            //@ts-expect-error
            item_stack.getHandle().setTag(parse(object.nbt));
            return item_stack;
         case 'Location':
            return new Location(
               server.getWorld(UUID.fromString(object.world)),
               object.x,
               object.y,
               object.z,
               object.yaw,
               object.pitch
            );
         case 'NBTTagByte':
            return NBTTagByte.a(object.value);
         case 'NBTTagByteArray':
            const nbt_tag_byte_array = new NBTTagByteArray(new ArrayList());
            for (const value of object.value) nbt_tag_byte_array.add(NBTTagByte.a(value));
            return nbt_tag_byte_array;
         case 'NBTTagCompound':
            const nbt_tag_compound = new NBTTagCompound();
            for (const key in object.value) nbt_tag_compound.set(key, parse(object.value[key]));
            return nbt_tag_compound;
         case 'NBTTagDouble':
            return NBTTagDouble.a(object.value);
         case 'NBTTagFloat':
            return NBTTagFloat.a(object.value);
         case 'NBTTagInt':
            return NBTTagInt.a(object.value);
         case 'NBTTagIntArray':
            const nbt_tag_int_array = new NBTTagIntArray(new ArrayList());
            for (const value of object.value) nbt_tag_int_array.add(NBTTagInt.a(value));
            return nbt_tag_int_array;
         case 'NBTTagList':
            const nbt_tag_list = new NBTTagList();
            for (const value of object.value) nbt_tag_list.add(parse(value));
            return nbt_tag_list;
         case 'NBTTagLong':
            return NBTTagLong.a(object.value);
         case 'NBTTagLongArray':
            const nbt_tag_long_array = new NBTTagLongArray(new ArrayList());
            for (const value of object.value) nbt_tag_long_array.add(NBTTagLong.a(value));
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

export function player (arg1: string) {
   if (typeof arg1 !== 'string') {
      throw new TypeError('Argument 1 must be of type "string"');
   } else {
      const online = server.getPlayer(arg1);
      if (online) {
         return online;
      } else {
         for (const offline of server.getOfflinePlayers()) {
            if (offline.getName().toLowerCase().startsWith(arg1.toLowerCase())) {
               return offline;
            }
         }
      }
   }
}

export function select (arg1 = '@e', arg2: obcCommandSender = server.getConsoleSender()) {
   const context = parse(arg2);
   if (typeof arg1 !== 'string') {
      throw new TypeError('Argument 1 (if specified) must be of type "string"');
   } else if (context instanceof CommandSender) {
      try {
         return [ ...server.selectEntities(context, arg1) ];
      } catch (error) {
         throw new SyntaxError('The provided selector was invalid and could not be parsed.');
      }
   } else {
      throw new TypeError('Argument 2 (if specified) must be of type "HasEntity" or "CommandSender"');
   }
}

export const serialize: MantleSerialize = (
   object: obuBoundingBox | IsEntity | obiItemStack | obLocation | obuVector
) => {
   if (object instanceof BoundingBox) {
      return {
         class: 'BoundingBox',
         min: serialize(object.getMin()),
         max: serialize(object.getMax())
      };
   } else if (object instanceof Entity) {
      //@ts-expect-error
      const nbt: SerialNBTTagCompound = serialize(object.getHandle().save(new NBTTagCompound()));
      return {
         class: 'Entity',
         location: serialize(object.getLocation()),
         nbt,
         type: object.getType().name(),
         uuid: object.getUniqueId().toString()
      };
   } else if (object instanceof ItemStack) {
      //@ts-expect-error
      const nbt: SerialNBTTagCompound = serialize(object.ensureServerConversions().getHandle().getTag());
      return {
         amount: object.getAmount(),
         class: 'ItemStack',
         nbt,
         type: object.getType().name()
      };
   } else if (object instanceof Location) {
      return {
         class: 'Location',
         pitch: object.getPitch(),
         world: object.getWorld().getUID().toString(),
         x: object.getX(),
         y: object.getY(),
         yaw: object.getYaw(),
         z: object.getZ()
      };
   } else if (object instanceof Vector) {
      return { class: 'Vector', x: object.getX(), y: object.getY(), z: object.getZ() };
   } else {
      // force VS code to shut the fuck up
      const nbt: any = object;
      if (nbt instanceof NBTTagByte) {
         return { class: 'NBTTagByte', value: nbt.asByte() };
      } else if (nbt instanceof NBTTagByteArray) {
         return { class: 'NBTTagByteArray', value: [ ...nbt ].map(value => value.asByte()) };
      } else if (nbt instanceof NBTTagCompound) {
         return {
            class: 'NBTTagCompound',
            value: Object.fromEntries([ ...nbt.getKeys() ].map(key => [ key, serialize(nbt.get(key)) ]))
         };
      } else if (nbt instanceof NBTTagDouble) {
         return { class: 'NBTTagDouble', value: nbt.asDouble() };
      } else if (nbt instanceof NBTTagFloat) {
         return { class: 'NBTTagFloat', value: nbt.asFloat() };
      } else if (nbt instanceof NBTTagInt) {
         return { class: 'NBTTagInt', value: nbt.asInt() };
      } else if (nbt instanceof NBTTagIntArray) {
         return { class: 'NBTTagIntArray', value: [ ...nbt ].map(value => value.asInt()) };
      } else if (nbt instanceof NBTTagList) {
         return { class: 'NBTTagList', value: [ ...nbt ].map(serialize) };
      } else if (nbt instanceof NBTTagLong) {
         return { class: 'NBTTagLong', value: nbt.asLong() };
      } else if (nbt instanceof NBTTagLongArray) {
         return { class: 'NBTTagLongArray', value: [ ...nbt ].map(value => value.asLong()) };
      } else if (nbt instanceof NBTTagShort) {
         return { class: 'NBTTagShort', value: nbt.asShort() };
      } else if (nbt instanceof NBTTagString) {
         return { class: 'NBTTagString', value: nbt.asString() };
      } else {
         return nbt;
      }
   }
};

export function vector (arg1: HasVector) {
   const stuff = parse(arg1);
   if (stuff instanceof Block || stuff instanceof Entity) {
      return stuff.getLocation().toVector();
   } else if (stuff instanceof Location) {
      return stuff.toVector();
   } else if (stuff instanceof Vector) {
      return stuff;
   }
}

const interfaces: Map<number, Interface> = new Map();

export class Interface {
   player: obePlayer;
   options: InterfaceOptions;
   inventory: obiInventory;
   parent?: Interface;
   constructor (player: obePlayer, options: InterfaceOptions, parent?: Interface) {
      this.player = player;
      this.options = options;
      this.parent = parent;
   }
   get rows () {
      return this.options.rows;
   }
   set rows (value) {
      this.options.rows = value;
      this.generate().refresh();
   }
   get title () {
      return this.options.title;
   }
   set title (value) {
      this.options.title = value;
      this.generate().refresh();
   }
   get items () {
      return this.options.items;
   }
   set items (value) {
      this.options.items = value;
      this.put();
   }
   put (index?: number) {
      if (index === void 0) {
         for (const index in this.items) this.put(+index);
      } else {
         const value = this.items[index];
         const stack = typeof value.item === 'function' ? value.item() : value.item;
         this.inventory.setItem(index, stack instanceof ItemStack ? stack : item(stack));
      }
      return this;
   }
   generate () {
      //@ts-expect-error
      this.inventory && interfaces.delete(this.inventory.hashCode());
      //@ts-expect-error
      this.inventory = server.createInventory(this.player, this.options.rows * 9, this.options.title);
      //@ts-expect-error
      interfaces.set(this.inventory.hashCode(), this);
      return this.put();
   }
   show () {
      this.inventory || this.generate();
      this.player.openInventory(this.inventory);
      return this;
   }
   refresh () {
      //@ts-expect-error
      this.inventory.getViewers().contains(this.player) && this.show();
   }
   item (index: number, input?: InterfaceItem) {
      if (input) {
         this.options.items[index].item = input;
         return this.put(index);
      } else {
         return this.options.items[index];
      }
   }
   action (index: number, input?: InterfaceAction) {
      if (input) {
         this.options.items[index].action = input;
         return this;
      } else {
         return this.options.items[index].action;
      }
   }
   child (options: InterfaceOptions) {
      return new Interface(this.player, options, this);
   }
}

event('org.bukkit.event.inventory.InventoryClickEvent', event => {
   const inventory = event.getWhoClicked().getOpenInventory().getTopInventory();
   if (inventory) {
      //@ts-expect-error
      const code: number = inventory.hashCode();
      if (interfaces.has(code)) {
         let cancel = true;
         const ui: Interface = interfaces.get(code);
         const index = event.getSlot();
         const value = ui.items[index];
         if (value) {
            handle(value.action);
            ui.put(index);
            function handle (action: InterfaceAction) {
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
