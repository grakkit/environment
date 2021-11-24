import { obMaterial, obiInventory, obimItemMeta, obiItemStack, obuVector, obLocation, obePlayer, obuBoundingBox, obbBlock, obeEntity, obeItem, obcCommandSender, obOfflinePlayer } from '@grakkit/server-classes';
declare type HasBoundingBox = obuBoundingBox | SerialBoundingBox | IsPhysical;
declare type HasItemStack = obiItemStack | SerialItemStack | IsPhysical;
declare type HasLocation = obLocation | SerialLocation | IsPhysical;
declare type HasVector = obuVector | SerialVector | HasLocation;
declare type InterfaceAction = string | Function | Interface | InterfaceOptions;
declare type InterfaceItem = obiItemStack | ItemOptions | ((...args: any[]) => obiItemStack | ItemOptions);
declare type InterfaceOptions = {
    rows: 1 | 2 | 3 | 4 | 5 | 6;
    title: string;
    items: {
        [x: number]: {
            item: InterfaceItem;
            action?: InterfaceAction;
        };
    };
};
declare type IsContainer = obbBlock | IsEntity | obiItemStack | SerialEntity | SerialItemStack;
declare type IsEntity = obeEntity | obeItem | obePlayer | obOfflinePlayer;
declare type IsPhysical = obbBlock | IsEntity | SerialEntity;
declare type ItemOptions = {
    type: obMaterial;
    amount?: number;
    name?: string;
    lore?: string[];
    hide?: boolean;
    meta?: (meta: obimItemMeta) => any;
    data?: any;
};
declare type MantleParse = {
    (object: SerialBoundingBox): obuBoundingBox;
    (object: SerialEntity): obeEntity;
    (object: SerialItemStack): obiItemStack;
    (object: SerialLocation): obLocation;
    (object: SerialVector): obuVector;
    <X>(object: X): X;
};
declare type MantleSerialize = {
    (object: obuBoundingBox): SerialBoundingBox;
    (object: IsEntity): SerialEntity;
    (object: obiItemStack): SerialItemStack;
    (object: obLocation): SerialLocation;
    (object: obuVector): SerialVector;
    <X>(object: X): X;
};
declare type SerialBoundingBox = {
    class: 'BoundingBox';
    min: SerialVector;
    max: SerialVector;
};
declare type SerialEntity = {
    class: 'Entity';
    location: SerialLocation;
    nbt: SerialNBTTagCompound;
    type: string;
    uuid: string;
};
declare type SerialItemStack = {
    amount: number;
    class: 'ItemStack';
    nbt: SerialNBTTagCompound;
    type: string;
};
declare type SerialLocation = {
    class: 'Location';
    pitch: number;
    world: string;
    x: number;
    y: number;
    yaw: number;
    z: number;
};
declare type SerialNBTTag = {
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
declare type SerialNBTTagCompound = {
    class: 'NBTTagCompound';
    value: {
        [x: string]: SerialNBTTag;
    };
};
declare type SerialVector = {
    class: 'Vector';
    x: number;
    y: number;
    z: number;
};
export declare function boundingBox(arg1: HasBoundingBox): any;
export declare function data(arg1: IsContainer, arg2?: string): any;
export declare function dist(arg1: HasVector, arg2: HasVector, arg3?: boolean): number;
export declare function drop(arg1: HasLocation, arg2: HasItemStack, arg3?: boolean): void;
export declare function item(options: ItemOptions): any;
export declare function itemStack(arg1: HasItemStack): any;
export declare function location(arg1: any): any;
export declare function meta<X>(item: obiItemStack, modifier: (meta: obimItemMeta) => X): X;
export declare const parse: MantleParse;
export declare function player(arg1: string): any;
export declare function select(arg1?: string, arg2?: obcCommandSender): any[];
export declare const serialize: MantleSerialize;
export declare function vector(arg1: HasVector): any;
export declare class Interface {
    player: obePlayer;
    options: InterfaceOptions;
    inventory: obiInventory;
    parent?: Interface;
    constructor(player: obePlayer, options: InterfaceOptions, parent?: Interface);
    get rows(): 1 | 2 | 3 | 4 | 5 | 6;
    set rows(value: 1 | 2 | 3 | 4 | 5 | 6);
    get title(): string;
    set title(value: string);
    get items(): {
        [x: number]: {
            item: any;
            action?: InterfaceAction;
        };
    };
    set items(value: {
        [x: number]: {
            item: any;
            action?: InterfaceAction;
        };
    });
    put(index?: number): this;
    generate(): this;
    show(): this;
    refresh(): void;
    item(index: number, input?: InterfaceItem): {
        item: any;
        action?: InterfaceAction;
    };
    action(index: number, input?: InterfaceAction): InterfaceAction;
    child(options: InterfaceOptions): Interface;
}
export {};
