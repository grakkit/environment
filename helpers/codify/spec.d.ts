import {
   juArrayList,
   obbBlock,
   obbBlockState,
   obbCreatureSpawner,
   obbSign,
   obbSkull,
   obbTileState,
   obeEntity,
   obiBlockInventoryHolder,
   obiInventory,
   obiItemStack,
   obLocation,
   obuBoundingBox,
   obuVector
} from '@grakkit/server-classes';

export type NBTTag =
   | NBTTagByte
   | NBTTagByteArray
   | NBTTagCompound
   | NBTTagDouble
   | NBTTagFloat
   | NBTTagInt
   | NBTTagIntArray
   | NBTTagList
   | NBTTagLong
   | NBTTagLongArray
   | NBTTagShort
   | NBTTagString;

export class NBTTagByte {
   static a (value: number): NBTTagByte;
   asByte (): number;
}

export class NBTTagByteArray {
   constructor (list: juArrayList);
   [Symbol.iterator] (): Iterator<NBTTagByte>;
   add (value: NBTTagByte): void;
}

export class NBTTagCompound {
   get (key: string): NBTTag;
   getKeys (): Iterable<string>;
   remove (key: string): void;
   set (key: string, value: NBTTag): void;
}

export class NBTTagDouble {
   static a (value: number): NBTTagDouble;
   asDouble (): number;
}

export class NBTTagFloat {
   static a (value: number): NBTTagFloat;
   asFloat (): number;
}

export class NBTTagInt {
   static a (value: number): NBTTagInt;
   asInt (): number;
}

export class NBTTagIntArray {
   constructor (list: juArrayList);
   [Symbol.iterator] (): Iterator<NBTTagInt>;
   add (value: NBTTagInt): void;
}

export class NBTTagList {
   [Symbol.iterator] (): Iterator<NBTTag>;
   add (value: NBTTag): void;
}

export class NBTTagLong {
   static a (value: number): NBTTagLong;
   asLong (): number;
}

export class NBTTagLongArray {
   constructor (list: juArrayList);
   [Symbol.iterator] (): Iterator<NBTTagLong>;
   add (value: NBTTagLong): void;
}

export class NBTTagShort {
   static a (value: number): NBTTagShort;
   asShort (): number;
}

export class NBTTagString {
   static a (value: string): NBTTagString;
   asString (): string;
}

export type Parsable =
   | SerializedBlock
   | SerializedBlockState
   | SerializedBoundingBox
   | SerializedEntity
   | SerializedInventory
   | SerializedItemStack
   | SerializedLocation
   | SerializedNBTTag
   | SerializedVector;

export type Parser = {
   // standard
   (object: SerializedBlock, subject: obbBlock): obbBlock;
   (object: SerializedBlockStateInventory, subject: obiBlockInventoryHolder): obiBlockInventoryHolder;
   (object: SerializedBlockStateSign, subject: obbSign): obbSign;
   (object: SerializedBlockStateSkull, subject: obbSkull): obbSkull;
   (object: SerializedBlockStateSpawner, subject: obbCreatureSpawner): obbCreatureSpawner;
   (object: SerializedBoundingBox): obuBoundingBox;
   (object: SerializedEntity, subject: obLocation): obeEntity;
   (object: SerializedInventory, subject: obiInventory): obiInventory;
   (object: SerializedItemStack): obiItemStack;
   (object: SerializedLocation): obLocation;
   (object: SerializedNBTTagByte): NBTTagByte;
   (object: SerializedNBTTagByteArray): NBTTagByteArray;
   (object: SerializedNBTTagCompound): NBTTagCompound;
   (object: SerializedNBTTagDouble): NBTTagDouble;
   (object: SerializedNBTTagFloat): NBTTagFloat;
   (object: SerializedNBTTagInt): NBTTagInt;
   (object: SerializedNBTTagIntArray): NBTTagIntArray;
   (object: SerializedNBTTagList): NBTTagList;
   (object: SerializedNBTTagLong): NBTTagLong;
   (object: SerializedNBTTagLongArray): NBTTagLongArray;
   (object: SerializedNBTTagShort): NBTTagShort;
   (object: SerializedNBTTagString): NBTTagString;
   (object: SerializedVector): obuVector;
   // fallback
   (object: SerializedNBTTag): NBTTag;
   (object: SerializedBlockState, subject: obbBlockState): obbBlockState;
};

export type Serializable =
   | NBTTag
   | obbBlock
   | obbBlockState
   | obeEntity
   | obiBlockInventoryHolder
   | obiInventory
   | obiItemStack
   | obLocation
   | obuBoundingBox
   | obuVector;

export type SerializedBlock = {
   class: 'Block';
   data: string;
   state: SerializedBlockState;
};

export type SerializedBlockState =
   | SerializedBlockStateBasic
   | SerializedBlockStateInventory
   | SerializedBlockStateSign
   | SerializedBlockStateSpawner
   | SerializedBlockStateSkull;

