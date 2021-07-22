import { type, server, root, simplify, plugin } from '@grakkit/server';

import {
   obiItemStack,
   obuVector,
   obLocation,
   obePlayer,
   obuBoundingBox,
   obbBlock,
   obeEntity,
   obpPersistentDataType,
   obOfflinePlayer
} from '@grakkit/server-classes';

export type HasBoundingBox = obuBoundingBox | SerialBoundingBox | IsPhysical;
export type HasItemStack = obiItemStack | SerialItemStack | IsPhysical;
export type HasLocation = obLocation | SerialLocation | IsPhysical;
export type HasVector = obuVector | SerialVector | HasLocation;

export type IsContainer = obbBlock | IsEntity | obiItemStack | SerialEntity | SerialItemStack;
export type IsEntity = obeEntity | obePlayer | obOfflinePlayer;
export type IsPhysical = obbBlock | IsEntity | SerialEntity;

export type SerialBoundingBox = {
   class: 'BoundingBox';
   min: SerialVector;
   max: SerialVector;
};

export type SerialEntity = {
   class: 'Entity';
   location: SerialLocation;
   nbt: SerialNBTTagCompound;
   type: string;
   uuid: string;
};

export type SerialItemStack = {
   amount: number;
   class: 'ItemStack';
   nbt: SerialNBTTagCompound;
   type: string;
};

export type SerialLocation = {
   class: 'Location';
   pitch: number;
   world: string;
   x: number;
   y: number;
   yaw: number;
   z: number;
};

export type SerialNBTTag =
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

export type SerialNBTTagCompound = {
   class: 'NBTTagCompound';
   value: { [x: string]: SerialNBTTag };
};

export type SerialVector = { class: 'Vector'; x: number; y: number; z: number };

export const session: { data: Map<string, any> } = { data: new Map() };

const ArrayList = type('java.util.ArrayList');
const Block = type('org.bukkit.block.Block');
const BlockStateMeta = type('org.bukkit.inventory.meta.BlockStateMeta');
const BoundingBox = type('org.bukkit.util.BoundingBox');
const Entity = type('org.bukkit.entity.Entity');
const EntityType = type('org.bukkit.entity.EntityType');
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

// only used to define internal variable types
type NBTTag = { new (...args: any[]): any; a(value: any): any };

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

function auto (path) {
   session.data.has(path) || session.data.set(path, root.file('codify', `${path}.json`).json() || {});
   return session.data.get(path);
}

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

export const data: {
   (arg1: IsPhysical, arg2?: string): any;
   (arg1: obiItemStack, arg2?: string): { value: any };
} = (arg1: IsContainer, arg2 = 'default') => {
   const thing = parse(arg1);
   if (thing instanceof Block) {
      return auto(
         `block/${thing.getWorld().getUID().toString()}/${(thing.getX() + 3e7).toString(16)}-${(thing.getY() +
            2048).toString(16)}-${(thing.getZ() + 3e7).toString(16)}/${arg2}`
      );
   } else if (thing instanceof OfflinePlayer) {
      return auto(`player/${thing.getUniqueId().toString()}/${arg2}`);
   } else if (thing instanceof Entity) {
      return auto(`entity/${thing.getUniqueId().toString()}/${arg2}`);
   } else if (thing instanceof ItemStack) {
      const meta = thing.getItemMeta();
      if (meta instanceof PersistentDataHolder) {
         const container = meta.getPersistentDataContainer();
         const key = new NamespacedKey(plugin, `codify/${arg2}`);
         return {
            get value () {
               return container.has(key, string) ? JSON.parse(container.get(key, string)) : void 0;
            },
            set value (value) {
               if (typeof value === 'undefined') {
                  //@ts-expect-error
                  container.has(key, string) && (container.remove(key), thing.setItemMeta(meta));
               } else {
                  const raw = JSON.stringify(simplify(value));
                  const match = container.has(key, string) && raw === container.get(key, string);
                  //@ts-expect-error
                  match || (container.set(key, string, raw), thing.setItemMeta(meta));
               }
            }
         };
      } else {
         return {
            get value () {
               return void 0;
            }
         };
      }
   }
};

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

export const parse: {
   (object: SerialBoundingBox): obuBoundingBox;
   (object: SerialEntity): obeEntity;
   (object: SerialItemStack): obiItemStack;
   (object: SerialLocation): obLocation;
   (object: SerialVector): obuVector;
   <X>(object: X): X;
} = (object: SerialBoundingBox | SerialEntity | SerialItemStack | SerialLocation | SerialNBTTag | SerialVector) => {
   if (object && typeof object.class === 'string') {
      switch (object.class) {
         case 'BoundingBox':
            return BoundingBox.of(parse(object.min), parse(object.max));
         case 'Entity':
            try {
               let entity = [ ...server.selectEntities(sender, '@e') ].filter(
                  entity => object.uuid === entity.getUniqueId().toString()
               )[0];
               if (!entity) {
                  const location = parse(object.location);
                  entity = location.getWorld().spawnEntity(location, EntityType[object.type], SpawnReason.CUSTOM);
               }
               //@ts-expect-error
               entity.getHandle().load(parse(object.nbt));
               return entity;
            } catch (error) {
               console.error('CODIFY - ENTITY PARSING ERROR:');
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

export const serialize: {
   (object: obuBoundingBox): SerialBoundingBox;
   (object: IsEntity): SerialEntity;
   (object: obiItemStack): SerialItemStack;
   (object: obLocation): SerialLocation;
   (object: obuVector): SerialVector;
   <X>(object: X): X;
} = (object: obuBoundingBox | IsEntity | obiItemStack | obLocation | obuVector) => {
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

const sender = server.getConsoleSender();
//@ts-expect-error
const string: obpPersistentDataType<string, string> = PersistentDataType.STRING;

Core.hook(() => {
   for (const [ path, content ] of session.data) {
      const raw = JSON.stringify(simplify(content));
      const target = root.file('codify', `${path}.json`);
      if (raw === '{}') {
         target.exists && target.remove();
      } else {
         target.entry().write(raw);
      }
   }
});
