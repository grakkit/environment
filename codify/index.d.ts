import { obiItemStack, obuVector, obLocation, obePlayer, obuBoundingBox, obbBlock, obeEntity, obOfflinePlayer } from '@grakkit/server-classes';
export declare type HasBoundingBox = obuBoundingBox | SerialBoundingBox | IsPhysical;
export declare type HasItemStack = obiItemStack | SerialItemStack | IsPhysical;
export declare type HasLocation = obLocation | SerialLocation | IsPhysical;
export declare type HasVector = obuVector | SerialVector | HasLocation;
export declare type IsContainer = obbBlock | IsEntity | obiItemStack | SerialEntity | SerialItemStack;
export declare type IsEntity = obeEntity | obePlayer | obOfflinePlayer;
export declare type IsPhysical = obbBlock | IsEntity | SerialEntity;
export declare type SerialBoundingBox = {
    class: 'BoundingBox';
    min: SerialVector;
    max: SerialVector;
};
export declare type SerialEntity = {
    class: 'Entity';
    location: SerialLocation;
    nbt: SerialNBTTagCompound;
    type: string;
    uuid: string;
};
export declare type SerialItemStack = {
    amount: number;
    class: 'ItemStack';
    nbt: SerialNBTTagCompound;
    type: string;
};
export declare type SerialLocation = {
    class: 'Location';
    pitch: number;
    world: string;
    x: number;
    y: number;
    yaw: number;
    z: number;
};
export declare type SerialNBTTag = {
    class: 'NBTTagByte';
    value: number;
} | {
    class: 'NBTTagByteArray';
    value: number[];
} | {
    class: 'NBTTagCompound';
    value: {
        [x: string]: SerialNBTTag;
    };
} | {
    class: 'NBTTagDouble';
    value: number;
} | {
    class: 'NBTTagFloat';
    value: number;
} | {
    class: 'NBTTagInt';
    value: number;
} | {
    class: 'NBTTagIntArray';
    value: number[];
} | {
    class: 'NBTTagList';
    value: SerialNBTTag[];
} | {
    class: 'NBTTagLong';
    value: number;
} | {
    class: 'NBTTagLongArray';
    value: number[];
} | {
    class: 'NBTTagShort';
    value: number;
} | {
    class: 'NBTTagString';
    value: string;
};
export declare type SerialNBTTagCompound = {
    class: 'NBTTagCompound';
    value: {
        [x: string]: SerialNBTTag;
    };
};
export declare type SerialVector = {
    class: 'Vector';
    x: number;
    y: number;
    z: number;
};
export declare const session: {
    data: Map<string, any>;
};
export declare function boundingBox(arg1: HasBoundingBox): obuBoundingBox;
export declare const data: {
    (arg1: IsPhysical, arg2?: string): any;
    (arg1: obiItemStack, arg2?: string): {
        value: any;
    };
};
export declare function itemStack(arg1: HasItemStack): obiItemStack;
export declare function location(arg1: any): obLocation;
export declare const parse: {
    (object: SerialBoundingBox): obuBoundingBox;
    (object: SerialEntity): obeEntity;
    (object: SerialItemStack): obiItemStack;
    (object: SerialLocation): obLocation;
    (object: SerialVector): obuVector;
    <X>(object: X): X;
};
export declare const serialize: {
    (object: obuBoundingBox): SerialBoundingBox;
    (object: IsEntity): SerialEntity;
    (object: obiItemStack): SerialItemStack;
    (object: obLocation): SerialLocation;
    (object: obuVector): SerialVector;
    <X>(object: X): X;
};
export declare function vector(arg1: HasVector): obuVector;