export type SerializedBlockStateBasic = {
   class: 'BlockStateBasic';
};

export type SerializedBlockStateInventory = {
   class: 'BlockStateInventory';
   inventory: SerializedInventory;
};

export type SerializedBlockStateSign = {
   class: 'BlockStateSign';
   text: string[];
};

export type SerializedBlockStateSkull = {
   class: 'BlockStateSkull';
   name: string;
   properties: { name: string; value: string }[];
   uuid: string;
};

export type SerializedBlockStateSpawner = {
   class: 'BlockStateSpawner';
   delay: number;
   max_nearby_entities: number;
   max_spawn_delay: number;
   min_spawn_delay: number;
   required_player_range: number;
   spawn_count: number;
   spawned_type: string;
};

export type SerializedBoundingBox = {
   class: 'BoundingBox';
   max: SerializedVector;
   min: SerializedVector;
};

export type SerializedEntity = {
   class: 'Entity';
   nbt: SerializedNBTTagCompound;
   type: string;
};

export type SerializedInventory = {
   class: 'Inventory';
   contents: { slot: number; item: SerializedItemStack }[];
};

export type SerializedItemStack = {
   class: 'ItemStack';
   count: number;
   nbt: SerializedNBTTagCompound;
   type: string;
};

export type SerializedLocation = {
   class: 'Location';
   pitch: number;
   vector: SerializedVector;
   world: string;
   yaw: number;
};

export type SerializedNBTTag =
   | SerializedNBTTagByte
   | SerializedNBTTagByteArray
   | SerializedNBTTagCompound
   | SerializedNBTTagDouble
   | SerializedNBTTagFloat
   | SerializedNBTTagInt
   | SerializedNBTTagIntArray
   | SerializedNBTTagList
   | SerializedNBTTagLong
   | SerializedNBTTagLongArray
   | SerializedNBTTagShort
   | SerializedNBTTagString;

export type SerializedNBTTagByte = {
   class: 'NBTTagByte';
   value: number;
};

export type SerializedNBTTagByteArray = {
   class: 'NBTTagByteArray';
   value: number[];
};

export type SerializedNBTTagCompound = {
   class: 'NBTTagCompound';
   value: { [$: string]: SerializedNBTTag };
};

export type SerializedNBTTagDouble = {
   class: 'NBTTagDouble';
   value: number;
};

export type SerializedNBTTagFloat = {
   class: 'NBTTagFloat';
   value: number;
};

export type SerializedNBTTagInt = {
   class: 'NBTTagInt';
   value: number;
};

export type SerializedNBTTagIntArray = {
   class: 'NBTTagIntArray';
   value: number[];
};

export type SerializedNBTTagList = {
   class: 'NBTTagList';
   value: SerializedNBTTag[];
};

export type SerializedNBTTagLong = {
   class: 'NBTTagLong';
   value: number;
};

export type SerializedNBTTagLongArray = {
   class: 'NBTTagLongArray';
   value: number[];
};

export type SerializedNBTTagShort = {
   class: 'NBTTagShort';
   value: number;
};

export type SerializedNBTTagString = {
   class: 'NBTTagString';
   value: string;
};

export type SerializedVector = {
   class: 'Vector';
   x: number;
   y: number;
   z: number;
};

export type Serializer = {
   // standard
   (object: NBTTagByte): SerializedNBTTagByte;
   (object: NBTTagByteArray): SerializedNBTTagByteArray;
   (object: NBTTagCompound): SerializedNBTTagCompound;
   (object: NBTTagDouble): SerializedNBTTagDouble;
   (object: NBTTagFloat): SerializedNBTTagFloat;
   (object: NBTTagInt): SerializedNBTTagInt;
   (object: NBTTagIntArray): SerializedNBTTagIntArray;
   (object: NBTTagList): SerializedNBTTagList;
   (object: NBTTagLong): SerializedNBTTagLong;
   (object: NBTTagLongArray): SerializedNBTTagLongArray;
   (object: NBTTagShort): SerializedNBTTagShort;
   (object: NBTTagString): SerializedNBTTagString;
   (object: obbBlock): SerializedBlock;
   (object: obbCreatureSpawner): SerializedBlockStateSpawner;
   (object: obbSign): SerializedBlockStateSign;
   (object: obbSkull): SerializedBlockStateSkull;
   (object: obeEntity): SerializedEntity;
   (object: obiInventory): SerializedInventory;
   (object: obiBlockInventoryHolder): SerializedBlockStateInventory;
   (object: obiItemStack): SerializedItemStack;
   (object: obLocation): SerializedLocation;
   (object: obuBoundingBox): SerializedBoundingBox;
   (object: obuVector): SerializedVector;
   // fallback
   (object: NBTTag): SerializedNBTTag;
   (object: obbBlockState): SerializedBlockStateBasic;
};

export type Subject = obbBlock &
   obbCreatureSpawner &
   obbSign &
   obbSkull &
   obiBlockInventoryHolder &
   obiInventory &
   obLocation;
