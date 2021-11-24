import { data as $data, server, type } from '@grakkit/stdlib-paper';

import {
   obiItemStack,
   obuVector,
   obLocation,
   obePlayer,
   obuBoundingBox,
   obbBlock,
   obeEntity,
   obOfflinePlayer
} from '@grakkit/types-paper';

import {
   NBTTagCompound,
   NBTTagByte,
   NBTTagByteArray,
   NBTTagDouble,
   NBTTagFloat,
   NBTTagInt,
   NBTTagIntArray,
   NBTTagList,
   NBTTagLong,
   NBTTagLongArray,
   NBTTagShort,
   NBTTagString,
   Parsable,
   Parser,
   Serializable,
   SerializedBoundingBox,
   SerializedEntity,
   SerializedItemStack,
   SerializedLocation,
   SerializedNBTTagCompound,
   SerializedVector,
   Serializer
} from './spec';

export type HasBoundingBox = obuBoundingBox | SerializedBoundingBox | IsPhysical;
export type HasItemStack = obiItemStack | SerializedItemStack | IsPhysical;
export type HasLocation = obLocation | SerializedLocation | IsPhysical;
export type HasVector = obuVector | SerializedVector | HasLocation;

export type IsEntity = obeEntity | obePlayer | obOfflinePlayer;
export type IsPhysical = obbBlock | IsEntity | SerializedEntity;

const ArrayList = type('java.util.ArrayList');
const Block = type('org.bukkit.block.Block');
const BoundingBox = type('org.bukkit.util.BoundingBox');
const Entity = type('org.bukkit.entity.Entity');
const EntityType = type('org.bukkit.entity.EntityType');
const ItemStack = type('org.bukkit.inventory.ItemStack');
const Location = type('org.bukkit.Location');
const Material = type('org.bukkit.Material');
const OfflinePlayer = type('org.bukkit.OfflinePlayer');
const Player = type('org.bukkit.entity.Player');
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
const NBTTagByteClass: typeof NBTTagByte = type(`${NMS}.NBTTagByte`);
//@ts-expect-error
const NBTTagByteArrayClass: typeof NBTTagByteArray = type(`${NMS}.NBTTagByteArray`);
//@ts-expect-error
const NBTTagCompoundClass: typeof NBTTagCompound = type(`${NMS}.NBTTagCompound`);
//@ts-expect-error
const NBTTagDoubleClass: typeof NBTTagDouble = type(`${NMS}.NBTTagDouble`);
//@ts-expect-error
const NBTTagFloatClass: typeof NBTTagFloat = type(`${NMS}.NBTTagFloat`);
//@ts-expect-error
const NBTTagIntClass: typeof NBTTagInt = type(`${NMS}.NBTTagInt`);
//@ts-expect-error
const NBTTagIntArrayClass: typeof NBTTagIntArray = type(`${NMS}.NBTTagIntArray`);
//@ts-expect-error
const NBTTagListClass: typeof NBTTagList = type(`${NMS}.NBTTagList`);
//@ts-expect-error
const NBTTagLongClass: typeof NBTTagLong = type(`${NMS}.NBTTagLong`);
//@ts-expect-error
const NBTTagLongArrayClass: typeof NBTTagLongArray = type(`${NMS}.NBTTagLongArray`);
//@ts-expect-error
const NBTTagShortClass: typeof NBTTagShort = type(`${NMS}.NBTTagShort`);
//@ts-expect-error
const NBTTagStringClass: typeof NBTTagString = type(`${NMS}.NBTTagString`);

export const data = (arg1: IsPhysical, arg2 = 'default') => {
   const thing = parse(arg1);
   if (thing instanceof Block) {
      return $data(
         'codify/block',
         thing.getWorld().getUID().toString(),
         `${(thing.getX() + 3e7).toString(16)}-${(thing.getY() + 2048).toString(16)}-${(thing.getZ() + 3e7).toString(
            16
         )}`,
         arg2
      );
   } else if (thing instanceof OfflinePlayer || thing instanceof Player) {
      return $data('codify/player', thing.getUniqueId().toString(), arg2);
   } else if (thing instanceof Entity) {
      return $data('codify/entity', thing.getUniqueId().toString(), arg2);
   } else {
      return {};
   }
};

export const parse: Parser = <any>((object: Parsable, subject: any): any => {
   if (object && typeof object.class === 'string') {
      switch (object.class) {
         case 'BoundingBox':
            return BoundingBox.of(parse(object.min), parse(object.max));
         case 'Entity':
            try {
               const entity = subject
                  .getWorld()
                  .spawnEntity(subject, EntityType.valueOf(object.type), SpawnReason.CUSTOM);
               entity.getHandle().load(parse(object.nbt));
               return entity;
            } catch (error) {
               console.error('ENTITY PARSING ERROR');
               console.error(error.stack || error.message || error);
               return null;
            }
         case 'ItemStack':
            const item_stack = new ItemStack(Material.valueOf(object.type), object.count).ensureServerConversions();
            //@ts-expect-error
            item_stack.getHandle().setTag(parse(object.nbt));
            return item_stack;
         case 'Location':
            return new Location(
               //@ts-expect-error
               server.getWorld(UUID.fromString(object.world)),
               object.vector.x,
               object.vector.y,
               object.vector.z,
               object.yaw,
               object.pitch
            );
         case 'NBTTagByte':
            return NBTTagByteClass.a(object.value);
         case 'NBTTagByteArray':
            const nbt_tag_byte_array = new NBTTagByteArrayClass(new ArrayList());
            for (const value of object.value) {
               nbt_tag_byte_array.add(NBTTagByteClass.a(value));
            }
            return nbt_tag_byte_array;
         case 'NBTTagCompound':
            const nbt_tag_compound = new NBTTagCompoundClass();
            for (const key in object.value) {
               nbt_tag_compound.set(key, parse(object.value[key]));
            }
            return nbt_tag_compound;
         case 'NBTTagDouble':
            return NBTTagDoubleClass.a(object.value);
         case 'NBTTagFloat':
            return NBTTagFloatClass.a(object.value);
         case 'NBTTagInt':
            return NBTTagIntClass.a(object.value);
         case 'NBTTagIntArray':
            const nbt_tag_int_array = new NBTTagIntArrayClass(new ArrayList());
            for (const value of object.value) {
               nbt_tag_int_array.add(NBTTagIntClass.a(value));
            }
            return nbt_tag_int_array;
         case 'NBTTagList':
            const nbt_tag_list = new NBTTagListClass();
            for (const value of object.value) {
               nbt_tag_list.add(parse(value));
            }
            return nbt_tag_list;
         case 'NBTTagLong':
            return NBTTagLongClass.a(object.value);
         case 'NBTTagLongArray':
            const nbt_tag_long_array = new NBTTagLongArrayClass(new ArrayList());
            for (const value of object.value) {
               nbt_tag_long_array.add(NBTTagLongClass.a(value));
            }
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

export const serialize: Serializer = <any>((object: Serializable) => {
   if (object instanceof BoundingBox) {
      return {
         class: 'BoundingBox',
         min: serialize(object.getMin()),
         max: serialize(object.getMax())
      };
   } else if (object instanceof Entity) {
      //@ts-expect-error
      const nbt: SerializedNBTTagCompound = serialize(object.getHandle().save(new NBTTagCompoundClass()));
      return {
         class: 'Entity',
         nbt,
         type: object.getType().name()
      };
   } else if (object instanceof ItemStack) {
      //@ts-expect-error
      const nbt: SerializedNBTTagCompound = serialize(object.ensureServerConversions().getHandle().getTag());
      return {
         class: 'ItemStack',
         count: object.getAmount(),
         nbt,
         type: object.getType().name()
      };
   } else if (object instanceof Location) {
      return {
         class: 'Location',
         pitch: object.getPitch(),
         vector: serialize(object.toVector()),
         world: object.getWorld().getUID().toString(),
         yaw: object.getYaw()
      };
   } else if (object instanceof Vector) {
      return { class: 'Vector', x: object.getX(), y: object.getY(), z: object.getZ() };
   } else if (object instanceof NBTTagByteClass) {
      return { class: 'NBTTagByte', value: object.asByte() };
   } else if (object instanceof NBTTagByteArrayClass) {
      return { class: 'NBTTagByteArray', value: [ ...object ].map(value => value.asByte()) };
   } else if (object instanceof NBTTagCompoundClass) {
      return {
         class: 'NBTTagCompound',
         value: Object.fromEntries([ ...object.getKeys() ].map(key => [ key, serialize(object.get(key)) ]))
      };
   } else if (object instanceof NBTTagDoubleClass) {
      return { class: 'NBTTagDouble', value: object.asDouble() };
   } else if (object instanceof NBTTagFloatClass) {
      return { class: 'NBTTagFloat', value: object.asFloat() };
   } else if (object instanceof NBTTagIntClass) {
      return { class: 'NBTTagInt', value: object.asInt() };
   } else if (object instanceof NBTTagIntArrayClass) {
      return { class: 'NBTTagIntArray', value: [ ...object ].map(value => value.asInt()) };
   } else if (object instanceof NBTTagListClass) {
      return { class: 'NBTTagList', value: [ ...object ].map(serialize) };
   } else if (object instanceof NBTTagLongClass) {
      return { class: 'NBTTagLong', value: object.asLong() };
   } else if (object instanceof NBTTagLongArrayClass) {
      return { class: 'NBTTagLongArray', value: [ ...object ].map(value => value.asLong()) };
   } else if (object instanceof NBTTagShortClass) {
      return { class: 'NBTTagShort', value: object.asShort() };
   } else if (object instanceof NBTTagStringClass) {
      return { class: 'NBTTagString', value: object.asString() };
   }
   return object;
});
