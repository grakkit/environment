import '@grakkit/types';

declare module '@grakkit/types' {
   export class nmslAbilitiesListener extends jlObject {
      constructor ();
      static listener (packet: nmsnpcpClientPlayerAbilitiesPacket, player: nmsePlayer): void;
   }
   /**A Batch which can be used when changes are required across chunk borders,  but the changes do not need any translation. If translation is required,  use a RelativeBlockBatch instead.    Coordinates are relative to the world origin.*/
   export class nmsibAbsoluteBlockBatch extends jlObject implements nmsibBatch<jlRunnable> {
      constructor ();
      constructor (options: nmsibBatchOption);
      /**Applies this batch to the given instance.*/
      apply (instance: nmsiInstance, callback: jlRunnable): nmsibAbsoluteBlockBatch;
      /**Applies this batch to the given instance, and execute the callback depending on safeCallback.*/
      apply (instance: nmsiInstance, callback: jlRunnable, safeCallback: boolean): nmsibAbsoluteBlockBatch;
      /**Blocks the current thread until the batch is ready to be applied.*/
      awaitReady (): void;
      /**Removes all block data from this batch.*/
      clear (): void;
      /**Gets if the batch is ready to be applied to an instance.*/
      isReady (): boolean;
      /**Sets a CustomBlock at a position with a custom state id.*/
      setSeparateBlocks (x: number, y: number, z: number, blockStateId: number, customBlockId: number, data: nmsdData): void;
      /**Applies this batch to the given instance, and execute the callback immediately when the  blocks have been applied, in an unknown thread.*/
      unsafeApply (instance: nmsiInstance, callback: jlRunnable): nmsibAbsoluteBlockBatch;
   }
   export class nmsemaAbstractArrowMeta extends nmsemEntityMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getPiercingLevel (): number;
      isCritical (): boolean;
      isNoClip (): boolean;
      setCritical (value: boolean): void;
      setNoClip (value: boolean): void;
      setPiercingLevel (value: number): void;
   }
   export class nmsemwfAbstractFishMeta extends nmsemwWaterAnimalMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      isFromBucket (): boolean;
      setFromBucket (value: boolean): void;
   }
   export class nmsemgAbstractGolemMeta extends nmsemPathfinderMobMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   export class nmsemaAbstractHorseMeta extends nmsemaAnimalMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getOwner (): juUUID;
      isEating (): boolean;
      isHasBred (): boolean;
      isMouthOpen (): boolean;
      isRearing (): boolean;
      isSaddled (): boolean;
      isTamed (): boolean;
      setEating (value: boolean): void;
      setHasBred (value: boolean): void;
      setMouthOpen (value: boolean): void;
      setOwner (value: juUUID): void;
      setRearing (value: boolean): void;
      setSaddled (value: boolean): void;
      setTamed (value: boolean): void;
   }
   export class nmsemmrAbstractIllagerMeta extends nmsemmrRaiderMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   /**Represents an inventory where items can be modified\/retrieved.*/
   export class nmsiAbstractInventory extends jlObject implements nmsiInventoryClickHandler, nmsdDataContainer {
      constructor (size: number);
      /**Adds a new InventoryCondition to this inventory.*/
      addInventoryCondition (inventoryCondition: nmsicInventoryCondition): void;
      addItemStack (itemStack: nmsiItemStack): boolean;
      /**Adds an ItemStack to the inventory and sends relevant update to the viewer(s).*/
      addItemStack<T> (itemStack: nmsiItemStack, option: nmsiTransactionOption<T>): T;
      /**Adds ItemStacks to the inventory and sends relevant updates to the viewer(s).*/
      addItemStacks<T> (itemStacks: juList<nmsiItemStack>, option: nmsiTransactionOption<T>): juList<T>;
      /**Clears the inventory and send relevant update to the viewer(s).*/
      clear (): void;
      /**Places all the items of itemStacks into the internal array.*/
      copyContents (itemStacks: nmsiItemStack[]): void;
      /**Gets the Data of this container.*/
      getData (): nmsdData;
      /**Gets the size of the "inner inventory" (which includes only "usable" slots).*/
      getInnerSize (): number;
      /**Gets all the InventoryCondition of this inventory.*/
      getInventoryConditions (): juList<nmsicInventoryCondition>;
      /**Gets the ItemStack at the specified slot.*/
      getItemStack (slot: number): nmsiItemStack;
      /**Gets all the ItemStack in the inventory.*/
      getItemStacks (): nmsiItemStack[];
      /**Gets the size of the inventory.*/
      getSize (): number;
      processItemStack<T> (itemStack: nmsiItemStack, type: nmsiTransactionType, option: nmsiTransactionOption<T>): T;
      processItemStacks<T> (itemStacks: juList<nmsiItemStack>, type: nmsiTransactionType, option: nmsiTransactionOption<T>): juList<T>;
      replaceItemStack (slot: number, operator: jufUnaryOperator<nmsiItemStack>): void;
      safeItemInsert (slot: number, itemStack: nmsiItemStack): void;
      /**Sets the Data of this container.*/
      setData (data: nmsdData): void;
      /**Sets an ItemStack at the specified slot and send relevant update to the viewer(s).*/
      setItemStack (slot: number, itemStack: nmsiItemStack): void;
      /**Takes an ItemStack from the inventory and sends relevant update to the viewer(s).*/
      takeItemStack<T> (itemStack: nmsiItemStack, option: nmsiTransactionOption<T>): T;
      /**Takes ItemStacks from the inventory and sends relevant updates to the viewer(s).*/
      takeItemStacks<T> (itemStacks: juList<nmsiItemStack>, option: nmsiTransactionOption<T>): juList<T>;
      update (): void;
   }
   export class nmsemmAbstractMinecartContainerMeta extends nmsemmAbstractMinecartMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   export class nmsemmAbstractMinecartMeta extends nmsemEntityMeta implements nmsemObjectDataProvider {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getCustomBlockIdAndDamage (): number;
      getCustomBlockYPosition (): number;
      getShakingDirection (): number;
      getShakingMultiplier (): number;
      getShakingPower (): number;
      requiresVelocityPacketAtSpawn (): boolean;
      setCustomBlockIdAndDamage (value: number): void;
      setCustomBlockYPosition (value: number): void;
      setShakingDirection (value: number): void;
      setShakingMultiplier (value: number): void;
      setShakingPower (value: number): void;
   }
   export class nmsemmsAbstractSkeletonMeta extends nmsemmMonsterMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   export class nmsemvAbstractVillagerMeta extends nmsemAgeableMobMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getHeadShakeTimer (): number;
      setHeadShakeTimer (value: number): void;
   }
   export class nmsnpspAcknowledgePlayerDiggingPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export interface nmsaAcquirable<T> {
      /**Async version of sync(Consumer).*/
      async (consumer: jufConsumer<T>): void;
      /**Gets all the entities being ticked in the current thread.*/
      static currentEntities (): jusStream<nmseEntity>;
      /**Gets the time spent acquiring since last tick.*/
      static getAcquiringTime (): number;
      /**Gets the Acquirable.Handler of this acquirable element,  containing the currently linked thread.*/
      getHandler (): nmsaAHandler;
      /**Retrieves the acquirable value if and only if the element  is already present\/ticked in the current thread.*/
      local (): juOptional<T>;
      /**Returns a new Acquired object which will be locked to the current thread.*/
      lock (): nmsaAcquired<T>;
      /**Creates a new Acquirable object.*/
      static of<T> (value: T): nmsaAcquirable<T>;
      /**Mostly for internal use, external calls are unrecommended as they could lead  to unexpected behavior.*/
      static refreshEntries (entries: juCollection<nmstTChunkEntry>): void;
      /**Resets getAcquiringTime().*/
      static resetAcquiringTime (): void;
      /**Locks the acquirable element, execute consumer synchronously and unlock the thread.*/
      sync (consumer: jufConsumer<T>): void;
      /**Unwrap the contained object unsafely.*/
      unwrap (): T;
   }
   export class nmsaAHandler extends jlObject {
      constructor ();
      getChunkEntry (): nmstTChunkEntry;
      getTickThread (): nmstTickThread;
      refreshChunkEntry (chunkEntry: nmstTChunkEntry): void;
   }
   export class nmsaAcquirableCollection<E> extends jlObject implements juCollection<nmsaAcquirable<E>> {
      constructor (acquirableCollection: juCollection<nmsaAcquirable<E>>);
      acquireAsync (consumer: jufConsumer<E>): void;
      acquireSync (consumer: jufConsumer<E>): void;
      add (eAcquirable: nmsaAcquirable<E>): boolean;
      addAll (c: juCollection<nmsaAcquirable<E>>): boolean;
      clear (): void;
      contains (o: jlObject): boolean;
      containsAll (c: juCollection<any>): boolean;
      isEmpty (): boolean;
      iterator (): juIterator<nmsaAcquirable<E>>;
      remove (o: jlObject): boolean;
      removeAll (c: juCollection<any>): boolean;
      retainAll (c: juCollection<any>): boolean;
      /**Creates*/
      static retrieveOptionalThreadMap<T> (collection: juCollection<nmsaAcquirable<T>>, currentThread: jlThread, consumer: jufConsumer<T>): juMap<nmstTickThread,juList<T>>;
      size (): number;
      toArray (): jlObject[];
      toArray<T> (a: T[]): T[];
      unwrap (): jusStream<E>;
   }
   export class nmsaAcquired<T> extends jlObject {
      get (): T;
      static local<T> (value: T): nmsaAcquired<T>;
      static locked<T> (acquirable: nmsaAcquirable<T>): nmsaAcquired<T>;
      unlock (): void;
   }
   /**Called by an Instance when an entity is added to it.  Can be used attach data.*/
   export class nmseiAddEntityToInstanceEvent extends nmseInstanceEvent implements nmseCancellableEvent {
      constructor (instance: nmsiInstance, entity: nmseEntity);
      /**Entity being added.*/
      getEntity (): nmseEntity;
      /**Gets if the Event should be cancelled or not.*/
      isCancelled (): boolean;
      /**Marks the Event as cancelled or not.*/
      setCancelled (cancel: boolean): void;
   }
   /**Represents an advancement located in an AdvancementTab.    All fields are dynamic, changing one will update the advancement in the specific AdvancementTab.*/
   export class nmsaAdvancement extends jlObject {
      constructor (title: nkatComponent, description: nkatComponent, icon: nmsiMaterial, frameType: nmsaFrameType, x: number, y: number);
      constructor (title: nkatComponent, description: nkatComponent, icon: nmsiItemStack, frameType: nmsaFrameType, x: number, y: number);
      constructor (title: nmscJsonMessage, description: nmscJsonMessage, icon: nmsiMaterial, frameType: nmsaFrameType, x: number, y: number);
      constructor (title: nmscJsonMessage, description: nmscJsonMessage, icon: nmsiItemStack, frameType: nmsaFrameType, x: number, y: number);
      /**Gets the description of the advancement.*/
      getDescription (): nkatComponent;
      /**Gets the advancement frame type.*/
      getFrameType (): nmsaFrameType;
      /**Gets the advancement icon.*/
      getIcon (): nmsiItemStack;
      /**Gets the identifier of this advancement, used to register the advancement, use it as a parent and to retrieve it later  in the AdvancementTab.*/
      getIdentifier (): string;
      /**Gets the advancement parent.*/
      getParent (): nmsaAdvancement;
      /**Gets the advancement tab linked to this advancement.*/
      getTab (): nmsaAdvancementTab;
      /**Gets the title of the advancement.*/
      getTitle (): nkatComponent;
      /**Gets the packet used to add this advancement to the already existing tab.*/
      getUpdatePacket (): nmsnpspAdvancementsPacket;
      /**Gets the X position of this advancement.*/
      getX (): number;
      /**Gets the Y position of this advancement.*/
      getY (): number;
      /**Gets if this advancement has a toast.*/
      hasToast (): boolean;
      /**Gets if the advancement is achieved.*/
      isAchieved (): boolean;
      isHidden (): boolean;
      /**Makes the advancement achieved.*/
      setAchieved (achieved: boolean): nmsaAdvancement;
      /**Sets the background.*/
      setBackground (background: string): void;
      /**Changes the description title.*/
      setDescription (description: nkatComponent): void;
      /**Changes the advancement frame type.*/
      setFrameType (frameType: nmsaFrameType): void;
      setHidden (hidden: boolean): nmsaAdvancement;
      /**Changes the advancement icon.*/
      setIcon (icon: nmsiItemStack): void;
      /**Changes the advancement identifier.*/
      setIdentifier (identifier: string): void;
      setParent (parent: nmsaAdvancement): void;
      setTab (tab: nmsaAdvancementTab): void;
      /**Changes the advancement title.*/
      setTitle (title: nkatComponent): void;
      /**Changes this advancement X coordinate.*/
      setX (x: number): void;
      /**Changes this advancement Y coordinate.*/
      setY (y: number): void;
      /**Makes this argument a toast.*/
      showToast (toast: boolean): nmsaAdvancement;
      toDisplayData (): nmsnpspADisplayData;
      /**Converts this advancement to an AdvancementsPacket.AdvancementMapping.*/
      toMapping (): nmsnpspAAdvancementMapping;
      toProgressMapping (): nmsnpspAProgressMapping;
      /**Sends update to all tab viewers if one of the advancement value changes.*/
      update (): void;
      updateCriteria (): void;
   }
   export class nmsaAdvancementAction extends jlEnum<nmsaAdvancementAction> {
      static CLOSED_SCREEN: nmsaAdvancementAction;
      static OPENED_TAB: nmsaAdvancementAction;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsaAdvancementAction;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsaAdvancementAction[];
   }
   /**Used to manage all the registered AdvancementTab.    Use createTab(String, AdvancementRoot) to create a tab with the appropriate AdvancementRoot.*/
   export class nmsaAdvancementManager extends jlObject {
      constructor ();
      /**Creates a new AdvancementTab with a single AdvancementRoot.*/
      createTab (rootIdentifier: string, root: nmsaAdvancementRoot): nmsaAdvancementTab;
      /**Gets an advancement tab by its root identifier.*/
      getTab (rootIdentifier: string): nmsaAdvancementTab;
      /**Gets all the created AdvancementTab.*/
      getTabs (): juCollection<nmsaAdvancementTab>;
   }
   /**Represents an Advancement which is the root of an AdvancementTab.  Every tab requires one since advancements needs to be linked to a parent.    The difference between this and an Advancement is that the root is responsible for the tab background.*/
   export class nmsaAdvancementRoot extends nmsaAdvancement {
      constructor (title: nkatComponent, description: nkatComponent, icon: nmsiItemStack, frameType: nmsaFrameType, x: number, y: number, background: string);
      constructor (title: nkatComponent, description: nkatComponent, icon: nmsiMaterial, frameType: nmsaFrameType, x: number, y: number, background: string);
      constructor (title: nmscJsonMessage, description: nmscJsonMessage, icon: nmsiItemStack, frameType: nmsaFrameType, x: number, y: number, background: string);
      constructor (title: nmscJsonMessage, description: nmscJsonMessage, icon: nmsiMaterial, frameType: nmsaFrameType, x: number, y: number, background: string);
   }
   export class nmsnpspAdvancementsPacket extends jlObject implements nmsnpsComponentHoldingServerPacket {
      constructor ();
      /**Gets the components held by this object.*/
      components (): juCollection<nkatComponent>;
      /**Returns a copy of this object.*/
      copyWithOperator (operator: jufUnaryOperator<nkatComponent>): nmsnpsServerPacket;
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspAAdvancement extends jlObject implements nmsubWriteable, nmsubReadable {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   /**AdvancementMapping maps the namespaced ID to the Advancement.*/
   export class nmsnpspAAdvancementMapping extends jlObject implements nmsubWriteable, nmsubReadable {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspAAdvancementProgress extends jlObject implements nmsubWriteable, nmsubReadable {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspACriteria extends jlObject implements nmsubWriteable, nmsubReadable {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspACriterionProgress extends jlObject implements nmsubWriteable, nmsubReadable {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspADisplayData extends jlObject implements nmsubWriteable, nmsubReadable {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspAProgressMapping extends jlObject implements nmsubWriteable, nmsubReadable {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspARequirement extends jlObject implements nmsubWriteable, nmsubReadable {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   /**Represents a tab which can be shared between multiple players. Created using AdvancementManager.createTab(String, AdvancementRoot).    Each tab requires a root advancement and all succeeding advancements need to have a parent in the tab.  You can create a new advancement using createAdvancement(String, Advancement, Advancement).    Be sure to use addViewer(Player) and removeViewer(Player) to control which players can see the tab.  (all viewers will see the same tab, with the same amount of validated advancements etc... so shared).*/
   export class nmsaAdvancementTab extends jlObject implements nmsViewable {
      constructor (rootIdentifier: string, root: nmsaAdvancementRoot);
      /**Adds a viewer.*/
      addViewer (player: nmsePlayer): boolean;
      /**Creates and add an advancement into this tab.*/
      createAdvancement (identifier: string, advancement: nmsaAdvancement, parent: nmsaAdvancement): void;
      /**Builds the packet which build the whole advancement tab.*/
      createPacket (): nmsnpspAdvancementsPacket;
      /**Gets the root advancement of this tab.*/
      getRoot (): nmsaAdvancementRoot;
      /**Gets all the tabs of a viewer.*/
      static getTabs (player: nmsePlayer): juSet<nmsaAdvancementTab>;
      /**Gets all the viewers of this viewable element.*/
      getViewers (): juSet<nmsePlayer>;
      /**Removes a viewer.*/
      removeViewer (player: nmsePlayer): boolean;
   }
   /**Called when a Player opens the advancement screens or switch the tab  and when he closes the screen.*/
   export class nmsepAdvancementTabEvent extends nmsePlayerEvent {
      constructor (player: nmsePlayer, action: nmsaAdvancementAction, tabId: string);
      /**Gets the action.*/
      getAction (): nmsaAdvancementAction;
      /**Gets the tab id.*/
      getTabId (): string;
   }
   export class nmslAdvancementTabListener extends jlObject {
      constructor ();
      static listener (packet: nmsnpcpClientAdvancementTabPacket, player: nmsePlayer): void;
   }
   export class nmsuaAdvancementUtils extends jlObject {
      /**Gets an AdvancementsPacket which remove the specified identifiers.*/
      static getRemovePacket (identifiers: string[]): nmsnpspAdvancementsPacket;
   }
   /**Utility methods to convert adventure enums to their packet values.*/
   export class nmsaAdventurePacketConvertor extends jlObject {
      constructor ();
      /**Creates an entity sound packet from an Adventure sound.*/
      static createEntitySoundPacket (sound: nkasSound, entity: nmseEntity): nmsnpsServerPacket;
      /**Creates a sound packet from a sound and a location.*/
      static createSoundPacket (sound: nkasSound, x: number, y: number, z: number): nmsnpsServerPacket;
      /**Creates a sound stop packet from a sound stop.*/
      static createSoundStopPacket (stop: nkasSoundStop): nmsnpsServerPacket;
      /**Gets the int value of a boss bar color.*/
      static getBossBarColorValue (color: nkabBColor): number;
      /**Gets the byte value of a collection of boss bar flags.*/
      static getBossBarFlagValue (flags: juCollection<nkabBFlag>): number;
      /**Gets the int value of a boss bar overlay.*/
      static getBossBarOverlayValue (overlay: nkabBOverlay): number;
      /**Gets the int value from a named text color.*/
      static getNamedTextColorValue (color: nkatfNamedTextColor): number;
      /**Gets the int value of a sound source.*/
      static getSoundSourceValue (source: nkasSSource): number;
   }
   /**Manager class for handling Adventure serialization. By default AdventureSerializer will simply  serialize components to Strings using GsonComponentSerializer. However, AdventureSerializer  class can be used to change the way text is serialized. For example, a pre-JSON  implementation of Minestom could change AdventureSerializer to the plain component serializer.    This manager also performs translation on all messages and the serialize  method should be used when converting Components into strings. This allows for  messages with TranslatableComponent to be automatically translated into the locale  of specific players, or other elements which implement Localizable. To add your  own translations, use GlobalTranslator.addSource(Translator) with a  TranslationRegistry or your own implementation of Translator.*/
   export class nmsaAdventureSerializer extends jlObject {
      /**Checks if any of a series of components are translatable server-side.*/
      static areAnyTranslatable (components: juCollection<nkatComponent>): boolean;
      /**Gets the default locale used to translate TranslatableComponent if, when  translate(Component, Localizable) is called with a localizable that  does not have a locale.*/
      static getDefaultLocale (): juLocale;
      /**Gets the root serializer that is used to convert components into strings.*/
      static getSerializer (): jufFunction<nkatComponent,string>;
      /**Gets the global translator object used by AdventureSerializer manager.*/
      static getTranslator (): nkatGlobalTranslator;
      /**Checks if a component can be translated server-side.*/
      static isTranslatable (component: nkatComponent): boolean;
      /**Serializes a component into a string using getSerializer().*/
      static serialize (component: nkatComponent): string;
      /**Sets the default locale used to translate TranslatableComponent if, when  translate(Component, Localizable) is called with a localizable that  does not have a locale.*/
      static setDefaultLocale (defaultLocale: juLocale): void;
      /**Sets the root serializer that is used to convert components into strings.*/
      static setSerializer (serializer: jufFunction<nkatComponent,string>): void;
      /**Prepares a component for serialization.*/
      static translate (component: nkatComponent, locale: juLocale): nkatComponent;
      /**Prepares a component for serialization.*/
      static translate (component: nkatComponent, localizable: nmsaLocalizable): nkatComponent;
      /**Prepares and then serializes a component.*/
      static translateAndSerialize (component: nkatComponent, locale: juLocale): string;
      /**Prepares and then serializes a component.*/
      static translateAndSerialize (component: nkatComponent, localizable: nmsaLocalizable): string;
   }
   export interface nmsetAgeable {
      isBaby (): boolean;
      setBaby (value: boolean): void;
   }
   export class nmsetAgeableCreature extends nmseEntityCreature implements nmsetAgeable {
      constructor (entityType: nmseEntityType, spawnPosition: nmsuPosition);
      constructor (entityType: nmseEntityType, spawnPosition: nmsuPosition, instance: nmsiInstance);
      /**Gets the entity eye height.*/
      getEyeHeight (): number;
      isBaby (): boolean;
      setBaby (value: boolean): void;
   }
   export class nmsemAgeableMobMeta extends nmsemPathfinderMobMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      isBaby (): boolean;
      setBaby (value: boolean): void;
   }
   export class nmsgleAlternativesEntry extends nmsglLEntry {
      constructor (type: nmsgleAlternativesType, children: juList<nmsglLEntry>, weight: number, quality: number, conditions: juList<nmsgCondition>);
      generate (output: juList<nmsiItemStack>, arguments: nmsdData): void;
   }
   /**minecraft:alternatives*/
   export class nmsgleAlternativesType extends jlObject implements nmsglLootTableEntryType {
      constructor ();
      create (lootTableManager: nmsglLootTableManager, name: string, conditions: juList<nmsgCondition>, children: juList<nmsglLEntry>, expand: boolean, functions: juList<nmsglLootTableFunction>, weight: number, quality: number): nmsglLEntry;
   }
   export class nmsemaAmbientCreatureMeta extends nmsemMobMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   export interface nmsetAnimal extends nmsetAgeable {}
   export class nmsemaAnimalMeta extends nmsemAgeableMobMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   export class nmslAnimationListener extends jlObject {
      constructor ();
      static animationListener (packet: nmsnpcpClientAnimationPacket, player: nmsePlayer): void;
   }
   export class nmsgleAnotherLootTableEntry extends nmsglLEntry {
      constructor (type: nmsgleAnotherLootTableType, table: nmsglLootTable, weight: number, quality: number, conditions: juList<nmsgCondition>);
      generate (output: juList<nmsiItemStack>, arguments: nmsdData): void;
   }
   /**Allows to sample from a different loot table   minecraft:loot_table*/
   export class nmsgleAnotherLootTableType extends jlObject implements nmsglLootTableEntryType {
      constructor ();
      create (lootTableManager: nmsglLootTableManager, name: string, conditions: juList<nmsgCondition>, children: juList<nmsglLEntry>, expand: boolean, functions: juList<nmsglLootTableFunction>, weight: number, quality: number): nmsglLEntry;
   }
   export class nmsitAnvilInventory extends nmsiInventory {
      constructor (title: string);
      /**Gets the anvil repair cost.*/
      getRepairCost (): number;
      /**Sets the anvil repair cost.*/
      setRepairCost (cost: number): void;
   }
   export class nmsemoAreaEffectCloudMeta extends nmsemEntityMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getColor (): number;
      getRadius (): number;
      isSinglePoint (): boolean;
      setColor (value: number): void;
      setRadius (value: number): void;
      setSinglePoint (value: boolean): void;
   }
   /**An argument is meant to be parsed when added into a Command's syntax with Command.addSyntax(CommandExecutor, Argument[]).    You can create your own with your own special conditions.    Arguments are parsed using parse(String).*/
   export class nmscbaArgument<T> extends jlObject {
      constructor (id: string);
      constructor (id: string, allowSpace: boolean);
      constructor (id: string, allowSpace: boolean, useRemaining: boolean);
      /**Gets if the argument can contain space.*/
      allowSpace (): boolean;
      equals (o: jlObject): boolean;
      /**Gets the ArgumentCallback to check if the argument-specific conditions are validated or not.*/
      getCallback (): nmscbArgumentCallback;
      getDefaultValue (): jufSupplier<T>;
      /**Gets the ID of the argument, showed in-game above the chat bar  and used to retrieve the data when the command is parsed in CommandContext.*/
      getId (): string;
      /**Gets the suggestion callback of the argument*/
      getSuggestionCallback (): nmscbsSuggestionCallback;
      /**Gets if the argument has any error callback.*/
      hasErrorCallback (): boolean;
      hashCode (): number;
      /**Check if the argument has a suggestion.*/
      hasSuggestion (): boolean;
      /**Gets if this argument is 'optional'.*/
      isOptional (): boolean;
      /**Maps this argument's output to another result.*/
      map<O> (mapper: nmscbaAMapper<T,O>): nmscbaArgumentMap<T,O>;
      /**Parses the given input, and throw an ArgumentSyntaxException  if the input cannot be convert to T*/
      parse (input: string): T;
      /**Turns the argument into a list of nodes for command dispatching.*/
      processNodes (nodeMaker: nmscbNodeMaker, executable: boolean): void;
      /**Sets the ArgumentCallback.*/
      setCallback (callback: nmscbArgumentCallback): void;
      /**Sets the default value supplier of the argument.*/
      setDefaultValue (defaultValue: jufSupplier<T>): nmscbaArgument<T>;
      /**Sets the default value supplier of the argument.*/
      setDefaultValue (defaultValue: T): nmscbaArgument<T>;
      /**Sets the suggestion callback (for dynamic tab completion) of this argument.*/
      setSuggestionCallback (suggestionCallback: nmscbsSuggestionCallback): nmscbaArgument<T>;
      /**Builds an argument node.*/
      static simpleArgumentNode (argument: nmscbaArgument<any>, executable: boolean, redirect: boolean, suggestion: boolean): nmsnpspDNode;
      /**Gets if the argument always use all the remaining characters.*/
      useRemaining (): boolean;
   }
   export class nmscbamrArgumentBlockState extends nmscbamrArgumentRegistry<nmsibBlock> {
      constructor (id: string);
      getRegistry (value: string): nmsibBlock;
      /**Turns the argument into a list of nodes for command dispatching.*/
      processNodes (nodeMaker: nmscbNodeMaker, executable: boolean): void;
      toString (): string;
   }
   /**Represents a boolean value.    Example: true*/
   export class nmscbaArgumentBoolean extends nmscbaArgument<jlBoolean> {
      constructor (id: string);
      /**Parses the given input, and throw an ArgumentSyntaxException  if the input cannot be convert to T*/
      parse (input: string): boolean;
      /**Turns the argument into a list of nodes for command dispatching.*/
      processNodes (nodeMaker: nmscbNodeMaker, executable: boolean): void;
      toString (): string;
   }
   /**Callback executed when an error is found within the Argument.*/
   export interface nmscbArgumentCallback {
      /**Executed when an error is found.*/
      apply (sender: nmscCommandSender, exception: nmscbeArgumentSyntaxException): void;
   }
   /**Represents an argument which will give you a Style containing the colour or no  colour if the argument was reset.    Example: red, white, reset*/
   export class nmscbamArgumentColor extends nmscbaArgument<nkatfStyle> {
      constructor (id: string);
      /**Parses the given input, and throw an ArgumentSyntaxException  if the input cannot be convert to T*/
      parse (input: string): nkatfStyle;
      /**Turns the argument into a list of nodes for command dispatching.*/
      processNodes (nodeMaker: nmscbNodeMaker, executable: boolean): void;
      toString (): string;
   }
   export class nmscbaArgumentCommand extends nmscbaArgument<nmscbCommandResult> {
      constructor (id: string);
      getShortcut (): string;
      isOnlyCorrect (): boolean;
      /**Parses the given input, and throw an ArgumentSyntaxException  if the input cannot be convert to T*/
      parse (input: string): nmscbCommandResult;
      /**Turns the argument into a list of nodes for command dispatching.*/
      processNodes (nodeMaker: nmscbNodeMaker, executable: boolean): void;
      setOnlyCorrect (onlyCorrect: boolean): nmscbaArgumentCommand;
      setShortcut (shortcut: string): nmscbaArgumentCommand;
      toString (): string;
   }
   export class nmscbamArgumentComponent extends nmscbaArgument<nkatComponent> {
      constructor (id: string);
      /**Parses the given input, and throw an ArgumentSyntaxException  if the input cannot be convert to T*/
      parse (input: string): nkatComponent;
      /**Turns the argument into a list of nodes for command dispatching.*/
      processNodes (nodeMaker: nmscbNodeMaker, executable: boolean): void;
      toString (): string;
   }
   export class nmscbanArgumentDouble extends nmscbanArgumentNumber<jlDouble> {
      constructor (id: string);
      /**Parses the given input, and throw an ArgumentSyntaxException  if the input cannot be convert to T*/
      parse (input: string): number;
      /**Turns the argument into a list of nodes for command dispatching.*/
      processNodes (nodeMaker: nmscbNodeMaker, executable: boolean): void;
      toString (): string;
   }
   /**Represents an argument giving an Enchantment.*/
   export class nmscbamrArgumentEnchantment extends nmscbamrArgumentRegistry<nmsiEnchantment> {
      constructor (id: string);
      getRegistry (value: string): nmsiEnchantment;
      /**Turns the argument into a list of nodes for command dispatching.*/
      processNodes (nodeMaker: nmscbNodeMaker, executable: boolean): void;
      toString (): string;
   }
   /**Represents the target selector argument.  https:\/\/minecraft.gamepedia.com\/Commands#Target_selectors*/
   export class nmscbamArgumentEntity extends nmscbaArgument<nmsueEntityFinder> {
      constructor (id: string);
      isOnlyPlayers (): boolean;
      isOnlySingleEntity (): boolean;
      onlyPlayers (onlyPlayers: boolean): nmscbamArgumentEntity;
      /**Parses the given input, and throw an ArgumentSyntaxException  if the input cannot be convert to T*/
      parse (input: string): nmsueEntityFinder;
      /**Turns the argument into a list of nodes for command dispatching.*/
      processNodes (nodeMaker: nmscbNodeMaker, executable: boolean): void;
      singleEntity (singleEntity: boolean): nmscbamArgumentEntity;
      static staticParse (input: string, onlySingleEntity: boolean, onlyPlayers: boolean): nmsueEntityFinder;
      toString (): string;
   }
   /**Represents an argument giving an EntityType.*/
   export class nmscbamrArgumentEntityType extends nmscbamrArgumentRegistry<nmseEntityType> {
      constructor (id: string);
      getRegistry (value: string): nmseEntityType;
      /**Turns the argument into a list of nodes for command dispatching.*/
      processNodes (nodeMaker: nmscbNodeMaker, executable: boolean): void;
      toString (): string;
   }
   export class nmscbaArgumentEnum<E extends Enum> extends nmscbaArgument<E> {
      constructor (id: string, enumClass: jlClass<E>);
      /**Parses the given input, and throw an ArgumentSyntaxException  if the input cannot be convert to T*/
      parse (input: string): E;
      /**Turns the argument into a list of nodes for command dispatching.*/
      processNodes (nodeMaker: nmscbNodeMaker, executable: boolean): void;
      setFormat (format: nmscbaAFormat): nmscbaArgumentEnum<E>;
      toString (): string;
   }
   export class nmscbaAFormat extends jlEnum<nmscbaAFormat> {
      static DEFAULT: nmscbaAFormat;
      static LOWER_CASED: nmscbaAFormat;
      static UPPER_CASED: nmscbaAFormat;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmscbaAFormat;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmscbaAFormat[];
   }
   export class nmscbanArgumentFloat extends nmscbanArgumentNumber<jlFloat> {
      constructor (id: string);
      /**Parses the given input, and throw an ArgumentSyntaxException  if the input cannot be convert to T*/
      parse (input: string): jlFloat;
      /**Turns the argument into a list of nodes for command dispatching.*/
      processNodes (nodeMaker: nmscbNodeMaker, executable: boolean): void;
      toString (): string;
   }
   /**Represents an argument which will give you an FloatRange.    Example: ..3, 3.., 5..10, 15*/
   export class nmscbamArgumentFloatRange extends nmscbamArgumentRange<nmsumFloatRange> {
      constructor (id: string);
      /**Parses the given input, and throw an ArgumentSyntaxException  if the input cannot be convert to T*/
      parse (input: string): nmsumFloatRange;
      /**Turns the argument into a list of nodes for command dispatching.*/
      processNodes (nodeMaker: nmscbNodeMaker, executable: boolean): void;
      toString (): string;
   }
   export class nmscbaArgumentGroup extends nmscbaArgument<nmscbCommandContext> {
      constructor (id: string, ...group: nmscbaArgument<any>[]);
      /**Parses the given input, and throw an ArgumentSyntaxException  if the input cannot be convert to T*/
      parse (input: string): nmscbCommandContext;
      /**Turns the argument into a list of nodes for command dispatching.*/
      processNodes (nodeMaker: nmscbNodeMaker, executable: boolean): void;
   }
   export class nmscbanArgumentInteger extends nmscbanArgumentNumber<jlInteger> {
      constructor (id: string);
      /**Parses the given input, and throw an ArgumentSyntaxException  if the input cannot be convert to T*/
      parse (input: string): jlInteger;
      /**Turns the argument into a list of nodes for command dispatching.*/
      processNodes (nodeMaker: nmscbNodeMaker, executable: boolean): void;
      toString (): string;
   }
   /**Represents an argument which will give you an IntRange.    Example: ..3, 3.., 5..10, 15*/
   export class nmscbamArgumentIntRange extends nmscbamArgumentRange<nmsumIntRange> {
      constructor (id: string);
      /**Parses the given input, and throw an ArgumentSyntaxException  if the input cannot be convert to T*/
      parse (input: string): nmsumIntRange;
      /**Turns the argument into a list of nodes for command dispatching.*/
      processNodes (nodeMaker: nmscbNodeMaker, executable: boolean): void;
      static staticParse (input: string): nmsumIntRange;
      toString (): string;
   }
   /**Argument which can be used to retrieve an ItemStack from its material and with NBT data.    It is the same type as the one used in the \/give command.    Example: diamond_sword{display:{Name:"{\"text\":\"Sword of Power\"}"}}*/
   export class nmscbamArgumentItemStack extends nmscbaArgument<nmsiItemStack> {
      constructor (id: string);
      /**Parses the given input, and throw an ArgumentSyntaxException  if the input cannot be convert to T*/
      parse (input: string): nmsiItemStack;
      /**Turns the argument into a list of nodes for command dispatching.*/
      processNodes (nodeMaker: nmscbNodeMaker, executable: boolean): void;
      static staticParse (input: string): nmsiItemStack;
      toString (): string;
   }
   export class nmscbaArgumentLiteral extends nmscbaArgument<jlString> {
      constructor (id: string);
      /**Parses the given input, and throw an ArgumentSyntaxException  if the input cannot be convert to T*/
      parse (input: string): string;
      /**Turns the argument into a list of nodes for command dispatching.*/
      processNodes (nodeMaker: nmscbNodeMaker, executable: boolean): void;
      toString (): string;
   }
   export class nmscbanArgumentLong extends nmscbanArgumentNumber<jlLong> {
      constructor (id: string);
      /**Parses the given input, and throw an ArgumentSyntaxException  if the input cannot be convert to T*/
      parse (input: string): jlLong;
      /**Turns the argument into a list of nodes for command dispatching.*/
      processNodes (nodeMaker: nmscbNodeMaker, executable: boolean): void;
   }
   export class nmscbaArgumentLoop<T> extends nmscbaArgument<juList<T>> {
      constructor (id: string, ...arguments: nmscbaArgument<T>[]);
      /**Parses the given input, and throw an ArgumentSyntaxException  if the input cannot be convert to T*/
      parse (input: string): juList<T>;
      /**Turns the argument into a list of nodes for command dispatching.*/
      processNodes (nodeMaker: nmscbNodeMaker, executable: boolean): void;
   }
   /**Represents an argument that maps an existing argument to a value.*/
   export class nmscbaArgumentMap<I,O> extends nmscbaArgument<O> {
      constructor (argument: nmscbaArgument<I>, mapper: nmscbaAMapper<I,O>);
      /**Parses the given input, and throw an ArgumentSyntaxException  if the input cannot be convert to T*/
      parse (input: string): O;
      /**Turns the argument into a list of nodes for command dispatching.*/
      processNodes (nodeMaker: nmscbNodeMaker, executable: boolean): void;
   }
   /**Represents a lambda that can turn an input into an output  that also allows the throwing of ArgumentSyntaxException*/
   export interface nmscbaAMapper<I,O> {
      /**Accepts I data from the argument and returns O output*/
      accept (i: I): O;
   }
   /**Argument used to retrieve a NBTCompound if you need key-value data.    Example: {display:{Name:"{\"text\":\"Sword of Power\"}"}}*/
   export class nmscbamArgumentNbtCompoundTag extends nmscbaArgument<org.jglrxavpok.hephaistos.nbt.NBTCompound> {
      constructor (id: string);
      /**Parses the given input, and throw an ArgumentSyntaxException  if the input cannot be convert to T*/
      parse (input: string): jhnNBTCompound;
      /**Turns the argument into a list of nodes for command dispatching.*/
      processNodes (nodeMaker: nmscbNodeMaker, executable: boolean): void;
      toString (): string;
   }
   /**Argument used to retrieve a NBT based object, can be any kind of tag like  NBTCompound, NBTList,  NBTInt, etc...    Example: {display:{Name:"{\"text\":\"Sword of Power\"}"}} or [{display:{Name:"{\"text\":\"Sword of Power\"}"}}]*/
   export class nmscbamArgumentNbtTag extends nmscbaArgument<org.jglrxavpok.hephaistos.nbt.NBT> {
      constructor (id: string);
      /**Parses the given input, and throw an ArgumentSyntaxException  if the input cannot be convert to T*/
      parse (input: string): jhnNBT;
      /**Turns the argument into a list of nodes for command dispatching.*/
      processNodes (nodeMaker: nmscbNodeMaker, executable: boolean): void;
      toString (): string;
   }
   export class nmscbanArgumentNumber<T extends Number> extends nmscbaArgument<T> {
      constructor (id: string);
      between (min: T, max: T): nmscbanArgumentNumber<T>;
      /**Gets the maximum value for this argument.*/
      getMax (): T;
      /**Gets the minimum value for this argument.*/
      getMin (): T;
      /**Creates the byteflag based on the number's min\/max existance.*/
      getNumberProperties (): number;
      getRadix (value: string): number;
      /**Gets if the argument has a maximum.*/
      hasMax (): boolean;
      /**Gets if the argument has a minimum.*/
      hasMin (): boolean;
      max (value: T): nmscbanArgumentNumber<T>;
      min (value: T): nmscbanArgumentNumber<T>;
      parseValue (value: string): string;
      removeScientificNotation (value: string): string;
   }
   export class nmscbpArgumentParser extends jlObject {
      constructor ();
      static generate (format: string): nmscbaArgument<any>[];
      static validate (argument: nmscbaArgument<any>, arguments: nmscbaArgument<any>[], argIndex: number, inputArguments: string[], inputIndex: number): nmscbpAArgumentResult;
   }
   export class nmscbpAArgumentResult extends jlObject {
      constructor ();
   }
   /**Represents an argument giving a Particle.*/
   export class nmscbamrArgumentParticle extends nmscbamrArgumentRegistry<nmspParticle> {
      constructor (id: string);
      getRegistry (value: string): nmspParticle;
      /**Turns the argument into a list of nodes for command dispatching.*/
      processNodes (nodeMaker: nmscbNodeMaker, executable: boolean): void;
      toString (): string;
   }
   /**Represents an argument giving a PotionEffect.*/
   export class nmscbamrArgumentPotionEffect extends nmscbamrArgumentRegistry<nmspPotionEffect> {
      constructor (id: string);
      getRegistry (value: string): nmspPotionEffect;
      /**Turns the argument into a list of nodes for command dispatching.*/
      processNodes (nodeMaker: nmscbNodeMaker, executable: boolean): void;
      toString (): string;
   }
   export class nmscbpArgumentQueryResult extends jlObject {
      constructor ();
   }
   /**Abstract class used by ArgumentIntRange and ArgumentFloatRange.*/
   export class nmscbamArgumentRange<T> extends nmscbaArgument<T> {
      constructor (id: string);
   }
   export class nmscbamrArgumentRegistry<T> extends nmscbaArgument<T> {
      constructor (id: string);
      getRegistry (value: string): T;
      /**Parses the given input, and throw an ArgumentSyntaxException  if the input cannot be convert to T*/
      parse (input: string): T;
   }
   /**Common interface for all the relative location arguments.*/
   export class nmscbarArgumentRelative<T> extends nmscbaArgument<T> {
      constructor (id: string, numberCount: number);
      /**Gets the amount of numbers that this relative location needs.*/
      getNumberCount (): number;
   }
   /**Represents a BlockPosition with 3 integer numbers (x;y;z) which can take relative coordinates.    Example: 5 ~ -3*/
   export class nmscbarArgumentRelativeBlockPosition extends nmscbarArgumentRelative<nmsulRelativeBlockPosition> {
      constructor (id: string);
      /**Parses the given input, and throw an ArgumentSyntaxException  if the input cannot be convert to T*/
      parse (input: string): nmsulRelativeBlockPosition;
      /**Turns the argument into a list of nodes for command dispatching.*/
      processNodes (nodeMaker: nmscbNodeMaker, executable: boolean): void;
      toString (): string;
   }
   /**Represents a Vector with 2 floating numbers (x;z) which can take relative coordinates.    Example: -1.2 ~*/
   export class nmscbarArgumentRelativeVec2 extends nmscbarArgumentRelative<nmsulRelativeVec> {
      constructor (id: string);
      /**Parses the given input, and throw an ArgumentSyntaxException  if the input cannot be convert to T*/
      parse (input: string): nmsulRelativeVec;
      /**Turns the argument into a list of nodes for command dispatching.*/
      processNodes (nodeMaker: nmscbNodeMaker, executable: boolean): void;
      toString (): string;
   }
   /**Represents a Vector with 3 floating numbers (x;y;z) which can take relative coordinates.    Example: -1.2 ~ 5*/
   export class nmscbarArgumentRelativeVec3 extends nmscbarArgumentRelative<nmsulRelativeVec> {
      constructor (id: string);
      /**Parses the given input, and throw an ArgumentSyntaxException  if the input cannot be convert to T*/
      parse (input: string): nmsulRelativeVec;
      /**Turns the argument into a list of nodes for command dispatching.*/
      processNodes (nodeMaker: nmscbNodeMaker, executable: boolean): void;
      toString (): string;
   }
   export class nmscbamArgumentResourceLocation extends nmscbaArgument<jlString> {
      constructor (id: string);
      /**Parses the given input, and throw an ArgumentSyntaxException  if the input cannot be convert to T*/
      parse (input: string): string;
      /**Turns the argument into a list of nodes for command dispatching.*/
      processNodes (nodeMaker: nmscbNodeMaker, executable: boolean): void;
      toString (): string;
   }
   /**Argument which will take a quoted string.    Example: "Hey I am a string"*/
   export class nmscbaArgumentString extends nmscbaArgument<jlString> {
      constructor (id: string);
      /**Parses the given input, and throw an ArgumentSyntaxException  if the input cannot be convert to T*/
      parse (input: string): string;
      /**Turns the argument into a list of nodes for command dispatching.*/
      processNodes (nodeMaker: nmscbNodeMaker, executable: boolean): void;
      static staticParse (input: string): string;
      toString (): string;
   }
   /**Represents an argument which will take all the remaining of the command.    Example: Hey I am a string*/
   export class nmscbaArgumentStringArray extends nmscbaArgument<jlString> {
      constructor (id: string);
      /**Parses the given input, and throw an ArgumentSyntaxException  if the input cannot be convert to T*/
      parse (input: string): string[];
      /**Turns the argument into a list of nodes for command dispatching.*/
      processNodes (nodeMaker: nmscbNodeMaker, executable: boolean): void;
      toString (): string;
   }
   /**Exception triggered when an Argument is wrongly parsed.    Retrieved in ArgumentCallback defined in Command.setArgumentCallback(ArgumentCallback, Argument).    Be aware that the message returned by Throwable.getMessage() is only here for debugging purpose,  you should refer to getErrorCode() to identify the exceptions.*/
   export class nmscbeArgumentSyntaxException extends jlException {
      constructor (message: string, input: string, errorCode: number);
      /**Gets the error code of the exception.*/
      getErrorCode (): number;
      /**Gets the problematic command input.*/
      getInput (): string;
   }
   /**Represents an argument giving a time (day\/second\/tick).    Example: 50d, 25s, 75t*/
   export class nmscbamArgumentTime extends nmscbaArgument<nmsutUpdateOption> {
      constructor (id: string);
      /**Parses the given input, and throw an ArgumentSyntaxException  if the input cannot be convert to T*/
      parse (input: string): nmsutUpdateOption;
      /**Turns the argument into a list of nodes for command dispatching.*/
      processNodes (nodeMaker: nmscbNodeMaker, executable: boolean): void;
      toString (): string;
   }
   /**Convenient class listing all the basics Argument.    Please see the specific class documentation for further info.*/
   export class nmscbaArgumentType extends jlObject {
      constructor ();
      static BlockState (id: string): nmscbamrArgumentBlockState;
      static Boolean (id: string): nmscbaArgumentBoolean;
      static Color (id: string): nmscbamArgumentColor;
      static Command (id: string): nmscbaArgumentCommand;
      static Component (id: string): nmscbamArgumentComponent;
      static Double (id: string): nmscbanArgumentDouble;
      static Enchantment (id: string): nmscbamrArgumentEnchantment;
      static Entity (id: string): nmscbamArgumentEntity;
      static EntityType (id: string): nmscbamrArgumentEntityType;
      static Enum<E extends jlEnum> (id: string, enumClass: jlClass<E>): nmscbaArgumentEnum<E>;
      static Float (id: string): nmscbanArgumentFloat;
      static FloatRange (id: string): nmscbamArgumentFloatRange;
      /**Generates arguments from a string format.*/
      static generate (format: string): nmscbaArgument<any>[];
      static Group (id: string, ...arguments: nmscbaArgument<any>[]): nmscbaArgumentGroup;
      static Integer (id: string): nmscbanArgumentInteger;
      static IntRange (id: string): nmscbamArgumentIntRange;
      static ItemStack (id: string): nmscbamArgumentItemStack;
      static Literal (id: string): nmscbaArgumentLiteral;
      static Loop<T> (id: string, ...arguments: nmscbaArgument<T>[]): nmscbaArgumentLoop<T>;
      static NBT (id: string): nmscbamArgumentNbtTag;
      static NbtCompound (id: string): nmscbamArgumentNbtCompoundTag;
      static Particle (id: string): nmscbamrArgumentParticle;
      static Potion (id: string): nmscbamrArgumentPotionEffect;
      static RelativeBlockPosition (id: string): nmscbarArgumentRelativeBlockPosition;
      static RelativeVec2 (id: string): nmscbarArgumentRelativeVec2;
      static RelativeVec3 (id: string): nmscbarArgumentRelativeVec3;
      static ResourceLocation (id: string): nmscbamArgumentResourceLocation;
      static String (id: string): nmscbaArgumentString;
      static StringArray (id: string): nmscbaArgumentStringArray;
      static Time (id: string): nmscbamArgumentTime;
      static UUID (id: string): nmscbamArgumentUUID;
      static Word (id: string): nmscbaArgumentWord;
   }
   export class nmscbamArgumentUUID extends nmscbaArgument<juUUID> {
      constructor (id: string);
      /**Parses the given input, and throw an ArgumentSyntaxException  if the input cannot be convert to T*/
      parse (input: string): juUUID;
      /**Turns the argument into a list of nodes for command dispatching.*/
      processNodes (nodeMaker: nmscbNodeMaker, executable: boolean): void;
      toString (): string;
   }
   /**Represents a single word in the command.    You can specify the valid words with from(String...) (do not abuse it or the client will not be able to join).    Example: hey*/
   export class nmscbaArgumentWord extends nmscbaArgument<jlString> {
      constructor (id: string);
      /**Used to force the use of a few precise words instead of complete freedom.*/
      from (...restrictions: string[]): nmscbaArgumentWord;
      /**Gets all the word restrictions.*/
      getRestrictions (): string[];
      /**Gets if this argument allow complete freedom in the word choice or if a list has been defined.*/
      hasRestrictions (): boolean;
      /**Parses the given input, and throw an ArgumentSyntaxException  if the input cannot be convert to T*/
      parse (input: string): string;
      /**Turns the argument into a list of nodes for command dispatching.*/
      processNodes (nodeMaker: nmscbNodeMaker, executable: boolean): void;
      toString (): string;
   }
   export class nmsemoArmorStandMeta extends nmsemLivingEntityMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getBodyRotation (): nmsuVector;
      getHeadRotation (): nmsuVector;
      getLeftArmRotation (): nmsuVector;
      getLeftLegRotation (): nmsuVector;
      getRightArmRotation (): nmsuVector;
      getRightLegRotation (): nmsuVector;
      isHasArms (): boolean;
      isHasNoBasePlate (): boolean;
      isMarker (): boolean;
      isSmall (): boolean;
      setBodyRotation (value: nmsuVector): void;
      setHasArms (value: boolean): void;
      setHasNoBasePlate (value: boolean): void;
      setHeadRotation (value: nmsuVector): void;
      setLeftArmRotation (value: nmsuVector): void;
      setLeftLegRotation (value: nmsuVector): void;
      setMarker (value: boolean): void;
      setRightArmRotation (value: nmsuVector): void;
      setRightLegRotation (value: nmsuVector): void;
      setSmall (value: boolean): void;
   }
   export class nmsuArrayUtils extends jlObject {
      static concatenateIntArrays (...arrays: number[][]): number[];
      static copyToDestination (src: number[], dest: number[]): void;
      /**Fills an array using a supplier.*/
      static fill<T> (array: T[], supplier: jufSupplier<T>): void;
      /**Gets the differences between 2 arrays.*/
      static getDifferencesBetweenArray (a: number[], b: number[]): number[];
      static removeElement (arr: jlObject[], index: number): void;
      /**Gets if two arrays share the same start until length.*/
      static sameStart<T> (array1: T[], array2: T[], length: number): boolean;
      static toArray (list: it.unimi.dsi.fastutil.numbers.IntList): number[];
   }
   export class nmsemaArrowMeta extends nmsemaAbstractArrowMeta implements nmsemObjectDataProvider, nmsemProjectileMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getColor (): number;
      getObjectData (): number;
      getShooter (): nmseEntity;
      requiresVelocityPacketAtSpawn (): boolean;
      setColor (value: number): void;
      setShooter (shooter: nmseEntity): void;
   }
   /**Called before the player initialization, it can be used to kick the player before any connection  or to change his final username\/uuid.*/
   export class nmsepAsyncPlayerPreLoginEvent extends nmsePlayerEvent {
      constructor (player: nmsePlayer, username: string, playerUuid: juUUID);
      /**Gets the player uuid.*/
      getPlayerUuid (): juUUID;
      /**Gets the player username.*/
      getUsername (): string;
      /**Changes the player uuid.*/
      setPlayerUuid (playerUuid: juUUID): void;
      /**Changes the player username.*/
      setUsername (username: string): void;
   }
   export class nmsuaAsyncUtils extends jlObject {
      constructor ();
      static runAsync (runnable: jlRunnable): jucCompletableFuture<jlVoid>;
   }
   export class nmsnpspAttachEntityPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   /**Represents a living entity attribute.*/
   export class nmsaAttribute extends jlObject {
      constructor (key: string, shareWithClient: boolean, defaultValue: number, maxValue: number);
      constructor (key: string, defaultValue: number, maxValue: number);
      /**Retrieves an attribute by its key.*/
      static fromKey (key: string): nmsaAttribute;
      /**Gets the attribute default value that should be applied.*/
      getDefaultValue (): number;
      /**Gets the attribute unique key.*/
      getKey (): string;
      /**Gets the maximum value applicable to an entity for this attribute.*/
      getMaxValue (): number;
      /**Gets whether this attribute's instances should be sent to clients.*/
      isShared (): boolean;
      /**Register this attribute.*/
      register (): nmsaAttribute;
      /**Retrieves registered attributes that are shared with the client.*/
      static sharedAttributes (): nmsaAttribute[];
      /**Retrieves all registered attributes.*/
      static values (): nmsaAttribute[];
   }
   /**Represents an instance of an attribute and its modifiers.*/
   export class nmsaAttributeInstance extends jlObject {
      constructor (attribute: nmsaAttribute, listener: jufConsumer<nmsaAttributeInstance>);
      /**Add a modifier to this instance.*/
      addModifier (modifier: nmsaAttributeModifier): void;
      /**Gets the attribute associated to this instance.*/
      getAttribute (): nmsaAttribute;
      /**The base value of this instance without modifiers*/
      getBaseValue (): number;
      /**Get the modifiers applied to this instance.*/
      getModifiers (): juCollection<nmsaAttributeModifier>;
      /**Gets the value of this instance calculated with modifiers applied.*/
      getValue (): number;
      /**Recalculate the value of this attribute instance using the modifiers.*/
      refreshCachedValue (): void;
      /**Remove a modifier from this instance.*/
      removeModifier (modifier: nmsaAttributeModifier): void;
      /**Sets the base value of this instance.*/
      setBaseValue (baseValue: number): void;
   }
   /**Represent an attribute modifier.*/
   export class nmsaAttributeModifier extends jlObject {
      constructor (name: string, amount: number, operation: nmsaAttributeOperation);
      constructor (id: juUUID, name: string, amount: number, operation: nmsaAttributeOperation);
      /**Gets the value of this modifier.*/
      getAmount (): number;
      /**Gets the id of this modifier.*/
      getId (): juUUID;
      /**Gets the name of this modifier.*/
      getName (): string;
      /**Gets the operation of this modifier.*/
      getOperation (): nmsaAttributeOperation;
   }
   export class nmsaAttributeOperation extends jlEnum<nmsaAttributeOperation> {
      static ADDITION: nmsaAttributeOperation;
      static MULTIPLY_BASE: nmsaAttributeOperation;
      static MULTIPLY_TOTAL: nmsaAttributeOperation;
      static fromId (id: number): nmsaAttributeOperation;
      getId (): number;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsaAttributeOperation;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsaAttributeOperation[];
   }
   export class nmsiaAttributeSlot extends jlEnum<nmsiaAttributeSlot> {
      static CHEST: nmsiaAttributeSlot;
      static FEET: nmsiaAttributeSlot;
      static HEAD: nmsiaAttributeSlot;
      static LEGS: nmsiaAttributeSlot;
      static MAINHAND: nmsiaAttributeSlot;
      static OFFHAND: nmsiaAttributeSlot;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsiaAttributeSlot;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsiaAttributeSlot[];
   }
   /**A generic provider of audiences or some subtype.*/
   export interface nmsaaAudienceProvider<A> {
      /**Gets all audience members.*/
      all (): A;
      /**Gets all audience members that match the given predicate.*/
      all (filter: jufPredicate<nkaaAudience>): A;
      /**Gets the console as an audience.*/
      console (): A;
      /**Gets all custom audience members stored using the given key.*/
      custom (key: net.kyori.adventure.key.Key): A;
      /**Gets all custom audience members stored using the given keyed object.*/
      custom (keyed: net.kyori.adventure.key.Keyed): A;
      /**Gets all custom audience members stored using the given keyed object that match  the given predicate.*/
      custom (keyed: net.kyori.adventure.key.Keyed, filter: jufPredicate<nkaaAudience>): A;
      /**Gets all custom audience members stored using the given key that match the  given predicate.*/
      custom (key: net.kyori.adventure.key.Key, filter: jufPredicate<nkaaAudience>): A;
      /**Gets all custom audience members.*/
      customs (): A;
      /**Gets all custom audience members matching the given predicate.*/
      customs (filter: jufPredicate<nkaaAudience>): A;
      /**Gets all audience members that are of type Player.*/
      players (): A;
      /**Gets all audience members that are of type Player and match the predicate.*/
      players (filter: jufPredicate<nmsePlayer>): A;
      /**Gets the audience registry used to register custom audiences.*/
      registry (): nmsaaAudienceRegistry;
      /**Gets the combination of players() and console().*/
      server (): A;
   }
   /**Holder of custom audiences.*/
   export class nmsaaAudienceRegistry extends jlObject {
      constructor (backingMap: juMap<net.kyori.adventure.key.Key,juCollection<nkaaAudience>>, backingCollection: jufSupplier<juCollection<nkaaAudience>>);
      /**Gets every audience in the registry.*/
      all (): jlIterable<nkaaAudience>;
      /**Checks if this registry is empty.*/
      isEmpty (): boolean;
      /**Gets every audience member in the registry who matches a given predicate.*/
      of (filter: jufPredicate<nkaaAudience>): jlIterable<nkaaAudience>;
      /**Gets every audience in the registry under a specific key.*/
      of (key: net.kyori.adventure.key.Key): jlIterable<nkaaAudience>;
      /**Gets every audience in the registry under a specific key.*/
      of (keyed: net.kyori.adventure.key.Keyed): jlIterable<nkaaAudience>;
      /**Adds some audiences to the registry.*/
      register (keyed: net.kyori.adventure.key.Keyed, audiences: juCollection<nkaaAudience>): void;
      /**Adds some audiences to the registry.*/
      register (keyed: net.kyori.adventure.key.Keyed, ...audiences: nkaaAudience[]): void;
      /**Adds some audiences to the registry.*/
      register (key: net.kyori.adventure.key.Key, audiences: juCollection<nkaaAudience>): void;
      /**Adds some audiences to the registry.*/
      register (key: net.kyori.adventure.key.Key, ...audiences: nkaaAudience[]): void;
   }
   /**Utility class to access Adventure audiences.*/
   export class nmsaaAudiences extends jlObject {
      constructor ();
      /**Gets all audience members.*/
      static all (): nkaaAudience;
      /**Gets all audience members that match the given predicate.*/
      static all (filter: jufPredicate<nkaaAudience>): nkaaAudience;
      /**Gets the console as an audience.*/
      static console (): nkaaAudience;
      /**Gets all custom audience members stored using the given key.*/
      static custom (key: net.kyori.adventure.key.Key): nkaaAudience;
      /**Gets all custom audience members stored using the given keyed object.*/
      static custom (keyed: net.kyori.adventure.key.Keyed): nkaaAudience;
      /**Gets all custom audience members stored using the given keyed object that match  the given predicate.*/
      static custom (keyed: net.kyori.adventure.key.Keyed, filter: jufPredicate<nkaaAudience>): nkaaAudience;
      /**Gets all custom audience members stored using the given key that match the  given predicate.*/
      static custom (key: net.kyori.adventure.key.Key, filter: jufPredicate<nkaaAudience>): nkaaAudience;
      /**Gets all custom audience members.*/
      static customs (): nkaaAudience;
      /**Gets all custom audience members matching the given predicate.*/
      static customs (filter: jufPredicate<nkaaAudience>): nkaaAudience;
      /**Gets the AudienceProvider that provides iterables of audience members.*/
      static iterable (): nmsaaAudienceProvider<jlIterable<nkaaAudience>>;
      /**Gets all audience members that are of type Player.*/
      static players (): nkaaAudience;
      /**Gets all audience members that are of type Player and match the predicate.*/
      static players (filter: jufPredicate<nmsePlayer>): nkaaAudience;
      /**Gets the audience registry used to register custom audiences.*/
      static registry (): nmsaaAudienceRegistry;
      /**Gets the combination of players() and console().*/
      static server (): nkaaAudience;
      /**Gets the AudienceProvider that provides forwarding audiences.*/
      static single (): nmsaaAudienceProvider<nkaaAudience>;
   }
   export class nmsibrvAxisPlacementRule extends nmsibrBlockPlacementRule {
      constructor (block: nmsibBlock);
      /**Called when the block is placed.*/
      blockPlace (instance: nmsiInstance, block: nmsibBlock, blockFace: nmsibBlockFace, blockPosition: nmsuBlockPosition, pl: nmsePlayer): number;
      /**Called when the block state id can be updated (for instance if a neighbour block changed).*/
      blockUpdate (instance: nmsiInstance, blockPosition: nmsuBlockPosition, currentId: number): number;
   }
   export class nmsemmBasePiglinMeta extends nmsemmMonsterMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      isImmuneToZombification (): boolean;
      setImmuneToZombification (value: boolean): void;
   }
   /**An event called when a basic query is received and ready to be responded to.*/
   export class nmseqeBasicQueryEvent extends nmseqeQueryEvent<nmseqrBasicQueryResponse> {
      constructor (sender: jnSocketAddress, sessionID: number);
   }
   /**A basic query response containing a fixed set of responses.*/
   export class nmseqrBasicQueryResponse extends jlObject implements nmsubWriteable {
      constructor ();
      /**Gets the gametype.*/
      getGametype (): string;
      /**Gets the map.*/
      getMap (): string;
      /**Gets the max number of players.*/
      getMaxPlayers (): string;
      /**Gets the MoTD.*/
      getMotd (): string;
      /**Gets the number of players.*/
      getNumPlayers (): string;
      /**Sets the gametype.*/
      setGametype (gametype: string): void;
      /**Sets the map.*/
      setMap (map: string): void;
      /**Sets the max number of players.*/
      setMaxPlayers (maxPlayers: number): void;
      /**Sets the max number of players.*/
      setMaxPlayers (maxPlayers: string): void;
      /**Sets the MoTD.*/
      setMotd (motd: string): void;
      /**Sets the number of players.*/
      setNumPlayers (numPlayers: number): void;
      /**Sets the number of players.*/
      setNumPlayers (numPlayers: string): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   /**A Batch is a tool used to cache a list of block changes, and apply the changes whenever you want.    Batches offer a performance benefit because clients are not notified of any change until all of  the blocks have been placed, and because changes can happen with less synchronization.    All batches may be rotated using {link}, however rotate operations do not mutate the batch, so the  result should be cached if used multiple times.    If reversal is a desired behavior, batches may be applied in "reversal mode" using {link}. This  operation will return a new batch with the blocks set to whatever they were before the batch was  applied.*/
   export interface nmsibBatch<C> extends nmsiBlockModifier {
      /**Called to apply the batch to the given instance.*/
      apply (instance: nmsiInstance, callback: C): nmsibBatch<C>;
      /**Blocks the current thread until the batch is ready to be applied.*/
      awaitReady (): void;
      /**Removes all block data from this batch.*/
      clear (): void;
      /**Gets if the batch is ready to be applied to an instance.*/
      isReady (): boolean;
      /**Sets a block at a position.*/
      setBlockStateId (x: number, y: number, z: number, blockStateId: number, data: nmsdData): void;
      /**Sets a CustomBlock at a position.*/
      setCustomBlock (x: number, y: number, z: number, customBlockId: number, data: nmsdData): void;
      /**Sets a CustomBlock at a position with a custom state id.*/
      setSeparateBlocks (x: number, y: number, z: number, blockStateId: number, customBlockId: number, data: nmsdData): void;
   }
   /**Represents options for Batchs.*/
   export class nmsibBatchOption extends jlObject {
      constructor ();
      /**Gets if the batch is responsible for composing the whole chunk.*/
      isFullChunk (): boolean;
      /**Gets if the batch will wait ignore whether it is ready or not when applying it.*/
      isUnsafeApply (): boolean;
      setCalculateInverse (calculateInverse: boolean): nmsibBatchOption;
      setFullChunk (fullChunk: boolean): nmsibBatchOption;
      setUnsafeApply (unsafeApply: boolean): nmsibBatchOption;
      /**Gets if the batch will calculate the inverse of the batch when it is applied for an 'undo' behavior.*/
      shouldCalculateInverse (): boolean;
   }
   export class nmsemaBatMeta extends nmsemaAmbientCreatureMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      isHanging (): boolean;
      setHanging (value: boolean): void;
   }
   export class nmsitBeaconInventory extends nmsiInventory {
      constructor (title: string);
      /**Gets the first potion effect.*/
      getFirstPotionEffect (): nmspPotionEffect;
      /**Gets the beacon power level.*/
      getPowerLevel (): number;
      /**Gets the second potion effect.*/
      getSecondPotionEffect (): nmspPotionEffect;
      /**Changes the first potion effect.*/
      setFirstPotionEffect (firstPotionEffect: nmspPotionEffect): void;
      /**Changes the beacon power level.*/
      setPowerLevel (powerLevel: number): void;
      /**Changes the second potion effect.*/
      setSecondPotionEffect (secondPotionEffect: nmspPotionEffect): void;
   }
   export class nmsemaBeeMeta extends nmsemaAnimalMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getAngerTicks (): number;
      isAngry (): boolean;
      isHasNectar (): boolean;
      isHasStung (): boolean;
      setAngerTicks (value: number): void;
      setAngry (value: boolean): void;
      setHasNectar (value: boolean): void;
      setHasStung (value: boolean): void;
   }
   /**Represents a scoreboard which rendered a tag below the name.*/
   export class nmssBelowNameTag extends jlObject implements nmssScoreboard {
      constructor (name: string, value: string);
      constructor (name: string, value: nkatComponent);
      /**Adds a viewer.*/
      addViewer (player: nmsePlayer): boolean;
      /**Gets the objective name of the scoreboard.*/
      getObjectiveName (): string;
      /**Gets all the viewers of this viewable element.*/
      getViewers (): juSet<nmsePlayer>;
      /**Removes a viewer.*/
      removeViewer (player: nmsePlayer): boolean;
   }
   /**Small monitoring tools that can be used to check the current memory usage and Minestom threads CPU usage.    Needs to be enabled with enable(UpdateOption). Memory can then be accessed with getUsedMemory()  and the CPUs usage with getResultMap() or getCpuMonitoringMessage().    Be aware that this is not the most accurate method, you should use a proper java profiler depending on your needs.*/
   export class nmsmBenchmarkManager extends jlObject {
      constructor ();
      addThreadMonitor (threadName: string): void;
      disable (): void;
      enable (updateOption: nmsutUpdateOption): void;
      getCpuMonitoringMessage (): nkatComponent;
      getResultMap (): juMap<string,nmsmThreadResult>;
      /**Gets the heap memory used by the server in bytes.*/
      getUsedMemory (): number;
   }
   /**Class used to read from a byte array.    WARNING: not thread-safe.*/
   export class nmsubBinaryReader extends jiInputStream {
      constructor (bytes: number[]);
      constructor (buffer: io.netty.buffer.ByteBuf);
      available (): number;
      /**Records the current position, runs the given Runnable, and then returns the bytes between the position before  running the runnable and the position after.*/
      extractBytes (extractor: jlRunnable): number[];
      getBuffer (): inbByteBuf;
      read (): number;
      /**Creates a new object from the given supplier and calls its Readable.read(BinaryReader) method with this reader.*/
      read<T extends nmsubReadable> (supplier: jufSupplier<T>): T;
      /**Reads the length of the array to read as a varint, creates the array to contain the readable objects and call  their respective Readable.read(BinaryReader) methods.*/
      readArray<T extends nmsubReadable> (supplier: jufSupplier<T>): T[];
      readBlockPosition (): nmsuBlockPosition;
      readBoolean (): boolean;
      readByte (): number;
      readBytes (length: number): number[];
      readChar (): string;
      readComponent (maxLength: number): nkatComponent;
      readDouble (): number;
      readFloat (): number;
      /**Same as readInteger, created for parity with BinaryWriter*/
      readInt (): number;
      /**Same as readInt*/
      readInteger (): number;
      /**Tries to read an ItemStack.*/
      readItemStack (): nmsiItemStack;
      readLong (): number;
      readRemainingBytes (): number[];
      readShort (): number;
      /**Reads a string size by a var-int.*/
      readSizedString (maxLength: number): string;
      readSizedStringArray (maxLength: number): string[];
      readTag (): ojhnNBT;
      readUnsignedShort (): number;
      readUuid (): juUUID;
      readVarInt (): number;
      readVarIntArray (): number[];
      readVarLong (): number;
   }
   /**Class used to write to a byte array.  WARNING: not thread-safe.*/
   export class nmsubBinaryWriter extends jiOutputStream {
      constructor ();
      constructor (initialCapacity: number);
      constructor (buffer: io.netty.buffer.ByteBuf);
      constructor (...buffers: io.netty.buffer.ByteBuf[]);
      /**Gets the raw buffer used by this binary writer.*/
      getBuffer (): nbByteBuf;
      /**Returns a byte[] with the contents written via BinaryWriter*/
      static makeArray (writing: jufConsumer<nmsubBinaryWriter>): number[];
      /**Changes the buffer used by this binary writer.*/
      setBuffer (buffer: io.netty.buffer.ByteBuf): void;
      /**Converts the internal buffer to a byte array.*/
      toByteArray (): number[];
      write (b: number): void;
      write (buffer: io.netty.buffer.ByteBuf): void;
      write (writer: nmsubBinaryWriter): void;
      /**Writes the given writeable object into this writer.*/
      write (writeable: nmsubWriteable): void;
      /**Writes an array of writeable objects to this writer.*/
      writeArray (writeables: nmsubWriteable[]): void;
      /**Adds a BinaryWriter's ByteBuf at the end of this writer.*/
      writeAtEnd (footerWriter: nmsubBinaryWriter): void;
      /**Adds a BinaryWriter's ByteBuf at the beginning of this writer.*/
      writeAtStart (headerWriter: nmsubBinaryWriter): void;
      writeBlockPosition (x: number, y: number, z: number): void;
      writeBlockPosition (blockPosition: nmsuBlockPosition): void;
      /**Writes a single boolean to the buffer.*/
      writeBoolean (b: boolean): void;
      /**Writes a single byte to the buffer.*/
      writeByte (b: number): void;
      /**Writes a byte array.*/
      writeBytes (bytes: number[]): void;
      /**Writes a single char to the buffer.*/
      writeChar (c: string): void;
      /**Writes a component to the buffer as a sized string.*/
      writeComponent (component: nkatComponent): void;
      /**Writes a single double to the buffer.*/
      writeDouble (d: number): void;
      /**Writes a single float to the buffer.*/
      writeFloat (f: number): void;
      /**Writes a single int to the buffer.*/
      writeInt (i: number): void;
      writeItemStack (itemStack: nmsiItemStack): void;
      /**Writes a JsonMessage to the buffer.*/
      writeJsonMessage (message: nmscJsonMessage): void;
      /**Writes a single long to the buffer.*/
      writeLong (l: number): void;
      writeNBT (name: string, tag: org.jglrxavpok.hephaistos.nbt.NBT): void;
      /**Writes a null terminated string to the buffer.*/
      writeNullTerminatedString (string: string, charset: jncCharset): void;
      /**Writes a single short to the buffer.*/
      writeShort (s: number): void;
      /**Writes a string to the buffer.*/
      writeSizedString (string: string): void;
      /**Writes a string to the buffer.*/
      writeStringArray (array: string[]): void;
      writeUnsignedShort (yourShort: number): void;
      /**Writes an UUID.*/
      writeUuid (uuid: juUUID): void;
      /**Writes a single var-int to the buffer.*/
      writeVarInt (i: number): void;
      /**Writes a var-int array to the buffer.*/
      writeVarIntArray (array: number[]): void;
      /**Writes a single var-long to the buffer.*/
      writeVarLong (l: number): void;
   }
   export class nmswbBiome extends jlObject {
      static builder (): nmswbBBiomeBuilder;
      getCategory (): nmswbBCategory;
      getDepth (): number;
      getDownfall (): number;
      getEffects (): nmswbBiomeEffects;
      getId (): number;
      getName (): nmsuNamespaceID;
      getPrecipitation (): nmswbBPrecipitation;
      getScale (): number;
      getTemperature (): number;
      getTemperature_modifier (): nmswbBTemperatureModifier;
      toNbt (): jhnNBTCompound;
   }
   export class nmswbBBiomeBuilder extends jlObject {
      build (): nmswbBiome;
      category (category: nmswbBCategory): nmswbBBiomeBuilder;
      depth (depth: number): nmswbBBiomeBuilder;
      downfall (downfall: number): nmswbBBiomeBuilder;
      effects (effects: nmswbBiomeEffects): nmswbBBiomeBuilder;
      name (name: nmsuNamespaceID): nmswbBBiomeBuilder;
      precipitation (precipitation: nmswbBPrecipitation): nmswbBBiomeBuilder;
      scale (scale: number): nmswbBBiomeBuilder;
      temperature (temperature: number): nmswbBBiomeBuilder;
      temperatureModifier (temperatureModifier: nmswbBTemperatureModifier): nmswbBBiomeBuilder;
   }
   export class nmswbBCategory extends jlEnum<nmswbBCategory> {
      static BEACH: nmswbBCategory;
      static DESERT: nmswbBCategory;
      static EXTREME_HILLS: nmswbBCategory;
      static FOREST: nmswbBCategory;
      static ICY: nmswbBCategory;
      static JUNGLE: nmswbBCategory;
      static MESA: nmswbBCategory;
      static MUSHROOM: nmswbBCategory;
      static NETHER: nmswbBCategory;
      static NONE: nmswbBCategory;
      static OCEAN: nmswbBCategory;
      static PLAINS: nmswbBCategory;
      static RIVER: nmswbBCategory;
      static SAVANNA: nmswbBCategory;
      static SWAMP: nmswbBCategory;
      static TAIGA: nmswbBCategory;
      static THE_END: nmswbBCategory;
      getType (): string;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmswbBCategory;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmswbBCategory[];
   }
   export class nmswbBPrecipitation extends jlEnum<nmswbBPrecipitation> {
      static NONE: nmswbBPrecipitation;
      static RAIN: nmswbBPrecipitation;
      static SNOW: nmswbBPrecipitation;
      getType (): string;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmswbBPrecipitation;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmswbBPrecipitation[];
   }
   export class nmswbBTemperatureModifier extends jlEnum<nmswbBTemperatureModifier> {
      static FROZEN: nmswbBTemperatureModifier;
      static NONE: nmswbBTemperatureModifier;
      getType (): string;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmswbBTemperatureModifier;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmswbBTemperatureModifier[];
   }
   export class nmswbBiomeEffects extends jlObject {
      static builder (): nmswbBBiomeEffectsBuilder;
      getAdditions_sound (): nmswbBAdditionsSound;
      getAmbient_sound (): nmsuNamespaceID;
      getBiomeParticles (): nmswbBiomeParticles;
      getFog_color (): number;
      getFoliage_color (): number;
      getGrass_color (): number;
      getGrass_color_modifier (): nmswbBGrassColorModifier;
      getMood_sound (): nmswbBMoodSound;
      getMusic (): nmswbBMusic;
      getSky_color (): number;
      getWater_color (): number;
      getWater_fog_color (): number;
      toNbt (): ojhnNBTCompound;
      toString (): string;
   }
   export class nmswbBAdditionsSound extends jlObject {
      constructor (sound: nmsuNamespaceID, tickChance: number);
      toNbt (): ojhnNBTCompound;
   }
   export class nmswbBBiomeEffectsBuilder extends jlObject {
      additionsSound (additionsSound: nmswbBAdditionsSound): nmswbBBiomeEffectsBuilder;
      ambientSound (ambientSound: nmsuNamespaceID): nmswbBBiomeEffectsBuilder;
      biomeParticles (biomeParticles: nmswbBiomeParticles): nmswbBBiomeEffectsBuilder;
      build (): nmswbBiomeEffects;
      fogColor (fogColor: number): nmswbBBiomeEffectsBuilder;
      foliageColor (foliageColor: number): nmswbBBiomeEffectsBuilder;
      grassColor (grassColor: number): nmswbBBiomeEffectsBuilder;
      grassColorModifier (grassColorModifier: nmswbBGrassColorModifier): nmswbBBiomeEffectsBuilder;
      moodSound (moodSound: nmswbBMoodSound): nmswbBBiomeEffectsBuilder;
      music (music: nmswbBMusic): nmswbBBiomeEffectsBuilder;
      skyColor (skyColor: number): nmswbBBiomeEffectsBuilder;
      waterColor (waterColor: number): nmswbBBiomeEffectsBuilder;
      waterFogColor (waterFogColor: number): nmswbBBiomeEffectsBuilder;
   }
   export class nmswbBGrassColorModifier extends jlEnum<nmswbBGrassColorModifier> {
      static DARK_FOREST: nmswbBGrassColorModifier;
      static NONE: nmswbBGrassColorModifier;
      static SWAMP: nmswbBGrassColorModifier;
      getType (): string;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmswbBGrassColorModifier;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmswbBGrassColorModifier[];
   }
   export class nmswbBMoodSound extends jlObject {
      constructor (sound: nmsuNamespaceID, tickDelay: number, blockSearchExtent: number, offset: number);
      toNbt (): ojhnNBTCompound;
   }
   export class nmswbBMusic extends jlObject {
      constructor (sound: nmsuNamespaceID, minDelay: number, maxDelay: number, replaceCurrentMusic: boolean);
      toNbt (): ojhnNBTCompound;
   }
   /**Allows servers to register custom dimensions. Also used during player joining to send the list of all existing dimensions.    Contains Biome.PLAINS by default but can be removed.*/
   export class nmswbBiomeManager extends jlObject {
      constructor ();
      /**Adds a new biome.*/
      addBiome (biome: nmswbBiome): void;
      /**Gets a biome by its id.*/
      getById (id: number): nmswbBiome;
      getByName (namespaceID: nmsuNamespaceID): nmswbBiome;
      /**Removes a biome.*/
      removeBiome (biome: nmswbBiome): void;
      toNBT (): ojhnNBTCompound;
      /**Returns an immutable copy of the biomes already registered.*/
      unmodifiableCollection (): juCollection<nmswbBiome>;
   }
   export class nmswbBiomeParticles extends jlObject {
      constructor (probability: number, options: nmswbBParticleOptions);
      toNbt (): ojhnNBTCompound;
   }
   export class nmswbBBlockParticle extends jlObject implements nmswbBParticleOptions {
      constructor (block: nmsibBlockAlternative);
      toNbt (): ojhnNBTCompound;
   }
   export class nmswbBDustParticle extends jlObject implements nmswbBParticleOptions {
      constructor (red: number, green: number, blue: number, scale: number);
      toNbt (): ojhnNBTCompound;
   }
   export class nmswbBItemParticle extends jlObject implements nmswbBParticleOptions {
      constructor (item: nmsiItemStack);
      toNbt (): ojhnNBTCompound;
   }
   export class nmswbBNormalParticle extends jlObject implements nmswbBParticleOptions {
      constructor (type: nmsuNamespaceID);
      toNbt (): ojhnNBTCompound;
   }
   export interface nmswbBParticleOptions {
      toNbt (): ojhnNBTCompound;
   }
   export class nmsubBitmaskUtil extends jlObject {
      constructor ();
      static changeBit (value: number, mask: number, replacement: number, shift: number): number;
   }
   export class nmsrBlastingRecipe extends nmsrRecipe {
      constructor (recipeId: string, group: string, result: nmsiItemStack, experience: number, cookingTime: number);
      getCookingTime (): number;
      getExperience (): number;
      getGroup (): string;
      getIngredient (): nmsnpspDIngredient;
      getResult (): nmsiItemStack;
      setCookingTime (cookingTime: number): void;
      setExperience (experience: number): void;
      setGroup (group: string): void;
      setIngredient (ingredient: nmsnpspDIngredient): void;
      setResult (result: nmsiItemStack): void;
   }
   export class nmsemmBlazeMeta extends nmsemmMonsterMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      isOnFire (): boolean;
      setOnFire (value: boolean): void;
   }
   /**\/\/==============================  \/\/  AUTOGENERATED BY EnumGenerator  \/\/==============================*/
   export class nmsibBlock extends jlEnum<nmsibBlock> implements net.kyori.adventure.key.Keyed {
      static ACACIA_BUTTON: nmsibBlock;
      static ACACIA_DOOR: nmsibBlock;
      static ACACIA_FENCE: nmsibBlock;
      static ACACIA_FENCE_GATE: nmsibBlock;
      static ACACIA_LEAVES: nmsibBlock;
      static ACACIA_LOG: nmsibBlock;
      static ACACIA_PLANKS: nmsibBlock;
      static ACACIA_PRESSURE_PLATE: nmsibBlock;
      static ACACIA_SAPLING: nmsibBlock;
      static ACACIA_SIGN: nmsibBlock;
      static ACACIA_SLAB: nmsibBlock;
      static ACACIA_STAIRS: nmsibBlock;
      static ACACIA_TRAPDOOR: nmsibBlock;
      static ACACIA_WALL_SIGN: nmsibBlock;
      static ACACIA_WOOD: nmsibBlock;
      static ACTIVATOR_RAIL: nmsibBlock;
      static AIR: nmsibBlock;
      static ALLIUM: nmsibBlock;
      static ANCIENT_DEBRIS: nmsibBlock;
      static ANDESITE: nmsibBlock;
      static ANDESITE_SLAB: nmsibBlock;
      static ANDESITE_STAIRS: nmsibBlock;
      static ANDESITE_WALL: nmsibBlock;
      static ANVIL: nmsibBlock;
      static ATTACHED_MELON_STEM: nmsibBlock;
      static ATTACHED_PUMPKIN_STEM: nmsibBlock;
      static AZURE_BLUET: nmsibBlock;
      static BAMBOO: nmsibBlock;
      static BAMBOO_SAPLING: nmsibBlock;
      static BARREL: nmsibBlock;
      static BARRIER: nmsibBlock;
      static BASALT: nmsibBlock;
      static BEACON: nmsibBlock;
      static BEDROCK: nmsibBlock;
      static BEE_NEST: nmsibBlock;
      static BEEHIVE: nmsibBlock;
      static BEETROOTS: nmsibBlock;
      static BELL: nmsibBlock;
      static BIRCH_BUTTON: nmsibBlock;
      static BIRCH_DOOR: nmsibBlock;
      static BIRCH_FENCE: nmsibBlock;
      static BIRCH_FENCE_GATE: nmsibBlock;
      static BIRCH_LEAVES: nmsibBlock;
      static BIRCH_LOG: nmsibBlock;
      static BIRCH_PLANKS: nmsibBlock;
      static BIRCH_PRESSURE_PLATE: nmsibBlock;
      static BIRCH_SAPLING: nmsibBlock;
      static BIRCH_SIGN: nmsibBlock;
      static BIRCH_SLAB: nmsibBlock;
      static BIRCH_STAIRS: nmsibBlock;
      static BIRCH_TRAPDOOR: nmsibBlock;
      static BIRCH_WALL_SIGN: nmsibBlock;
      static BIRCH_WOOD: nmsibBlock;
      static BLACK_BANNER: nmsibBlock;
      static BLACK_BED: nmsibBlock;
      static BLACK_CARPET: nmsibBlock;
      static BLACK_CONCRETE: nmsibBlock;
      static BLACK_CONCRETE_POWDER: nmsibBlock;
      static BLACK_GLAZED_TERRACOTTA: nmsibBlock;
      static BLACK_SHULKER_BOX: nmsibBlock;
      static BLACK_STAINED_GLASS: nmsibBlock;
      static BLACK_STAINED_GLASS_PANE: nmsibBlock;
      static BLACK_TERRACOTTA: nmsibBlock;
      static BLACK_WALL_BANNER: nmsibBlock;
      static BLACK_WOOL: nmsibBlock;
      static BLACKSTONE: nmsibBlock;
      static BLACKSTONE_SLAB: nmsibBlock;
      static BLACKSTONE_STAIRS: nmsibBlock;
      static BLACKSTONE_WALL: nmsibBlock;
      static BLAST_FURNACE: nmsibBlock;
      static BLUE_BANNER: nmsibBlock;
      static BLUE_BED: nmsibBlock;
      static BLUE_CARPET: nmsibBlock;
      static BLUE_CONCRETE: nmsibBlock;
      static BLUE_CONCRETE_POWDER: nmsibBlock;
      static BLUE_GLAZED_TERRACOTTA: nmsibBlock;
      static BLUE_ICE: nmsibBlock;
      static BLUE_ORCHID: nmsibBlock;
      static BLUE_SHULKER_BOX: nmsibBlock;
      static BLUE_STAINED_GLASS: nmsibBlock;
      static BLUE_STAINED_GLASS_PANE: nmsibBlock;
      static BLUE_TERRACOTTA: nmsibBlock;
      static BLUE_WALL_BANNER: nmsibBlock;
      static BLUE_WOOL: nmsibBlock;
      static BONE_BLOCK: nmsibBlock;
      static BOOKSHELF: nmsibBlock;
      static BRAIN_CORAL: nmsibBlock;
      static BRAIN_CORAL_BLOCK: nmsibBlock;
      static BRAIN_CORAL_FAN: nmsibBlock;
      static BRAIN_CORAL_WALL_FAN: nmsibBlock;
      static BREWING_STAND: nmsibBlock;
      static BRICK_SLAB: nmsibBlock;
      static BRICK_STAIRS: nmsibBlock;
      static BRICK_WALL: nmsibBlock;
      static BRICKS: nmsibBlock;
      static BROWN_BANNER: nmsibBlock;
      static BROWN_BED: nmsibBlock;
      static BROWN_CARPET: nmsibBlock;
      static BROWN_CONCRETE: nmsibBlock;
      static BROWN_CONCRETE_POWDER: nmsibBlock;
      static BROWN_GLAZED_TERRACOTTA: nmsibBlock;
      static BROWN_MUSHROOM: nmsibBlock;
      static BROWN_MUSHROOM_BLOCK: nmsibBlock;
      static BROWN_SHULKER_BOX: nmsibBlock;
      static BROWN_STAINED_GLASS: nmsibBlock;
      static BROWN_STAINED_GLASS_PANE: nmsibBlock;
      static BROWN_TERRACOTTA: nmsibBlock;
      static BROWN_WALL_BANNER: nmsibBlock;
      static BROWN_WOOL: nmsibBlock;
      static BUBBLE_COLUMN: nmsibBlock;
      static BUBBLE_CORAL: nmsibBlock;
      static BUBBLE_CORAL_BLOCK: nmsibBlock;
      static BUBBLE_CORAL_FAN: nmsibBlock;
      static BUBBLE_CORAL_WALL_FAN: nmsibBlock;
      static CACTUS: nmsibBlock;
      static CAKE: nmsibBlock;
      static CAMPFIRE: nmsibBlock;
      static CARROTS: nmsibBlock;
      static CARTOGRAPHY_TABLE: nmsibBlock;
      static CARVED_PUMPKIN: nmsibBlock;
      static CAULDRON: nmsibBlock;
      static CAVE_AIR: nmsibBlock;
      static CHAIN: nmsibBlock;
      static CHAIN_COMMAND_BLOCK: nmsibBlock;
      static CHEST: nmsibBlock;
      static CHIPPED_ANVIL: nmsibBlock;
      static CHISELED_NETHER_BRICKS: nmsibBlock;
      static CHISELED_POLISHED_BLACKSTONE: nmsibBlock;
      static CHISELED_QUARTZ_BLOCK: nmsibBlock;
      static CHISELED_RED_SANDSTONE: nmsibBlock;
      static CHISELED_SANDSTONE: nmsibBlock;
      static CHISELED_STONE_BRICKS: nmsibBlock;
      static CHORUS_FLOWER: nmsibBlock;
      static CHORUS_PLANT: nmsibBlock;
      static CLAY: nmsibBlock;
      static COAL_BLOCK: nmsibBlock;
      static COAL_ORE: nmsibBlock;
      static COARSE_DIRT: nmsibBlock;
      static COBBLESTONE: nmsibBlock;
      static COBBLESTONE_SLAB: nmsibBlock;
      static COBBLESTONE_STAIRS: nmsibBlock;
      static COBBLESTONE_WALL: nmsibBlock;
      static COBWEB: nmsibBlock;
      static COCOA: nmsibBlock;
      static COMMAND_BLOCK: nmsibBlock;
      static COMPARATOR: nmsibBlock;
      static COMPOSTER: nmsibBlock;
      static CONDUIT: nmsibBlock;
      static CORNFLOWER: nmsibBlock;
      static CRACKED_NETHER_BRICKS: nmsibBlock;
      static CRACKED_POLISHED_BLACKSTONE_BRICKS: nmsibBlock;
      static CRACKED_STONE_BRICKS: nmsibBlock;
      static CRAFTING_TABLE: nmsibBlock;
      static CREEPER_HEAD: nmsibBlock;
      static CREEPER_WALL_HEAD: nmsibBlock;
      static CRIMSON_BUTTON: nmsibBlock;
      static CRIMSON_DOOR: nmsibBlock;
      static CRIMSON_FENCE: nmsibBlock;
      static CRIMSON_FENCE_GATE: nmsibBlock;
      static CRIMSON_FUNGUS: nmsibBlock;
      static CRIMSON_HYPHAE: nmsibBlock;
      static CRIMSON_NYLIUM: nmsibBlock;
      static CRIMSON_PLANKS: nmsibBlock;
      static CRIMSON_PRESSURE_PLATE: nmsibBlock;
      static CRIMSON_ROOTS: nmsibBlock;
      static CRIMSON_SIGN: nmsibBlock;
      static CRIMSON_SLAB: nmsibBlock;
      static CRIMSON_STAIRS: nmsibBlock;
      static CRIMSON_STEM: nmsibBlock;
      static CRIMSON_TRAPDOOR: nmsibBlock;
      static CRIMSON_WALL_SIGN: nmsibBlock;
      static CRYING_OBSIDIAN: nmsibBlock;
      static CUT_RED_SANDSTONE: nmsibBlock;
      static CUT_RED_SANDSTONE_SLAB: nmsibBlock;
      static CUT_SANDSTONE: nmsibBlock;
      static CUT_SANDSTONE_SLAB: nmsibBlock;
      static CYAN_BANNER: nmsibBlock;
      static CYAN_BED: nmsibBlock;
      static CYAN_CARPET: nmsibBlock;
      static CYAN_CONCRETE: nmsibBlock;
      static CYAN_CONCRETE_POWDER: nmsibBlock;
      static CYAN_GLAZED_TERRACOTTA: nmsibBlock;
      static CYAN_SHULKER_BOX: nmsibBlock;
      static CYAN_STAINED_GLASS: nmsibBlock;
      static CYAN_STAINED_GLASS_PANE: nmsibBlock;
      static CYAN_TERRACOTTA: nmsibBlock;
      static CYAN_WALL_BANNER: nmsibBlock;
      static CYAN_WOOL: nmsibBlock;
      static DAMAGED_ANVIL: nmsibBlock;
      static DANDELION: nmsibBlock;
      static DARK_OAK_BUTTON: nmsibBlock;
      static DARK_OAK_DOOR: nmsibBlock;
      static DARK_OAK_FENCE: nmsibBlock;
      static DARK_OAK_FENCE_GATE: nmsibBlock;
      static DARK_OAK_LEAVES: nmsibBlock;
      static DARK_OAK_LOG: nmsibBlock;
      static DARK_OAK_PLANKS: nmsibBlock;
      static DARK_OAK_PRESSURE_PLATE: nmsibBlock;
      static DARK_OAK_SAPLING: nmsibBlock;
      static DARK_OAK_SIGN: nmsibBlock;
      static DARK_OAK_SLAB: nmsibBlock;
      static DARK_OAK_STAIRS: nmsibBlock;
      static DARK_OAK_TRAPDOOR: nmsibBlock;
      static DARK_OAK_WALL_SIGN: nmsibBlock;
      static DARK_OAK_WOOD: nmsibBlock;
      static DARK_PRISMARINE: nmsibBlock;
      static DARK_PRISMARINE_SLAB: nmsibBlock;
      static DARK_PRISMARINE_STAIRS: nmsibBlock;
      static DAYLIGHT_DETECTOR: nmsibBlock;
      static DEAD_BRAIN_CORAL: nmsibBlock;
      static DEAD_BRAIN_CORAL_BLOCK: nmsibBlock;
      static DEAD_BRAIN_CORAL_FAN: nmsibBlock;
      static DEAD_BRAIN_CORAL_WALL_FAN: nmsibBlock;
      static DEAD_BUBBLE_CORAL: nmsibBlock;
      static DEAD_BUBBLE_CORAL_BLOCK: nmsibBlock;
      static DEAD_BUBBLE_CORAL_FAN: nmsibBlock;
      static DEAD_BUBBLE_CORAL_WALL_FAN: nmsibBlock;
      static DEAD_BUSH: nmsibBlock;
      static DEAD_FIRE_CORAL: nmsibBlock;
      static DEAD_FIRE_CORAL_BLOCK: nmsibBlock;
      static DEAD_FIRE_CORAL_FAN: nmsibBlock;
      static DEAD_FIRE_CORAL_WALL_FAN: nmsibBlock;
      static DEAD_HORN_CORAL: nmsibBlock;
      static DEAD_HORN_CORAL_BLOCK: nmsibBlock;
      static DEAD_HORN_CORAL_FAN: nmsibBlock;
      static DEAD_HORN_CORAL_WALL_FAN: nmsibBlock;
      static DEAD_TUBE_CORAL: nmsibBlock;
      static DEAD_TUBE_CORAL_BLOCK: nmsibBlock;
      static DEAD_TUBE_CORAL_FAN: nmsibBlock;
      static DEAD_TUBE_CORAL_WALL_FAN: nmsibBlock;
      static DETECTOR_RAIL: nmsibBlock;
      static DIAMOND_BLOCK: nmsibBlock;
      static DIAMOND_ORE: nmsibBlock;
      static DIORITE: nmsibBlock;
      static DIORITE_SLAB: nmsibBlock;
      static DIORITE_STAIRS: nmsibBlock;
      static DIORITE_WALL: nmsibBlock;
      static DIRT: nmsibBlock;
      static DISPENSER: nmsibBlock;
      static DRAGON_EGG: nmsibBlock;
      static DRAGON_HEAD: nmsibBlock;
      static DRAGON_WALL_HEAD: nmsibBlock;
      static DRIED_KELP_BLOCK: nmsibBlock;
      static DROPPER: nmsibBlock;
      static EMERALD_BLOCK: nmsibBlock;
      static EMERALD_ORE: nmsibBlock;
      static ENCHANTING_TABLE: nmsibBlock;
      static END_GATEWAY: nmsibBlock;
      static END_PORTAL: nmsibBlock;
      static END_PORTAL_FRAME: nmsibBlock;
      static END_ROD: nmsibBlock;
      static END_STONE: nmsibBlock;
      static END_STONE_BRICK_SLAB: nmsibBlock;
      static END_STONE_BRICK_STAIRS: nmsibBlock;
      static END_STONE_BRICK_WALL: nmsibBlock;
      static END_STONE_BRICKS: nmsibBlock;
      static ENDER_CHEST: nmsibBlock;
      static FARMLAND: nmsibBlock;
      static FERN: nmsibBlock;
      static FIRE: nmsibBlock;
      static FIRE_CORAL: nmsibBlock;
      static FIRE_CORAL_BLOCK: nmsibBlock;
      static FIRE_CORAL_FAN: nmsibBlock;
      static FIRE_CORAL_WALL_FAN: nmsibBlock;
      static FLETCHING_TABLE: nmsibBlock;
      static FLOWER_POT: nmsibBlock;
      static FROSTED_ICE: nmsibBlock;
      static FURNACE: nmsibBlock;
      static GILDED_BLACKSTONE: nmsibBlock;
      static GLASS: nmsibBlock;
      static GLASS_PANE: nmsibBlock;
      static GLOWSTONE: nmsibBlock;
      static GOLD_BLOCK: nmsibBlock;
      static GOLD_ORE: nmsibBlock;
      static GRANITE: nmsibBlock;
      static GRANITE_SLAB: nmsibBlock;
      static GRANITE_STAIRS: nmsibBlock;
      static GRANITE_WALL: nmsibBlock;
      static GRASS: nmsibBlock;
      static GRASS_BLOCK: nmsibBlock;
      static GRASS_PATH: nmsibBlock;
      static GRAVEL: nmsibBlock;
      static GRAY_BANNER: nmsibBlock;
      static GRAY_BED: nmsibBlock;
      static GRAY_CARPET: nmsibBlock;
      static GRAY_CONCRETE: nmsibBlock;
      static GRAY_CONCRETE_POWDER: nmsibBlock;
      static GRAY_GLAZED_TERRACOTTA: nmsibBlock;
      static GRAY_SHULKER_BOX: nmsibBlock;
      static GRAY_STAINED_GLASS: nmsibBlock;
      static GRAY_STAINED_GLASS_PANE: nmsibBlock;
      static GRAY_TERRACOTTA: nmsibBlock;
      static GRAY_WALL_BANNER: nmsibBlock;
      static GRAY_WOOL: nmsibBlock;
      static GREEN_BANNER: nmsibBlock;
      static GREEN_BED: nmsibBlock;
      static GREEN_CARPET: nmsibBlock;
      static GREEN_CONCRETE: nmsibBlock;
      static GREEN_CONCRETE_POWDER: nmsibBlock;
      static GREEN_GLAZED_TERRACOTTA: nmsibBlock;
      static GREEN_SHULKER_BOX: nmsibBlock;
      static GREEN_STAINED_GLASS: nmsibBlock;
      static GREEN_STAINED_GLASS_PANE: nmsibBlock;
      static GREEN_TERRACOTTA: nmsibBlock;
      static GREEN_WALL_BANNER: nmsibBlock;
      static GREEN_WOOL: nmsibBlock;
      static GRINDSTONE: nmsibBlock;
      static HAY_BLOCK: nmsibBlock;
      static HEAVY_WEIGHTED_PRESSURE_PLATE: nmsibBlock;
      static HONEY_BLOCK: nmsibBlock;
      static HONEYCOMB_BLOCK: nmsibBlock;
      static HOPPER: nmsibBlock;
      static HORN_CORAL: nmsibBlock;
      static HORN_CORAL_BLOCK: nmsibBlock;
      static HORN_CORAL_FAN: nmsibBlock;
      static HORN_CORAL_WALL_FAN: nmsibBlock;
      static ICE: nmsibBlock;
      static INFESTED_CHISELED_STONE_BRICKS: nmsibBlock;
      static INFESTED_COBBLESTONE: nmsibBlock;
      static INFESTED_CRACKED_STONE_BRICKS: nmsibBlock;
      static INFESTED_MOSSY_STONE_BRICKS: nmsibBlock;
      static INFESTED_STONE: nmsibBlock;
      static INFESTED_STONE_BRICKS: nmsibBlock;
      static IRON_BARS: nmsibBlock;
      static IRON_BLOCK: nmsibBlock;
      static IRON_DOOR: nmsibBlock;
      static IRON_ORE: nmsibBlock;
      static IRON_TRAPDOOR: nmsibBlock;
      static JACK_O_LANTERN: nmsibBlock;
      static JIGSAW: nmsibBlock;
      static JUKEBOX: nmsibBlock;
      static JUNGLE_BUTTON: nmsibBlock;
      static JUNGLE_DOOR: nmsibBlock;
      static JUNGLE_FENCE: nmsibBlock;
      static JUNGLE_FENCE_GATE: nmsibBlock;
      static JUNGLE_LEAVES: nmsibBlock;
      static JUNGLE_LOG: nmsibBlock;
      static JUNGLE_PLANKS: nmsibBlock;
      static JUNGLE_PRESSURE_PLATE: nmsibBlock;
      static JUNGLE_SAPLING: nmsibBlock;
      static JUNGLE_SIGN: nmsibBlock;
      static JUNGLE_SLAB: nmsibBlock;
      static JUNGLE_STAIRS: nmsibBlock;
      static JUNGLE_TRAPDOOR: nmsibBlock;
      static JUNGLE_WALL_SIGN: nmsibBlock;
      static JUNGLE_WOOD: nmsibBlock;
      static KELP: nmsibBlock;
      static KELP_PLANT: nmsibBlock;
      static LADDER: nmsibBlock;
      static LANTERN: nmsibBlock;
      static LAPIS_BLOCK: nmsibBlock;
      static LAPIS_ORE: nmsibBlock;
      static LARGE_FERN: nmsibBlock;
      static LAVA: nmsibBlock;
      static LECTERN: nmsibBlock;
      static LEVER: nmsibBlock;
      static LIGHT_BLUE_BANNER: nmsibBlock;
      static LIGHT_BLUE_BED: nmsibBlock;
      static LIGHT_BLUE_CARPET: nmsibBlock;
      static LIGHT_BLUE_CONCRETE: nmsibBlock;
      static LIGHT_BLUE_CONCRETE_POWDER: nmsibBlock;
      static LIGHT_BLUE_GLAZED_TERRACOTTA: nmsibBlock;
      static LIGHT_BLUE_SHULKER_BOX: nmsibBlock;
      static LIGHT_BLUE_STAINED_GLASS: nmsibBlock;
      static LIGHT_BLUE_STAINED_GLASS_PANE: nmsibBlock;
      static LIGHT_BLUE_TERRACOTTA: nmsibBlock;
      static LIGHT_BLUE_WALL_BANNER: nmsibBlock;
      static LIGHT_BLUE_WOOL: nmsibBlock;
      static LIGHT_GRAY_BANNER: nmsibBlock;
      static LIGHT_GRAY_BED: nmsibBlock;
      static LIGHT_GRAY_CARPET: nmsibBlock;
      static LIGHT_GRAY_CONCRETE: nmsibBlock;
      static LIGHT_GRAY_CONCRETE_POWDER: nmsibBlock;
      static LIGHT_GRAY_GLAZED_TERRACOTTA: nmsibBlock;
      static LIGHT_GRAY_SHULKER_BOX: nmsibBlock;
      static LIGHT_GRAY_STAINED_GLASS: nmsibBlock;
      static LIGHT_GRAY_STAINED_GLASS_PANE: nmsibBlock;
      static LIGHT_GRAY_TERRACOTTA: nmsibBlock;
      static LIGHT_GRAY_WALL_BANNER: nmsibBlock;
      static LIGHT_GRAY_WOOL: nmsibBlock;
      static LIGHT_WEIGHTED_PRESSURE_PLATE: nmsibBlock;
      static LILAC: nmsibBlock;
      static LILY_OF_THE_VALLEY: nmsibBlock;
      static LILY_PAD: nmsibBlock;
      static LIME_BANNER: nmsibBlock;
      static LIME_BED: nmsibBlock;
      static LIME_CARPET: nmsibBlock;
      static LIME_CONCRETE: nmsibBlock;
      static LIME_CONCRETE_POWDER: nmsibBlock;
      static LIME_GLAZED_TERRACOTTA: nmsibBlock;
      static LIME_SHULKER_BOX: nmsibBlock;
      static LIME_STAINED_GLASS: nmsibBlock;
      static LIME_STAINED_GLASS_PANE: nmsibBlock;
      static LIME_TERRACOTTA: nmsibBlock;
      static LIME_WALL_BANNER: nmsibBlock;
      static LIME_WOOL: nmsibBlock;
      static LODESTONE: nmsibBlock;
      static LOOM: nmsibBlock;
      static MAGENTA_BANNER: nmsibBlock;
      static MAGENTA_BED: nmsibBlock;
      static MAGENTA_CARPET: nmsibBlock;
      static MAGENTA_CONCRETE: nmsibBlock;
      static MAGENTA_CONCRETE_POWDER: nmsibBlock;
      static MAGENTA_GLAZED_TERRACOTTA: nmsibBlock;
      static MAGENTA_SHULKER_BOX: nmsibBlock;
      static MAGENTA_STAINED_GLASS: nmsibBlock;
      static MAGENTA_STAINED_GLASS_PANE: nmsibBlock;
      static MAGENTA_TERRACOTTA: nmsibBlock;
      static MAGENTA_WALL_BANNER: nmsibBlock;
      static MAGENTA_WOOL: nmsibBlock;
      static MAGMA_BLOCK: nmsibBlock;
      static MELON: nmsibBlock;
      static MELON_STEM: nmsibBlock;
      static MOSSY_COBBLESTONE: nmsibBlock;
      static MOSSY_COBBLESTONE_SLAB: nmsibBlock;
      static MOSSY_COBBLESTONE_STAIRS: nmsibBlock;
      static MOSSY_COBBLESTONE_WALL: nmsibBlock;
      static MOSSY_STONE_BRICK_SLAB: nmsibBlock;
      static MOSSY_STONE_BRICK_STAIRS: nmsibBlock;
      static MOSSY_STONE_BRICK_WALL: nmsibBlock;
      static MOSSY_STONE_BRICKS: nmsibBlock;
      static MOVING_PISTON: nmsibBlock;
      static MUSHROOM_STEM: nmsibBlock;
      static MYCELIUM: nmsibBlock;
      static NETHER_BRICK_FENCE: nmsibBlock;
      static NETHER_BRICK_SLAB: nmsibBlock;
      static NETHER_BRICK_STAIRS: nmsibBlock;
      static NETHER_BRICK_WALL: nmsibBlock;
      static NETHER_BRICKS: nmsibBlock;
      static NETHER_GOLD_ORE: nmsibBlock;
      static NETHER_PORTAL: nmsibBlock;
      static NETHER_QUARTZ_ORE: nmsibBlock;
      static NETHER_SPROUTS: nmsibBlock;
      static NETHER_WART: nmsibBlock;
      static NETHER_WART_BLOCK: nmsibBlock;
      static NETHERITE_BLOCK: nmsibBlock;
      static NETHERRACK: nmsibBlock;
      static NOTE_BLOCK: nmsibBlock;
      static OAK_BUTTON: nmsibBlock;
      static OAK_DOOR: nmsibBlock;
      static OAK_FENCE: nmsibBlock;
      static OAK_FENCE_GATE: nmsibBlock;
      static OAK_LEAVES: nmsibBlock;
      static OAK_LOG: nmsibBlock;
      static OAK_PLANKS: nmsibBlock;
      static OAK_PRESSURE_PLATE: nmsibBlock;
      static OAK_SAPLING: nmsibBlock;
      static OAK_SIGN: nmsibBlock;
      static OAK_SLAB: nmsibBlock;
      static OAK_STAIRS: nmsibBlock;
      static OAK_TRAPDOOR: nmsibBlock;
      static OAK_WALL_SIGN: nmsibBlock;
      static OAK_WOOD: nmsibBlock;
      static OBSERVER: nmsibBlock;
      static OBSIDIAN: nmsibBlock;
      static ORANGE_BANNER: nmsibBlock;
      static ORANGE_BED: nmsibBlock;
      static ORANGE_CARPET: nmsibBlock;
      static ORANGE_CONCRETE: nmsibBlock;
      static ORANGE_CONCRETE_POWDER: nmsibBlock;
      static ORANGE_GLAZED_TERRACOTTA: nmsibBlock;
      static ORANGE_SHULKER_BOX: nmsibBlock;
      static ORANGE_STAINED_GLASS: nmsibBlock;
      static ORANGE_STAINED_GLASS_PANE: nmsibBlock;
      static ORANGE_TERRACOTTA: nmsibBlock;
      static ORANGE_TULIP: nmsibBlock;
      static ORANGE_WALL_BANNER: nmsibBlock;
      static ORANGE_WOOL: nmsibBlock;
      static OXEYE_DAISY: nmsibBlock;
      static PACKED_ICE: nmsibBlock;
      static PEONY: nmsibBlock;
      static PETRIFIED_OAK_SLAB: nmsibBlock;
      static PINK_BANNER: nmsibBlock;
      static PINK_BED: nmsibBlock;
      static PINK_CARPET: nmsibBlock;
      static PINK_CONCRETE: nmsibBlock;
      static PINK_CONCRETE_POWDER: nmsibBlock;
      static PINK_GLAZED_TERRACOTTA: nmsibBlock;
      static PINK_SHULKER_BOX: nmsibBlock;
      static PINK_STAINED_GLASS: nmsibBlock;
      static PINK_STAINED_GLASS_PANE: nmsibBlock;
      static PINK_TERRACOTTA: nmsibBlock;
      static PINK_TULIP: nmsibBlock;
      static PINK_WALL_BANNER: nmsibBlock;
      static PINK_WOOL: nmsibBlock;
      static PISTON: nmsibBlock;
      static PISTON_HEAD: nmsibBlock;
      static PLAYER_HEAD: nmsibBlock;
      static PLAYER_WALL_HEAD: nmsibBlock;
      static PODZOL: nmsibBlock;
      static POLISHED_ANDESITE: nmsibBlock;
      static POLISHED_ANDESITE_SLAB: nmsibBlock;
      static POLISHED_ANDESITE_STAIRS: nmsibBlock;
      static POLISHED_BASALT: nmsibBlock;
      static POLISHED_BLACKSTONE: nmsibBlock;
      static POLISHED_BLACKSTONE_BRICK_SLAB: nmsibBlock;
      static POLISHED_BLACKSTONE_BRICK_STAIRS: nmsibBlock;
      static POLISHED_BLACKSTONE_BRICK_WALL: nmsibBlock;
      static POLISHED_BLACKSTONE_BRICKS: nmsibBlock;
      static POLISHED_BLACKSTONE_BUTTON: nmsibBlock;
      static POLISHED_BLACKSTONE_PRESSURE_PLATE: nmsibBlock;
      static POLISHED_BLACKSTONE_SLAB: nmsibBlock;
      static POLISHED_BLACKSTONE_STAIRS: nmsibBlock;
      static POLISHED_BLACKSTONE_WALL: nmsibBlock;
      static POLISHED_DIORITE: nmsibBlock;
      static POLISHED_DIORITE_SLAB: nmsibBlock;
      static POLISHED_DIORITE_STAIRS: nmsibBlock;
      static POLISHED_GRANITE: nmsibBlock;
      static POLISHED_GRANITE_SLAB: nmsibBlock;
      static POLISHED_GRANITE_STAIRS: nmsibBlock;
      static POPPY: nmsibBlock;
      static POTATOES: nmsibBlock;
      static POTTED_ACACIA_SAPLING: nmsibBlock;
      static POTTED_ALLIUM: nmsibBlock;
      static POTTED_AZURE_BLUET: nmsibBlock;
      static POTTED_BAMBOO: nmsibBlock;
      static POTTED_BIRCH_SAPLING: nmsibBlock;
      static POTTED_BLUE_ORCHID: nmsibBlock;
      static POTTED_BROWN_MUSHROOM: nmsibBlock;
      static POTTED_CACTUS: nmsibBlock;
      static POTTED_CORNFLOWER: nmsibBlock;
      static POTTED_CRIMSON_FUNGUS: nmsibBlock;
      static POTTED_CRIMSON_ROOTS: nmsibBlock;
      static POTTED_DANDELION: nmsibBlock;
      static POTTED_DARK_OAK_SAPLING: nmsibBlock;
      static POTTED_DEAD_BUSH: nmsibBlock;
      static POTTED_FERN: nmsibBlock;
      static POTTED_JUNGLE_SAPLING: nmsibBlock;
      static POTTED_LILY_OF_THE_VALLEY: nmsibBlock;
      static POTTED_OAK_SAPLING: nmsibBlock;
      static POTTED_ORANGE_TULIP: nmsibBlock;
      static POTTED_OXEYE_DAISY: nmsibBlock;
      static POTTED_PINK_TULIP: nmsibBlock;
      static POTTED_POPPY: nmsibBlock;
      static POTTED_RED_MUSHROOM: nmsibBlock;
      static POTTED_RED_TULIP: nmsibBlock;
      static POTTED_SPRUCE_SAPLING: nmsibBlock;
      static POTTED_WARPED_FUNGUS: nmsibBlock;
      static POTTED_WARPED_ROOTS: nmsibBlock;
      static POTTED_WHITE_TULIP: nmsibBlock;
      static POTTED_WITHER_ROSE: nmsibBlock;
      static POWERED_RAIL: nmsibBlock;
      static PRISMARINE: nmsibBlock;
      static PRISMARINE_BRICK_SLAB: nmsibBlock;
      static PRISMARINE_BRICK_STAIRS: nmsibBlock;
      static PRISMARINE_BRICKS: nmsibBlock;
      static PRISMARINE_SLAB: nmsibBlock;
      static PRISMARINE_STAIRS: nmsibBlock;
      static PRISMARINE_WALL: nmsibBlock;
      static PUMPKIN: nmsibBlock;
      static PUMPKIN_STEM: nmsibBlock;
      static PURPLE_BANNER: nmsibBlock;
      static PURPLE_BED: nmsibBlock;
      static PURPLE_CARPET: nmsibBlock;
      static PURPLE_CONCRETE: nmsibBlock;
      static PURPLE_CONCRETE_POWDER: nmsibBlock;
      static PURPLE_GLAZED_TERRACOTTA: nmsibBlock;
      static PURPLE_SHULKER_BOX: nmsibBlock;
      static PURPLE_STAINED_GLASS: nmsibBlock;
      static PURPLE_STAINED_GLASS_PANE: nmsibBlock;
      static PURPLE_TERRACOTTA: nmsibBlock;
      static PURPLE_WALL_BANNER: nmsibBlock;
      static PURPLE_WOOL: nmsibBlock;
      static PURPUR_BLOCK: nmsibBlock;
      static PURPUR_PILLAR: nmsibBlock;
      static PURPUR_SLAB: nmsibBlock;
      static PURPUR_STAIRS: nmsibBlock;
      static QUARTZ_BLOCK: nmsibBlock;
      static QUARTZ_BRICKS: nmsibBlock;
      static QUARTZ_PILLAR: nmsibBlock;
      static QUARTZ_SLAB: nmsibBlock;
      static QUARTZ_STAIRS: nmsibBlock;
      static RAIL: nmsibBlock;
      static RED_BANNER: nmsibBlock;
      static RED_BED: nmsibBlock;
      static RED_CARPET: nmsibBlock;
      static RED_CONCRETE: nmsibBlock;
      static RED_CONCRETE_POWDER: nmsibBlock;
      static RED_GLAZED_TERRACOTTA: nmsibBlock;
      static RED_MUSHROOM: nmsibBlock;
      static RED_MUSHROOM_BLOCK: nmsibBlock;
      static RED_NETHER_BRICK_SLAB: nmsibBlock;
      static RED_NETHER_BRICK_STAIRS: nmsibBlock;
      static RED_NETHER_BRICK_WALL: nmsibBlock;
      static RED_NETHER_BRICKS: nmsibBlock;
      static RED_SAND: nmsibBlock;
      static RED_SANDSTONE: nmsibBlock;
      static RED_SANDSTONE_SLAB: nmsibBlock;
      static RED_SANDSTONE_STAIRS: nmsibBlock;
      static RED_SANDSTONE_WALL: nmsibBlock;
      static RED_SHULKER_BOX: nmsibBlock;
      static RED_STAINED_GLASS: nmsibBlock;
      static RED_STAINED_GLASS_PANE: nmsibBlock;
      static RED_TERRACOTTA: nmsibBlock;
      static RED_TULIP: nmsibBlock;
      static RED_WALL_BANNER: nmsibBlock;
      static RED_WOOL: nmsibBlock;
      static REDSTONE_BLOCK: nmsibBlock;
      static REDSTONE_LAMP: nmsibBlock;
      static REDSTONE_ORE: nmsibBlock;
      static REDSTONE_TORCH: nmsibBlock;
      static REDSTONE_WALL_TORCH: nmsibBlock;
      static REDSTONE_WIRE: nmsibBlock;
      static REPEATER: nmsibBlock;
      static REPEATING_COMMAND_BLOCK: nmsibBlock;
      static RESPAWN_ANCHOR: nmsibBlock;
      static ROSE_BUSH: nmsibBlock;
      static SAND: nmsibBlock;
      static SANDSTONE: nmsibBlock;
      static SANDSTONE_SLAB: nmsibBlock;
      static SANDSTONE_STAIRS: nmsibBlock;
      static SANDSTONE_WALL: nmsibBlock;
      static SCAFFOLDING: nmsibBlock;
      static SEA_LANTERN: nmsibBlock;
      static SEA_PICKLE: nmsibBlock;
      static SEAGRASS: nmsibBlock;
      static SHROOMLIGHT: nmsibBlock;
      static SHULKER_BOX: nmsibBlock;
      static SKELETON_SKULL: nmsibBlock;
      static SKELETON_WALL_SKULL: nmsibBlock;
      static SLIME_BLOCK: nmsibBlock;
      static SMITHING_TABLE: nmsibBlock;
      static SMOKER: nmsibBlock;
      static SMOOTH_QUARTZ: nmsibBlock;
      static SMOOTH_QUARTZ_SLAB: nmsibBlock;
      static SMOOTH_QUARTZ_STAIRS: nmsibBlock;
      static SMOOTH_RED_SANDSTONE: nmsibBlock;
      static SMOOTH_RED_SANDSTONE_SLAB: nmsibBlock;
      static SMOOTH_RED_SANDSTONE_STAIRS: nmsibBlock;
      static SMOOTH_SANDSTONE: nmsibBlock;
      static SMOOTH_SANDSTONE_SLAB: nmsibBlock;
      static SMOOTH_SANDSTONE_STAIRS: nmsibBlock;
      static SMOOTH_STONE: nmsibBlock;
      static SMOOTH_STONE_SLAB: nmsibBlock;
      static SNOW: nmsibBlock;
      static SNOW_BLOCK: nmsibBlock;
      static SOUL_CAMPFIRE: nmsibBlock;
      static SOUL_FIRE: nmsibBlock;
      static SOUL_LANTERN: nmsibBlock;
      static SOUL_SAND: nmsibBlock;
      static SOUL_SOIL: nmsibBlock;
      static SOUL_TORCH: nmsibBlock;
      static SOUL_WALL_TORCH: nmsibBlock;
      static SPAWNER: nmsibBlock;
      static SPONGE: nmsibBlock;
      static SPRUCE_BUTTON: nmsibBlock;
      static SPRUCE_DOOR: nmsibBlock;
      static SPRUCE_FENCE: nmsibBlock;
      static SPRUCE_FENCE_GATE: nmsibBlock;
      static SPRUCE_LEAVES: nmsibBlock;
      static SPRUCE_LOG: nmsibBlock;
      static SPRUCE_PLANKS: nmsibBlock;
      static SPRUCE_PRESSURE_PLATE: nmsibBlock;
      static SPRUCE_SAPLING: nmsibBlock;
      static SPRUCE_SIGN: nmsibBlock;
      static SPRUCE_SLAB: nmsibBlock;
      static SPRUCE_STAIRS: nmsibBlock;
      static SPRUCE_TRAPDOOR: nmsibBlock;
      static SPRUCE_WALL_SIGN: nmsibBlock;
      static SPRUCE_WOOD: nmsibBlock;
      static STICKY_PISTON: nmsibBlock;
      static STONE: nmsibBlock;
      static STONE_BRICK_SLAB: nmsibBlock;
      static STONE_BRICK_STAIRS: nmsibBlock;
      static STONE_BRICK_WALL: nmsibBlock;
      static STONE_BRICKS: nmsibBlock;
      static STONE_BUTTON: nmsibBlock;
      static STONE_PRESSURE_PLATE: nmsibBlock;
      static STONE_SLAB: nmsibBlock;
      static STONE_STAIRS: nmsibBlock;
      static STONECUTTER: nmsibBlock;
      static STRIPPED_ACACIA_LOG: nmsibBlock;
      static STRIPPED_ACACIA_WOOD: nmsibBlock;
      static STRIPPED_BIRCH_LOG: nmsibBlock;
      static STRIPPED_BIRCH_WOOD: nmsibBlock;
      static STRIPPED_CRIMSON_HYPHAE: nmsibBlock;
      static STRIPPED_CRIMSON_STEM: nmsibBlock;
      static STRIPPED_DARK_OAK_LOG: nmsibBlock;
      static STRIPPED_DARK_OAK_WOOD: nmsibBlock;
      static STRIPPED_JUNGLE_LOG: nmsibBlock;
      static STRIPPED_JUNGLE_WOOD: nmsibBlock;
      static STRIPPED_OAK_LOG: nmsibBlock;
      static STRIPPED_OAK_WOOD: nmsibBlock;
      static STRIPPED_SPRUCE_LOG: nmsibBlock;
      static STRIPPED_SPRUCE_WOOD: nmsibBlock;
      static STRIPPED_WARPED_HYPHAE: nmsibBlock;
      static STRIPPED_WARPED_STEM: nmsibBlock;
      static STRUCTURE_BLOCK: nmsibBlock;
      static STRUCTURE_VOID: nmsibBlock;
      static SUGAR_CANE: nmsibBlock;
      static SUNFLOWER: nmsibBlock;
      static SWEET_BERRY_BUSH: nmsibBlock;
      static TALL_GRASS: nmsibBlock;
      static TALL_SEAGRASS: nmsibBlock;
      static TARGET: nmsibBlock;
      static TERRACOTTA: nmsibBlock;
      static TNT: nmsibBlock;
      static TORCH: nmsibBlock;
      static TRAPPED_CHEST: nmsibBlock;
      static TRIPWIRE: nmsibBlock;
      static TRIPWIRE_HOOK: nmsibBlock;
      static TUBE_CORAL: nmsibBlock;
      static TUBE_CORAL_BLOCK: nmsibBlock;
      static TUBE_CORAL_FAN: nmsibBlock;
      static TUBE_CORAL_WALL_FAN: nmsibBlock;
      static TURTLE_EGG: nmsibBlock;
      static TWISTING_VINES: nmsibBlock;
      static TWISTING_VINES_PLANT: nmsibBlock;
      static VINE: nmsibBlock;
      static VOID_AIR: nmsibBlock;
      static WALL_TORCH: nmsibBlock;
      static WARPED_BUTTON: nmsibBlock;
      static WARPED_DOOR: nmsibBlock;
      static WARPED_FENCE: nmsibBlock;
      static WARPED_FENCE_GATE: nmsibBlock;
      static WARPED_FUNGUS: nmsibBlock;
      static WARPED_HYPHAE: nmsibBlock;
      static WARPED_NYLIUM: nmsibBlock;
      static WARPED_PLANKS: nmsibBlock;
      static WARPED_PRESSURE_PLATE: nmsibBlock;
      static WARPED_ROOTS: nmsibBlock;
      static WARPED_SIGN: nmsibBlock;
      static WARPED_SLAB: nmsibBlock;
      static WARPED_STAIRS: nmsibBlock;
      static WARPED_STEM: nmsibBlock;
      static WARPED_TRAPDOOR: nmsibBlock;
      static WARPED_WALL_SIGN: nmsibBlock;
      static WARPED_WART_BLOCK: nmsibBlock;
      static WATER: nmsibBlock;
      static WEEPING_VINES: nmsibBlock;
      static WEEPING_VINES_PLANT: nmsibBlock;
      static WET_SPONGE: nmsibBlock;
      static WHEAT: nmsibBlock;
      static WHITE_BANNER: nmsibBlock;
      static WHITE_BED: nmsibBlock;
      static WHITE_CARPET: nmsibBlock;
      static WHITE_CONCRETE: nmsibBlock;
      static WHITE_CONCRETE_POWDER: nmsibBlock;
      static WHITE_GLAZED_TERRACOTTA: nmsibBlock;
      static WHITE_SHULKER_BOX: nmsibBlock;
      static WHITE_STAINED_GLASS: nmsibBlock;
      static WHITE_STAINED_GLASS_PANE: nmsibBlock;
      static WHITE_TERRACOTTA: nmsibBlock;
      static WHITE_TULIP: nmsibBlock;
      static WHITE_WALL_BANNER: nmsibBlock;
      static WHITE_WOOL: nmsibBlock;
      static WITHER_ROSE: nmsibBlock;
      static WITHER_SKELETON_SKULL: nmsibBlock;
      static WITHER_SKELETON_WALL_SKULL: nmsibBlock;
      static YELLOW_BANNER: nmsibBlock;
      static YELLOW_BED: nmsibBlock;
      static YELLOW_CARPET: nmsibBlock;
      static YELLOW_CONCRETE: nmsibBlock;
      static YELLOW_CONCRETE_POWDER: nmsibBlock;
      static YELLOW_GLAZED_TERRACOTTA: nmsibBlock;
      static YELLOW_SHULKER_BOX: nmsibBlock;
      static YELLOW_STAINED_GLASS: nmsibBlock;
      static YELLOW_STAINED_GLASS_PANE: nmsibBlock;
      static YELLOW_TERRACOTTA: nmsibBlock;
      static YELLOW_WALL_BANNER: nmsibBlock;
      static YELLOW_WOOL: nmsibBlock;
      static ZOMBIE_HEAD: nmsibBlock;
      static ZOMBIE_WALL_HEAD: nmsibBlock;
      addBlockAlternative (alternative: nmsibBlockAlternative): void;
      breaksInstantaneously (): boolean;
      static fromStateId (blockStateId: number): nmsibBlock;
      getAlternative (blockId: number): nmsibBlockAlternative;
      getAlternatives (): juList<nmsibBlockAlternative>;
      getBlockEntityName (): nmsuNamespaceID;
      getBlockId (): number;
      getHardness (): number;
      getName (): string;
      getResistance (): number;
      hasBlockEntity (): boolean;
      isAir (): boolean;
      isLiquid (): boolean;
      isSolid (): boolean;
      key (): nkakKey;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsibBlock;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsibBlock[];
      withProperties (...properties: string[]): number;
   }
   export class nmsnpspBlockActionPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsibBlockAlternative extends jlObject {
      constructor (id: number, ...properties: string[]);
      createPropertiesMap (): juMap<string,string>;
      getId (): number;
      getProperties (): string[];
      getProperty (key: string): string;
      toString (): string;
   }
   export class nmsnpspBlockBreakAnimationPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      constructor (entityId: number, blockPosition: nmsuBlockPosition, destroyStage: number);
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspBlockChangePacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspBlockEntityDataPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsibBlockFace extends jlEnum<nmsibBlockFace> {
      static BOTTOM: nmsibBlockFace;
      static EAST: nmsibBlockFace;
      static NORTH: nmsibBlockFace;
      static SOUTH: nmsibBlockFace;
      static TOP: nmsibBlockFace;
      static WEST: nmsibBlockFace;
      getOppositeFace (): nmsibBlockFace;
      toDirection (): nmsuDirection;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsibBlockFace;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsibBlockFace[];
   }
   /**This class performs ray tracing and iterates along blocks on a line*/
   export class nmsubBlockIterator extends jlObject implements juIterator<nmsuBlockPosition> {
      constructor (entity: nmseLivingEntity);
      constructor (entity: nmseLivingEntity, maxDistance: number);
      constructor (pos: nmsuPosition);
      constructor (pos: nmsuPosition, yOffset: number);
      constructor (pos: nmsuPosition, yOffset: number, maxDistance: number);
      constructor (start: nmsuVector, direction: nmsuVector, yOffset: number, maxDistance: number);
      static floor (num: number): number;
      /**Returns true if the iteration has more elements*/
      hasNext (): boolean;
      /**Returns the next BlockPosition in the trace*/
      next (): nmsuBlockPosition;
      remove (): void;
      static round (num: number): number;
   }
   export class nmsibBlockManager extends jlObject {
      constructor ();
      /**Gets the BlockPlacementRule of the specific block.*/
      getBlockPlacementRule (blockStateId: number): nmsibrBlockPlacementRule;
      /**Gets the BlockPlacementRule of the specific block.*/
      getBlockPlacementRule (block: nmsibBlock): nmsibrBlockPlacementRule;
      /**Gets the CustomBlock with the specific custom block id CustomBlock.getCustomBlockId().*/
      getCustomBlock (id: number): nmsibCustomBlock;
      /**Gets the CustomBlock with the specific identifier CustomBlock.getIdentifier().*/
      getCustomBlock (identifier: string): nmsibCustomBlock;
      /**Gets all the registered custom blocks.*/
      getCustomBlocks (): juCollection<nmsibCustomBlock>;
      /**Registers a BlockPlacementRule.*/
      registerBlockPlacementRule (blockPlacementRule: nmsibrBlockPlacementRule): void;
      /**Registers a CustomBlock.*/
      registerCustomBlock (customBlock: nmsibCustomBlock): void;
   }
   /**Represents an element which can place blocks at position.    Notably used by Instance, Batch.*/
   export interface nmsiBlockModifier {
      setBlock (x: number, y: number, z: number, block: nmsibBlock): void;
      setBlock (blockPosition: nmsuBlockPosition, block: nmsibBlock): void;
      setBlockStateId (x: number, y: number, z: number, blockStateId: number): void;
      /**Sets a block at a position.*/
      setBlockStateId (x: number, y: number, z: number, blockStateId: number, data: nmsdData): void;
      setBlockStateId (blockPosition: nmsuBlockPosition, blockStateId: number): void;
      setCustomBlock (x: number, y: number, z: number, customBlockId: number): void;
      /**Sets a CustomBlock at a position.*/
      setCustomBlock (x: number, y: number, z: number, customBlockId: number, data: nmsdData): void;
      setCustomBlock (x: number, y: number, z: number, customBlockId: string): void;
      setCustomBlock (x: number, y: number, z: number, customBlockId: string, data: nmsdData): void;
      setCustomBlock (blockPosition: nmsuBlockPosition, customBlockId: string): void;
      setSeparateBlocks (x: number, y: number, z: number, blockStateId: number, customBlockId: number): void;
      /**Sets a CustomBlock at a position with a custom state id.*/
      setSeparateBlocks (x: number, y: number, z: number, blockStateId: number, customBlockId: number, data: nmsdData): void;
      setSeparateBlocks (blockPosition: nmsuBlockPosition, blockStateId: number, customBlockId: number): void;
   }
   export class nmslBlockPlacementListener extends jlObject {
      constructor ();
      static listener (packet: nmsnpcpClientPlayerBlockPlacementPacket, player: nmsePlayer): void;
   }
   export class nmsibrBlockPlacementRule extends jlObject {
      constructor (blockId: number);
      constructor (block: nmsibBlock);
      /**Called when the block is placed.*/
      blockPlace (instance: nmsiInstance, block: nmsibBlock, blockFace: nmsibBlockFace, blockPosition: nmsuBlockPosition, pl: nmsePlayer): number;
      /**Called when the block state id can be updated (for instance if a neighbour block changed).*/
      blockUpdate (instance: nmsiInstance, blockPosition: nmsuBlockPosition, currentStateID: number): number;
      getBlockId (): number;
   }
   /**Represents the position of a block, so with integers instead of floating numbers.*/
   export class nmsuBlockPosition extends jlObject implements nmsucPublicCloneable<nmsuBlockPosition> {
      constructor (x: number, y: number, z: number);
      constructor (x: number, y: number, z: number);
      constructor (position: nmsuVector);
      /**Adds offsets to this block position.*/
      add (x: number, y: number, z: number): nmsuBlockPosition;
      /**Adds offsets to this block position.*/
      add (pos: nmsuBlockPosition): nmsuBlockPosition;
      /**Creates and returns a copy of this object.*/
      clone (): nmsuBlockPosition;
      /**Sets the x\/y\/z fields of this block position to the value of block position.*/
      copyCoordinates (blockPosition: nmsuBlockPosition): void;
      equals (o: jlObject): boolean;
      /**Gets the distance to another block position.*/
      getDistance (blockPosition: nmsuBlockPosition): number;
      /**Gets the square distance to another block position.*/
      getDistanceSquared (blockPosition: nmsuBlockPosition): number;
      /**Gets the manhattan distance to another block position.*/
      getManhattanDistance (blockPosition: nmsuBlockPosition): number;
      /**Gets BlockPosition relative to a BlockFace*/
      getRelative (face: nmsibBlockFace): nmsuBlockPosition;
      /**Gets the block X.*/
      getX (): number;
      /**Gets the block Y.*/
      getY (): number;
      /**Gets the block Z.*/
      getZ (): number;
      hashCode (): number;
      /**Changes the X field.*/
      setX (x: number): void;
      /**Changes the Y field.*/
      setY (y: number): void;
      /**Changes the Z field.*/
      setZ (z: number): void;
      /**Subtracts offsets to this block position.*/
      subtract (x: number, y: number, z: number): nmsuBlockPosition;
      /**Subtracts offsets to this block position.*/
      subtract (pos: nmsuBlockPosition): nmsuBlockPosition;
      /**Converts this block position to a Position.*/
      toPosition (): nmsuPosition;
      toString (): string;
   }
   export class nmsgltBlockType extends jlObject implements nmsglLootTableType {
      constructor ();
   }
   export class nmsubBlockUtils extends jlObject {
      constructor (instance: nmsiInstance, position: nmsuBlockPosition);
      above (): nmsubBlockUtils;
      below (): nmsubBlockUtils;
      east (): nmsubBlockUtils;
      equals (block: nmsibBlock): boolean;
      getBlock (): nmsibBlock;
      getRelativeTo (x: number, y: number, z: number): nmsubBlockUtils;
      north (): nmsubBlockUtils;
      south (): nmsubBlockUtils;
      west (): nmsubBlockUtils;
   }
   export class nmsemoBoatMeta extends nmsemEntityMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getDamageTaken (): number;
      getForwardDirection (): number;
      getSplashTimer (): number;
      getTimeSinceLastHit (): number;
      getType (): nmsemoBType;
      isLeftPaddleTurning (): boolean;
      isRightPaddleTurning (): boolean;
      setDamageTaken (value: number): void;
      setForwardDirection (value: number): void;
      setLeftPaddleTurning (value: boolean): void;
      setRightPaddleTurning (value: boolean): void;
      setSplashTimer (value: number): void;
      setTimeSinceLastHit (value: number): void;
      setType (value: nmsemoBType): void;
   }
   export class nmsemoBType extends jlEnum<nmsemoBType> {
      static ACACIA: nmsemoBType;
      static BIRCH: nmsemoBType;
      static DARK_OAK: nmsemoBType;
      static JUNGLE: nmsemoBType;
      static OAK: nmsemoBType;
      static SPRUCE: nmsemoBType;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsemoBType;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsemoBType[];
   }
   export class nmsdtaBooleanArrayData extends nmsdDataType<boolean[]> {
      constructor ();
      /**Decodes the data type.*/
      decode (reader: nmsubBinaryReader): boolean[];
      /**Encodes the data type.*/
      encode (writer: nmsubBinaryWriter, value: boolean[]): void;
   }
   export class nmsdtBooleanData extends nmsdDataType<jlBoolean> {
      constructor ();
      /**Decodes the data type.*/
      decode (reader: nmsubBinaryReader): boolean;
      /**Encodes the data type.*/
      encode (writer: nmsubBinaryWriter, value: boolean): void;
   }
   /**Used to launch Minestom with the MinestomRootClassLoader to allow for self-modifications*/
   export class nmsBootstrap extends jlObject {
      constructor ();
      static bootstrap (mainClassFullName: string, args: string[]): void;
   }
   /**Manages all boss bars known to this Minestom instance. Although this class can be used  to show boss bars to players, it is preferable to use the boss bar methods in the  Audience class instead.   This implementation is heavily based on  Velocity's boss bar  management system.*/
   export class nmsabBossBarManager extends jlObject {
      constructor ();
      /**Adds the specified players to the boss bar's viewers and spawns the boss bar, registering the  boss bar if needed.*/
      addBossBar (players: juCollection<nmsePlayer>, bar: nkabBossBar): void;
      /**Adds the specified player to the boss bar's viewers and spawns the boss bar, registering the  boss bar if needed.*/
      addBossBar (player: nmsePlayer, bar: nkabBossBar): void;
      /**Completely destroys a boss bar, removing it from all players.*/
      destroyBossBar (bossBar: nkabBossBar): void;
      /**Gets all the players for whom the given boss bar is currently visible.*/
      getBossBarViewers (bossBar: nkabBossBar): juCollection<nmsePlayer>;
      /**Gets a collection of all boss bars currently visible to a given player.*/
      getPlayerBossBars (player: nmsePlayer): juCollection<nkabBossBar>;
      /**Removes a player from all of their boss bars.*/
      removeAllBossBars (player: nmsePlayer): void;
      /**Removes the specified players from the boss bar's viewers and despawns the boss bar.*/
      removeBossBar (players: juCollection<nmsePlayer>, bar: nkabBossBar): void;
      /**Removes the specified player from the boss bar's viewers and despawns the boss bar.*/
      removeBossBar (player: nmsePlayer, bar: nkabBossBar): void;
   }
   export class nmsnpspBossBarPacket extends jlObject implements nmsnpsComponentHoldingServerPacket {
      constructor ();
      /**Gets the components held by this object.*/
      components (): juCollection<nkatComponent>;
      /**Returns a copy of this object.*/
      copyWithOperator (operator: jufUnaryOperator<nkatComponent>): nmsnpsServerPacket;
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspBAction extends jlEnum<nmsnpspBAction> {
      static ADD: nmsnpspBAction;
      static REMOVE: nmsnpspBAction;
      static UPDATE_FLAGS: nmsnpspBAction;
      static UPDATE_HEALTH: nmsnpspBAction;
      static UPDATE_STYLE: nmsnpspBAction;
      static UPDATE_TITLE: nmsnpspBAction;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsnpspBAction;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsnpspBAction[];
   }
   /**See https:\/\/wiki.vg\/Entity_metadata#Mobs_2*/
   export class nmscBoundingBox extends jlObject {
      constructor (entity: nmseEntity, x: number, y: number, z: number);
      /**Creates a new BoundingBox linked to the same Entity with contracted size.*/
      contract (x: number, y: number, z: number): nmscBoundingBox;
      /**Creates a new BoundingBox linked to the same Entity with expanded size.*/
      expand (x: number, y: number, z: number): nmscBoundingBox;
      /**Gets an array of Vector representing the points at the back of the BoundingBox.*/
      getBackFace (): nmsuVector[];
      /**Gets an array of Vector representing the points at the bottom of the BoundingBox.*/
      getBottomFace (): nmsuVector[];
      /**Gets the depth of the BoundingBox.*/
      getDepth (): number;
      /**Gets an array of Vector representing the points at the front of the BoundingBox.*/
      getFrontFace (): nmsuVector[];
      /**Gets the height of the BoundingBox.*/
      getHeight (): number;
      /**Gets an array of Vector representing the points on the left face of the BoundingBox.*/
      getLeftFace (): nmsuVector[];
      /**Gets the max X based on getWidth() and the Entity position.*/
      getMaxX (): number;
      /**Gets the max Y based on getHeight() and the Entity position.*/
      getMaxY (): number;
      /**Gets the max Z based on getDepth() and the Entity position.*/
      getMaxZ (): number;
      /**Gets the min X based on getWidth() and the Entity position.*/
      getMinX (): number;
      /**Gets the min Y based on the Entity position.*/
      getMinY (): number;
      /**Gets the min Z based on getDepth() and the Entity position.*/
      getMinZ (): number;
      /**Gets an array of Vector representing the points on the right face of the BoundingBox.*/
      getRightFace (): nmsuVector[];
      /**Gets an array of Vector representing the points at the top of the BoundingBox.*/
      getTopFace (): nmsuVector[];
      /**Gets the width of the BoundingBox.*/
      getWidth (): number;
      intersect (x: number, y: number, z: number): boolean;
      /**Used to know if two BoundingBox intersect with each other.*/
      intersect (boundingBox: nmscBoundingBox): boolean;
      /**Used to know if this BoundingBox intersects with the bounding box of an entity.*/
      intersect (entity: nmseEntity): boolean;
      /**Used to know if the bounding box intersects at a BlockPosition.*/
      intersect (blockPosition: nmsuBlockPosition): boolean;
      intersect (position: nmsuPosition): boolean;
      toString (): string;
   }
   export class nmsitBrewingStandInventory extends nmsiInventory {
      constructor (title: string);
      /**Gets the brewing stand brew time.*/
      getBrewTime (): number;
      /**Gets the brewing stand fuel time.*/
      getFuelTime (): number;
      /**Changes the brew time.*/
      setBrewTime (brewTime: number): void;
      /**Changes the fuel time.*/
      setFuelTime (fuelTime: number): void;
   }
   export class nmsuBufUtils extends jlObject {
      constructor ();
      static direct (): inbByteBuf;
   }
   /**BungeeCord forwarding support. This does not count as a security feature and you will still be required to manage your firewall.    Please consider using VelocityProxy instead.*/
   export class nmsebBungeeCordProxy extends jlObject {
      constructor ();
      /**Enables bungee IP forwarding.*/
      static enable (): void;
      /**Gets if bungee IP forwarding is enabled.*/
      static isEnabled (): boolean;
      static readSkin (json: string): nmsePlayerSkin;
   }
   export class nmsdtaByteArrayData extends nmsdDataType<byte[]> {
      constructor ();
      /**Decodes the data type.*/
      decode (reader: nmsubBinaryReader): number[];
      static decodeByteArray (binaryReader: nmsubBinaryReader): number[];
      /**Encodes the data type.*/
      encode (writer: nmsubBinaryWriter, value: number[]): void;
      static encodeByteArray (binaryWriter: nmsubBinaryWriter, value: number[]): void;
   }
   export class nmsdtByteData extends nmsdDataType<jlByte> {
      constructor ();
      /**Decodes the data type.*/
      decode (reader: nmsubBinaryReader): jlByte;
      /**Encodes the data type.*/
      encode (writer: nmsubBinaryWriter, value: jlByte): void;
   }
   export class nmsumByteRange extends nmsumRange<jlByte> {
      constructor (value: jlByte);
      constructor (minimum: jlByte, maximum: jlByte);
      /**Whether the given value is in range of the minimum and the maximum.*/
      isInRange (value: jlByte): boolean;
   }
   /**Implemented by server packets which can be temporary cached in memory to be re-sent later  without having to go through all the writing and compression.    getIdentifier() is to differentiate this packet from the others of the same type.*/
   export interface nmsucCacheablePacket {
      /**Gets the cache linked to this packet.*/
      getCache (): nmsucTemporaryPacketCache;
      static getCache (serverPacket: nmsnpsServerPacket): nmsnnpFramedPacket;
      /**Gets the identifier of this packet.*/
      getIdentifier (): juUUID;
      /**Gets the last time this packet changed.*/
      getTimestamp (): number;
      static writeCache (buffer: io.netty.buffer.ByteBuf, serverPacket: nmsnpsServerPacket): void;
   }
   export class nmsnpspCameraPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsrCampfireCookingRecipe extends nmsrRecipe {
      constructor (recipeId: string, group: string, result: nmsiItemStack, experience: number, cookingTime: number);
      getCookingTime (): number;
      getExperience (): number;
      getGroup (): string;
      getIngredient (): nmsnpspDIngredient;
      getResult (): nmsiItemStack;
      setCookingTime (cookingTime: number): void;
      setExperience (experience: number): void;
      setGroup (group: string): void;
      setIngredient (ingredient: nmsnpspDIngredient): void;
      setResult (result: nmsiItemStack): void;
   }
   /**Represents an Event which can be cancelled.*/
   export interface nmseCancellableEvent {
      /**Gets if the Event should be cancelled or not.*/
      isCancelled (): boolean;
      /**Marks the Event as cancelled or not.*/
      setCancelled (cancel: boolean): void;
   }
   export class nmsematCatMeta extends nmsematTameableAnimalMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getCollarColor (): number;
      getColor (): nmsematCColor;
      isLying (): boolean;
      isRelaxed (): boolean;
      setCollarColor (value: number): void;
      setColor (value: nmsematCColor): void;
      setLying (value: boolean): void;
      setRelaxed (value: boolean): void;
   }
   export class nmsematCColor extends jlEnum<nmsematCColor> {
      static ALL_BLACK: nmsematCColor;
      static BLACK: nmsematCColor;
      static BRITISH_SHORTHAIR: nmsematCColor;
      static CALICO: nmsematCColor;
      static JELLIE: nmsematCColor;
      static PERSIAN: nmsematCColor;
      static RAGDOLL: nmsematCColor;
      static RED: nmsematCColor;
      static SIAMESE: nmsematCColor;
      static TABBY: nmsematCColor;
      static WHITE: nmsematCColor;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsematCColor;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsematCColor[];
   }
   export class nmsemmCaveSpiderMeta extends nmsemmSpiderMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   export class nmsnpspChangeGameStatePacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspCReason extends jlEnum<nmsnpspCReason> {
      static ARROW_HIT_PLAYER: nmsnpspCReason;
      static BEGIN_RAINING: nmsnpspCReason;
      static CHANGE_GAMEMODE: nmsnpspCReason;
      static DEMO_EVENT: nmsnpspCReason;
      static ENABLE_RESPAWN_SCREEN: nmsnpspCReason;
      static END_RAINING: nmsnpspCReason;
      static NO_RESPAWN_BLOCK: nmsnpspCReason;
      static PLAY_PUFFERFISH_STING_SOUND: nmsnpspCReason;
      static PLAYER_ELDER_GUARDIAN_MOB_APPEARANCE: nmsnpspCReason;
      static RAIN_LEVEL_CHANGE: nmsnpspCReason;
      static THUNDER_LEVEL_CHANGE: nmsnpspCReason;
      static WIN_GAME: nmsnpspCReason;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsnpspCReason;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsnpspCReason[];
   }
   export class nmsdtaCharacterArrayData extends nmsdDataType<char[]> {
      constructor ();
      /**Decodes the data type.*/
      decode (reader: nmsubBinaryReader): string[];
      /**Encodes the data type.*/
      encode (writer: nmsubBinaryWriter, value: string[]): void;
   }
   export class nmsdtCharacterData extends nmsdDataType<jlCharacter> {
      constructor ();
      /**Decodes the data type.*/
      decode (reader: nmsubBinaryReader): jlCharacter;
      /**Encodes the data type.*/
      encode (writer: nmsubBinaryWriter, value: jlCharacter): void;
   }
   export class nmslChatMessageListener extends jlObject {
      constructor ();
      static listener (packet: nmsnpcpClientChatMessagePacket, player: nmsePlayer): void;
   }
   /**Represents an outgoing chat message packet.*/
   export class nmsnpspChatMessagePacket extends jlObject implements nmsnpsComponentHoldingServerPacket {
      constructor ();
      constructor (message: nkatComponent, position: nmsmChatPosition, uuid: juUUID);
      /**Gets the components held by this object.*/
      components (): juCollection<nkatComponent>;
      /**Returns a copy of this object.*/
      copyWithOperator (operator: jufUnaryOperator<nkatComponent>): nmsnpsServerPacket;
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   /**The messages that a player is willing to receive.*/
   export class nmsmChatMessageType extends jlEnum<nmsmChatMessageType> {
      /**The client wants all chat messages.*/
      static FULL: nmsmChatMessageType;
      /**The client doesn't want any messages.*/
      static NONE: nmsmChatMessageType;
      /**The client only wants messages from commands, or system messages.*/
      static SYSTEM: nmsmChatMessageType;
      /**Checks if this message type is accepting of messages from a given position.*/
      accepts (chatPosition: nmsmChatPosition): boolean;
      /**Gets a chat message type from a packet ID.*/
      static fromPacketID (id: number): nmsmChatMessageType;
      /**Gets the packet ID for this chat message type.*/
      getPacketID (): number;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsmChatMessageType;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsmChatMessageType[];
   }
   /**The different positions for chat messages.*/
   export class nmsmChatPosition extends jlEnum<nmsmChatPosition> {
      /**A player-initiated chat message.*/
      static CHAT: nmsmChatPosition;
      /**Game state information displayed above the hot bar.*/
      static GAME_INFO: nmsmChatPosition;
      /**Feedback from running a command or other system messages.*/
      static SYSTEM_MESSAGE: nmsmChatPosition;
      /**Gets a position from an Adventure message type.*/
      static fromMessageType (messageType: nkaaMessageType): nmsmChatPosition;
      /**Gets a position from a packet ID.*/
      static fromPacketID (id: number): nmsmChatPosition;
      /**Gets the packet ID of this chat position.*/
      getID (): number;
      /**Gets the Adventure message type from this position.*/
      getMessageType (): nkaaMessageType;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsmChatPosition;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsmChatPosition[];
   }
   /**Convenient class to check for common exceptions.*/
   export class nmsuvCheck extends jlObject {
      static argCondition (condition: boolean, reason: string): void;
      static argCondition (condition: boolean, reason: string, ...arguments: jlObject[]): void;
      static fail (reason: string): void;
      static notNull (object: jlObject, reason: string): void;
      static notNull (object: jlObject, reason: string, ...arguments: jlObject[]): void;
      static stateCondition (condition: boolean, reason: string): void;
      static stateCondition (condition: boolean, reason: string, ...arguments: jlObject[]): void;
   }
   export class nmsemaChestedHorseMeta extends nmsemaAbstractHorseMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      isHasChest (): boolean;
      setHasChest (value: boolean): void;
   }
   export class nmsemmChestMinecartMeta extends nmsemmAbstractMinecartContainerMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getObjectData (): number;
   }
   export class nmsemaChickenMeta extends nmsemaAnimalMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   /**A chunk is a part of an Instance, limited by a size of 16x256x16 blocks and subdivided in 16 sections of 16 blocks height.  Should contains all the blocks located at those positions and manage their tick updates.  Be aware that implementations do not need to be thread-safe, all chunks are guarded by their own instance ('this').    Chunks can be serialized using getSerializedData() and deserialized back with readChunk(BinaryReader, ChunkCallback),  allowing you to implement your own storage solution if needed.    You can create your own implementation of this class by extending it  and create the objects in InstanceContainer.setChunkSupplier(ChunkSupplier).    You generally want to avoid storing references of this object as this could lead to a huge memory leak,  you should store the chunk coordinates instead.*/
   export class nmsiChunk extends jlObject implements nmsViewable, nmsTickable, nmsdDataContainer {
      constructor (instance: nmsiInstance, biomes: nmswbBiome[], chunkX: number, chunkZ: number, shouldGenerate: boolean);
      /**Sends the chunk to player and add it to the player viewing chunks collection  and send a PlayerChunkLoadEvent.*/
      addViewer (player: nmsePlayer): boolean;
      /**Creates a copy of this chunk, including blocks state id, custom block id, biomes, update data.*/
      copy (instance: nmsiInstance, chunkX: number, chunkZ: number): nmsiChunk;
      /**Gets the ChunkDataPacket to update a single chunk section.*/
      createChunkSectionUpdatePacket (section: number): nmsnpspChunkDataPacket;
      /**Creates a ChunkDataPacket with this chunk data ready to be written.*/
      createFreshPacket (): nmsnpspChunkDataPacket;
      getBiomes (): nmswbBiome[];
      /**Gets the Data at a block index.*/
      getBlockData (index: number): nmsdData;
      /**Gets all the block entities in this chunk.*/
      getBlockEntities (): juSet<jlInteger>;
      /**Gets the index of a position, used to store blocks.*/
      getBlockIndex (x: number, y: number, z: number): number;
      /**Gets the block state id at a position.*/
      getBlockStateId (x: number, y: number, z: number): number;
      /**Gets the chunk X.*/
      getChunkX (): number;
      /**Gets the chunk Z.*/
      getChunkZ (): number;
      /**Gets the CustomBlock at a block index.*/
      getCustomBlock (index: number): nmsibCustomBlock;
      /**Gets the CustomBlock at a position.*/
      getCustomBlock (x: number, y: number, z: number): nmsibCustomBlock;
      /**Gets the custom block id at a position.*/
      getCustomBlockId (x: number, y: number, z: number): number;
      /**Gets the Data of this container.*/
      getData (): nmsdData;
      /**Gets a ChunkDataPacket which should contain the full chunk.*/
      getFreshFullDataPacket (): nmsnpspChunkDataPacket;
      /**Gets a ChunkDataPacket which should contain the non-full chunk.*/
      getFreshPartialDataPacket (): nmsnpspChunkDataPacket;
      /**Gets the unique identifier of this chunk.*/
      getIdentifier (): juUUID;
      /**Gets the instance where this chunk is stored*/
      getInstance (): nmsiInstance;
      /**Gets the last time that this chunk changed.*/
      getLastChangeTime (): number;
      /**Gets the light packet of this chunk.*/
      getLightPacket (): nmsnpspUpdateLightPacket;
      /**Serializes the chunk into bytes.*/
      getSerializedData (): number[];
      /**Gets all the viewers of this viewable element.*/
      getViewers (): juSet<nmsePlayer>;
      /**Gets if a block state id represents a block entity.*/
      isBlockEntity (blockStateId: number): boolean;
      /**Used to verify if the chunk should still be kept in memory.*/
      isLoaded (): boolean;
      /**Gets if this chunk is read-only.*/
      isReadOnly (): boolean;
      /**Reads the chunk from binary.*/
      readChunk (reader: nmsubBinaryReader, callback: nmsucChunkCallback): void;
      /**Changes the block state id at a position (the custom block id stays the same).*/
      refreshBlockStateId (x: number, y: number, z: number, blockStateId: number): void;
      /**Changes the block state id and the custom block id at a position.*/
      refreshBlockValue (x: number, y: number, z: number, blockStateId: number, customBlockId: number): void;
      /**Removes the chunk to the player viewing chunks collection  and send a PlayerChunkUnloadEvent.*/
      removeViewer (player: nmsePlayer): boolean;
      /**Resets the chunk, this means clearing all the data making it empty.*/
      reset (): void;
      sendChunk (): void;
      /**Sends the chunk data to player.*/
      sendChunk (player: nmsePlayer): void;
      /**Sends a chunk section update packet to player.*/
      sendChunkSectionUpdate (section: number, player: nmsePlayer): void;
      /**Sends a full ChunkDataPacket to all chunk viewers.*/
      sendChunkUpdate (): void;
      /**Sends a full ChunkDataPacket to player.*/
      sendChunkUpdate (player: nmsePlayer): void;
      /**Sets the Data at a position.*/
      setBlockData (x: number, y: number, z: number, data: nmsdData): void;
      /**Changes this chunk columnar space.*/
      setColumnarSpace (columnarSpace: nmsepPFColumnarSpace): void;
      /**Sets the Data of this container.*/
      setData (data: nmsdData): void;
      /**Changes the read state of the chunk.*/
      setReadOnly (readOnly: boolean): void;
      /**Gets if this chunk will or had been loaded with a ChunkGenerator.*/
      shouldGenerate (): boolean;
      /**Executes a chunk tick.*/
      tick (time: number): void;
      /**Creates a Position object based on this chunk.*/
      toPosition (): nmsuPosition;
      toString (): string;
      /**Sets the chunk as "unloaded".*/
      unload (): void;
      /**Sets a block at a position.*/
      UNSAFE_setBlock (x: number, y: number, z: number, blockStateId: number, customBlockId: number, data: nmsdData, updatable: boolean): void;
   }
   /**A Batch used when all of the block changed are contained inside a single chunk.  If more than one chunk is needed, use an AbsoluteBlockBatch instead.    The batch can be placed in any chunk in any instance, however it will always remain  aligned to a chunk border. If completely translatable block changes are needed, use a  RelativeBlockBatch instead.    Coordinates are relative to the chunk (0-15) instead of world coordinates.*/
   export class nmsibChunkBatch extends jlObject implements nmsibBatch<nmsucChunkCallback> {
      constructor ();
      constructor (blocks: it.unimi.dsi.fastutil.numbers.LongList, blockDataMap: it.unimi.dsi.fastutil.numbers.Int2ObjectMap<nmsdData>, options: nmsibBatchOption);
      constructor (options: nmsibBatchOption);
      /**Apply this batch to the given chunk.*/
      apply (instance: nmsiInstance, chunkX: number, chunkZ: number, callback: nmsucChunkCallback): nmsibChunkBatch;
      /**Apply this batch to the given chunk.*/
      apply (instance: nmsiInstance, chunk: nmsiChunk, callback: nmsucChunkCallback): nmsibChunkBatch;
      /**Apply this batch to the given chunk, and execute the callback depending on safeCallback.*/
      apply (instance: nmsiInstance, chunk: nmsiChunk, callback: nmsucChunkCallback, safeCallback: boolean): nmsibChunkBatch;
      /**Apply this batch to chunk (0, 0).*/
      apply (instance: nmsiInstance, callback: nmsucChunkCallback): nmsibChunkBatch;
      /**Blocks the current thread until the batch is ready to be applied.*/
      awaitReady (): void;
      /**Removes all block data from this batch.*/
      clear (): void;
      /**Gets if the batch is ready to be applied to an instance.*/
      isReady (): boolean;
      /**Sets a CustomBlock at a position with a custom state id.*/
      setSeparateBlocks (x: number, y: number, z: number, blockStateId: number, customBlockId: number, data: nmsdData): void;
      /**Apply this batch to the given chunk, and execute the callback  immediately when the blocks have been applied, in an unknown thread.*/
      unsafeApply (instance: nmsiInstance, chunk: nmsiChunk, callback: nmsucChunkCallback): nmsibChunkBatch;
   }
   export interface nmsucChunkCallback extends jufConsumer<nmsiChunk> {}
   export class nmsnpspChunkDataPacket extends jlObject implements nmsnpsServerPacket, nmsucCacheablePacket {
      constructor (identifier: juUUID, timestamp: number);
      /**Gets the cache linked to this packet.*/
      getCache (): nmsucTemporaryPacketCache;
      /**Gets the id of this packet.*/
      getId (): number;
      /**Gets the identifier of this packet.*/
      getIdentifier (): juUUID;
      /**Gets the last time this packet changed.*/
      getTimestamp (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsibChunkGenerationBatch extends nmsibChunkBatch {
      constructor (instance: nmsiInstanceContainer, chunk: nmsiChunk);
      /**Apply this batch to the given chunk, and execute the callback depending on safeCallback.*/
      apply (instance: nmsiInstance, chunk: nmsiChunk, callback: nmsucChunkCallback, safeCallback: boolean): nmsibChunkBatch;
      /**Removes all block data from this batch.*/
      clear (): void;
      generate (chunkGenerator: nmsiChunkGenerator, callback: nmsucChunkCallback): void;
      /**Sets a CustomBlock at a position with a custom state id.*/
      setSeparateBlocks (x: number, y: number, z: number, blockStateId: number, customBlockId: number, data: nmsdData): void;
   }
   /**Responsible for the Chunk generation, can be set using Instance.setChunkGenerator(ChunkGenerator).    Called if the instance IChunkLoader hasn't been able to load the chunk.*/
   export interface nmsiChunkGenerator {
      /**Defines all the Biome in the Chunk.*/
      fillBiomes (biomes: nmswbBiome[], chunkX: number, chunkZ: number): void;
      /**Called when the blocks in the Chunk should be set using BlockModifier.setBlock(int, int, int, Block)  or similar.*/
      generateChunkData (batch: nmsibChunkBatch, chunkX: number, chunkZ: number): void;
      /**Gets all the ChunkPopulator of this generator.*/
      getPopulators (): juList<nmsiChunkPopulator>;
   }
   export interface nmsiChunkPopulator {
      populateChunk (batch: nmsibChunkBatch, chunk: nmsiChunk): void;
   }
   /**Used to customize which type of Chunk an implementation should use.*/
   export interface nmsucChunkSupplier {
      /**Creates a Chunk object.*/
      createChunk (instance: nmsiInstance, biomes: nmswbBiome[], chunkX: number, chunkZ: number): nmsiChunk;
   }
   export class nmsucChunkUtils extends jlObject {
      /**Converts a block index to a chunk position X.*/
      static blockIndexToChunkPositionX (index: number): number;
      /**Converts a block index to a chunk position Y.*/
      static blockIndexToChunkPositionY (index: number): number;
      /**Converts a block index to a chunk position Z.*/
      static blockIndexToChunkPositionZ (index: number): number;
      /**Converts a block chunk index to its instance position X.*/
      static blockIndexToPositionX (index: number, chunkX: number): number;
      /**Converts a block chunk index to its instance position Y.*/
      static blockIndexToPositionY (index: number): number;
      /**Converts a block chunk index to its instance position Z.*/
      static blockIndexToPositionZ (index: number, chunkZ: number): number;
      /**Gets the block index of a position.*/
      static getBlockIndex (x: number, y: number, z: number): number;
      static getBlockPosition (index: number, chunkX: number, chunkZ: number): nmsuBlockPosition;
      static getChunkCoordinate (xz: number): number;
      /**Converts a chunk index to its chunk X position.*/
      static getChunkCoordX (index: number): number;
      /**Converts a chunk index to its chunk Z position.*/
      static getChunkCoordZ (index: number): number;
      /**Gets the chunk index of chunk coordinates.*/
      static getChunkIndex (chunkX: number, chunkZ: number): number;
      static getChunkIndexWithSection (chunkX: number, chunkZ: number, section: number): number;
      /**Gets the chunks in range of a position.*/
      static getChunksInRange (position: nmsuPosition, range: number): number[];
      /**Returns the chunk X, from a chunk index encoded with getChunkIndexWithSection(int, int, int)*/
      static getChunkXFromChunkIndexWithSection (index: number): number;
      /**Returns the chunk Z, from a chunk index encoded with getChunkIndexWithSection(int, int, int)*/
      static getChunkZFromChunkIndexWithSection (index: number): number;
      /**Gets all the loaded neighbours of a chunk and itself, no diagonals.*/
      static getNeighbours (instance: nmsiInstance, chunkX: number, chunkZ: number): number[];
      static getSectionAt (y: number): number;
      /**Returns the section, from a chunk index encoded with getChunkIndexWithSection(int, int, int)*/
      static getSectionFromChunkIndexWithSection (index: number): number;
      /**Gets if a chunk is loaded.*/
      static isLoaded (instance: nmsiInstance, x: number, z: number): boolean;
      /**Gets if a chunk is loaded.*/
      static isLoaded (chunk: nmsiChunk): boolean;
      /**Executes Instance.loadOptionalChunk(int, int, ChunkCallback) for the array of chunks chunks  with multiple callbacks, eachCallback which is executed each time a new chunk is loaded and  endCallback when all the chunks in the array have been loaded.*/
      static optionalLoadAll (instance: nmsiInstance, chunks: number[], eachCallback: nmsucChunkCallback, endCallback: nmsucChunkCallback): void;
      static same (chunk: nmsiChunk, x: number, z: number): boolean;
      static same (pos1: nmsuPosition, pos2: nmsuPosition): boolean;
   }
   export class nmsemCipherBase extends jlObject {
      constructor (cipher: jcCipher);
      decrypt (channelHandlerContext: io.netty.channel.ChannelHandlerContext, byteBufIn: io.netty.buffer.ByteBuf): inbByteBuf;
      encrypt (byteBufIn: io.netty.buffer.ByteBuf, byteBufOut: io.netty.buffer.ByteBuf): void;
   }
   export class nmsicClickType extends jlEnum<nmsicClickType> {
      static CHANGE_HELD: nmsicClickType;
      static DOUBLE_CLICK: nmsicClickType;
      static DRAGGING: nmsicClickType;
      static DROP: nmsicClickType;
      static LEFT_CLICK: nmsicClickType;
      static RIGHT_CLICK: nmsicClickType;
      static SHIFT_CLICK: nmsicClickType;
      static START_DOUBLE_CLICK: nmsicClickType;
      static START_DRAGGING: nmsicClickType;
      static START_SHIFT_CLICK: nmsicClickType;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsicClickType;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsicClickType[];
   }
   export class nmsnpcpClientAdvancementTabPacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpcpClientAnimationPacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnncClientChannel extends io.netty.channel.SimpleChannelInboundHandler< nmsnnpInboundPacket> {
      constructor (packetProcessor: nmsnPacketProcessor);
      channelActive (ctx: io.netty.channel.ChannelHandlerContext): void;
      channelInactive (ctx: io.netty.channel.ChannelHandlerContext): void;
      channelRead0 (ctx: io.netty.channel.ChannelHandlerContext, packet: nmsnnpInboundPacket): void;
      exceptionCaught (ctx: io.netty.channel.ChannelHandlerContext, cause: jlThrowable): void;
   }
   export class nmsnpcpClientChatMessagePacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpcpClientClickWindowButtonPacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpcpClientClickWindowPacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpcpClientCloseWindowPacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpcpClientCraftRecipeRequest extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpcpClientCreativeInventoryActionPacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpcpClientEditBookPacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpcpClientEntityActionPacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpcpCAction extends jlEnum<nmsnpcpCAction> {
      static LEAVE_BED: nmsnpcpCAction;
      static OPEN_HORSE_INVENTORY: nmsnpcpCAction;
      static START_FLYING_ELYTRA: nmsnpcpCAction;
      static START_JUMP_HORSE: nmsnpcpCAction;
      static START_SNEAKING: nmsnpcpCAction;
      static START_SPRINTING: nmsnpcpCAction;
      static STOP_JUMP_HORSE: nmsnpcpCAction;
      static STOP_SNEAKING: nmsnpcpCAction;
      static STOP_SPRINTING: nmsnpcpCAction;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsnpcpCAction;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsnpcpCAction[];
   }
   export class nmsnpcpClientGenerateStructurePacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpcpClientHeldItemChangePacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpcpClientInteractEntityPacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpcpCType extends jlEnum<nmsnpcpCType> {
      static ATTACK: nmsnpcpCType;
      static INTERACT: nmsnpcpCType;
      static INTERACT_AT: nmsnpcpCType;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsnpcpCType;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsnpcpCType[];
   }
   export class nmsnpcpClientKeepAlivePacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpchClientLoginPacketsHandler extends nmsnpchClientPacketsHandler {
      constructor ();
   }
   export class nmsnpcpClientNameItemPacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   /**Represents a packet received from a client.*/
   export interface nmsnpcClientPacket extends nmsubReadable, nmsubWriteable {
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   /**Interface used to add a listener for incoming packets with ConnectionManager.onPacketReceive(ClientPacketConsumer).*/
   export interface nmslmClientPacketConsumer {
      /**Called when a packet is received from a client.*/
      accept (player: nmsePlayer, packetController: nmslmPacketController, packet: nmsnpcClientPlayPacket): void;
   }
   /**Contains registered packets and a way to instantiate them.    Packets are register using register(int, ClientPacketSupplier)  (you can override a packet id even if not recommended and not officially supported) and retrieved with getPacketInstance(int).    If you want to fill the packet from a buffer, consider using Readable.read(BinaryReader) after getting the packet instance.*/
   export class nmsnpchClientPacketsHandler extends jlObject {
      constructor ();
      /**Retrieves a ClientPlayPacket from its id.*/
      getPacketInstance (id: number): nmsnpcClientPacket;
      /**Registers a client packet which can be retrieved later using getPacketInstance(int).*/
      register (id: number, packetSupplier: nmsnpchCClientPacketSupplier): void;
   }
   /**Convenient interface to supply a ClientPacket.*/
   export interface nmsnpchCClientPacketSupplier extends jufSupplier<nmsnpcClientPacket> {}
   export class nmsnpcpClientPickItemPacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpcpClientPlayerAbilitiesPacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpcpClientPlayerBlockPlacementPacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpcpClientPlayerDiggingPacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpcpCStatus extends jlEnum<nmsnpcpCStatus> {
      static CANCELLED_DIGGING: nmsnpcpCStatus;
      static DROP_ITEM: nmsnpcpCStatus;
      static DROP_ITEM_STACK: nmsnpcpCStatus;
      static FINISHED_DIGGING: nmsnpcpCStatus;
      static STARTED_DIGGING: nmsnpcpCStatus;
      static SWAP_ITEM_HAND: nmsnpcpCStatus;
      static UPDATE_ITEM_STATE: nmsnpcpCStatus;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsnpcpCStatus;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsnpcpCStatus[];
   }
   export class nmsnpcpClientPlayerPacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpcpClientPlayerPositionAndRotationPacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpcpClientPlayerPositionPacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpcpClientPlayerRotationPacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpcClientPlayPacket extends jlObject implements nmsnpcClientPacket {
      constructor ();
      /**Processes the packet for player.*/
      process (player: nmsePlayer): void;
   }
   export class nmsnpchClientPlayPacketsHandler extends nmsnpchClientPacketsHandler {
      constructor ();
   }
   export class nmsnpcpClientPluginMessagePacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export interface nmsnpcClientPreplayPacket extends nmsnpcClientPacket {
      /**Called when the packet is received.*/
      process (connection: nmsnpPlayerConnection): void;
   }
   export class nmsnpcpClientQueryBlockNbtPacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpcpClientQueryEntityNbtPacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpcpClientResourcePackStatusPacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpcpClientSelectTradePacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpcpClientSetBeaconEffectPacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpcpClientSetDisplayedRecipePacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpcpClientSetRecipeBookStatePacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpcpCBookType extends jlEnum<nmsnpcpCBookType> {
      static BLAST_FURNACE: nmsnpcpCBookType;
      static CRAFTING: nmsnpcpCBookType;
      static FURNACE: nmsnpcpCBookType;
      static SMOKER: nmsnpcpCBookType;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsnpcpCBookType;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsnpcpCBookType[];
   }
   export class nmsnpcpClientSettingsPacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpcpClientSpectatePacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpcpClientStatusPacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpcpCAction extends jlEnum<nmsnpcpCAction> {
      static PERFORM_RESPAWN: nmsnpcpCAction;
      static REQUEST_STATS: nmsnpcpCAction;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsnpcpCAction;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsnpcpCAction[];
   }
   export class nmsnpchClientStatusPacketsHandler extends nmsnpchClientPacketsHandler {
      constructor ();
   }
   export class nmsnpcpClientSteerBoatPacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpcpClientSteerVehiclePacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpcpClientTabCompletePacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpcpClientTeleportConfirmPacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpcpClientUpdateCommandBlockMinecartPacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpcpClientUpdateCommandBlockPacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpcpCMode extends jlEnum<nmsnpcpCMode> {
      static AUTO: nmsnpcpCMode;
      static REDSTONE: nmsnpcpCMode;
      static SEQUENCE: nmsnpcpCMode;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsnpcpCMode;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsnpcpCMode[];
   }
   export class nmsnpcpClientUpdateSignPacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpcpClientUpdateStructureBlockPacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   /**Update action, UPDATE_DATA indicates nothing special.*/
   export class nmsnpcpCAction extends jlEnum<nmsnpcpCAction> {
      static DETECT_SIZE: nmsnpcpCAction;
      static LOAD: nmsnpcpCAction;
      static SAVE: nmsnpcpCAction;
      static UPDATE_DATA: nmsnpcpCAction;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsnpcpCAction;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsnpcpCAction[];
   }
   export class nmsnpcpCMirror extends jlEnum<nmsnpcpCMirror> {
      static FRONT_BACK: nmsnpcpCMirror;
      static LEFT_RIGHT: nmsnpcpCMirror;
      static NONE: nmsnpcpCMirror;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsnpcpCMirror;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsnpcpCMirror[];
   }
   export class nmsnpcpCMode extends jlEnum<nmsnpcpCMode> {
      static CORNER: nmsnpcpCMode;
      static DATA: nmsnpcpCMode;
      static LOAD: nmsnpcpCMode;
      static SAVE: nmsnpcpCMode;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsnpcpCMode;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsnpcpCMode[];
   }
   export class nmsnpcpClientUseItemPacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpcpClientVehicleMovePacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpcpClientWindowConfirmationPacket extends nmsnpcClientPlayPacket {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   /**Convenient interface to deep-copy single object or collections.    Most of the methods require object to implement the PublicCloneable interface.*/
   export class nmsucCloneUtils extends jlObject {
      constructor ();
      static cloneArray<T extends nmsucPublicCloneable<T>> (array: T[], arraySupplier: jufIntFunction<T[]>): T[];
      static cloneCopyOnWriteArrayList<T extends nmsucPublicCloneable<T>> (list: juList<T>): jucCopyOnWriteArrayList<T>;
      static optionalClone<T extends nmsucPublicCloneable<T>> (object: T): T;
   }
   /**Target the closest targetable entity (based on the class array)*/
   export class nmseatClosestEntityTarget extends nmseaTargetSelector {
      constructor (entityCreature: nmseEntityCreature, range: number, ...entitiesTarget: jlClass<nmseLivingEntity>[]);
      /**Finds the target.*/
      findTarget (): nmseEntity;
   }
   export class nmsnpspCloseWindowPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   /**Will be called by MinestomRootClassLoader to transform classes at load-time*/
   export class nmsesCodeModifier extends jlObject {
      constructor ();
      /**Beginning of the class names to transform.*/
      getNamespace (): string;
      /**Must return true iif the class node has been modified*/
      transform (source: org.objectweb.asm.tree.ClassNode): boolean;
   }
   export class nmsemwfCodMeta extends nmsemwfAbstractFishMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   export class nmsnpspCollectItemPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmscCollisionUtils extends jlObject {
      constructor ();
      /**Applies world border collision.*/
      static applyWorldBorder (instance: nmsiInstance, currentPosition: nmsuPosition, newPosition: nmsuPosition): nmsuPosition;
      /**Moves an entity with physics applied (ie checking against blocks)*/
      static handlePhysics (entity: nmseEntity, deltaPosition: nmsuVector, positionOut: nmsuPosition, velocityOut: nmsuVector): boolean;
   }
   /**A general purpose class for representing colors.*/
   export class nmscColor extends jlObject implements nkauRGBLike {
      constructor (rgb: number);
      constructor (red: number, green: number, blue: number);
      constructor (rgbLike: nkauRGBLike);
      /**Gets the color as an RGB integer.*/
      asRGB (): number;
      blue (): number;
      equals (o: jlObject): boolean;
      /**Gets the blue component*/
      getBlue (): number;
      /**Gets the green component*/
      getGreen (): number;
      /**Gets the red component.*/
      getRed (): number;
      green (): number;
      hashCode (): number;
      /**Mixes this color with a series of other colors, as if they were combined in a  crafting table.*/
      mixWith (...colors: nkauRGBLike[]): void;
      red (): number;
      /**Sets the blue component of this color.*/
      setBlue (blue: number): void;
      /**Creates a new Color object with specified component*/
      setGreen (green: number): void;
      /**Creates a new Color object with specified component*/
      setRed (red: number): void;
   }
   /**Packet sent during combat to a Player.  Only death is supported for the moment (other events are ignored anyway as of 1.15.2)*/
   export class nmsnpspCombatEventPacket extends jlObject implements nmsnpsComponentHoldingServerPacket {
      /**Gets the components held by this object.*/
      components (): juCollection<nkatComponent>;
      /**Returns a copy of this object.*/
      copyWithOperator (operator: jufUnaryOperator<nkatComponent>): nmsnpsServerPacket;
      static death (player: nmsePlayer, killer: nmseEntity, message: nkatComponent): nmsnpspCombatEventPacket;
      static end (durationInTicks: number, opponent: nmseEntity): nmsnpspCombatEventPacket;
      static enter (): nmsnpspCombatEventPacket;
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspCEventType extends jlEnum<nmsnpspCEventType> {
      static DEATH: nmsnpspCEventType;
      static END_COMBAT: nmsnpspCEventType;
      static ENTER_COMBAT: nmsnpspCEventType;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsnpspCEventType;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsnpspCEventType[];
   }
   /**Allows entity to perform both melee and ranged attacks.*/
   export class nmseagCombinedAttackGoal extends nmseaGoalSelector {
      constructor (entityCreature: nmseEntityCreature, meleeRange: number, rangedRange: number, rangedPower: number, rangedSpread: number, delay: number, timeUnit: nmsutTimeUnit, desirableRange: number, comeClose: boolean);
      constructor (entityCreature: nmseEntityCreature, meleeRange: number, meleeDelay: number, meleeTimeUnit: nmsutTimeUnit, rangedRange: number, rangedPower: number, rangedSpread: number, rangedDelay: number, rangedTimeUnit: nmsutTimeUnit, desirableRange: number, comeClose: boolean);
      /**Ends this GoalSelector.*/
      end (): void;
      getCooldown (): nmsutCooldown;
      setProjectileGenerator (projectileGenerator: jufFunction<nmseEntity,nmsetpEntityProjectile>): void;
      /**Whether or not this GoalSelector should end.*/
      shouldEnd (): boolean;
      /**Whether or not this GoalSelector should start.*/
      shouldStart (): boolean;
      /**Starts this GoalSelector.*/
      start (): void;
      /**Called every tick when this GoalSelector is running.*/
      tick (time: number): void;
   }
   /**Represents a command which has suggestion\/auto-completion.    The command works using a list of valid syntaxes.  For instance we could build the command  "\/health set Notch 50" into multiple argument types "\/health [set\/add\/remove] [username] [integer]"    All the default argument types can be found in ArgumentType  and the syntax be created\/registered using addSyntax(CommandExecutor, Argument[]).    If the command is executed with an incorrect syntax or without any argument, the default CommandExecutor will be called,  you can set it using setDefaultExecutor(CommandExecutor).    Before any syntax to be successfully executed the CommandSender needs to validated  the CommandCondition sets with setCondition(CommandCondition) (ignored if null).    Some Argument could also require additional condition (eg: a number which need to be between 2 values),  in this case, if the whole syntax is correct but not the argument condition,  you can listen to its error code using setArgumentCallback(ArgumentCallback, Argument) or Argument.setCallback(ArgumentCallback).*/
   export class nmscbCommand extends jlObject {
      constructor (name: string);
      constructor (name: string, ...aliases: string[]);
      /**Adds a new syntax in the command.*/
      addConditionalSyntax (commandCondition: nmscbcCommandCondition, executor: nmscbCommandExecutor, ...args: nmscbaArgument<any>[]): juCollection<nmscbCommandSyntax>;
      addSubcommand (command: nmscbCommand): void;
      /**Creates a syntax from a formatted string.*/
      addSyntax (executor: nmscbCommandExecutor, format: string): juCollection<nmscbCommandSyntax>;
      /**Adds a new syntax without condition.*/
      addSyntax (executor: nmscbCommandExecutor, ...args: nmscbaArgument<any>[]): juCollection<nmscbCommandSyntax>;
      /**Gets the command's aliases.*/
      getAliases (): string[];
      /**Gets the CommandCondition.*/
      getCondition (): nmscbcCommandCondition;
      /**Gets the default CommandExecutor which is called when there is no argument  or if no corresponding syntax has been found.*/
      getDefaultExecutor (): nmscbCommandExecutor;
      /**Gets the main command's name.*/
      getName (): string;
      /**Gets all the possible names for this command.*/
      getNames (): string[];
      getSubcommands (): juList<nmscbCommand>;
      /**Gets all the syntaxes of this command.*/
      getSyntaxes (): juCollection<nmscbCommandSyntax>;
      getSyntaxesStrings (): juSet<string>;
      getSyntaxesTree (): string;
      /**Called when a CommandSender executes this command before any syntax callback.*/
      globalListener (sender: nmscCommandSender, context: nmscbCommandContext, command: string): void;
      static isValidName (command: nmscbCommand, name: string): boolean;
      /**Allows for tab auto completion, this is called everytime the player press a key in the chat  when in a dynamic argument (ArgumentDynamicWord (when SuggestionType.ASK_SERVER is used)  and ArgumentDynamicStringArray).*/
      onDynamicWrite (sender: nmscCommandSender, text: string): string[];
      /**Sets an ArgumentCallback.*/
      setArgumentCallback (callback: nmscbArgumentCallback, argument: nmscbaArgument<any>): void;
      /**Sets the CommandCondition.*/
      setCondition (commandCondition: nmscbcCommandCondition): void;
      /**Sets the default CommandExecutor.*/
      setDefaultExecutor (executor: nmscbCommandExecutor): void;
   }
   export class nmsemmCommandBlockMinecartMeta extends nmsemmAbstractMinecartMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getCommand (): string;
      getLastOutput (): nkatComponent;
      getObjectData (): number;
      setCommand (value: string): void;
      setLastOutput (value: nkatComponent): void;
   }
   /**Functional interface used by the CommandManager  to execute a callback if an unknown command is run.  You can set it with CommandManager.setUnknownCommandCallback(CommandCallback).*/
   export interface nmsucCommandCallback {
      /**Executed if an unknown command is run.*/
      apply (sender: nmscCommandSender, command: string): void;
   }
   /**Used to know if the CommandSender is allowed to run the command or a specific syntax.*/
   export interface nmscbcCommandCondition {
      /**Called when the sender permission needs to be checked.*/
      canUse (sender: nmscCommandSender, commandString: string): boolean;
   }
   /**Class used to retrieve argument data in a CommandExecutor.    All id are the one specified in the Argument constructor.    All methods are in the sense that you should not have to verify their validity since if the syntax  is called, it means that all of its arguments are correct. Be aware that trying to retrieve an argument not present  in the syntax will result in a NullPointerException.*/
   export class nmscbCommandContext extends jlObject {
      constructor (input: string);
      clear (): void;
      copy (context: nmscbCommandContext): void;
      get<T> (identifier: string): T;
      get<T> (argument: nmscbaArgument<T>): T;
      getCommandName (): string;
      getInput (): string;
      getMap (): juMap<string,jlObject>;
      getOrDefault<T> (identifier: string, defaultValue: T): T;
      getOrDefault<T> (argument: nmscbaArgument<T>, defaultValue: T): T;
      getRaw (identifier: string): string;
      getRaw (argument: nmscbaArgument<any>): string;
      getReturnData (): nmscbCommandData;
      has (identifier: string): boolean;
      has (argument: nmscbaArgument<any>): boolean;
      retrieveDefaultValues (defaultValuesMap: juMap<string,jufSupplier<jlObject>>): void;
      setArg (id: string, value: jlObject, rawInput: string): void;
      setReturnData (returnData: nmscbCommandData): void;
   }
   export class nmscbCommandData extends jlObject {
      constructor ();
      get<T> (key: string): T;
      getDataMap (): juMap<string,jlObject>;
      has (key: string): boolean;
      set (key: string, value: jlObject): nmscbCommandData;
   }
   /**Class responsible for parsing Command.*/
   export class nmscbCommandDispatcher extends jlObject {
      constructor ();
      /**Checks if the command exists, and execute it.*/
      execute (source: nmscCommandSender, commandString: string): nmscbCommandResult;
      /**Gets the command class associated with the name.*/
      findCommand (commandName: string): nmscbCommand;
      getCommands (): juSet<nmscbCommand>;
      /**Parses the given command.*/
      parse (commandString: string): nmscbCommandResult;
      /**Registers a command,  be aware that registering a command name or alias will override the previous entry.*/
      register (command: nmscbCommand): void;
      unregister (command: nmscbCommand): void;
   }
   /**Callback executed once a syntax has been found for a Command.    Warning: it could be the default executor from Command.getDefaultExecutor() if not null.*/
   export interface nmscbCommandExecutor {
      /**Executes the command callback once the syntax has been called (or the default executor).*/
      apply (sender: nmscCommandSender, context: nmscbCommandContext): void;
   }
   /**Manager used to register commands.    It is also possible to simulate a command using execute(CommandSender, String).*/
   export class nmscCommandManager extends jlObject {
      constructor ();
      /**Gets if a command with the name commandName already exists or name.*/
      commandExists (commandName: string): boolean;
      /**Gets the DeclareCommandsPacket for a specific player.*/
      createDeclareCommandsPacket (player: nmsePlayer): nmsnpspDeclareCommandsPacket;
      /**Executes a command for a ConsoleSender.*/
      execute (sender: nmscCommandSender, command: string): nmscbCommandResult;
      /**Executes the command using a ServerSender to do not  print the command messages, and rely instead on the command return data.*/
      executeServerCommand (command: string): nmscbCommandResult;
      /**Gets the Command registered by register(Command).*/
      getCommand (commandName: string): nmscbCommand;
      /**Gets the ConsoleSender (which is used as a CommandSender).*/
      getConsoleSender (): nmscConsoleSender;
      getDispatcher (): nmscbCommandDispatcher;
      /**Gets the callback executed once an unknown command is run.*/
      getUnknownCommandCallback (): nmsucCommandCallback;
      /**Registers a Command.*/
      register (command: nmscbCommand): void;
      /**Sets the callback executed once an unknown command is run.*/
      setUnknownCommandCallback (unknownCommandCallback: nmsucCommandCallback): void;
      /**Removes a command from the currently registered commands.*/
      unregister (command: nmscbCommand): void;
   }
   /**Class used to parse complete command inputs.*/
   export class nmscbpCommandParser extends jlObject {
      constructor ();
      static findCommand (input: string): nmscbpCommandQueryResult;
      static findCommand (parentCommand: nmscbCommand, commandName: string, args: string[]): nmscbpCommandQueryResult;
      static findEligibleArgument (command: nmscbCommand, args: string[], commandString: string, trailingSpace: boolean, forceCorrect: boolean, syntaxPredicate: jufPredicate<nmscbCommandSyntax>, argumentPredicate: jufPredicate<nmscbaArgument<any>>): nmscbpArgumentQueryResult;
      /**Retrieves from the valid syntax map the arguments condition result and get the one with the most  valid arguments.*/
      static findMostCorrectSyntax (validSyntaxes: juList<nmscbpValidSyntaxHolder>, context: nmscbCommandContext): nmscbpValidSyntaxHolder;
      static parse (syntax: nmscbCommandSyntax, commandArguments: nmscbaArgument<any>[], inputArguments: string[], commandString: string, validSyntaxes: juList<nmscbpValidSyntaxHolder>, syntaxesSuggestions: it.unimi.dsi.fastutil.numbers.Int2ObjectRBTreeMap<nmscbpCommandSuggestionHolder>): void;
   }
   export class nmscbpCommandQueryResult extends jlObject {
      constructor ();
   }
   export class nmscbCommandResult extends jlObject {
      constructor ();
      getCommandData (): nmscbCommandData;
      getInput (): string;
      getParsedCommand (): nmscbParsedCommand;
      getType (): nmscbCType;
      static of (type: nmscbCType, input: string): nmscbCommandResult;
   }
   export class nmscbCType extends jlEnum<nmscbCType> {
      /**Command cancelled by an event listener.*/
      static CANCELLED: nmscbCType;
      /**Command found, but the syntax is invalid.*/
      static INVALID_SYNTAX: nmscbCType;
      /**Command and syntax successfully found.*/
      static SUCCESS: nmscbCType;
      /**Command is not registered, it is also the default result type.*/
      static UNKNOWN: nmscbCType;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmscbCType;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmscbCType[];
   }
   /**Represents something which can send commands to the server.    Main implementations are Player and ConsoleSender.*/
   export interface nmscCommandSender extends nmspPermissionHandler, nkaaAudience {
      /**Casts this object to a ConsoleSender.*/
      asConsole (): nmscConsoleSender;
      /**Casts this object to a Player.*/
      asPlayer (): nmsePlayer;
      /**Gets if the sender is a ConsoleSender.*/
      isConsole (): boolean;
      /**Gets if the sender is a Player.*/
      isPlayer (): boolean;
      /**Sends a raw string message.*/
      sendMessage (message: string): void;
      /**Sends multiple raw string messages.*/
      sendMessage (messages: string []): void;
   }
   /**Holds the data of an invalidated syntax.*/
   export class nmscbpCommandSuggestionHolder extends jlObject {
      constructor ();
   }
   /**Represents a syntax in Command  which is initialized with Command.addSyntax(CommandExecutor, Argument[]).*/
   export class nmscbCommandSyntax extends jlObject {
      constructor (commandCondition: nmscbcCommandCondition, commandExecutor: nmscbCommandExecutor, ...args: nmscbaArgument<any>[]);
      constructor (commandCondition: nmscbcCommandCondition, commandExecutor: nmscbCommandExecutor, defaultValuesMap: juMap<string,jufSupplier<jlObject>>, ...args: nmscbaArgument<any>[]);
      /**Gets all the required Argument for this syntax.*/
      getArguments (): nmscbaArgument<any>[];
      /**Gets the condition to use this syntax.*/
      getCommandCondition (): nmscbcCommandCondition;
      getDefaultValuesMap (): juMap<string,jufSupplier<jlObject>>;
      /**Gets the CommandExecutor of this syntax, executed once the syntax is properly written.*/
      getExecutor (): nmscbCommandExecutor;
      getSyntaxString (): string;
      hasSuggestion (): boolean;
      /**Changes the command condition of this syntax.*/
      setCommandCondition (commandCondition: nmscbcCommandCondition): void;
      /**Changes the CommandExecutor of this syntax.*/
      setExecutor (executor: nmscbCommandExecutor): void;
   }
   export class nmsimCompassMeta extends nmsiItemMeta implements nmsiIProvider<nmsimCBuilder> {
      constructor (metaBuilder: nmsiItemMetaBuilder, lodestoneTracked: boolean, lodestoneDimension: string, lodestonePosition: nmsuPosition);
      getLodestoneDimension (): string;
      getLodestonePosition (): nmsuPosition;
      isLodestoneTracked (): boolean;
   }
   export class nmsimCBuilder extends nmsiItemMetaBuilder {
      constructor ();
      build (): nmsimCompassMeta;
      getSupplier (): jufSupplier<nmsiItemMetaBuilder>;
      lodestoneDimension (lodestoneDimension: string): nmsimCBuilder;
      lodestonePosition (lodestonePosition: nmsuPosition): nmsimCBuilder;
      lodestoneTracked (lodestoneTracked: boolean): nmsimCBuilder;
      read (nbtCompound: org.jglrxavpok.hephaistos.nbt.NBTCompound): void;
   }
   /**Represents an object that holds some amount of components.*/
   export interface nmsaComponentHolder<T> {
      /**Gets the components held by this object.*/
      components (): juCollection<nkatComponent>;
      /**Returns a copy of this object.*/
      copyWithOperator (operator: jufUnaryOperator<nkatComponent>): T;
      /**Visits each component held by this object.*/
      visitComponents (visitor: jufConsumer<nkatComponent>): void;
   }
   /**A server packet that can hold components.*/
   export interface nmsnpsComponentHoldingServerPacket extends nmsnpsServerPacket, nmsaComponentHolder<nmsnpsServerPacket> {}
   /**Represents a condition, used by predicates in MC functions and in loot tables.*/
   export interface nmsgCondition {
      /**Tests this condition.*/
      test (data: nmsdData): boolean;
   }
   export class nmsglConditionContainer extends jlObject {
      create (lootTableManager: nmsglLootTableManager): nmsgCondition;
   }
   /**Loot table function that must meet some conditions to be applied*/
   export class nmsglConditionedFunctionWrapper extends jlObject implements nmsglLootTableFunction {
      constructor (baseFunction: nmsglLootTableFunction, conditions: juCollection<nmsgCondition>);
      /**Applies changes to the stack being produced*/
      apply (stack: nmsiItemStack, data: nmsdData): nmsiItemStack;
   }
   /**Common command conditions*/
   export class nmscbcConditions extends jlObject {
      constructor ();
      static consoleOnly (sender: nmscCommandSender, commandString: string): boolean;
      static playerOnly (sender: nmscCommandSender, commandString: string): boolean;
   }
   /**Manages the connected clients.*/
   export class nmsnConnectionManager extends jlObject {
      constructor ();
      /**Adds a new player initialization consumer.*/
      addPlayerInitialization (playerInitialization: jufConsumer<nmsePlayer>): void;
      /**Adds a player into the waiting list, to be handled during the next server tick.*/
      addWaitingPlayer (player: nmsePlayer): void;
      /**Finds the closest player matching a given username.*/
      findPlayer (username: string): nmsePlayer;
      /**Gets all online players.*/
      getOnlinePlayers (): juCollection<nmsePlayer>;
      /**Gets the first player which validate String.equalsIgnoreCase(String).*/
      getPlayer (username: string): nmsePlayer;
      /**Gets the first player which validate UUID.equals(Object).*/
      getPlayer (uuid: juUUID): nmsePlayer;
      /**Gets the Player linked to a PlayerConnection.*/
      getPlayer (connection: nmsnpPlayerConnection): nmsePlayer;
      /**Computes the UUID of the specified connection.*/
      getPlayerConnectionUuid (playerConnection: nmsnpPlayerConnection, username: string): juUUID;
      /**Those are all the consumers called when a new Player join.*/
      getPlayerInitializations (): juList<jufConsumer<nmsePlayer>>;
      /**Retrieves the current PlayerProvider, can be the default one if none is defined.*/
      getPlayerProvider (): nmsnPlayerProvider;
      /**Gets the kick reason when the server is shutdown using MinecraftServer.stopCleanly().*/
      getShutdownText (): nkatComponent;
      /**Updates keep alive by checking the last keep alive packet and send a new one if needed.*/
      handleKeepAlive (tickStart: number): void;
      /**Adds a new Player in the players list.*/
      registerPlayer (player: nmsePlayer): void;
      /**Removes a Player from the players list.*/
      removePlayer (connection: nmsnpPlayerConnection): void;
      /**Removes an existing player initialization consumer.*/
      removePlayerInitialization (playerInitialization: jufConsumer<nmsePlayer>): void;
      /**Changes the Player provider, to change which object to link to him.*/
      setPlayerProvider (playerProvider: nmsnPlayerProvider): void;
      /**Changes the kick reason in case of a shutdown.*/
      setShutdownText (shutdownText: nkatComponent): void;
      /**Changes how UUID are attributed to players.*/
      setUuidProvider (uuidProvider: nmsnUuidProvider): void;
      /**Shutdowns the connection manager by kicking all the currently connected players.*/
      shutdown (): void;
      /**Calls the player initialization callbacks and the event AsyncPlayerPreLoginEvent.*/
      startPlayState (player: nmsePlayer, register: boolean): void;
      /**Creates a Player using the defined PlayerProvider  and execute startPlayState(Player, boolean).*/
      startPlayState (connection: nmsnpPlayerConnection, uuid: juUUID, username: string, register: boolean): nmsePlayer;
      /**Connects waiting players.*/
      updateWaitingPlayers (): void;
   }
   /**Represents the current connection state of a PlayerConnection.*/
   export class nmsnConnectionState extends jlEnum<nmsnConnectionState> {
      static LOGIN: nmsnConnectionState;
      static PLAY: nmsnConnectionState;
      static STATUS: nmsnConnectionState;
      static UNKNOWN: nmsnConnectionState;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsnConnectionState;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsnConnectionState[];
   }
   /**Represents the console when sending a command to the server.*/
   export class nmscConsoleSender extends jlObject implements nmscCommandSender {
      constructor ();
      /**Casts this object to a ConsoleSender.*/
      asConsole (): nmscConsoleSender;
      /**Returns all permissions associated to this handler.*/
      getAllPermissions (): juSet<nmspPermission>;
      /**Gets if the sender is a ConsoleSender.*/
      isConsole (): boolean;
      /**Sends a raw string message.*/
      sendMessage (message: string): void;
      sendMessage (source: nkaiIdentity, message: nkatComponent, type: nkaaMessageType): void;
   }
   export interface nmsetConstructable {}
   export class nmsutCooldown extends jlObject {
      constructor (updateOption: nmsutUpdateOption);
      getUpdateOption (): nmsutUpdateOption;
      /**Gets if something is in cooldown based on the current time.*/
      static hasCooldown (currentTime: number, lastUpdate: number, timeUnit: nmsutTimeUnit, cooldown: number): boolean;
      /**Gets if something is in cooldown based on the current time.*/
      static hasCooldown (currentTime: number, lastUpdate: number, updateOption: nmsutUpdateOption): boolean;
      /**Gets if something is in cooldown based on the current time (System.currentTimeMillis()).*/
      static hasCooldown (lastUpdate: number, timeUnit: nmsutTimeUnit, cooldown: number): boolean;
      isReady (time: number): boolean;
      refreshLastUpdate (lastUpdate: number): void;
   }
   export class nmsemaCowMeta extends nmsemaAnimalMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   export class nmsnpspCraftRecipeResponse extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmslCreativeInventoryActionListener extends jlObject {
      constructor ();
      static listener (packet: nmsnpcpClientCreativeInventoryActionPacket, player: nmsePlayer): void;
   }
   export class nmsemmCreeperMeta extends nmsemmMonsterMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getState (): nmsemmCState;
      isCharged (): boolean;
      isIgnited (): boolean;
      setCharged (value: boolean): void;
      setIgnited (value: boolean): void;
      setState (value: nmsemmCState): void;
   }
   export class nmsemmCState extends jlEnum<nmsemmCState> {
      static FUSE: nmsemmCState;
      static IDLE: nmsemmCState;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsemmCState;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsemmCState[];
   }
   export class nmsimCrossbowMeta extends nmsiItemMeta implements nmsiIProvider<nmsimSBuilder> {
      constructor (metaBuilder: nmsiItemMetaBuilder, triple: boolean, projectile1: nmsiItemStack, projectile2: nmsiItemStack, projectile3: nmsiItemStack, charged: boolean);
      /**Gets the first projectile.*/
      getProjectile1 (): nmsiItemStack;
      /**Gets the second projectile.*/
      getProjectile2 (): nmsiItemStack;
      /**Gets the third projectile.*/
      getProjectile3 (): nmsiItemStack;
      /**Gets if the crossbow is currently charged.*/
      isCharged (): boolean;
      /**Gets if this crossbow is charged with 3 projectiles.*/
      isTriple (): boolean;
   }
   export class nmsimCBuilder extends nmsiItemMetaBuilder {
      constructor ();
      build (): nmsimCrossbowMeta;
      /**Makes the bow charged or uncharged.*/
      charged (charged: boolean): nmsimCBuilder;
      getSupplier (): jufSupplier<nmsiItemMetaBuilder>;
      /**Sets the projectile of this crossbow.*/
      projectile (projectile: nmsiItemStack): nmsimCBuilder;
      /**Sets the triple projectiles of this crossbow.*/
      projectiles (projectile1: nmsiItemStack, projectile2: nmsiItemStack, projectile3: nmsiItemStack): nmsimCBuilder;
      read (nbtCompound: org.jglrxavpok.hephaistos.nbt.NBTCompound): void;
   }
   /**Represents the handler of a custom block type which can be registered with BlockManager.registerCustomBlock(CustomBlock).    There should be only one instance of this class for each custom block type,  every individual blocks will execute the callbacks present there. Each of which contains the  custom block position and the instance concerned.    Each block in a chunk contains 2 id, the block state id (only visual) and a custom block id corresponding to  getCustomBlockId(). A custom block is responsible for the blocks tick, the custom break time feature,  and some useful callbacks.*/
   export class nmsibCustomBlock extends jlObject {
      constructor (defaultBlockStateId: number, identifier: string);
      constructor (block: nmsibBlock, identifier: string);
      /**Initialises data for this block.*/
      createData (instance: nmsiInstance, blockPosition: nmsuBlockPosition, data: nmsdData): nmsdData;
      /**Used to enable the custom break delay from getBreakDelay(Player, BlockPosition, byte, Set)  Disabling it would result in having vanilla time*/
      enableCustomBreakDelay (): boolean;
      /**Gets if this block breaking time can be reduced by having multiple players  digging it.*/
      enableMultiPlayerBreaking (): boolean;
      /**Called when the player requests the next stage break delay*/
      getBreakDelay (player: nmsePlayer, position: nmsuBlockPosition, stage: number, breakers: juSet<nmsePlayer>): number;
      getBreakEntityId (firstBreaker: nmsePlayer): number;
      /**Gets all the breakers of a block, only if enableMultiPlayerBreaking() is enabled.*/
      getBreakers (instance: nmsiInstance, blockPosition: nmsuBlockPosition): juSet<nmsePlayer>;
      /**Gets the block break stage at a position,  only work if enableMultiPlayerBreaking() is enabled.*/
      getBreakStage (instance: nmsiInstance, blockPosition: nmsuBlockPosition): number;
      /**This id can be serialized in chunk file, meaning no duplicate should exist  Changing this value halfway should mean potentially breaking the world*/
      getCustomBlockId (): number;
      /**This is the default block state id when the custom block is set,  it is possible to change this value per block using  BlockModifier.setSeparateBlocks(int, int, int, short, short)*/
      getDefaultBlockStateId (): number;
      /**Gets the drag of this block.*/
      getDrag (instance: nmsiInstance, blockPosition: nmsuBlockPosition): number;
      /**The custom block identifier, used to retrieve the custom block object with  BlockManager.getCustomBlock(String) and to set custom block in the instance.*/
      getIdentifier (): string;
      /**Returns the loot table associated to this block.*/
      getLootTable (tableManager: nmsglLootTableManager): nmsglLootTable;
      /**The update option is used to define the delay between two  update(Instance, BlockPosition, Data) execution.*/
      getUpdateOption (): nmsutUpdateOption;
      /**Defines custom behaviour for entities touching this block.*/
      handleContact (instance: nmsiInstance, position: nmsuBlockPosition, touching: nmseEntity): void;
      /**Gets if this CustomBlock requires any tick update.*/
      hasUpdate (): boolean;
      /**Called when a custom block has been destroyed or replaced.*/
      onDestroy (instance: nmsiInstance, blockPosition: nmsuBlockPosition, data: nmsdData): void;
      /**Called when an explosion wants to destroy this block.*/
      onExplode (instance: nmsiInstance, position: nmsuBlockPosition, lootTableArguments: nmsdData): boolean;
      /**Handles interactions with this block.*/
      onInteract (player: nmsePlayer, hand: nmsePHand, blockPosition: nmsuBlockPosition, data: nmsdData): boolean;
      /**Called when a custom block has been placed.*/
      onPlace (instance: nmsiInstance, blockPosition: nmsuBlockPosition, data: nmsdData): void;
      /**Process one stage on the block, break it if it excess MAX_STAGE,  only if enableMultiPlayerBreaking() is enabled.*/
      processStage (instance: nmsiInstance, blockPosition: nmsuBlockPosition, player: nmsePlayer, stageIncrease: number): boolean;
      removeDiggingInformation (instance: nmsiInstance, blockPosition: nmsuBlockPosition): void;
      /**Called when a scheduled update on this block happens.*/
      scheduledUpdate (instance: nmsiInstance, position: nmsuBlockPosition, blockData: nmsdData): void;
      /**Called when a player start digging this custom block,  process all necessary data if enableMultiPlayerBreaking() is enabled.*/
      startDigging (instance: nmsiInstance, blockPosition: nmsuBlockPosition, player: nmsePlayer): void;
      /**Called when a player stop digging a block,  does remove the block break animation if he was the only breaker.*/
      stopDigging (instance: nmsiInstance, blockPosition: nmsuBlockPosition, player: nmsePlayer): void;
      /**Calling delay depends on getUpdateOption() which should be overridden.*/
      update (instance: nmsiInstance, blockPosition: nmsuBlockPosition, data: nmsdData): void;
      /**Updates this block from a neighbor.*/
      updateFromNeighbor (instance: nmsiInstance, thisPosition: nmsuBlockPosition, neighborPosition: nmsuBlockPosition, directNeighbor: boolean): void;
      /**Allows custom block to write block entity data to a given NBT compound.*/
      writeBlockEntity (position: nmsuBlockPosition, blockData: nmsdData, nbt: org.jglrxavpok.hephaistos.nbt.NBTCompound): void;
   }
   export class nmsubCustomBlockUtils extends jlObject {
      constructor ();
      /**Gets if a custom block id has an update method.*/
      static hasUpdate (customBlockId: number): boolean;
      /**Gets if a CustomBlock has an update method.*/
      static hasUpdate (customBlock: nmsibCustomBlock): boolean;
   }
   /**Represents a custom effect in PotionMeta.    This is an immutable class.*/
   export class nmspCustomPotionEffect extends jlObject implements nmsucPublicCloneable<nmspCustomPotionEffect> {
      constructor (id: number, amplifier: number, duration: number, ambient: boolean, showParticles: boolean, showIcon: boolean);
      /**Creates and returns a copy of this object.*/
      clone (): nmspCustomPotionEffect;
      equals (o: jlObject): boolean;
      getAmplifier (): number;
      getDuration (): number;
      getId (): number;
      hashCode (): number;
      isAmbient (): boolean;
      showIcon (): boolean;
      showParticles (): boolean;
   }
   /**Represents a type of damage, required when calling LivingEntity.damage(DamageType, float)  and retrieved in EntityDamageEvent.    This class can be extended if you need to include custom fields and\/or methods.  Be aware that this class implements DataContainer  so you can add your own data to an already existing damage type without any wrapper.*/
   export class nmsedDamageType extends jlObject implements nmsdDataContainer {
      constructor (identifier: string);
      /**Builds the death message linked to this damage type.*/
      buildDeathMessage (killed: nmsePlayer): nkatComponent;
      /**Builds the text sent to a player in his death screen.*/
      buildDeathScreenText (killed: nmsePlayer): nkatComponent;
      /**Convenient method to create an EntityDamage.*/
      static fromEntity (entity: nmseEntity): nmsedEntityDamage;
      /**Convenient method to create an EntityDamage.*/
      static fromPlayer (player: nmsePlayer): nmsedEntityDamage;
      /**Convenient method to create an EntityProjectileDamage.*/
      static fromProjectile (shooter: nmseEntity, projectile: nmseEntity): nmsedDamageType;
      /**Gets the Data of this container.*/
      getData (): nmsdData;
      getGenericSound (entity: nmseLivingEntity): nmssSoundEvent;
      /**Gets the identifier of this damage type.*/
      getIdentifier (): string;
      getPlayerSound (player: nmsePlayer): nmssSoundEvent;
      /**Sound event to play when the given entity is hit by this damage.*/
      getSound (entity: nmseLivingEntity): nmssSoundEvent;
      /**Sets the Data of this container.*/
      setData (data: nmsdData): void;
   }
   /**Represents an object which contains key\/value based data.    See DataImpl for the default implementation.*/
   export class nmsdData extends jlObject implements nmsucPublicCloneable<nmsdData> {
      constructor ();
      /**Creates and returns a copy of this object.*/
      clone (): nmsdData;
      /**Retrieves a value based on its key.*/
      get<T> (key: string): T;
      /**Gets the list of data keys.*/
      getKeys (): juSet<string>;
      /**Retrieves a value based on its key, give a default value if not found.*/
      getOrDefault<T> (key: string, defaultValue: T): T;
      /**Gets if the data has a key.*/
      hasKey (key: string): boolean;
      /**Gets if the data is empty or not.*/
      isEmpty (): boolean;
      /**Assigns a value to a specific key.*/
      set<T> (key: string, value: T): void;
      /**Assigns a value to a specific key.*/
      set<T> (key: string, value: T, type: jlClass<T>): void;
   }
   /**Represents an element which can have a Data attached to it.    The data will always be optional and can therefore be null.*/
   export interface nmsdDataContainer {
      /**Gets the Data of this container.*/
      getData (): nmsdData;
      /**Sets the Data of this container.*/
      setData (data: nmsdData): void;
   }
   /**Data implementation which uses a ConcurrentHashMap.*/
   export class nmsdDataImpl extends nmsdData {
      constructor ();
      /**Creates and returns a copy of this object.*/
      clone (): nmsdDataImpl;
      equals (o: jlObject): boolean;
      /**Retrieves a value based on its key.*/
      get<T> (key: string): T;
      /**Gets the list of data keys.*/
      getKeys (): juSet<string>;
      /**Retrieves a value based on its key, give a default value if not found.*/
      getOrDefault<T> (key: string, defaultValue: T): T;
      hashCode (): number;
      /**Gets if the data has a key.*/
      hasKey (key: string): boolean;
      /**Gets if the data is empty or not.*/
      isEmpty (): boolean;
      /**Assigns a value to a specific key.*/
      set<T> (key: string, value: T, type: jlClass<T>): void;
   }
   /**Manager used to register types which can be serialized and deserialized back.    Registering happens with registerType(Class, DataType),  you can then retrieve the DataType with getDataType(Class).    A lot of types are already registered by default so you do not have to add all of them manually,  you can verify if getDataType(Class) returns null for the desired type, if it is then you will need to register it.*/
   export class nmsdDataManager extends jlObject {
      constructor ();
      /**Gets the data type associated with a class.*/
      getDataType<T> (clazz: jlClass<T>): nmsdDataType<T>;
      /**Registers a new data type.*/
      registerType<T> (clazz: jlClass<T>, dataType: nmsdDataType<T>): void;
   }
   /**Represents an object which can be encoded and decoded back.    Used by DataManager for SerializableDataImpl  and by the storage API in StorageLocation.*/
   export class nmsdDataType<T> extends jlObject {
      constructor ();
      /**Decodes the data type.*/
      decode (reader: nmsubBinaryReader): T;
      /**Encodes the data type.*/
      encode (writer: nmsubBinaryWriter, value: T): void;
   }
   /**Utils class useful for debugging purpose.*/
   export class nmsudDebugUtils extends jlObject {
      constructor ();
      /**Prints the current thread stack trace elements.*/
      static printStackTrace (): void;
   }
   export class nmsnpspDeclareCommandsPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      static getFlag (type: nmsnpspDNodeType, executable: boolean, redirect: boolean, suggestionType: boolean): number;
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspDNode extends jlObject implements nmsubWriteable, nmsubReadable {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspDNodeType extends jlEnum<nmsnpspDNodeType> {
      static ARGUMENT: nmsnpspDNodeType;
      static LITERAL: nmsnpspDNodeType;
      static NONE: nmsnpspDNodeType;
      static ROOT: nmsnpspDNodeType;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsnpspDNodeType;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsnpspDNodeType[];
   }
   export class nmsnpspDeclareRecipesPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspDDeclaredBlastingRecipe extends nmsnpspDDeclaredRecipe {
      constructor (recipeId: string, group: string, ingredient: nmsnpspDIngredient, result: nmsiItemStack, experience: number, cookingTime: number);
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspDDeclaredCampfireCookingRecipe extends nmsnpspDDeclaredRecipe {
      constructor (recipeId: string, group: string, ingredient: nmsnpspDIngredient, result: nmsiItemStack, experience: number, cookingTime: number);
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspDDeclaredRecipe extends jlObject implements nmsubWriteable, nmsubReadable {
      constructor (recipeId: string, recipeType: string);
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspDDeclaredShapedCraftingRecipe extends nmsnpspDDeclaredRecipe {
      constructor (recipeId: string, width: number, height: number, group: string, ingredients: nmsnpspDIngredient[], result: nmsiItemStack);
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspDDeclaredShapelessCraftingRecipe extends nmsnpspDDeclaredRecipe {
      constructor (recipeId: string, group: string, ingredients: nmsnpspDIngredient[], result: nmsiItemStack);
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspDDeclaredSmeltingRecipe extends nmsnpspDDeclaredRecipe {
      constructor (recipeId: string, group: string, ingredient: nmsnpspDIngredient, result: nmsiItemStack, experience: number, cookingTime: number);
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspDDeclaredSmithingRecipe extends nmsnpspDDeclaredRecipe {
      constructor (recipeId: string, base: nmsnpspDIngredient, addition: nmsnpspDIngredient, result: nmsiItemStack);
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspDDeclaredSmokingRecipe extends nmsnpspDDeclaredRecipe {
      constructor (recipeId: string, group: string, ingredient: nmsnpspDIngredient, result: nmsiItemStack, experience: number, cookingTime: number);
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspDDeclaredStonecutterRecipe extends nmsnpspDDeclaredRecipe {
      constructor (recipeId: string, group: string, ingredient: nmsnpspDIngredient, result: nmsiItemStack);
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspDIngredient extends jlObject implements nmsubWriteable, nmsubReadable {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsemDecrypter extends io.netty.handler.codec.MessageToMessageDecoder<io.netty.buffer.ByteBuf> {
      constructor (cipher: jcCipher);
      decode (channelHandlerContext: io.netty.channel.ChannelHandlerContext, byteBuf: io.netty.buffer.ByteBuf, list: juList<jlObject>): void;
   }
   export class nmsnpspDestroyEntitiesPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   /**Those are all the difficulties which can be displayed in the player menu.    Sets with MinecraftServer.setDifficulty(Difficulty).*/
   export class nmswDifficulty extends jlEnum<nmswDifficulty> {
      static EASY: nmswDifficulty;
      static HARD: nmswDifficulty;
      static NORMAL: nmswDifficulty;
      static PEACEFUL: nmswDifficulty;
      getId (): number;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmswDifficulty;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmswDifficulty[];
   }
   /**https:\/\/minecraft.gamepedia.com\/Custom_dimension*/
   export class nmswDimensionType extends jlObject {
      static builder (name: nmsuNamespaceID): nmswDDimensionTypeBuilder;
      equals (o: jlObject): boolean;
      static fromNBT (nbt: org.jglrxavpok.hephaistos.nbt.NBTCompound): nmswDimensionType;
      getAmbientLight (): number;
      getCoordinateScale (): number;
      getEffects (): string;
      getFixedTime (): jlLong;
      getId (): number;
      getInfiniburn (): nmsuNamespaceID;
      getLogicalHeight (): number;
      getName (): nmsuNamespaceID;
      hashCode (): number;
      static hiddenBuilder (): nmswDDimensionTypeBuilder;
      isBedSafe (): boolean;
      isCeilingEnabled (): boolean;
      isNatural (): boolean;
      isPiglinSafe (): boolean;
      isRaidCapable (): boolean;
      isRegistered (): boolean;
      isRespawnAnchorSafe (): boolean;
      isSkylightEnabled (): boolean;
      isUltrawarm (): boolean;
      toIndexedNBT (): jhnNBTCompound;
      toNBT (): jhnNBTCompound;
      toString (): string;
   }
   export class nmswDDimensionTypeBuilder extends jlObject {
      ambientLight (ambientLight: number): nmswDDimensionTypeBuilder;
      bedSafe (bedSafe: boolean): nmswDDimensionTypeBuilder;
      build (): nmswDimensionType;
      ceilingEnabled (ceilingEnabled: boolean): nmswDDimensionTypeBuilder;
      coordinateScale (coordinateScale: number): nmswDDimensionTypeBuilder;
      effects (effects: string): nmswDDimensionTypeBuilder;
      fixedTime (fixedTime: jlLong): nmswDDimensionTypeBuilder;
      infiniburn (infiniburn: nmsuNamespaceID): nmswDDimensionTypeBuilder;
      logicalHeight (logicalHeight: number): nmswDDimensionTypeBuilder;
      name (name: nmsuNamespaceID): nmswDDimensionTypeBuilder;
      natural (natural: boolean): nmswDDimensionTypeBuilder;
      piglinSafe (piglinSafe: boolean): nmswDDimensionTypeBuilder;
      raidCapable (raidCapable: boolean): nmswDDimensionTypeBuilder;
      respawnAnchorSafe (respawnAnchorSafe: boolean): nmswDDimensionTypeBuilder;
      skylightEnabled (skylightEnabled: boolean): nmswDDimensionTypeBuilder;
      ultrawarm (ultrawarm: boolean): nmswDDimensionTypeBuilder;
   }
   /**Allows servers to register custom dimensions. Also used during player login to send the list of all existing dimensions.    Contains DimensionType.OVERWORLD by default but can be removed.*/
   export class nmswDimensionTypeManager extends jlObject {
      constructor ();
      /**Adds a new dimension type.*/
      addDimension (dimensionType: nmswDimensionType): void;
      /**Return to a @DimensionType only if present and registered*/
      getDimension (namespaceID: nmsuNamespaceID): nmswDimensionType;
      isRegistered (namespaceID: nmsuNamespaceID): boolean;
      isRegistered (dimensionType: nmswDimensionType): boolean;
      /**Removes a dimension type.*/
      removeDimension (dimensionType: nmswDimensionType): boolean;
      /**Creates the NBTCompound containing all the registered dimensions.*/
      toNBT (): jhnNBTCompound;
      /**Returns an immutable copy of the dimension types already registered.*/
      unmodifiableList (): juList<nmswDimensionType>;
   }
   /**Framebuffer with direct access to the colors array*/
   export class nmsmfDirectFramebuffer extends jlObject implements nmsmFramebuffer {
      constructor ();
      get (x: number, z: number): number;
      /**Mutable colors array*/
      getColors (): number[];
      set (x: number, z: number, color: number): nmsmfDirectFramebuffer;
      toMapColors (): number[];
   }
   export class nmsuDirection extends jlEnum<nmsuDirection> {
      static DOWN: nmsuDirection;
      static EAST: nmsuDirection;
      static NORTH: nmsuDirection;
      static SOUTH: nmsuDirection;
      static UP: nmsuDirection;
      static WEST: nmsuDirection;
      normalX (): number;
      normalY (): number;
      normalZ (): number;
      opposite (): nmsuDirection;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsuDirection;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsuDirection[];
   }
   export class nmsnpspDisconnectPacket extends jlObject implements nmsnpsComponentHoldingServerPacket {
      constructor (message: nkatComponent);
      /**Gets the components held by this object.*/
      components (): juCollection<nkatComponent>;
      /**Returns a copy of this object.*/
      copyWithOperator (operator: jufUnaryOperator<nkatComponent>): nmsnpsServerPacket;
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   /**Represents an extension from an `extension.json` that is capable of powering an Extension object.   This has no constructor as its properties are set via GSON.*/
   export class nmseDiscoveredExtension extends jlObject {
      constructor ();
      addMissingCodeModifier (codeModifierClass: string): void;
      getAuthors (): string[];
      getCodeModifiers (): string[];
      getDataDirectory (): jnfPath;
      getDependencies (): string[];
      getEntrypoint (): string;
      getExternalDependencies (): nmseDExternalDependencies;
      getMeta (): ggJsonObject;
      getMinestomExtensionClassLoader (): nmsesMinestomExtensionClassLoader;
      getMissingCodeModifiers (): juList<string>;
      getMixinConfig (): string;
      getName (): string;
      getOriginalJar (): jiFile;
      getVersion (): string;
      hasFailedToLoadMixin (): boolean;
      makeClassLoader (): nmsesMinestomExtensionClassLoader;
      setDataDirectory (dataDirectory: jnfPath): void;
      setFailedToLoadMixinFlag (): void;
      setOriginalJar (file: jiFile): void;
      /**Ensures that all properties of this extension are properly set if they aren't*/
      static verifyIntegrity (extension: nmseDiscoveredExtension): void;
   }
   export class nmseDExternalDependencies extends jlObject {
      constructor ();
   }
   export class nmseDERepository extends jlObject {
      constructor ();
   }
   export class nmsnpspDisplayScoreboardPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsemwDolphinMeta extends nmsemwWaterAnimalMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getTreasurePosition (): nmsuBlockPosition;
      isCanFindTreasure (): boolean;
      isHasFish (): boolean;
      setCanFindTreasure (value: boolean): void;
      setHasFish (value: boolean): void;
      setTreasurePosition (value: nmsuBlockPosition): void;
   }
   export class nmsemaDonkeyMeta extends nmsemaChestedHorseMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   export class nmseagDoNothingGoal extends nmseaGoalSelector {
      constructor (entityCreature: nmseEntityCreature, time: number, chance: number);
      /**Ends this GoalSelector.*/
      end (): void;
      /**Whether or not this GoalSelector should end.*/
      shouldEnd (): boolean;
      /**Whether or not this GoalSelector should start.*/
      shouldStart (): boolean;
      /**Starts this GoalSelector.*/
      start (): void;
      /**Called every tick when this GoalSelector is running.*/
      tick (time: number): void;
   }
   export class nmsdtaDoubleArrayData extends nmsdDataType<double[]> {
      constructor ();
      /**Decodes the data type.*/
      decode (reader: nmsubBinaryReader): number[];
      /**Encodes the data type.*/
      encode (writer: nmsubBinaryWriter, value: number[]): void;
   }
   export class nmsdtDoubleData extends nmsdDataType<jlDouble> {
      constructor ();
      /**Decodes the data type.*/
      decode (reader: nmsubBinaryReader): number;
      /**Encodes the data type.*/
      encode (writer: nmsubBinaryWriter, value: number): void;
   }
   export class nmsumDoubleRange extends nmsumRange<jlDouble> {
      constructor (value: number);
      constructor (minimum: number, maximum: number);
      /**Whether the given value is in range of the minimum and the maximum.*/
      isInRange (value: number): boolean;
   }
   export class nmsemoDragonFireballMeta extends nmsemEntityMeta implements nmsemObjectDataProvider, nmsemProjectileMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getObjectData (): number;
      getShooter (): nmseEntity;
      requiresVelocityPacketAtSpawn (): boolean;
      setShooter (shooter: nmseEntity): void;
   }
   export class nmsemmzDrownedMeta extends nmsemmzZombieMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   /**Color values for dyes, wool and cloth items.*/
   export class nmscDyeColor extends jlEnum<nmscDyeColor> implements nkauRGBLike {
      static BLACK: nmscDyeColor;
      static BLUE: nmscDyeColor;
      static BROWN: nmscDyeColor;
      static CYAN: nmscDyeColor;
      static GRAY: nmscDyeColor;
      static GREEN: nmscDyeColor;
      static LIGHT_BLUE: nmscDyeColor;
      static LIGHT_GRAY: nmscDyeColor;
      static LIME: nmscDyeColor;
      static MAGENTA: nmscDyeColor;
      static ORANGE: nmscDyeColor;
      static PINK: nmscDyeColor;
      static PURPLE: nmscDyeColor;
      static RED: nmscDyeColor;
      static WHITE: nmscDyeColor;
      static YELLOW: nmscDyeColor;
      blue (): number;
      /**Gets the color that this dye represents.*/
      getColor (): nmscColor;
      /**Gets the firework color that this dye represents.*/
      getFireworkColor (): nmscColor;
      green (): number;
      red (): number;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmscDyeColor;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmscDyeColor[];
   }
   /**Represents a Chunk which store each individual block in memory.    WARNING: not thread-safe.*/
   export class nmsiDynamicChunk extends nmsiChunk {
      constructor (instance: nmsiInstance, biomes: nmswbBiome[], chunkX: number, chunkZ: number);
      constructor (instance: nmsiInstance, biomes: nmswbBiome[], chunkX: number, chunkZ: number, blockPalette: nmsipPaletteStorage, customBlockPalette: nmsipPaletteStorage);
      /**Creates a copy of this chunk, including blocks state id, custom block id, biomes, update data.*/
      copy (instance: nmsiInstance, chunkX: number, chunkZ: number): nmsiChunk;
      /**Creates a ChunkDataPacket with this chunk data ready to be written.*/
      createFreshPacket (): nmsnpspChunkDataPacket;
      /**Gets the Data at a block index.*/
      getBlockData (index: number): nmsdData;
      /**Gets all the block entities in this chunk.*/
      getBlockEntities (): juSet<jlInteger>;
      /**Gets the block state id at a position.*/
      getBlockStateId (x: number, y: number, z: number): number;
      /**Gets the custom block id at a position.*/
      getCustomBlockId (x: number, y: number, z: number): number;
      /**Gets the last time that this chunk changed.*/
      getLastChangeTime (): number;
      /**Serialize this Chunk based on readChunk(BinaryReader, ChunkCallback)*/
      getSerializedData (): number[];
      /**Reads the chunk from binary.*/
      readChunk (reader: nmsubBinaryReader, callback: nmsucChunkCallback): void;
      /**Changes the block state id at a position (the custom block id stays the same).*/
      refreshBlockStateId (x: number, y: number, z: number, blockStateId: number): void;
      /**Changes the block state id and the custom block id at a position.*/
      refreshBlockValue (x: number, y: number, z: number, blockStateId: number, customBlockId: number): void;
      /**Resets the chunk, this means clearing all the data making it empty.*/
      reset (): void;
      /**Sets the Data at a position.*/
      setBlockData (x: number, y: number, z: number, data: nmsdData): void;
      /**Executes a chunk tick.*/
      tick (time: number): void;
      /**Sets a block at a position.*/
      UNSAFE_setBlock (x: number, y: number, z: number, blockStateId: number, customBlockId: number, data: nmsdData, updatable: boolean): void;
   }
   export class nmsgleDynamicEntry extends nmsglLEntry {
      constructor (type: nmsgleDynamicType, entryType: nmsgleDType, weight: number, quality: number, conditions: juList<nmsgCondition>);
      generate (output: juList<nmsiItemStack>, arguments: nmsdData): void;
      getEntryType (): nmsgleDType;
   }
   export class nmsgleDType extends jlEnum<nmsgleDType> {
      static CONTENTS: nmsgleDType;
      static SELF: nmsgleDType;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsgleDType;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsgleDType[];
   }
   /**minecraft:dynamic*/
   export class nmsgleDynamicType extends jlObject implements nmsglLootTableEntryType {
      constructor ();
      create (lootTableManager: nmsglLootTableManager, name: string, conditions: juList<nmsgCondition>, children: juList<nmsglLEntry>, expand: boolean, functions: juList<nmsglLootTableFunction>, weight: number, quality: number): nmsglLEntry;
   }
   export class nmseagEatBlockGoal extends nmseaGoalSelector {
      constructor (entityCreature: nmseEntityCreature, eatInMap: it.unimi.dsi.fastutil.numbers.Short2ShortArrayMap, eatBelowMap: it.unimi.dsi.fastutil.numbers.Short2ShortArrayMap, chancePerTick: number);
      /**Ends this GoalSelector.*/
      end (): void;
      /**Whether or not this GoalSelector should end.*/
      shouldEnd (): boolean;
      /**Whether or not this GoalSelector should start.*/
      shouldStart (): boolean;
      /**Starts this GoalSelector.*/
      start (): void;
      /**Called every tick when this GoalSelector is running.*/
      tick (time: number): void;
   }
   export class nmsnpspEffectPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   /**Effects available in Minecraft Vanilla*/
   export class nmseEffects extends jlEnum<nmseEffects> {
      static ANVIL_DESTROYED: nmseEffects;
      static ANVIL_LANDED: nmseEffects;
      static ANVIL_USED: nmseEffects;
      static BAT_TAKES_OFF: nmseEffects;
      static BLAZE_SHOOTS: nmseEffects;
      static BLOCK_BREAK: nmseEffects;
      static BONEMEAL_PARTICLES: nmseEffects;
      static BREWING_STAND_BREWED: nmseEffects;
      static CHORUS_FLOWER_DIED: nmseEffects;
      static CHORUS_FLOWER_GROWN: nmseEffects;
      static DISPENSER_DISPENSES: nmseEffects;
      static DISPENSER_FAILS_TO_DISPENSE: nmseEffects;
      static DISPENSER_SHOOTS: nmseEffects;
      static DRAGON_BREATH: nmseEffects;
      static END_GATEWAY_SPAWN: nmseEffects;
      static ENDER_DRAGON_DEATH: nmseEffects;
      static ENDER_EYE_LAUNCHED: nmseEffects;
      static ENDERDRAGON_GROWL: nmseEffects;
      static ENDERDRAGON_SHOOTS: nmseEffects;
      static EYE_OF_ENDER_ENTITY_BREAK_ANIMATION: nmseEffects;
      static FENCE_GATE_CLOSED: nmseEffects;
      static FENCE_GATE_OPENED: nmseEffects;
      static FIRE_EXTINGUISHED: nmseEffects;
      static FIREWORK_SHOT: nmseEffects;
      static GHAST_SHOOTS: nmseEffects;
      static GHAST_WARNS: nmseEffects;
      static INSTANT_SPLASH: nmseEffects;
      static IRON_DOOR_CLOSED: nmseEffects;
      static IRON_DOOR_OPENED: nmseEffects;
      static IRON_TRAPDOOR_CLOSED: nmseEffects;
      static IRON_TRAPDOOR_OPENED: nmseEffects;
      static MOB_SPAWN_PARTICLE_EFFECT: nmseEffects;
      static PLAY_RECORD: nmseEffects;
      static PORTAL_TRAVEL: nmseEffects;
      static SPAWNS_10_SMOKE_PARTICLES: nmseEffects;
      static SPLASH_POTION: nmseEffects;
      static WITHER_BREAKS_BLOCK: nmseEffects;
      static WITHER_SHOOTS: nmseEffects;
      static WITHER_SPAWNED: nmseEffects;
      static WOODEN_DOOR_CLOSED: nmseEffects;
      static WOODEN_DOOR_OPENED: nmseEffects;
      static WOODEN_TRAPDOOR_CLOSED: nmseEffects;
      static WOODEN_TRAPDOOR_OPENED: nmseEffects;
      static ZOMBIE_ATTACKS_IRON_DOOR: nmseEffects;
      static ZOMBIE_ATTACKS_WOOD_DOOR: nmseEffects;
      static ZOMBIE_BREAKS_WOOD_DOOR: nmseEffects;
      static ZOMBIE_INFECTS: nmseEffects;
      static ZOMBIE_VILLAGER_CONVERTED: nmseEffects;
      getId (): number;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmseEffects;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmseEffects[];
   }
   export class nmsemmElderGuardianMeta extends nmsemmGuardianMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   export class nmsimEnchantedBookMeta extends nmsiItemMeta implements nmsiIProvider<nmsimEBuilder> {
      constructor (metaBuilder: nmsiItemMetaBuilder, storedEnchantmentMap: juMap<nmsiEnchantment,jlShort>);
      /**Gets the stored enchantment map.*/
      getStoredEnchantmentMap (): juMap<nmsiEnchantment,jlShort>;
   }
   export class nmsimEBuilder extends nmsiItemMetaBuilder {
      constructor ();
      build (): nmsimEnchantedBookMeta;
      enchantment (enchantment: nmsiEnchantment, level: number): nmsimEBuilder;
      enchantments (enchantments: juMap<nmsiEnchantment,jlShort>): nmsimEBuilder;
      getSupplier (): jufSupplier<nmsiItemMetaBuilder>;
      read (nbtCompound: org.jglrxavpok.hephaistos.nbt.NBTCompound): void;
   }
   /**\/\/==============================  \/\/  AUTOGENERATED BY EnumGenerator  \/\/==============================*/
   export class nmsiEnchantment extends jlEnum<nmsiEnchantment> implements net.kyori.adventure.key.Keyed {
      static AQUA_AFFINITY: nmsiEnchantment;
      static BANE_OF_ARTHROPODS: nmsiEnchantment;
      static BINDING_CURSE: nmsiEnchantment;
      static BLAST_PROTECTION: nmsiEnchantment;
      static CHANNELING: nmsiEnchantment;
      static DEPTH_STRIDER: nmsiEnchantment;
      static EFFICIENCY: nmsiEnchantment;
      static FEATHER_FALLING: nmsiEnchantment;
      static FIRE_ASPECT: nmsiEnchantment;
      static FIRE_PROTECTION: nmsiEnchantment;
      static FLAME: nmsiEnchantment;
      static FORTUNE: nmsiEnchantment;
      static FROST_WALKER: nmsiEnchantment;
      static IMPALING: nmsiEnchantment;
      static INFINITY: nmsiEnchantment;
      static KNOCKBACK: nmsiEnchantment;
      static LOOTING: nmsiEnchantment;
      static LOYALTY: nmsiEnchantment;
      static LUCK_OF_THE_SEA: nmsiEnchantment;
      static LURE: nmsiEnchantment;
      static MENDING: nmsiEnchantment;
      static MULTISHOT: nmsiEnchantment;
      static PIERCING: nmsiEnchantment;
      static POWER: nmsiEnchantment;
      static PROJECTILE_PROTECTION: nmsiEnchantment;
      static PROTECTION: nmsiEnchantment;
      static PUNCH: nmsiEnchantment;
      static QUICK_CHARGE: nmsiEnchantment;
      static RESPIRATION: nmsiEnchantment;
      static RIPTIDE: nmsiEnchantment;
      static SHARPNESS: nmsiEnchantment;
      static SILK_TOUCH: nmsiEnchantment;
      static SMITE: nmsiEnchantment;
      static SOUL_SPEED: nmsiEnchantment;
      static SWEEPING: nmsiEnchantment;
      static THORNS: nmsiEnchantment;
      static UNBREAKING: nmsiEnchantment;
      static VANISHING_CURSE: nmsiEnchantment;
      static fromId (id: number): nmsiEnchantment;
      getId (): number;
      getNamespaceID (): string;
      key (): nkakKey;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsiEnchantment;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsiEnchantment[];
   }
   export class nmsitEnchantmentTableInventory extends nmsiInventory {
      constructor (title: string);
      /**Gets the enchantment level shown on mouse hover.*/
      getEnchantmentLevel (enchantmentSlot: nmsitEEnchantmentSlot): number;
      /**Gets the enchantment shown in a slot.*/
      getEnchantmentShown (enchantmentSlot: nmsitEEnchantmentSlot): nmsiEnchantment;
      /**Gets the level requirement in a slot.*/
      getLevelRequirement (enchantmentSlot: nmsitEEnchantmentSlot): number;
      /**Gets the enchantment seed.*/
      getSeed (): number;
      /**Sets the enchantment level shown on mouse hover.*/
      setEnchantmentLevel (enchantmentSlot: nmsitEEnchantmentSlot, level: number): void;
      /**Sets the enchantment shown in a slot.*/
      setEnchantmentShown (enchantmentSlot: nmsitEEnchantmentSlot, enchantment: nmsiEnchantment): void;
      /**Sets the level requirement of a slot.*/
      setLevelRequirement (enchantmentSlot: nmsitEEnchantmentSlot, level: number): void;
      /**Sets the enchantment seed.*/
      setSeed (seed: number): void;
   }
   export class nmsitEEnchantmentSlot extends jlEnum<nmsitEEnchantmentSlot> {
      static BOTTOM: nmsitEEnchantmentSlot;
      static MIDDLE: nmsitEEnchantmentSlot;
      static TOP: nmsitEEnchantmentSlot;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsitEEnchantmentSlot;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsitEEnchantmentSlot[];
   }
   export class nmsemEncrypter extends io.netty.handler.codec.MessageToByteEncoder<io.netty.buffer.ByteBuf> {
      constructor (cipher: jcCipher);
      encode (channelHandlerContext: io.netty.channel.ChannelHandlerContext, byteBufIn: io.netty.buffer.ByteBuf, byteBufOut: io.netty.buffer.ByteBuf): void;
   }
   export class nmsnpslEncryptionRequestPacket extends jlObject implements nmsnpsServerPacket {
      constructor (connection: nmsnpNettyPlayerConnection);
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpclEncryptionResponsePacket extends jlObject implements nmsnpcClientPreplayPacket {
      constructor ();
      /**Called when the packet is received.*/
      process (connection: nmsnpPlayerConnection): void;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsemoEndCrystalMeta extends nmsemEntityMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getBeamTarget (): nmsuBlockPosition;
      isShowingBottom (): boolean;
      setBeamTarget (value: nmsuBlockPosition): void;
      setShowingBottom (value: boolean): void;
   }
   export class nmsemoEnderDragonMeta extends nmsemMobMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getPhase (): nmsemoEPhase;
      setPhase (value: nmsemoEPhase): void;
   }
   export class nmsemoEPhase extends jlEnum<nmsemoEPhase> {
      static BREATH_ATTACK: nmsemoEPhase;
      static CHARGING_PLAYER: nmsemoEPhase;
      static CIRCLING: nmsemoEPhase;
      static FLYING_TO_THE_PORTAL: nmsemoEPhase;
      static FLYING_TO_THE_PORTAL_TO_DIE: nmsemoEPhase;
      static HOVERING_WITHOUT_AI: nmsemoEPhase;
      static LANDING_ON_THE_PORTAL: nmsemoEPhase;
      static LOOKING_FOR_BREATH_ATTACK_PLAYER: nmsemoEPhase;
      static ROAR: nmsemoEPhase;
      static STRAFING: nmsemoEPhase;
      static TAKING_OFF_FROM_THE_PORTAL: nmsemoEPhase;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsemoEPhase;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsemoEPhase[];
   }
   export class nmsemmEndermanMeta extends nmsemmMonsterMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getCarriedBlockID (): jlInteger;
      isScreaming (): boolean;
      isStaring (): boolean;
      setCarriedBlockID (value: jlInteger): void;
      setScreaming (value: boolean): void;
      setStaring (value: boolean): void;
   }
   export class nmsemmEndermiteMeta extends nmsemmMonsterMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   /**Could be a player, a monster, or an object.    To create your own entity you probably want to extends LivingEntity or EntityCreature instead.*/
   export class nmseEntity extends jlObject implements nmsViewable, nmsTickable, nmsehEventHandler, nmsdDataContainer, nmspPermissionHandler, nkateHoverEventSource<nkateHShowEntity> {
      constructor (entityType: nmseEntityType);
      constructor (entityType: nmseEntityType, uuid: juUUID);
      constructor (entityType: nmseEntityType, uuid: juUUID, spawnPosition: nmsuPosition);
      constructor (entityType: nmseEntityType, spawnPosition: nmsuPosition);
      /**Adds an effect to an entity.*/
      addEffect (potion: nmspPotion): void;
      /**Adds a new passenger to this entity.*/
      addPassenger (entity: nmseEntity): void;
      /**Adds a viewer.*/
      addViewer (player: nmsePlayer): boolean;
      addViewer0 (player: nmsePlayer): boolean;
      asHoverEvent (op: jufUnaryOperator<nkateHShowEntity>): nkateHoverEvent<nkateHShowEntity>;
      /**Asks for a synchronization (position) to happen during next entity tick.*/
      askSynchronization (): void;
      /**Removes all the effects currently applied to the entity.*/
      clearEffects (): void;
      /**Generate and return a new unique entity id.*/
      static generateId (): number;
      getAcquirable<T extends nmseEntity> (): nmsaAcquirable<T>;
      getAcquirable<T extends nmseEntity> (clazz: jlClass<T>): nmsaAcquirable<T>;
      /**Gets all the potion effect of this entity.*/
      getActiveEffects (): juList<nmspTimedPotion>;
      /**Gets the number of ticks this entity has been active for.*/
      getAliveTicks (): number;
      /**Returns all permissions associated to this handler.*/
      getAllPermissions (): juSet<nmspPermission>;
      /**Is used to check collision with coordinates or other blocks\/entities.*/
      getBoundingBox (): nmscBoundingBox;
      /**Convenient method to get the entity current chunk.*/
      getChunk (): nmsiChunk;
      /**Gets the entity custom name.*/
      getCustomName (): nkatComponent;
      /**Gets the Data of this container.*/
      getData (): nmsdData;
      /**Gets the distance between two entities.*/
      getDistance (entity: nmseEntity): number;
      /**Gets the distance squared between two entities.*/
      getDistanceSquared (entity: nmseEntity): number;
      /**Gets an entity based on its id (from getEntityId()).*/
      static getEntity (id: number): nmseEntity;
      /**Gets an entity based on its UUID (from getUuid()).*/
      static getEntity (uuid: juUUID): nmseEntity;
      /**Each entity has an unique id (server-wide) which will change after a restart.*/
      getEntityId (): number;
      /**Gets metadata of this entity.*/
      getEntityMeta (): nmsemEntityMeta;
      /**Returns the entity type.*/
      getEntityType (): nmseEntityType;
      /**Gets a Map containing all the listeners assigned to a specific Event type.*/
      getEventCallbacksMap (): juMap<jlClass<nmseEvent>,juCollection<nmseEventCallback>>;
      /**Gets a Collection containing all the listeners assigned to a specific extension (represented by its name).*/
      getExtensionCallbacks (extension: string): juCollection<nmseEventCallback<any>>;
      /**Gets the entity eye height.*/
      getEyeHeight (): number;
      /**Gets the gravity acceleration.*/
      getGravityAcceleration (): number;
      /**Gets the gravity drag per tick.*/
      getGravityDragPerTick (): number;
      /**Gets the maximum gravity velocity.*/
      getGravityTerminalVelocity (): number;
      /**Gets the number of tick this entity has been applied gravity.*/
      getGravityTickCount (): number;
      /**Gets the entity current instance.*/
      getInstance (): nmsiInstance;
      /**Gets an EntityMetaDataPacket sent when adding viewers.*/
      getMetadataPacket (): nmsnpspEntityMetaDataPacket;
      /**Gets the entity passengers.*/
      getPassengers (): juSet<nmseEntity>;
      getPassengersPacket (): nmsnpspSetPassengersPacket;
      /**Gets the current entity pose.*/
      getPose (): nmseEPose;
      /**Gets the entity position.*/
      getPosition (): nmsuPosition;
      /**Gets the entity UUID.*/
      getUuid (): juUUID;
      /**Gets the entity vehicle or null.*/
      getVehicle (): nmseEntity;
      /**Gets the entity current velocity.*/
      getVelocity (): nmsuVector;
      getVelocityForPacket (): nmsuVector;
      getVelocityPacket (): nmsnpspEntityVelocityPacket;
      /**Gets all the viewers of this viewable element.*/
      getViewers (): juSet<nmsePlayer>;
      /**How does this entity handle being in the voidany*/
      handleVoid (): void;
      /**Gets the noGravity metadata field.*/
      hasNoGravity (): boolean;
      /**Gets if the entity has any passenger.*/
      hasPassenger (): boolean;
      /**Gets if the entity currently has a velocity applied.*/
      hasVelocity (): boolean;
      /**Returns false just after instantiation, set to true after calling setInstance(Instance).*/
      isActive (): boolean;
      /**When set to true, the entity will automatically get new viewers when they come too close.*/
      isAutoViewable (): boolean;
      /**Gets the custom name visible metadata field.*/
      isCustomNameVisible (): boolean;
      /**Gets if the entity is glowing or not.*/
      isGlowing (): boolean;
      /**Gets if the entity is invisible or not.*/
      isInvisible (): boolean;
      /**Gets if the entity is on fire.*/
      isOnFire (): boolean;
      isOnGround (): boolean;
      /**Gets if this entity has been removed.*/
      isRemoved (): boolean;
      /**Gets if the entity removal has been scheduled with scheduleRemove(long, TimeUnit).*/
      isRemoveScheduled (): boolean;
      isSilent (): boolean;
      /**Gets if the entity is sneaking.*/
      isSneaking (): boolean;
      /**Gets if the player is sprinting.*/
      isSprinting (): boolean;
      refreshCurrentChunk (currentChunk: nmsiChunk): void;
      /**Updates internal fields and sends updates*/
      refreshPosition (position: nmsuPosition): void;
      /**Removes the entity from the server immediately.*/
      remove (): void;
      /**Removes effect from entity, if it has it.*/
      removeEffect (effect: nmspPotionEffect): void;
      /**Removes a passenger to this entity.*/
      removePassenger (entity: nmseEntity): void;
      /**Removes a viewer.*/
      removeViewer (player: nmsePlayer): boolean;
      removeViewer0 (player: nmsePlayer): boolean;
      /**Schedules a task to be run during the next entity tick.*/
      scheduleNextTick (callback: jufConsumer<nmseEntity>): void;
      /**Triggers remove() after the specified time.*/
      scheduleRemove (delay: number, timeUnit: nmsutTimeUnit): void;
      /**Sends the correct packets to update the entity's position, should be called  every tick.*/
      sendPositionUpdate (clientSide: boolean): void;
      /**Makes the entity auto viewable or only manually.*/
      setAutoViewable (autoViewable: boolean): void;
      /**Changes the internal entity bounding box.*/
      setBoundingBox (x: number, y: number, z: number): void;
      /**Changes the internal entity bounding box.*/
      setBoundingBox (boundingBox: nmscBoundingBox): void;
      /**Changes the entity custom name.*/
      setCustomName (customName: nkatComponent): void;
      /**Changes the internal custom name visible field and send a EntityMetaDataPacket  to update the entity state to its viewers.*/
      setCustomNameVisible (customNameVisible: boolean): void;
      /**Set custom cooldown for position synchronization.*/
      setCustomSynchronizationCooldown (cooldown: nmsutUpdateOption): void;
      /**Sets the Data of this container.*/
      setData (data: nmsdData): void;
      /**Sets or remove the entity glowing effect.*/
      setGlowing (glowing: boolean): void;
      /**Changes the gravity of the entity.*/
      setGravity (gravityDragPerTick: number, gravityAcceleration: number, gravityTerminalVelocity: number): void;
      /**Changes the entity instance.*/
      setInstance (instance: nmsiInstance): void;
      /**Changes the entity instance, i.e.*/
      setInstance (instance: nmsiInstance, spawnPosition: nmsuPosition): void;
      /**Changes the internal invisible value and send a EntityMetaDataPacket  to make visible or invisible the entity to its viewers.*/
      setInvisible (invisible: boolean): void;
      /**Changes the noGravity metadata field and change the gravity behaviour accordingly.*/
      setNoGravity (noGravity: boolean): void;
      /**Sets the entity in fire visually.*/
      setOnFire (fire: boolean): void;
      /**Changes the entity pose.*/
      setPose (pose: nmseEPose): void;
      setSilent (silent: boolean): void;
      /**Makes the entity sneak.*/
      setSneaking (sneaking: boolean): void;
      /**Makes the entity sprint.*/
      setSprinting (sprinting: boolean): void;
      /**Changes the internal entity UUID, mostly unsafe.*/
      setUuid (uuid: juUUID): void;
      /**Changes the entity velocity and calls EntityVelocityEvent.*/
      setVelocity (velocity: nmsuVector): void;
      /**Changes the view of the entity.*/
      setView (yaw: number, pitch: number): void;
      /**Changes the view of the entity.*/
      setView (position: nmsuPosition): void;
      shouldRemove (): boolean;
      /**Called when a new instance is set.*/
      spawn (): void;
      /**Changes the entity type of this entity.*/
      switchEntityType (entityType: nmseEntityType): void;
      /**Used to synchronize entity position with viewers by sending an  EntityTeleportPacket to viewers, in case of a player this is  overridden in order to send an additional PlayerPositionAndLookPacket  to itself.*/
      synchronizePosition (includeSelf: boolean): void;
      teleport (position: nmsuPosition): void;
      /**Teleports the entity only if the chunk at position is loaded or if  Instance.hasEnabledAutoChunkLoad() returns true.*/
      teleport (position: nmsuPosition, chunks: number[], callback: jlRunnable): void;
      teleport (position: nmsuPosition, callback: jlRunnable): void;
      /**Updates the entity, called every tick.*/
      tick (time: number): void;
      /**Entity statuses can be found here.*/
      triggerStatus (status: number): void;
      /**Called each tick.*/
      update (time: number): void;
   }
   export class nmseEPose extends jlEnum<nmseEPose> {
      static DYING: nmseEPose;
      static FALL_FLYING: nmseEPose;
      static SLEEPING: nmseEPose;
      static SNEAKING: nmseEPose;
      static SPIN_ATTACK: nmseEPose;
      static STANDING: nmseEPose;
      static SWIMMING: nmseEPose;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmseEPose;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmseEPose[];
   }
   export class nmslEntityActionListener extends jlObject {
      constructor ();
      static listener (packet: nmsnpcpClientEntityActionPacket, player: nmsePlayer): void;
   }
   /**Represents an entity which can contain  goal selectors and target selectors.    Both types of selectors are being stored in AI groups.  For every group there could be only a single goal selector running at a time,  but multiple groups are independent of each other, so each of them can have own goal selector running.*/
   export interface nmseaEntityAI {
      /**Adds new AI group to this entity, consisting of the given  goal selectors and target selectors.*/
      addAIGroup (goalSelectors: juList<nmseaGoalSelector>, targetSelectors: juList<nmseaTargetSelector>): void;
      /**Adds new AI group to this entity.*/
      addAIGroup (group: nmseaEntityAIGroup): void;
      aiTick (time: number): void;
      /**Gets the AI groups of this entity.*/
      getAIGroups (): juCollection<nmseaEntityAIGroup>;
   }
   /**Represents a group of entity's AI.  It may contains goal selectors and target selectors.  All AI groups of a single entity are independent of each other.*/
   export class nmseaEntityAIGroup extends jlObject {
      constructor ();
      /**Gets the current goal selector of this group.*/
      getCurrentGoalSelector (): nmseaGoalSelector;
      /**Gets the goal selectors of this group.*/
      getGoalSelectors (): juList<nmseaGoalSelector>;
      /**Gets the target selectors of this group.*/
      getTargetSelectors (): juList<nmseaTargetSelector>;
      /**Changes the current goal selector of this group.*/
      setCurrentGoalSelector (goalSelector: nmseaGoalSelector): void;
      tick (time: number): void;
   }
   export class nmseaEntityAIGroupBuilder extends jlObject {
      constructor ();
      /**Adds GoalSelector to the list of goal selectors of the building EntityAIGroup.*/
      addGoalSelector (goalSelector: nmseaGoalSelector): nmseaEntityAIGroupBuilder;
      /**Adds TargetSelector to the list of target selectors of the building EntityAIGroup.*/
      addTargetSelector (targetSelector: nmseaTargetSelector): nmseaEntityAIGroupBuilder;
      /**Creates new EntityAIGroup.*/
      build (): nmseaEntityAIGroup;
   }
   export class nmsnpspEntityAnimationPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspEAnimation extends jlEnum<nmsnpspEAnimation> {
      static CRITICAL_EFFECT: nmsnpspEAnimation;
      static LEAVE_BED: nmsnpspEAnimation;
      static MAGICAL_CRITICAL_EFFECT: nmsnpspEAnimation;
      static SWING_MAIN_ARM: nmsnpspEAnimation;
      static SWING_OFF_HAND: nmsnpspEAnimation;
      static TAKE_DAMAGE: nmsnpspEAnimation;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsnpspEAnimation;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsnpspEAnimation[];
   }
   /**Called when a player does a left click on an entity or with  EntityCreature.attack(Entity).*/
   export class nmseeEntityAttackEvent extends nmseEntityEvent {
      constructor (source: nmseEntity, target: nmseEntity);
      getTarget (): nmseEntity;
   }
   export class nmsetvEBoatType extends jlEnum<nmsetvEBoatType> {
      static ACACIA: nmsetvEBoatType;
      static BIRCH: nmsetvEBoatType;
      static DARK_OAK: nmsetvEBoatType;
      static JUNGLE: nmsetvEBoatType;
      static OAK: nmsetvEBoatType;
      static SPRUCE: nmsetvEBoatType;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsetvEBoatType;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsetvEBoatType[];
   }
   export class nmsetaEColor extends jlEnum<nmsetaEColor> {
      static ALL_BLACK: nmsetaEColor;
      static BLACK: nmsetaEColor;
      static BRITISH_SHORTHAIR: nmsetaEColor;
      static CALICO: nmsetaEColor;
      static JELLIE: nmsetaEColor;
      static PERSIAN: nmsetaEColor;
      static RAGDOLL: nmsetaEColor;
      static RED: nmsetaEColor;
      static SIAMESE: nmsetaEColor;
      static TABBY: nmsetaEColor;
      static WHITE: nmsetaEColor;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsetaEColor;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsetaEColor[];
   }
   export class nmseEntityCreature extends nmseLivingEntity implements nmsepNavigableEntity, nmseaEntityAI {
      constructor (entityType: nmseEntityType);
      constructor (entityType: nmseEntityType, uuid: juUUID);
      constructor (entityType: nmseEntityType, spawnPosition: nmsuPosition);
      constructor (entityType: nmseEntityType, spawnPosition: nmsuPosition, instance: nmsiInstance);
      /**Calls a EntityAttackEvent with this entity as the source and target as the target.*/
      attack (target: nmseEntity): void;
      /**Calls a EntityAttackEvent with this entity as the source and target as the target.*/
      attack (target: nmseEntity, swingHand: boolean): void;
      /**Gets the AI groups of this entity.*/
      getAIGroups (): juCollection<nmseaEntityAIGroup>;
      getNavigator (): nmsepNavigator;
      /**Gets the kill animation delay before vanishing the entity.*/
      getRemovalAnimationDelay (): number;
      /**Gets the entity target.*/
      getTarget (): nmseEntity;
      /**Kills the entity, trigger the EntityDeathEvent event.*/
      kill (): void;
      /**Changes the entity instance, i.e.*/
      setInstance (instance: nmsiInstance, spawnPosition: nmsuPosition): void;
      /**Changes the removal animation delay of the entity.*/
      setRemovalAnimationDelay (removalAnimationDelay: number): void;
      /**Changes the entity target.*/
      setTarget (target: nmseEntity): void;
      /**Called each tick.*/
      update (time: number): void;
   }
   export class nmsetmECreeperState extends jlEnum<nmsetmECreeperState> {
      static FUSE: nmsetmECreeperState;
      static IDLE: nmsetmECreeperState;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsetmECreeperState;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsetmECreeperState[];
   }
   /**Represents damage inflicted by an Entity.*/
   export class nmsedEntityDamage extends nmsedDamageType {
      constructor (source: nmseEntity);
      /**Gets the source of the damage.*/
      getSource (): nmseEntity;
   }
   /**Called with LivingEntity.damage(DamageType, float).*/
   export class nmseeEntityDamageEvent extends nmseEntityEvent implements nmseCancellableEvent {
      constructor (entity: nmseLivingEntity, damageType: nmsedDamageType, damage: number);
      /**Gets the damage amount.*/
      getDamage (): number;
      /**Gets the damage type.*/
      getDamageType (): nmsedDamageType;
      /**Gets the entity of this event.*/
      getEntity (): nmseLivingEntity;
      /**Gets if the Event should be cancelled or not.*/
      isCancelled (): boolean;
      /**Marks the Event as cancelled or not.*/
      setCancelled (cancel: boolean): void;
      /**Changes the damage amount.*/
      setDamage (damage: number): void;
   }
   export class nmseeEntityDeathEvent extends nmseEntityEvent {
      constructor (entity: nmseEntity);
   }
   export class nmsnpspEntityEffectPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmseiEntityEquipEvent extends nmseEvent {
      constructor (entity: nmseEntity, equippedItem: nmsiItemStack, slot: nmseEquipmentSlot);
      getEntity (): nmseEntity;
      getEquippedItem (): nmsiItemStack;
      getSlot (): nmseEquipmentSlot;
      setEquippedItem (armorItem: nmsiItemStack): void;
   }
   export class nmsnpspEntityEquipmentPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmseEntityEvent extends nmseEvent {
      constructor (entity: nmseEntity);
      /**Gets the entity of this event.*/
      getEntity (): nmseEntity;
   }
   /**Represents a query which can be call to find one or multiple entities.  It is based on the target selectors used in commands.*/
   export class nmsueEntityFinder extends jlObject {
      constructor ();
      find (sender: nmscCommandSender): juList<nmseEntity>;
      /**Find a list of entities (could be empty) based on the conditions*/
      find (instance: nmsiInstance, self: nmseEntity): juList<nmseEntity>;
      findFirstEntity (sender: nmscCommandSender): nmseEntity;
      findFirstEntity (instance: nmsiInstance, self: nmseEntity): nmseEntity;
      findFirstPlayer (sender: nmscCommandSender): nmsePlayer;
      /**Shortcut of find(Instance, Entity) to retrieve the first  player element in the list.*/
      findFirstPlayer (instance: nmsiInstance, self: nmseEntity): nmsePlayer;
      setConstantName (constantName: string): nmsueEntityFinder;
      setConstantUuid (constantUuid: juUUID): nmsueEntityFinder;
      setDifference (dx: number, dy: number, dz: number): nmsueEntityFinder;
      setDistance (distance: nmsumIntRange): nmsueEntityFinder;
      setEntity (entityType: nmseEntityType, toggleableType: nmsueEToggleableType): nmsueEntityFinder;
      setEntitySort (entitySort: nmsueEEntitySort): nmsueEntityFinder;
      setGameMode (gameMode: nmseGameMode, toggleableType: nmsueEToggleableType): nmsueEntityFinder;
      setLevel (level: nmsumIntRange): nmsueEntityFinder;
      setLimit (limit: number): nmsueEntityFinder;
      setName (name: string, toggleableType: nmsueEToggleableType): nmsueEntityFinder;
      setStartPosition (startPosition: nmsuPosition): nmsueEntityFinder;
      setTargetSelector (targetSelector: nmsueETargetSelector): nmsueEntityFinder;
      setUuid (uuid: juUUID, toggleableType: nmsueEToggleableType): nmsueEntityFinder;
   }
   export class nmsueEEntitySort extends jlEnum<nmsueEEntitySort> {
      static ARBITRARY: nmsueEEntitySort;
      static FURTHEST: nmsueEEntitySort;
      static NEAREST: nmsueEEntitySort;
      static RANDOM: nmsueEEntitySort;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsueEEntitySort;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsueEEntitySort[];
   }
   export class nmsueETargetSelector extends jlEnum<nmsueETargetSelector> {
      static ALL_ENTITIES: nmsueETargetSelector;
      static ALL_PLAYERS: nmsueETargetSelector;
      static MINESTOM_USERNAME: nmsueETargetSelector;
      static MINESTOM_UUID: nmsueETargetSelector;
      static NEAREST_PLAYER: nmsueETargetSelector;
      static RANDOM_PLAYER: nmsueETargetSelector;
      static SELF: nmsueETargetSelector;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsueETargetSelector;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsueETargetSelector[];
   }
   export class nmsueEToggleableType extends jlEnum<nmsueEToggleableType> {
      static EXCLUDE: nmsueEToggleableType;
      static INCLUDE: nmsueEToggleableType;
      getValue (): boolean;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsueEToggleableType;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsueEToggleableType[];
   }
   export class nmseeEntityFireEvent extends nmseEntityEvent implements nmseCancellableEvent {
      constructor (entity: nmseEntity, duration: number, timeUnit: nmsutTimeUnit);
      getFireTime (timeUnit: nmsutTimeUnit): number;
      /**Gets if the Event should be cancelled or not.*/
      isCancelled (): boolean;
      /**Marks the Event as cancelled or not.*/
      setCancelled (cancel: boolean): void;
      setFireTime (duration: number, timeUnit: nmsutTimeUnit): void;
   }
   export class nmsnpspEntityHeadLookPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   /**Represents the orientation of the frame.*/
   export class nmsetdEItemFrameOrientation extends jlEnum<nmsetdEItemFrameOrientation> {
      static DOWN: nmsetdEItemFrameOrientation;
      static EAST: nmsetdEItemFrameOrientation;
      static NORTH: nmsetdEItemFrameOrientation;
      static SOUTH: nmsetdEItemFrameOrientation;
      static UP: nmsetdEItemFrameOrientation;
      static WEST: nmsetdEItemFrameOrientation;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsetdEItemFrameOrientation;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsetdEItemFrameOrientation[];
   }
   /**Called when two ItemEntity are merging their ItemStack together to form a sole entity.*/
   export class nmseeEntityItemMergeEvent extends nmseEntityEvent implements nmseCancellableEvent {
      constructor (source: nmseItemEntity, merged: nmseItemEntity, result: nmsiItemStack);
      /**Gets the ItemEntity who is receiving getMerged().*/
      getEntity (): nmseItemEntity;
      /**Gets the entity who will be merged.*/
      getMerged (): nmseItemEntity;
      /**Gets the final item stack on the ground.*/
      getResult (): nmsiItemStack;
      /**Gets if the Event should be cancelled or not.*/
      isCancelled (): boolean;
      /**Marks the Event as cancelled or not.*/
      setCancelled (cancel: boolean): void;
      /**Changes the item stack which will appear on the ground.*/
      setResult (result: nmsiItemStack): void;
   }
   export class nmsemEntityMeta extends jlObject {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getAirTicks (): number;
      getCustomName (): nkatComponent;
      getMask (index: number): number;
      getMaskBit (index: number, bit: number): boolean;
      getPose (): nmseEPose;
      isCustomNameVisible (): boolean;
      isFlyingWithElytra (): boolean;
      isHasGlowingEffect (): boolean;
      isHasNoGravity (): boolean;
      isInvisible (): boolean;
      isOnFire (): boolean;
      isSilent (): boolean;
      isSneaking (): boolean;
      isSprinting (): boolean;
      isSwimming (): boolean;
      setAirTicks (value: number): void;
      setBoundingBox (width: number, height: number): void;
      setBoundingBox (x: number, y: number, z: number): void;
      setCustomName (value: nkatComponent): void;
      setCustomNameVisible (value: boolean): void;
      setFlyingWithElytra (value: boolean): void;
      setHasGlowingEffect (value: boolean): void;
      setHasNoGravity (value: boolean): void;
      setInvisible (value: boolean): void;
      setMask (index: number, mask: number): void;
      setMaskBit (index: number, bit: number, value: boolean): void;
      /**Sets whether any changes to this meta must result in a metadata packet being sent to entity viewers.*/
      setNotifyAboutChanges (notifyAboutChanges: boolean): void;
      setOnFire (value: boolean): void;
      setPose (value: nmseEPose): void;
      setSilent (value: boolean): void;
      setSneaking (value: boolean): void;
      setSprinting (value: boolean): void;
      setSwimming (value: boolean): void;
   }
   export class nmsnpspEntityMetaDataPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsetaEMooshroomType extends jlEnum<nmsetaEMooshroomType> {
      static BROWN: nmsetaEMooshroomType;
      static RED: nmsetaEMooshroomType;
      static fromIdentifier (identifier: string): nmsetaEMooshroomType;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsetaEMooshroomType;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsetaEMooshroomType[];
   }
   export class nmsnpspEntityMovementPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspEntityPositionAndRotationPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      static getPacket (entityId: number, newPosition: nmsuPosition, oldPosition: nmsuPosition, onGround: boolean): nmsnpspEntityPositionAndRotationPacket;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspEntityPositionPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      static getPacket (entityId: number, newPosition: nmsuPosition, oldPosition: nmsuPosition, onGround: boolean): nmsnpspEntityPositionPacket;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmseeEntityPotionAddEvent extends nmseEntityEvent {
      constructor (entity: nmseEntity, potion: nmspPotion);
      /**Returns the potion that was added.*/
      getPotion (): nmspPotion;
   }
   export class nmseeEntityPotionRemoveEvent extends nmseEntityEvent {
      constructor (entity: nmseEntity, potion: nmspPotion);
      /**Returns the potion that was removed.*/
      getPotion (): nmspPotion;
   }
   /**Class that allows to instantiate entities with projectile-like physics handling.*/
   export class nmsetpEntityProjectile extends nmseEntity {
      constructor (shooter: nmseEntity, entityType: nmseEntityType);
      constructor (shooter: nmseEntity, entityType: nmseEntityType, spawnPosition: nmsuPosition);
      getShooter (): nmseEntity;
      /**Called when this projectile is stuck in blocks.*/
      onStuck (): void;
      /**Called when this projectile unstucks.*/
      onUnstuck (): void;
      shoot (to: nmsuPosition, power: number, spread: number): void;
      /**Updates the entity, called every tick.*/
      tick (time: number): void;
   }
   /**Represents damage inflicted by an entity, via a projectile.*/
   export class nmsedEntityProjectileDamage extends nmsedDamageType {
      constructor (shooter: nmseEntity, projectile: nmseEntity);
      /**Gets the projectile responsible for the damage.*/
      getProjectile (): nmseEntity;
      /**Gets the shooter of the projectile.*/
      getShooter (): nmseEntity;
   }
   export class nmsnpspEntityPropertiesPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspEProperty extends jlObject implements nmsubWriteable, nmsubReadable {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspEntityRotationPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      static getPacket (entityId: number, yaw: number, pitch: number, onGround: boolean): nmsnpspEntityRotationPacket;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   /**Called with EntityProjectile.shoot(Position, double, double)*/
   export class nmseeEntityShootEvent extends nmseEntityEvent implements nmseCancellableEvent {
      constructor (entity: nmseEntity, projectile: nmseEntity, to: nmsuPosition, power: number, spread: number);
      /**Gets shot power.*/
      getPower (): number;
      /**Gets the projectile.*/
      getProjectile (): nmseEntity;
      /**Gets shot spread.*/
      getSpread (): number;
      /**Gets the position projectile was shot to.*/
      getTo (): nmsuPosition;
      /**Gets if the Event should be cancelled or not.*/
      isCancelled (): boolean;
      /**Marks the Event as cancelled or not.*/
      setCancelled (cancel: boolean): void;
      /**Sets shot power.*/
      setPower (power: number): void;
      /**Sets shot spread.*/
      setSpread (spread: number): void;
   }
   export class nmsnpspEntitySoundEffectPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   /**Called when a new instance is set for an entity.*/
   export class nmseeEntitySpawnEvent extends nmseEntityEvent {
      constructor (entity: nmseEntity, spawnInstance: nmsiInstance);
      /**Gets the entity who spawned in the instance.*/
      getEntity (): nmseEntity;
      /**Gets the entity new instance.*/
      getSpawnInstance (): nmsiInstance;
   }
   export class nmseEntitySpawnType extends jlEnum<nmseEntitySpawnType> {
      static BASE: nmseEntitySpawnType;
      static EXPERIENCE_ORB: nmseEntitySpawnType;
      static LIVING: nmseEntitySpawnType;
      static PAINTING: nmseEntitySpawnType;
      static PLAYER: nmseEntitySpawnType;
      getSpawnPacket (entity: nmseEntity): nmsnpsServerPacket;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmseEntitySpawnType;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmseEntitySpawnType[];
   }
   export class nmsnpspEntityStatusPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspEntityTeleportPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   /**Called when an entity ticks itself.  Same event instance used for all tick events for the same entity.*/
   export class nmseeEntityTickEvent extends nmseEntityEvent {
      constructor (entity: nmseEntity);
   }
   /**\/\/==============================  \/\/  AUTOGENERATED BY EnumGenerator  \/\/==============================*/
   export class nmseEntityType extends jlEnum<nmseEntityType> implements net.kyori.adventure.key.Keyed {
      static AREA_EFFECT_CLOUD: nmseEntityType;
      static ARMOR_STAND: nmseEntityType;
      static ARROW: nmseEntityType;
      static BAT: nmseEntityType;
      static BEE: nmseEntityType;
      static BLAZE: nmseEntityType;
      static BOAT: nmseEntityType;
      static CAT: nmseEntityType;
      static CAVE_SPIDER: nmseEntityType;
      static CHEST_MINECART: nmseEntityType;
      static CHICKEN: nmseEntityType;
      static COD: nmseEntityType;
      static COMMAND_BLOCK_MINECART: nmseEntityType;
      static COW: nmseEntityType;
      static CREEPER: nmseEntityType;
      static DOLPHIN: nmseEntityType;
      static DONKEY: nmseEntityType;
      static DRAGON_FIREBALL: nmseEntityType;
      static DROWNED: nmseEntityType;
      static EGG: nmseEntityType;
      static ELDER_GUARDIAN: nmseEntityType;
      static END_CRYSTAL: nmseEntityType;
      static ENDER_DRAGON: nmseEntityType;
      static ENDER_PEARL: nmseEntityType;
      static ENDERMAN: nmseEntityType;
      static ENDERMITE: nmseEntityType;
      static EVOKER: nmseEntityType;
      static EVOKER_FANGS: nmseEntityType;
      static EXPERIENCE_BOTTLE: nmseEntityType;
      static EXPERIENCE_ORB: nmseEntityType;
      static EYE_OF_ENDER: nmseEntityType;
      static FALLING_BLOCK: nmseEntityType;
      static FIREBALL: nmseEntityType;
      static FIREWORK_ROCKET: nmseEntityType;
      static FISHING_BOBBER: nmseEntityType;
      static FOX: nmseEntityType;
      static FURNACE_MINECART: nmseEntityType;
      static GHAST: nmseEntityType;
      static GIANT: nmseEntityType;
      static GUARDIAN: nmseEntityType;
      static HOGLIN: nmseEntityType;
      static HOPPER_MINECART: nmseEntityType;
      static HORSE: nmseEntityType;
      static HUSK: nmseEntityType;
      static ILLUSIONER: nmseEntityType;
      static IRON_GOLEM: nmseEntityType;
      static ITEM: nmseEntityType;
      static ITEM_FRAME: nmseEntityType;
      static LEASH_KNOT: nmseEntityType;
      static LIGHTNING_BOLT: nmseEntityType;
      static LLAMA: nmseEntityType;
      static LLAMA_SPIT: nmseEntityType;
      static MAGMA_CUBE: nmseEntityType;
      static MINECART: nmseEntityType;
      static MOOSHROOM: nmseEntityType;
      static MULE: nmseEntityType;
      static OCELOT: nmseEntityType;
      static PAINTING: nmseEntityType;
      static PANDA: nmseEntityType;
      static PARROT: nmseEntityType;
      static PHANTOM: nmseEntityType;
      static PIG: nmseEntityType;
      static PIGLIN: nmseEntityType;
      static PIGLIN_BRUTE: nmseEntityType;
      static PILLAGER: nmseEntityType;
      static PLAYER: nmseEntityType;
      static POLAR_BEAR: nmseEntityType;
      static POTION: nmseEntityType;
      static PUFFERFISH: nmseEntityType;
      static RABBIT: nmseEntityType;
      static RAVAGER: nmseEntityType;
      static SALMON: nmseEntityType;
      static SHEEP: nmseEntityType;
      static SHULKER: nmseEntityType;
      static SHULKER_BULLET: nmseEntityType;
      static SILVERFISH: nmseEntityType;
      static SKELETON: nmseEntityType;
      static SKELETON_HORSE: nmseEntityType;
      static SLIME: nmseEntityType;
      static SMALL_FIREBALL: nmseEntityType;
      static SNOW_GOLEM: nmseEntityType;
      static SNOWBALL: nmseEntityType;
      static SPAWNER_MINECART: nmseEntityType;
      static SPECTRAL_ARROW: nmseEntityType;
      static SPIDER: nmseEntityType;
      static SQUID: nmseEntityType;
      static STRAY: nmseEntityType;
      static STRIDER: nmseEntityType;
      static TNT: nmseEntityType;
      static TNT_MINECART: nmseEntityType;
      static TRADER_LLAMA: nmseEntityType;
      static TRIDENT: nmseEntityType;
      static TROPICAL_FISH: nmseEntityType;
      static TURTLE: nmseEntityType;
      static VEX: nmseEntityType;
      static VILLAGER: nmseEntityType;
      static VINDICATOR: nmseEntityType;
      static WANDERING_TRADER: nmseEntityType;
      static WITCH: nmseEntityType;
      static WITHER: nmseEntityType;
      static WITHER_SKELETON: nmseEntityType;
      static WITHER_SKULL: nmseEntityType;
      static WOLF: nmseEntityType;
      static ZOGLIN: nmseEntityType;
      static ZOMBIE: nmseEntityType;
      static ZOMBIE_HORSE: nmseEntityType;
      static ZOMBIE_VILLAGER: nmseEntityType;
      static ZOMBIFIED_PIGLIN: nmseEntityType;
      static fromId (id: number): nmseEntityType;
      getHeight (): number;
      getId (): number;
      getMetaConstructor (): jufBiFunction<nmseEntity,nmseMetadata,nmsemEntityMeta>;
      getNamespaceID (): string;
      getSpawnType (): nmseEntitySpawnType;
      getWidth (): number;
      key (): nkakKey;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmseEntityType;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmseEntityType[];
   }
   export class nmsueEntityUtils extends jlObject {
      static areVisible (ent1: nmseEntity, ent2: nmseEntity): boolean;
      static forEachRange (instance: nmsiInstance, position: nmsuPosition, viewDistance: number, consumer: jufConsumer<nmseEntity>): void;
      static isOnGround (entity: nmseEntity): boolean;
   }
   export interface nmsucvEntityValidator extends nmsucvValidator<nmseEntity> {}
   /**Called when a velocity is applied to an entity using Entity.setVelocity(Vector).*/
   export class nmseeEntityVelocityEvent extends nmseEntityEvent implements nmseCancellableEvent {
      constructor (entity: nmseEntity, velocity: nmsuVector);
      /**Gets the enity who will be affected by getVelocity().*/
      getEntity (): nmseEntity;
      /**Gets the velocity which will be applied.*/
      getVelocity (): nmsuVector;
      /**Gets if the Event should be cancelled or not.*/
      isCancelled (): boolean;
      /**Marks the Event as cancelled or not.*/
      setCancelled (cancel: boolean): void;
      /**Changes the applied velocity.*/
      setVelocity (velocity: nmsuVector): void;
   }
   export class nmsnpspEntityVelocityPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   /**Represents an Entity which can have ItemStack in hands and armor slots.*/
   export interface nmsiEquipmentHandler {
      /**Gets the boots.*/
      getBoots (): nmsiItemStack;
      /**Gets the chestplate.*/
      getChestplate (): nmsiItemStack;
      /**Gets the equipment in a specific slot.*/
      getEquipment (slot: nmseEquipmentSlot): nmsiItemStack;
      /**Gets the packet with all the equipments.*/
      getEquipmentsPacket (): nmsnpspEntityEquipmentPacket;
      /**Gets the helmet.*/
      getHelmet (): nmsiItemStack;
      /**Gets the ItemStack in the specific hand.*/
      getItemInHand (hand: nmsePHand): nmsiItemStack;
      /**Gets the ItemStack in main hand.*/
      getItemInMainHand (): nmsiItemStack;
      /**Gets the ItemStack in off hand.*/
      getItemInOffHand (): nmsiItemStack;
      /**Gets the leggings.*/
      getLeggings (): nmsiItemStack;
      /**Changes the boots.*/
      setBoots (itemStack: nmsiItemStack): void;
      /**Changes the chestplate.*/
      setChestplate (itemStack: nmsiItemStack): void;
      setEquipment (slot: nmseEquipmentSlot, itemStack: nmsiItemStack): void;
      /**Changes the helmet.*/
      setHelmet (itemStack: nmsiItemStack): void;
      /**Changes the ItemStack in the specific hand.*/
      setItemInHand (hand: nmsePHand, stack: nmsiItemStack): void;
      /**Changes the main hand ItemStack.*/
      setItemInMainHand (itemStack: nmsiItemStack): void;
      /**Changes the off hand ItemStack.*/
      setItemInOffHand (itemStack: nmsiItemStack): void;
      /**Changes the leggings.*/
      setLeggings (itemStack: nmsiItemStack): void;
      /**Sends a specific equipment to viewers.*/
      syncEquipment (slot: nmseEquipmentSlot): void;
   }
   export class nmseEquipmentSlot extends jlEnum<nmseEquipmentSlot> {
      static BOOTS: nmseEquipmentSlot;
      static CHESTPLATE: nmseEquipmentSlot;
      static HELMET: nmseEquipmentSlot;
      static LEGGINGS: nmseEquipmentSlot;
      static MAIN_HAND: nmseEquipmentSlot;
      static OFF_HAND: nmseEquipmentSlot;
      static fromAttributeSlot (attributeSlot: nmsiaAttributeSlot): nmseEquipmentSlot;
      isArmor (): boolean;
      isHand (): boolean;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmseEquipmentSlot;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmseEquipmentSlot[];
   }
   /**Object which can be listened to by an EventHandler.    Called using EventHandler.callEvent(Class, Event).*/
   export class nmseEvent extends jlObject {
      constructor ();
   }
   export interface nmseEventCallback<E extends Event> {
      run (event: E): void;
   }
   /**Represents an element which can have Event listeners assigned to it.*/
   export interface nmsehEventHandler extends nmseIExtensionObserver {
      /**Adds a new event callback for the specified type eventClass.*/
      addEventCallback<E extends nmseEvent> (eventClass: jlClass<E>, eventCallback: nmseEventCallback<E>): boolean;
      /**Calls a CancellableEvent and execute successCallback if the Event is not cancelled.*/
      callCancellableEvent<E extends nmseEvent & nmseCancellableEvent> (eventClass: jlClass<E>, event: E, successCallback: jlRunnable): void;
      /**Calls the specified Event with all the assigned EventCallback.*/
      callEvent<E extends nmseEvent> (eventClass: jlClass<E>, event: E): void;
      /**Gets a Stream containing all the EventCallback, no matter to which Event they are linked.*/
      getEventCallbacks (): jusStream<nmseEventCallback>;
      /**Gets the event callbacks of a specific event type.*/
      getEventCallbacks<E extends nmseEvent> (eventClass: jlClass<E>): juCollection<nmseEventCallback>;
      /**Gets a Map containing all the listeners assigned to a specific Event type.*/
      getEventCallbacksMap (): juMap<jlClass<nmseEvent>,juCollection<nmseEventCallback>>;
      /**Gets a Collection containing all the listeners assigned to a specific extension (represented by its name).*/
      getExtensionCallbacks (extension: string): juCollection<nmseEventCallback<any>>;
      /**Called before unloading an extension (that is, right after Extension#terminate and right before Extension#unload)*/
      onExtensionUnload (extensionName: string): void;
      /**Remove all event callbacks owned by the given extension*/
      removeCallbacksOwnedByExtension (extension: string): void;
      /**Removes an event callback.*/
      removeEventCallback<E extends nmseEvent> (eventClass: jlClass<E>, eventCallback: nmseEventCallback<E>): boolean;
   }
   export class nmsemoEvokerFangsMeta extends nmsemEntityMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   export class nmsemmrEvokerMeta extends nmsemmrSpellcasterIllagerMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   /**Used when you want to implement your own exception handling, instead of just printing the stack trace.    Sets with ExceptionManager.setExceptionHandler(ExceptionHandler).*/
   export interface nmseExceptionHandler {
      /**Called when a exception was caught.*/
      handleException (e: jlThrowable): void;
   }
   /**Manages the handling of exceptions.*/
   export class nmseExceptionManager extends jlObject {
      constructor ();
      /**Retrieves the current ExceptionHandler, can be the default one if none is defined.*/
      getExceptionHandler (): nmseExceptionHandler;
      /**Handles an exception, if no ExceptionHandler is set, it just prints the stack trace.*/
      handleException (e: jlThrowable): void;
      /**Changes the exception handler, to allow custom exception handling.*/
      setExceptionHandler (exceptionHandler: nmseExceptionHandler): void;
   }
   export class nmseExperienceOrb extends nmseEntity {
      constructor (experienceCount: number, spawnPosition: nmsuPosition);
      constructor (experienceCount: number, spawnPosition: nmsuPosition, instance: nmsiInstance);
      /**Gets the experience count.*/
      getExperienceCount (): number;
      /**Changes the experience count.*/
      setExperienceCount (experienceCount: number): void;
      /**Called when a new instance is set.*/
      spawn (): void;
      /**Called each tick.*/
      update (time: number): void;
   }
   export class nmsemoExperienceOrbMeta extends nmsemEntityMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getCount (): number;
      /**Sets count of orbs.*/
      setCount (count: number): void;
   }
   /**Abstract explosion.  Instance can provide a supplier through Instance.setExplosionSupplier(net.minestom.server.instance.ExplosionSupplier)*/
   export class nmsiExplosion extends jlObject {
      constructor (centerX: number, centerY: number, centerZ: number, strength: number);
      /**Performs the explosion and send the corresponding packet*/
      apply (instance: nmsiInstance): void;
      getCenterX (): number;
      getCenterY (): number;
      getCenterZ (): number;
      getStrength (): number;
      /**Called after removing blocks and preparing the packet, but before sending it.*/
      postExplosion (instance: nmsiInstance, blocks: juList<nmsuBlockPosition>, packet: nmsnpspExplosionPacket): void;
      /**Called after sending the explosion packet.*/
      postSend (instance: nmsiInstance, blocks: juList<nmsuBlockPosition>): void;
      /**Prepares the list of blocks that will be broken.*/
      prepare (instance: nmsiInstance): juList<nmsuBlockPosition>;
   }
   export class nmsnpspExplosionPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export interface nmsiExplosionSupplier {
      /**Creates a new explosion*/
      createExplosion (centerX: number, centerY: number, centerZ: number, strength: number, additionalData: nmsdData): nmsiExplosion;
   }
   export class nmseExtension extends jlObject {
      constructor ();
      /**If this extension registers code modifiers and\/or mixins, are they loaded correctlyany*/
      areCodeModifiersAllLoadedCorrectly (): boolean;
      /**Removes all expired reference to observers*/
      cleanupObservers (): void;
      getDataDirectory (): jnfPath;
      getDependents (): juSet<string>;
      /**Gets the logger for the extension*/
      getLogger (): sLogger;
      getOrigin (): nmseDiscoveredExtension;
      /**Gets a resource from inside the extension jar.*/
      getPackagedResource (fileName: string): jiInputStream;
      /**Gets a resource from inside the extension jar.*/
      getPackagedResource (target: jnfPath): jiInputStream;
      /**Gets a resource from the extension directory, or from inside the jar if it does not  exist in the extension directory.*/
      getResource (fileName: string): jiInputStream;
      /**Gets a resource from the extension directory, or from inside the jar if it does not  exist in the extension directory.*/
      getResource (target: jnfPath): jiInputStream;
      initialize (): void;
      /**Adds a new observer to this extension.*/
      observe (observer: nmseIExtensionObserver): void;
      postInitialize (): void;
      postTerminate (): void;
      preInitialize (): void;
      preTerminate (): void;
      /**Copies a resource file to the extension directory, replacing any existing copy.*/
      savePackagedResource (fileName: string): boolean;
      /**Copies a resource file to the extension directory, replacing any existing copy.*/
      savePackagedResource (target: jnfPath): boolean;
      terminate (): void;
      /**Calls some action on all valid observers of this extension*/
      triggerChange (action: jufConsumer<nmseIExtensionObserver>): void;
      /**Called after postTerminate when reloading an extension*/
      unload (): void;
   }
   /**Does NOT relocate extensions*/
   export class nmseExtensionDependencyResolver extends jlObject implements net.minestom.dependencies.DependencyResolver {
      constructor (extensions: juList<nmseDiscoveredExtension>);
      resolve (extensionName: string, file: jiFile): mdResolvedDependency;
      toString (): string;
   }
   export class nmseExtensionManager extends jlObject {
      constructor ();
      getExtension (name: string): nmseExtension;
      getExtensionDataRoot (): jnfPath;
      getExtensionFolder (): jiFile;
      getExtensions (): juCollection<nmseExtension>;
      hasExtension (name: string): boolean;
      /**Loads code modifiers early, that is before MinecraftServer.init() is called.*/
      static loadCodeModifiersEarly (): void;
      loadDynamicExtension (jarFile: jiFile): boolean;
      /**Loads all extensions in the extension folder into this server.*/
      loadExtensions (): void;
      reload (extensionName: string): boolean;
      setExtensionDataRoot (dataRoot: jnfPath): void;
      /**Used to specify if you want extensions to be loaded and initialized during startup.*/
      setLoadOnStartup (loadOnStartup: boolean): void;
      /**Gets if the extensions should be loaded during startup.*/
      shouldLoadOnStartup (): boolean;
      /**Shutdowns all the extensions by unloading them.*/
      shutdown (): void;
      /**Unloads all extensions*/
      unloadAllExtensions (): void;
      unloadExtension (extensionName: string): void;
   }
   export class nmsemiEyeOfEnderMeta extends nmsemEntityMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getItem (): nmsiItemStack;
      setItem (item: nmsiItemStack): void;
   }
   export class nmsnpspFacePlayerPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspFFacePosition extends jlEnum<nmsnpspFFacePosition> {
      static EYES: nmsnpspFFacePosition;
      static FEET: nmsnpspFFacePosition;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsnpspFFacePosition;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsnpspFFacePosition[];
   }
   /**A fake player will behave exactly the same way as would do a Player backed by a netty connection  (events, velocity, gravity, player list, etc...) with the exception that you need to control it server-side  using a FakePlayerController (see getController()).    You can create one using initPlayer(UUID, String, Consumer). Be aware that this really behave exactly like a player  and this is a feature not a bug, you will need to check at some place if the player is a fake one or not (instanceof) if you want to change it.*/
   export class nmsefFakePlayer extends nmsePlayer implements nmsepNavigableEntity {
      constructor (uuid: juUUID, username: string, option: nmsefFakePlayerOption, spawnCallback: jufConsumer<nmsefFakePlayer>);
      addViewer0 (player: nmsePlayer): boolean;
      /**Retrieves the controller for the fake player.*/
      getController (): nmsefFakePlayerController;
      getNavigator (): nmsepNavigator;
      /**Gets the fake player option container.*/
      getOption (): nmsefFakePlayerOption;
      /**Initializes a new FakePlayer.*/
      static initPlayer (uuid: juUUID, username: string, option: nmsefFakePlayerOption, spawnCallback: jufConsumer<nmsefFakePlayer>): void;
      /**Initializes a new FakePlayer without adding it in cache.*/
      static initPlayer (uuid: juUUID, username: string, spawnCallback: jufConsumer<nmsefFakePlayer>): void;
      /**Changes the player instance without changing its position (defaulted to Player.getRespawnPoint()  if the player is not in any instance).*/
      setInstance (instance: nmsiInstance): void;
      /**Sends all the related packet to have the player sent to another with related data  (create player, spawn position, velocity, metadata, equipments, passengers, team).*/
      showPlayer (connection: nmsnpPlayerConnection): void;
      /**Called each tick.*/
      update (time: number): void;
   }
   export class nmsnpFakePlayerConnection extends nmsnpPlayerConnection {
      constructor ();
      /**Forcing the player to disconnect.*/
      disconnect (): void;
      getFakePlayer (): nmsefFakePlayer;
      /**Gets the remote address of the client.*/
      getRemoteAddress (): jnSocketAddress;
      /**Serializes the packet and send it to the client, optionally skipping the translation phase.*/
      sendPacket (serverPacket: nmsnpsServerPacket, skipTranslating: boolean): void;
      /**Changes the player linked to this connection.*/
      setPlayer (player: nmsePlayer): void;
   }
   /**This class acts as a client controller for FakePlayer.    The main use is to simulate the receiving of ClientPlayPacket*/
   export class nmsefFakePlayerController extends jlObject {
      constructor (fakePlayer: nmsefFakePlayer);
      /**Attacks the given entity.*/
      attackEntity (entity: nmseEntity): void;
      /**Simulates a click in a window.*/
      clickWindow (playerInventory: boolean, slot: number, button: number, action: number, mode: number): void;
      /**Closes the current opened inventory if there is any.*/
      closeWindow (): void;
      /**Makes the player receives a packet  WARNING: pretty much unsafe, used internally to redirect packets here,  you should instead use PlayerConnection.sendPacket(ServerPacket)*/
      consumePacket (serverPacket: nmsnpsServerPacket): void;
      /**Finishes the digging process of the fake player.*/
      finishDigging (blockPosition: nmsuBlockPosition, blockFace: nmsibBlockFace): void;
      /**Respawns the player.*/
      respawn (): void;
      /**Rotates the fake player.*/
      rotate (yaw: number, pitch: number): void;
      /**Sends an animation packet that animates the specified arm.*/
      sendArmAnimation (hand: nmsePHand): void;
      /**Sends a plugin message to the player.*/
      sendPluginMessage (channel: string, message: number[]): void;
      /**Sends a plugin message to the player.*/
      sendPluginMessage (channel: string, message: string): void;
      /**Changes the current held slot for the player.*/
      setHeldItem (slot: number): void;
      /**Starts the digging process of the fake player.*/
      startDigging (blockPosition: nmsuBlockPosition, blockFace: nmsibBlockFace): void;
      /**Stops the digging process of the fake player.*/
      stopDigging (blockPosition: nmsuBlockPosition, blockFace: nmsibBlockFace): void;
      /**Uses the item in the given hand.*/
      useItem (hand: nmsePHand): void;
   }
   /**Represents any options for a FakePlayer.*/
   export class nmsefFakePlayerOption extends jlObject {
      constructor ();
      /**Gets if the player is visible in the tab-list or not.*/
      isInTabList (): boolean;
      /**Gets if the player is registered internally as a Player.*/
      isRegistered (): boolean;
      /**Sets the player in the tab-list or not.*/
      setInTabList (inTabList: boolean): void;
      /**Sets the FakePlayer as registered or not.*/
      setRegistered (registered: boolean): void;
   }
   export class nmsemoFallingBlockMeta extends nmsemEntityMeta implements nmsemObjectDataProvider {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getBlock (): nmsibBlock;
      getObjectData (): number;
      getSpawnPosition (): nmsuBlockPosition;
      requiresVelocityPacketAtSpawn (): boolean;
      /**Sets which block to display.*/
      setBlock (block: nmsibBlock): void;
      setSpawnPosition (value: nmsuBlockPosition): void;
   }
   /**A StorageSystem which is local using OS files system  It does make use of the RocksDB library.    The location represents the path of the folder.    Warning: will create some log files in the location folder when opened, those are generated by RocksDB.*/
   export class nmsssFileStorageSystem extends jlObject implements nmssStorageSystem {
      constructor ();
      /**Called when the location is closed, generally during server shutdown.*/
      close (): void;
      /**Deletes the specified key from the database.*/
      delete (key: string): void;
      /**Gets if the location exists.*/
      exists (location: string): boolean;
      /**Gets the data associated to a key.*/
      get (key: string): number[];
      /**Called when a StorageLocation is opened with this StorageSystem.*/
      open (location: string, storageOptions: nmssStorageOptions): void;
      /**Sets the specified data to the defined key.*/
      set (key: string, data: number[]): void;
   }
   export class nmsemiFireballMeta extends nmsemEntityMeta implements nmsemObjectDataProvider, nmsemProjectileMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getItem (): nmsiItemStack;
      getObjectData (): number;
      getShooter (): nmseEntity;
      requiresVelocityPacketAtSpawn (): boolean;
      setItem (item: nmsiItemStack): void;
      setShooter (shooter: nmseEntity): void;
   }
   export class nmsifFireworkEffect extends jlObject {
      constructor (flicker: boolean, trail: boolean, type: nmsifFireworkEffectType, color: juList<nmscColor>, fadeColor: juList<nmscColor>);
      /**Retrieves the FireworkEffect as a NBTCompound.*/
      asCompound (): ojhnNBTCompound;
      equals (o: jlObject): boolean;
      /**Retrieves a firework effect from the given compound.*/
      static fromCompound (compound: org.jglrxavpok.hephaistos.nbt.NBTCompound): nmsifFireworkEffect;
      /**Retrieves array of integer values corresponding to the primary colors of this firework's explosion.*/
      getColors (): number[];
      /**Retrieves array of integer values corresponding to the fading colors of this firework's explosion.*/
      getFadeColors (): number[];
      /**Whether the firework has a flicker effect.*/
      getFlicker (): number;
      /**Whether the firework has a trail effect.*/
      getTrail (): number;
      /**Retrieves type of the firework effect.*/
      getType (): number;
      hashCode (): number;
   }
   export class nmsimFireworkEffectMeta extends nmsiItemMeta implements nmsiIProvider<nmsimFBuilder> {
      constructor (metaBuilder: nmsiItemMetaBuilder, fireworkEffect: nmsifFireworkEffect);
      getFireworkEffect (): nmsifFireworkEffect;
   }
   export class nmsimFBuilder extends nmsiItemMetaBuilder {
      constructor ();
      build (): nmsimFireworkEffectMeta;
      effect (fireworkEffect: nmsifFireworkEffect): nmsimFBuilder;
      getSupplier (): jufSupplier<nmsiItemMetaBuilder>;
      read (nbtCompound: org.jglrxavpok.hephaistos.nbt.NBTCompound): void;
   }
   /**An enumeration that representing all available firework types.*/
   export class nmsifFireworkEffectType extends jlEnum<nmsifFireworkEffectType> {
      static BURST: nmsifFireworkEffectType;
      static CREEPER_SHAPED: nmsifFireworkEffectType;
      static LARGE_BAR: nmsifFireworkEffectType;
      static SMALL_BALL: nmsifFireworkEffectType;
      static STAR_SHAPED: nmsifFireworkEffectType;
      /**Retrieves a FireworkEffectType by the given id.*/
      static byId (id: number): nmsifFireworkEffectType;
      /**Retrieves the type of the firework effect.*/
      getType (): number;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsifFireworkEffectType;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsifFireworkEffectType[];
   }
   export class nmsimFireworkMeta extends nmsiItemMeta implements nmsiIProvider<nmsimFBuilder> {
      constructor (metaBuilder: nmsiItemMetaBuilder, effects: juList<nmsifFireworkEffect>, flightDuration: number);
      getEffects (): juList<nmsifFireworkEffect>;
      getFlightDuration (): number;
   }
   export class nmsimFBuilder extends nmsiItemMetaBuilder {
      constructor ();
      build (): nmsimFireworkMeta;
      effects (effects: juList<nmsifFireworkEffect>): nmsimFBuilder;
      flightDuration (flightDuration: number): nmsimFBuilder;
      getSupplier (): jufSupplier<nmsiItemMetaBuilder>;
      read (nbtCompound: org.jglrxavpok.hephaistos.nbt.NBTCompound): void;
   }
   export class nmsemoFireworkRocketMeta extends nmsemEntityMeta implements nmsemProjectileMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getFireworkInfo (): nmsiItemStack;
      getShooter (): nmseEntity;
      isShotAtAngle (): boolean;
      setFireworkInfo (value: nmsiItemStack): void;
      setShooter (value: nmseEntity): void;
      setShotAtAngle (value: boolean): void;
   }
   export class nmsemoFishingHookMeta extends nmsemEntityMeta implements nmsemObjectDataProvider {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getHookedEntity (): nmseEntity;
      getObjectData (): number;
      getOwnerEntity (): nmseEntity;
      isCatchable (): boolean;
      requiresVelocityPacketAtSpawn (): boolean;
      setCatchable (value: boolean): void;
      setHookedEntity (value: nmseEntity): void;
      setOwnerEntity (value: nmseEntity): void;
   }
   export class nmsdtaFloatArrayData extends nmsdDataType<float[]> {
      constructor ();
      /**Decodes the data type.*/
      decode (reader: nmsubBinaryReader): number[];
      /**Encodes the data type.*/
      encode (writer: nmsubBinaryWriter, value: number[]): void;
   }
   export class nmsdtFloatData extends nmsdDataType<jlFloat> {
      constructor ();
      /**Decodes the data type.*/
      decode (reader: nmsubBinaryReader): jlFloat;
      /**Encodes the data type.*/
      encode (writer: nmsubBinaryWriter, value: jlFloat): void;
   }
   export class nmsumFloatRange extends nmsumRange<jlFloat> {
      constructor (value: jlFloat);
      constructor (minimum: jlFloat, maximum: jlFloat);
      /**Whether the given value is in range of the minimum and the maximum.*/
      isInRange (value: jlFloat): boolean;
   }
   /**\/\/==============================  \/\/  AUTOGENERATED BY EnumGenerator  \/\/==============================*/
   export class nmsfFluid extends jlEnum<nmsfFluid> implements net.kyori.adventure.key.Keyed {
      static EMPTY: nmsfFluid;
      static FLOWING_LAVA: nmsfFluid;
      static FLOWING_WATER: nmsfFluid;
      static LAVA: nmsfFluid;
      static WATER: nmsfFluid;
      static fromId (id: number): nmsfFluid;
      getId (): number;
      getNamespaceID (): string;
      key (): nkakKey;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsfFluid;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsfFluid[];
   }
   export class nmsemfFlyingMeta extends nmsemMobMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   export class nmseagFollowTargetGoal extends nmseaGoalSelector {
      constructor (entityCreature: nmseEntityCreature, pathUpdateOption: nmsutUpdateOption);
      /**Ends this GoalSelector.*/
      end (): void;
      /**Whether or not this GoalSelector should end.*/
      shouldEnd (): boolean;
      /**Whether or not this GoalSelector should start.*/
      shouldStart (): boolean;
      /**Starts this GoalSelector.*/
      start (): void;
      /**Called every tick when this GoalSelector is running.*/
      tick (time: number): void;
   }
   export class nmsemaFoxMeta extends nmsemaAnimalMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getFirstUUID (): juUUID;
      getSecondUUID (): juUUID;
      getType (): nmsemaFType;
      isDefending (): boolean;
      isFaceplanted (): boolean;
      isFoxSneaking (): boolean;
      isInterested (): boolean;
      isPouncing (): boolean;
      isSitting (): boolean;
      isSleeping (): boolean;
      setDefending (value: boolean): void;
      setFaceplanted (value: boolean): void;
      setFirstUUID (value: juUUID): void;
      setFoxSneaking (value: boolean): void;
      setInterested (value: boolean): void;
      setPouncing (value: boolean): void;
      setSecondUUID (value: juUUID): void;
      setSitting (value: boolean): void;
      setSleeping (value: boolean): void;
      setType (type: nmsemaFType): void;
   }
   export class nmsemaFType extends jlEnum<nmsemaFType> {
      static RED: nmsemaFType;
      static SNOW: nmsemaFType;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsemaFType;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsemaFType[];
   }
   /**Framebuffer to render to a map*/
   export interface nmsmFramebuffer {
      static index (x: number, z: number): number;
      static index (x: number, z: number, stride: number): number;
      preparePacket (packet: nmsnpspMapDataPacket): void;
      preparePacket (packet: nmsnpspMapDataPacket, minX: number, minY: number, width: number, height: number): void;
      toMapColors (): number[];
   }
   /**Represents a packet which is already framed. (packet id+payload) + optional compression  Can be used if you want to send the exact same buffer to multiple clients without processing it more than once.*/
   export class nmsnnpFramedPacket extends jlObject {
      constructor (body: io.netty.buffer.ByteBuf);
      getBody (): nbByteBuf;
   }
   /**Describes the frame around the Advancement.  Also describes the type of advancement it is for "toast" notifications.*/
   export class nmsaFrameType extends jlEnum<nmsaFrameType> {
      /**A spike in all 8 directions as the frame.*/
      static CHALLENGE: nmsaFrameType;
      /**A square with a outward rounded edge on the top and bottom as the frame.*/
      static GOAL: nmsaFrameType;
      /**A simple rounded square as the frame.*/
      static TASK: nmsaFrameType;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsaFrameType;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsaFrameType[];
   }
   /**An event called when a full query is received and ready to be responded to.*/
   export class nmseqeFullQueryEvent extends nmseqeQueryEvent<nmseqrFullQueryResponse> {
      constructor (sender: jnSocketAddress, sessionID: number);
   }
   /**A full query response containing a dynamic set of responses.*/
   export class nmseqrFullQueryResponse extends jlObject implements nmsubWriteable {
      constructor ();
      /**Adds some players to the response.*/
      addPlayers (...players: string []): void;
      /**Adds some players to the response.*/
      addPlayers (players: juCollection<string>): void;
      /**Generates the default plugins value.*/
      static generatePluginsValue (): string;
      /**Gets the map containing the key-value mappings.*/
      getKeyValuesMap (): juMap<string,string>;
      /**Gets the list of players.*/
      getPlayers (): juList<string>;
      /**Puts a key-value mapping into the response.*/
      put (key: string, value: string): void;
      /**Puts a key-value mapping into the response.*/
      put (key: nmseqrQueryKey, value: string): void;
      /**Sets the map containing the key-value mappings.*/
      setKeyValuesMap (map: juMap<string,string>): void;
      /**Sets the list of players.*/
      setPlayers (players: juList<string>): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsitFurnaceInventory extends nmsiInventory {
      constructor (title: string);
      getMaximumFuelBurnTime (): number;
      getMaximumProgress (): number;
      getProgressArrow (): number;
      /**Represents the amount of tick until the fire icon come empty.*/
      getRemainingFuelTick (): number;
      setMaximumFuelBurnTime (maximumFuelBurnTime: number): void;
      setMaximumProgress (maximumProgress: number): void;
      setProgressArrow (progressArrow: number): void;
      /**Represents the amount of tick until the fire icon come empty.*/
      setRemainingFuelTick (remainingFuelTick: number): void;
   }
   export class nmsemmFurnaceMinecartMeta extends nmsemmAbstractMinecartMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getObjectData (): number;
      isHasFuel (): boolean;
      setHasFuel (value: boolean): void;
   }
   /**Represents the game mode of a player.    Can be set with Player.setGameMode(GameMode).*/
   export class nmseGameMode extends jlEnum<nmseGameMode> {
      static ADVENTURE: nmseGameMode;
      static CREATIVE: nmseGameMode;
      static SPECTATOR: nmseGameMode;
      static SURVIVAL: nmseGameMode;
      canTakeDamage (): boolean;
      static fromId (id: number): nmseGameMode;
      getId (): number;
      isHardcore (): boolean;
      setHardcore (hardcore: boolean): void;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmseGameMode;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmseGameMode[];
   }
   export class nmsemfGhastMeta extends nmsemfFlyingMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      isAttacking (): boolean;
      setAttacking (value: boolean): void;
   }
   export class nmsemmGiantMeta extends nmsemmMonsterMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   /**Object containing all the global event listeners.*/
   export class nmseGlobalEventHandler extends jlObject implements nmsehEventHandler {
      constructor ();
      /**Gets a Map containing all the listeners assigned to a specific Event type.*/
      getEventCallbacksMap (): juMap<jlClass<nmseEvent>,juCollection<nmseEventCallback>>;
      /**Gets a Collection containing all the listeners assigned to a specific extension (represented by its name).*/
      getExtensionCallbacks (extension: string): juCollection<nmseEventCallback<any>>;
   }
   /**Global properties service for Mixin*/
   export class nmsesmGlobalPropertyServiceMinestom extends jlObject implements org.spongepowered.asm.service.IGlobalPropertyService {
      constructor ();
      getProperty<T> (key: org.spongepowered.asm.service.IPropertyKey): T;
      getProperty<T> (key: org.spongepowered.asm.service.IPropertyKey, defaultValue: T): T;
      getPropertyString (key: org.spongepowered.asm.service.IPropertyKey, defaultValue: string): string;
      resolveKey (name: string): osasIPropertyKey;
      setProperty (key: org.spongepowered.asm.service.IPropertyKey, value: jlObject): void;
   }
   export class nmseaGoalSelector extends jlObject {
      constructor (entityCreature: nmseEntityCreature);
      /**Ends this GoalSelector.*/
      end (): void;
      /**Finds a target based on the entity TargetSelector.*/
      findTarget (): nmseEntity;
      getAIGroup (): nmseaEntityAIGroup;
      /**Gets the entity behind the goal selector.*/
      getEntityCreature (): nmseEntityCreature;
      /**Changes the entity affected by the goal selector.*/
      setEntityCreature (entityCreature: nmseEntityCreature): void;
      /**Whether or not this GoalSelector should end.*/
      shouldEnd (): boolean;
      /**Whether or not this GoalSelector should start.*/
      shouldStart (): boolean;
      /**Starts this GoalSelector.*/
      start (): void;
      /**Called every tick when this GoalSelector is running.*/
      tick (time: number): void;
   }
   /**Framebuffer that embeds a BufferedImage, allowing for rendering directly via Graphics2D or its pixel array.*/
   export class nmsmfGraphics2DFramebuffer extends jlObject implements nmsmFramebuffer {
      constructor ();
      get (x: number, z: number): number;
      getBackingImage (): jaiBufferedImage;
      getRenderer (): jaGraphics2D;
      set (x: number, z: number, rgb: number): nmsmfGraphics2DFramebuffer;
      toMapColors (): number[];
   }
   export class nmsnncGroupedPacketHandler extends io.netty.handler.codec.MessageToByteEncoder< nmsnnpFramedPacket> {
      constructor ();
      allocateBuffer (ctx: io.netty.channel.ChannelHandlerContext, msg: nmsnnpFramedPacket, preferDirect: boolean): inbByteBuf;
      encode (ctx: io.netty.channel.ChannelHandlerContext, msg: nmsnnpFramedPacket, out: io.netty.buffer.ByteBuf): void;
   }
   export class nmsgleGroupEntry extends nmsglLEntry {
      constructor (type: nmsgleGroupType, children: juList<nmsglLEntry>, weight: number, quality: number, conditions: juList<nmsgCondition>);
      generate (output: juList<nmsiItemStack>, arguments: nmsdData): void;
   }
   /**minecraft:group*/
   export class nmsgleGroupType extends jlObject implements nmsglLootTableEntryType {
      constructor ();
      create (lootTableManager: nmsglLootTableManager, name: string, conditions: juList<nmsgCondition>, children: juList<nmsglLEntry>, expand: boolean, functions: juList<nmsglLootTableFunction>, weight: number, quality: number): nmsglLEntry;
   }
   export class nmsemmGuardianMeta extends nmsemmMonsterMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getTarget (): nmseEntity;
      isRetractingSpikes (): boolean;
      setRetractingSpikes (retractingSpikes: boolean): void;
      setTarget (target: nmseEntity): void;
   }
   export class nmsnpchHandshakePacket extends jlObject implements nmsnpcClientPreplayPacket {
      constructor ();
      /**Called when the packet is received.*/
      process (connection: nmsnpPlayerConnection): void;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspHeldItemChangePacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   /**Classloader part of a hierarchy of classloader*/
   export class nmsesHierarchyClassLoader extends jnURLClassLoader {
      constructor (name: string, urls: jnURL[], parent: jlClassLoader);
      addChild (loader: nmsesMinestomExtensionClassLoader): void;
      getResourceAsStreamWithChildren (name: string): jiInputStream;
      removeChildInHierarchy (child: nmsesMinestomExtensionClassLoader): void;
   }
   export class nmsemaHoglinMeta extends nmsemaAnimalMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      isImmuneToZombification (): boolean;
      setImmuneToZombification (value: boolean): void;
   }
   /**Represents an invisible armor stand showing a Component.*/
   export class nmsehHologram extends jlObject implements nmsViewable {
      constructor (instance: nmsiInstance, spawnPosition: nmsuPosition, text: nkatComponent);
      constructor (instance: nmsiInstance, spawnPosition: nmsuPosition, text: nkatComponent, autoViewable: boolean);
      constructor (instance: nmsiInstance, spawnPosition: nmsuPosition, text: nmscJsonMessage);
      constructor (instance: nmsiInstance, spawnPosition: nmsuPosition, text: nmscJsonMessage, autoViewable: boolean);
      /**Adds a viewer.*/
      addViewer (player: nmsePlayer): boolean;
      /**Gets the hologram entity (armor stand).*/
      getEntity (): nmsehHHologramEntity;
      /**Gets the position of the hologram.*/
      getPosition (): nmsuPosition;
      /**Gets the hologram text.*/
      getText (): nkatComponent;
      /**Gets all the viewers of this viewable element.*/
      getViewers (): juSet<nmsePlayer>;
      /**Checks if the hologram is still present.*/
      isRemoved (): boolean;
      /**Removes the hologram.*/
      remove (): void;
      /**Removes a viewer.*/
      removeViewer (player: nmsePlayer): boolean;
      /**Changes the position of the hologram.*/
      setPosition (position: nmsuPosition): void;
      /**Changes the hologram text.*/
      setText (text: nkatComponent): void;
   }
   export class nmsehHHologramEntity extends nmsetdEntityArmorStand {
      constructor (spawnPosition: nmsuPosition);
   }
   export class nmsemmHopperMinecartMeta extends nmsemmAbstractMinecartContainerMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getObjectData (): number;
   }
   export class nmsemaHorseMeta extends nmsemaAbstractHorseMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getVariant (): nmsemaHVariant;
      static getVariantFromID (variantID: number): nmsemaHVariant;
      static getVariantID (marking: nmsemaHMarking, color: nmsemaHColor): number;
      setVariant (variant: nmsemaHVariant): void;
   }
   export class nmsemaHColor extends jlEnum<nmsemaHColor> {
      static BLACK: nmsemaHColor;
      static BROWN: nmsemaHColor;
      static CHESTNUT: nmsemaHColor;
      static CREAMY: nmsemaHColor;
      static DARK_BROWN: nmsemaHColor;
      static GRAY: nmsemaHColor;
      static WHITE: nmsemaHColor;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsemaHColor;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsemaHColor[];
   }
   export class nmsemaHMarking extends jlEnum<nmsemaHMarking> {
      static BLACK_DOTS: nmsemaHMarking;
      static NONE: nmsemaHMarking;
      static WHITE: nmsemaHMarking;
      static WHITE_DOTS: nmsemaHMarking;
      static WHITE_FIELD: nmsemaHMarking;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsemaHMarking;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsemaHMarking[];
   }
   export class nmsemaHVariant extends jlObject {
      constructor (marking: nmsemaHMarking, color: nmsemaHColor);
      getColor (): nmsemaHColor;
      getMarking (): nmsemaHMarking;
      setColor (color: nmsemaHColor): void;
      setMarking (marking: nmsemaHMarking): void;
   }
   export class nmsemmzHuskMeta extends nmsemmzZombieMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   /**Interface implemented to change the way chunks are loaded\/saved.    See MinestomBasicChunkLoader for the default implementation used in InstanceContainer.*/
   export interface nmsiIChunkLoader {
      /**Loads a Chunk, all blocks should be set since the ChunkGenerator is not applied.*/
      loadChunk (instance: nmsiInstance, chunkX: number, chunkZ: number, callback: nmsucChunkCallback): boolean;
      /**Saves a Chunk with an optional callback for when it is done.*/
      saveChunk (chunk: nmsiChunk, callback: jlRunnable): void;
      /**Saves multiple chunks with an optional callback for when it is done.*/
      saveChunks (chunks: juCollection<nmsiChunk>, callback: jlRunnable): void;
      /**Does this IChunkLoader allow for multi-threaded loading of Chunkany*/
      supportsParallelLoading (): boolean;
      /**Does this IChunkLoader allow for multi-threaded saving of Chunkany*/
      supportsParallelSaving (): boolean;
   }
   /**Observes events related to extensions*/
   export interface nmseIExtensionObserver {
      /**Called before unloading an extension (that is, right after Extension#terminate and right before Extension#unload)*/
      onExtensionUnload (extensionName: string): void;
   }
   export class nmsemmrIllusionerMeta extends nmsemmrSpellcasterIllagerMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   export class nmsnnpInboundPacket extends jlObject {
      constructor (id: number, body: io.netty.buffer.ByteBuf);
      getBody (): nbByteBuf;
      getPacketId (): number;
   }
   /**Instances are what are called "worlds" in Minecraft, you can add an entity in it using Entity.setInstance(Instance).    An instance has entities and chunks, each instance contains its own entity list but the  chunk implementation has to be defined, see InstanceContainer.    WARNING: when making your own implementation registering the instance manually is required  with InstanceManager.registerInstance(Instance), and  you need to be sure to signal the UpdateManager of the changes using  UpdateManager.signalChunkLoad(Chunk) and UpdateManager.signalChunkUnload(Chunk).*/
   export class nmsiInstance extends jlObject implements nmsiBlockModifier, nmsTickable, nmsehEventHandler, nmsdDataContainer, nmsaaPacketGroupingAudience {
      constructor (uniqueId: juUUID, dimensionType: nmswDimensionType);
      /**Does call PlayerBlockBreakEvent  and send particle packets*/
      breakBlock (player: nmsePlayer, blockPosition: nmsuBlockPosition): boolean;
      /**Called to generated a new Chunk from scratch.*/
      createChunk (chunkX: number, chunkZ: number, callback: nmsucChunkCallback): void;
      /**When set to true, chunks will load automatically when requested.*/
      enableAutoChunkLoad (enable: boolean): void;
      /**Creates an explosion at the given position with the given strength.*/
      explode (centerX: number, centerY: number, centerZ: number, strength: number): void;
      /**Creates an explosion at the given position with the given strength.*/
      explode (centerX: number, centerY: number, centerZ: number, strength: number, additionalData: nmsdData): void;
      /**Gets Block type from given coordinates.*/
      getBlock (x: number, y: number, z: number): nmsibBlock;
      /**Gets block from given position.*/
      getBlock (position: nmsuBlockPosition): nmsibBlock;
      /**Gets the block data at the given position.*/
      getBlockData (x: number, y: number, z: number): nmsdData;
      /**Gets the block Data at the given BlockPosition.*/
      getBlockData (blockPosition: nmsuBlockPosition): nmsdData;
      /**Gives the block state id at the given position.*/
      getBlockStateId (x: number, y: number, z: number): number;
      /**Gives the block state id at the given position.*/
      getBlockStateId (x: number, y: number, z: number): number;
      /**Gives the block state id at the given BlockPosition.*/
      getBlockStateId (blockPosition: nmsuBlockPosition): number;
      /**Gets the loaded Chunk at a position.*/
      getChunk (chunkX: number, chunkZ: number): nmsiChunk;
      /**Gets the Chunk at the given BlockPosition, null if not loaded.*/
      getChunkAt (x: number, z: number): nmsiChunk;
      /**Gets the Chunk at the given BlockPosition, null if not loaded.*/
      getChunkAt (blockPosition: nmsuBlockPosition): nmsiChunk;
      /**Gets the Chunk at the given Position, null if not loaded.*/
      getChunkAt (position: nmsuPosition): nmsiChunk;
      /**Gets the entities located in the chunk.*/
      getChunkEntities (chunk: nmsiChunk): juSet<nmseEntity>;
      /**Gets the instance ChunkGenerator.*/
      getChunkGenerator (): nmsiChunkGenerator;
      /**Gets all the instance's loaded chunks.*/
      getChunks (): juCollection<nmsiChunk>;
      /**Gets the creatures in the instance;*/
      getCreatures (): juSet<nmseEntityCreature>;
      /**Gets the custom block object at the given position.*/
      getCustomBlock (x: number, y: number, z: number): nmsibCustomBlock;
      /**Gets the custom block object at the given BlockPosition.*/
      getCustomBlock (blockPosition: nmsuBlockPosition): nmsibCustomBlock;
      /**Gets the Data of this container.*/
      getData (): nmsdData;
      /**Gets the instance DimensionType.*/
      getDimensionType (): nmswDimensionType;
      /**Gets the entities in the instance;*/
      getEntities (): juSet<nmseEntity>;
      /**Gets a Map containing all the listeners assigned to a specific Event type.*/
      getEventCallbacksMap (): juMap<jlClass<nmseEvent>,juCollection<nmseEventCallback>>;
      /**Gets the experience orbs in the instance.*/
      getExperienceOrbs (): juSet<nmseExperienceOrb>;
      /**Gets the registered ExplosionSupplier, or null if none was provided.*/
      getExplosionSupplier (): nmsiExplosionSupplier;
      /**Gets a Collection containing all the listeners assigned to a specific extension (represented by its name).*/
      getExtensionCallbacks (extension: string): juCollection<nmseEventCallback<any>>;
      /**Gets the instance space.*/
      getInstanceSpace (): nmsepPFInstanceSpace;
      /**Gets the players in the instance;*/
      getPlayers (): juSet<nmsePlayer>;
      /**Gets the instance StorageLocation.*/
      getStorageLocation (): nmssStorageLocation;
      /**Gets the current time in the instance (sun\/moon).*/
      getTime (): number;
      /**Gets the rate of the time passing, it is 1 by default*/
      getTimeRate (): number;
      /**Gets the rate at which the client is updated with the current instance time*/
      getTimeUpdate (): nmsutUpdateOption;
      /**Gets the instance unique id.*/
      getUniqueId (): juUUID;
      /**Gets the age of this instance in tick.*/
      getWorldAge (): number;
      /**Gets the instance WorldBorder;*/
      getWorldBorder (): nmsiWorldBorder;
      /**Gets if the instance should auto load chunks.*/
      hasEnabledAutoChunkLoad (): boolean;
      /**Checks if the Chunk at the position is loaded.*/
      isChunkLoaded (chunkX: number, chunkZ: number): boolean;
      /**Determines whether a position in the void.*/
      isInVoid (position: nmsuPosition): boolean;
      /**Gets if the instance has been registered in InstanceManager.*/
      isRegistered (): boolean;
      /**Loads the Chunk at the given position without any callback.*/
      loadChunk (chunkX: number, chunkZ: number): void;
      /**Forces the generation of a Chunk, even if no file and ChunkGenerator are defined.*/
      loadChunk (chunkX: number, chunkZ: number, callback: nmsucChunkCallback): void;
      /**Loads the chunk at the given Position with a callback.*/
      loadChunk (position: nmsuPosition, callback: nmsucChunkCallback): void;
      /**Loads the chunk if the chunk is already loaded or if  hasEnabledAutoChunkLoad() returns true.*/
      loadOptionalChunk (chunkX: number, chunkZ: number, callback: nmsucChunkCallback): void;
      /**Loads a Chunk (if hasEnabledAutoChunkLoad() returns true)  at the given Position with a callback.*/
      loadOptionalChunk (position: nmsuPosition, callback: nmsucChunkCallback): void;
      /**Refreshes the visual block id at the position.*/
      refreshBlockId (x: number, y: number, z: number, block: nmsibBlock): void;
      /**Refreshes the visual block id at the BlockPosition.*/
      refreshBlockId (blockPosition: nmsuBlockPosition, block: nmsibBlock): void;
      /**Refreshes the visual block id at the position.*/
      refreshBlockStateId (x: number, y: number, z: number, blockStateId: number): void;
      /**Used to change the id of the block in a specific BlockPosition.*/
      refreshBlockStateId (blockPosition: nmsuBlockPosition, blockStateId: number): void;
      /**Used when a Chunk is not currently loaded in memory and need to be retrieved from somewhere else.*/
      retrieveChunk (chunkX: number, chunkZ: number, callback: nmsucChunkCallback): void;
      /**Saves all Chunk without any callback.*/
      saveChunksToStorage (): void;
      /**Saves multiple chunks to permanent storage.*/
      saveChunksToStorage (callback: jlRunnable): void;
      /**Saves a Chunk without any callback.*/
      saveChunkToStorage (chunk: nmsiChunk): void;
      /**Saves a Chunk to permanent storage.*/
      saveChunkToStorage (chunk: nmsiChunk, callback: jlRunnable): void;
      /**Schedules a task to be run during the next instance tick.*/
      scheduleNextTick (callback: jufConsumer<nmsiInstance>): void;
      /**Schedules a block update at a given BlockPosition.*/
      scheduleUpdate (time: number, unit: nmsutTimeUnit, position: nmsuBlockPosition): void;
      /**Sends a BlockActionPacket for all the viewers of the specific position.*/
      sendBlockAction (blockPosition: nmsuBlockPosition, actionId: number, actionParam: number): void;
      /**Sets the block Data at the given BlockPosition.*/
      setBlockData (x: number, y: number, z: number, data: nmsdData): void;
      /**Sets the block Data at the given BlockPosition.*/
      setBlockData (blockPosition: nmsuBlockPosition, data: nmsdData): void;
      /**Changes the instance ChunkGenerator.*/
      setChunkGenerator (chunkGenerator: nmsiChunkGenerator): void;
      /**Sets the Data of this container.*/
      setData (data: nmsdData): void;
      /**Registers the ExplosionSupplier to use in this instance.*/
      setExplosionSupplier (supplier: nmsiExplosionSupplier): void;
      /**Changes the registered field.*/
      setRegistered (registered: boolean): void;
      /**Changes the instance StorageLocation.*/
      setStorageLocation (storageLocation: nmssStorageLocation): void;
      /**Changes the current time in the instance, from 0 to 24000.*/
      setTime (time: number): void;
      /**Changes the time rate of the instance*/
      setTimeRate (timeRate: number): void;
      /**Changes the rate at which the client is updated about the time*/
      setTimeUpdate (timeUpdate: nmsutUpdateOption): void;
      /**Performs a single tick in the instance, including scheduled tasks from scheduleNextTick(Consumer).*/
      tick (time: number): void;
      /**Unloads the chunk at the given position.*/
      unloadChunk (chunkX: number, chunkZ: number): void;
      /**Schedules the removal of a Chunk, this method does not promise when it will be done.*/
      unloadChunk (chunk: nmsiChunk): void;
      /**Used when called Entity.setInstance(Instance), it is used to refresh viewable chunks  and add viewers if entity is a Player.*/
      UNSAFE_addEntity (entity: nmseEntity): void;
      /**Adds the specified Entity to the instance entities cache.*/
      UNSAFE_addEntityToChunk (entity: nmseEntity, chunk: nmsiChunk): void;
      /**Used when an Entity is removed from the instance, it removes all of his viewers.*/
      UNSAFE_removeEntity (entity: nmseEntity): void;
      /**Removes the specified Entity to the instance entities cache.*/
      UNSAFE_removeEntityFromChunk (entity: nmseEntity, chunk: nmsiChunk): void;
      /**Synchronized method to execute UNSAFE_removeEntityFromChunk(Entity, Chunk)  and UNSAFE_addEntityToChunk(Entity, Chunk) simultaneously.*/
      UNSAFE_switchEntityChunk (entity: nmseEntity, lastChunk: nmsiChunk, newChunk: nmsiChunk): void;
   }
   /**Called when a chunk in an instance is loaded.*/
   export class nmseiInstanceChunkLoadEvent extends nmseInstanceEvent {
      constructor (instance: nmsiInstance, chunkX: number, chunkZ: number);
      /**Gets the chunk X.*/
      getChunkX (): number;
      /**Gets the chunk Z.*/
      getChunkZ (): number;
   }
   /**Called when a chunk in an instance is unloaded.*/
   export class nmseiInstanceChunkUnloadEvent extends nmseInstanceEvent {
      constructor (instance: nmsiInstance, chunkX: number, chunkZ: number);
      /**Gets the chunk X.*/
      getChunkX (): number;
      /**Gets the chunk Z.*/
      getChunkZ (): number;
   }
   /**InstanceContainer is an instance that contains chunks in contrary to SharedInstance.*/
   export class nmsiInstanceContainer extends nmsiInstance {
      constructor (uniqueId: juUUID, dimensionType: nmswDimensionType, storageLocation: nmssStorageLocation);
      /**Assigns a SharedInstance to this container.*/
      addSharedInstance (sharedInstance: nmsiSharedInstance): void;
      /**Does call PlayerBlockBreakEvent  and send particle packets*/
      breakBlock (player: nmsePlayer, blockPosition: nmsuBlockPosition): boolean;
      /**Adds a Chunk to the internal instance map.*/
      cacheChunk (chunk: nmsiChunk): void;
      /**Copies all the chunks of this instance and create a new instance container with all of them.*/
      copy (): nmsiInstanceContainer;
      /**Called to generated a new Chunk from scratch.*/
      createChunk (chunkX: number, chunkZ: number, callback: nmsucChunkCallback): void;
      /**When set to true, chunks will load automatically when requested.*/
      enableAutoChunkLoad (enable: boolean): void;
      /**Gets the loaded Chunk at a position.*/
      getChunk (chunkX: number, chunkZ: number): nmsiChunk;
      /**Gets the instance ChunkGenerator.*/
      getChunkGenerator (): nmsiChunkGenerator;
      /**Gets the IChunkLoader of this instance.*/
      getChunkLoader (): nmsiIChunkLoader;
      /**Gets all the instance chunks.*/
      getChunks (): juCollection<nmsiChunk>;
      /**Gets the current ChunkSupplier.*/
      getChunkSupplier (): nmsucChunkSupplier;
      /**Gets the last time at which a block changed.*/
      getLastBlockChangeTime (): number;
      /**Gets all the SharedInstance linked to this container.*/
      getSharedInstances (): juList<nmsiSharedInstance>;
      /**Gets the instance from which this one has been copied.*/
      getSrcInstance (): nmsiInstanceContainer;
      /**Gets the instance StorageLocation.*/
      getStorageLocation (): nmssStorageLocation;
      /**Gets if the instance should auto load chunks.*/
      hasEnabledAutoChunkLoad (): boolean;
      /**Gets if this instance has SharedInstance linked to it.*/
      hasSharedInstances (): boolean;
      /**Determines whether a position in the void.*/
      isInVoid (position: nmsuPosition): boolean;
      /**Forces the generation of a Chunk, even if no file and ChunkGenerator are defined.*/
      loadChunk (chunkX: number, chunkZ: number, callback: nmsucChunkCallback): void;
      /**Loads the chunk if the chunk is already loaded or if  Instance.hasEnabledAutoChunkLoad() returns true.*/
      loadOptionalChunk (chunkX: number, chunkZ: number, callback: nmsucChunkCallback): void;
      /**Used to change the id of the block in a specific BlockPosition.*/
      refreshBlockStateId (blockPosition: nmsuBlockPosition, blockStateId: number): void;
      /**Signals the instance that a block changed.*/
      refreshLastBlockChangeTime (): void;
      /**Used when a Chunk is not currently loaded in memory and need to be retrieved from somewhere else.*/
      retrieveChunk (chunkX: number, chunkZ: number, callback: nmsucChunkCallback): void;
      /**Saves multiple chunks to permanent storage.*/
      saveChunksToStorage (callback: jlRunnable): void;
      /**Saves a Chunk to permanent storage.*/
      saveChunkToStorage (chunk: nmsiChunk, callback: jlRunnable): void;
      /**Saves the instance without callback.*/
      saveInstance (): void;
      /**Saves the instance (Instance.getUniqueId() Instance.getData()) and call saveChunksToStorage(Runnable).*/
      saveInstance (callback: jlRunnable): void;
      /**Schedules a block update at a given BlockPosition.*/
      scheduleUpdate (time: number, unit: nmsutTimeUnit, position: nmsuBlockPosition): void;
      /**Sets a block at a position.*/
      setBlockStateId (x: number, y: number, z: number, blockStateId: number, data: nmsdData): void;
      /**Changes the instance ChunkGenerator.*/
      setChunkGenerator (chunkGenerator: nmsiChunkGenerator): void;
      /**Changes the IChunkLoader of this instance (to change how chunks are retrieved when not already loaded).*/
      setChunkLoader (chunkLoader: nmsiIChunkLoader): void;
      /**Changes which type of Chunk implementation to use once one needs to be loaded.*/
      setChunkSupplier (chunkSupplier: nmsucChunkSupplier): void;
      /**Sets a CustomBlock at a position.*/
      setCustomBlock (x: number, y: number, z: number, customBlockId: number, data: nmsdData): void;
      /**Sets a CustomBlock at a position with a custom state id.*/
      setSeparateBlocks (x: number, y: number, z: number, blockStateId: number, customBlockId: number, data: nmsdData): void;
      /**Changes the instance StorageLocation.*/
      setStorageLocation (storageLocation: nmssStorageLocation): void;
      /**Performs a single tick in the instance, including scheduled tasks from Instance.scheduleNextTick(Consumer).*/
      tick (time: number): void;
      /**Schedules the removal of a Chunk, this method does not promise when it will be done.*/
      unloadChunk (chunk: nmsiChunk): void;
      /**Unloads all waiting chunks.*/
      UNSAFE_unloadChunks (): void;
   }
   export class nmseInstanceEvent extends nmseEvent {
      constructor (instance: nmsiInstance);
      /**Gets the instance.*/
      getInstance (): nmsiInstance;
   }
   /**Used to register Instance.*/
   export class nmsiInstanceManager extends jlObject {
      constructor ();
      /**Creates and register an InstanceContainer.*/
      createInstanceContainer (): nmsiInstanceContainer;
      /**Creates and register an InstanceContainer with the specified DimensionType.*/
      createInstanceContainer (dimensionType: nmswDimensionType): nmsiInstanceContainer;
      /**Creates and register an InstanceContainer  with the specified DimensionType and StorageLocation.*/
      createInstanceContainer (dimensionType: nmswDimensionType, storageLocation: nmssStorageLocation): nmsiInstanceContainer;
      /**Creates and register an InstanceContainer with the specified StorageLocation.*/
      createInstanceContainer (storageLocation: nmssStorageLocation): nmsiInstanceContainer;
      /**Creates and register a SharedInstance.*/
      createSharedInstance (instanceContainer: nmsiInstanceContainer): nmsiSharedInstance;
      /**Gets an instance by the given UUID.*/
      getInstance (uuid: juUUID): nmsiInstance;
      /**Gets all the registered instances.*/
      getInstances (): juSet<nmsiInstance>;
      /**Registers an Instance internally.*/
      registerInstance (instance: nmsiInstance): void;
      /**Registers a SharedInstance.*/
      registerSharedInstance (sharedInstance: nmsiSharedInstance): nmsiSharedInstance;
      /**Unregisters the Instance internally.*/
      unregisterInstance (instance: nmsiInstance): void;
   }
   /**Called when an instance processes a tick.*/
   export class nmseiInstanceTickEvent extends nmseInstanceEvent {
      constructor (instance: nmsiInstance, time: number, lastTickAge: number);
      /**Gets the duration of the tick in ms.*/
      getDuration (): number;
   }
   export class nmsuiInstanceUtils extends jlObject {
      constructor ();
      /**Gets if two instances share the same chunks.*/
      static areLinked (instance1: nmsiInstance, instance2: nmsiInstance): boolean;
   }
   export class nmsdtaIntegerArrayData extends nmsdDataType<int[]> {
      constructor ();
      /**Decodes the data type.*/
      decode (reader: nmsubBinaryReader): number[];
      /**Encodes the data type.*/
      encode (writer: nmsubBinaryWriter, value: number[]): void;
   }
   export class nmsdtIntegerData extends nmsdDataType<jlInteger> {
      constructor ();
      /**Decodes the data type.*/
      decode (reader: nmsubBinaryReader): jlInteger;
      /**Encodes the data type.*/
      encode (writer: nmsubBinaryWriter, value: jlInteger): void;
   }
   export class nmsumIntRange extends nmsumRange<jlInteger> {
      constructor (value: jlInteger);
      constructor (minimum: jlInteger, maximum: jlInteger);
      /**Whether the given value is in range of the minimum and the maximum.*/
      isInRange (value: jlInteger): boolean;
   }
   /**Represents an inventory which can be viewed by a collection of Player.    You can create one with Inventory(InventoryType, String) or by making your own subclass.  It can then be opened using Player.openInventory(Inventory).*/
   export class nmsiInventory extends nmsiAbstractInventory implements nmsViewable {
      constructor (inventoryType: nmsiInventoryType, title: string);
      constructor (inventoryType: nmsiInventoryType, title: nkatComponent);
      /**This will not open the inventory for player, use Player.openInventory(Inventory).*/
      addViewer (player: nmsePlayer): boolean;
      /**Called when a Player held click in the inventory*/
      changeHeld (player: nmsePlayer, slot: number, key: number): boolean;
      /**Clears the inventory and send relevant update to the viewer(s).*/
      clear (): void;
      /**Called when a Player double click in the inventory*/
      doubleClick (player: nmsePlayer, slot: number): boolean;
      dragging (player: nmsePlayer, slot: number, button: number): boolean;
      /**Called when a Player press the drop button*/
      drop (player: nmsePlayer, mode: number, slot: number, button: number): boolean;
      /**Gets the cursor item of a viewer.*/
      getCursorItem (player: nmsePlayer): nmsiItemStack;
      /**Gets the inventory type.*/
      getInventoryType (): nmsiInventoryType;
      /**Gets the inventory title.*/
      getTitle (): nkatComponent;
      /**Gets all the viewers of this viewable element.*/
      getViewers (): juSet<nmsePlayer>;
      /**Gets this window id.*/
      getWindowId (): number;
      /**Called when a Player left click in the inventory.*/
      leftClick (player: nmsePlayer, slot: number): boolean;
      middleClick (player: nmsePlayer, slot: number): boolean;
      /**This will not close the inventory for player, use Player.closeInventory().*/
      removeViewer (player: nmsePlayer): boolean;
      /**Called when a Player right click in the inventory.*/
      rightClick (player: nmsePlayer, slot: number): boolean;
      /**Inserts safely an item into the inventory.*/
      safeItemInsert (slot: number, itemStack: nmsiItemStack): void;
      /**Sends a window property to all viewers.*/
      sendProperty (property: nmsiInventoryProperty, value: number): void;
      /**Changes the cursor item of a viewer,  does nothing if player is not a viewer.*/
      setCursorItem (player: nmsePlayer, cursorItem: nmsiItemStack): void;
      /**Changes the inventory title.*/
      setTitle (title: nkatComponent): void;
      /**Called when a Player shift click in the inventory*/
      shiftClick (player: nmsePlayer, slot: number): boolean;
      /**Refreshes the inventory for all viewers.*/
      update (): void;
      /**Refreshes the inventory for a specific viewer.*/
      update (player: nmsePlayer): void;
   }
   /**Called after InventoryPreClickEvent, this event cannot be cancelled and items related to the click  are already moved.*/
   export class nmseiInventoryClickEvent extends nmseInventoryEvent {
      constructor (inventory: nmsiInventory, player: nmsePlayer, slot: number, clickType: nmsicClickType, clicked: nmsiItemStack, cursor: nmsiItemStack);
      /**Gets the clicked item.*/
      getClickedItem (): nmsiItemStack;
      /**Gets the click type.*/
      getClickType (): nmsicClickType;
      /**Gets the item in the player cursor.*/
      getCursorItem (): nmsiItemStack;
      /**Gets the player who clicked in the inventory.*/
      getPlayer (): nmsePlayer;
      /**Gets the clicked slot number.*/
      getSlot (): number;
   }
   /**Represents an inventory which can receive click input.  All methods returning boolean returns true if the action is successful, false otherwise.    See https:\/\/wiki.vg\/Protocol#Click_Window for more information.*/
   export interface nmsiInventoryClickHandler {
      callClickEvent (player: nmsePlayer, inventory: nmsiInventory, slot: number, clickType: nmsicClickType, clicked: nmsiItemStack, cursor: nmsiItemStack): void;
      /**Called when a Player held click in the inventory*/
      changeHeld (player: nmsePlayer, slot: number, key: number): boolean;
      /**Called when a Player double click in the inventory*/
      doubleClick (player: nmsePlayer, slot: number): boolean;
      dragging (player: nmsePlayer, slot: number, button: number): boolean;
      /**Called when a Player press the drop button*/
      drop (player: nmsePlayer, mode: number, slot: number, button: number): boolean;
      /**Called when a Player left click in the inventory.*/
      leftClick (player: nmsePlayer, slot: number): boolean;
      middleClick (player: nmsePlayer, slot: number): boolean;
      /**Called when a Player right click in the inventory.*/
      rightClick (player: nmsePlayer, slot: number): boolean;
      /**Called when a Player shift click in the inventory*/
      shiftClick (player: nmsePlayer, slot: number): boolean;
   }
   export class nmsicInventoryClickProcessor extends jlObject {
      constructor ();
      changeHeld (inventory: nmsiInventory, player: nmsePlayer, slot: number, key: number, clicked: nmsiItemStack, cursor: nmsiItemStack): nmsicInventoryClickResult;
      clearCache (player: nmsePlayer): void;
      doubleClick (clickedInventory: nmsiAbstractInventory, inventory: nmsiInventory, player: nmsePlayer, slot: number, cursor: nmsiItemStack): nmsicInventoryClickResult;
      dragging (inventory: nmsiInventory, player: nmsePlayer, slot: number, button: number, clicked: nmsiItemStack, cursor: nmsiItemStack, itemGetter: it.unimi.dsi.fastutil.numbers.Int2ObjectFunction<nmsiItemStack>, itemSetter: jufBiConsumer<jlInteger,nmsiItemStack>): nmsicInventoryClickResult;
      drop (inventory: nmsiInventory, player: nmsePlayer, mode: number, slot: number, button: number, clicked: nmsiItemStack, cursor: nmsiItemStack): nmsicInventoryClickResult;
      leftClick (inventory: nmsiInventory, player: nmsePlayer, slot: number, clicked: nmsiItemStack, cursor: nmsiItemStack): nmsicInventoryClickResult;
      rightClick (inventory: nmsiInventory, player: nmsePlayer, slot: number, clicked: nmsiItemStack, cursor: nmsiItemStack): nmsicInventoryClickResult;
      shiftClick (targetInventory: nmsiAbstractInventory, start: number, end: number, step: number, player: nmsePlayer, slot: number, clicked: nmsiItemStack, cursor: nmsiItemStack): nmsicInventoryClickResult;
      shiftClick (targetInventory: nmsiAbstractInventory, inventory: nmsiInventory, player: nmsePlayer, slot: number, clicked: nmsiItemStack, cursor: nmsiItemStack): nmsicInventoryClickResult;
   }
   export class nmsicInventoryClickResult extends jlObject {
      constructor (clicked: nmsiItemStack, cursor: nmsiItemStack);
      doRefresh (): boolean;
      getClicked (): nmsiItemStack;
      getCursor (): nmsiItemStack;
      isCancel (): boolean;
      isPlayerInventory (): boolean;
      setCancel (cancel: boolean): void;
      setClicked (clicked: nmsiItemStack): void;
      setCursor (cursor: nmsiItemStack): void;
      setPlayerInventory (playerInventory: boolean): void;
      setRefresh (refresh: boolean): void;
   }
   /**Called when an Inventory is closed by a player.*/
   export class nmseiInventoryCloseEvent extends nmseInventoryEvent {
      constructor (inventory: nmsiInventory, player: nmsePlayer);
      /**Gets the new inventory to open.*/
      getNewInventory (): nmsiInventory;
      /**Gets the player who closed the inventory.*/
      getPlayer (): nmsePlayer;
      /**Can be used to open a new inventory after closing the previous one.*/
      setNewInventory (newInventory: nmsiInventory): void;
   }
   /**Can be added to any AbstractInventory  using AbstractInventory.addInventoryCondition(InventoryCondition)  or PlayerInventory.addInventoryCondition(InventoryCondition)  in order to listen to any issued clicks.*/
   export interface nmsicInventoryCondition {
      /**Called when a Player clicks in the inventory where this InventoryCondition has been added to.*/
      accept (player: nmsePlayer, slot: number, clickType: nmsicClickType, inventoryConditionResult: nmsicInventoryConditionResult): void;
   }
   /**Used by InventoryCondition to step in inventory click processing.*/
   export class nmsicInventoryConditionResult extends jlObject {
      constructor (clickedItem: nmsiItemStack, cursorItem: nmsiItemStack);
      getClickedItem (): nmsiItemStack;
      getCursorItem (): nmsiItemStack;
      isCancel (): boolean;
      setCancel (cancel: boolean): void;
      setClickedItem (clickedItem: nmsiItemStack): void;
      setCursorItem (cursorItem: nmsiItemStack): void;
   }
   export class nmsdtInventoryData extends nmsdDataType<nmsiInventory> {
      constructor ();
      /**Decodes the data type.*/
      decode (reader: nmsubBinaryReader): nmsiInventory;
      /**Encodes the data type.*/
      encode (writer: nmsubBinaryWriter, value: nmsiInventory): void;
   }
   export class nmseInventoryEvent extends nmseEvent {
      constructor (inventory: nmsiInventory);
      /**Gets the inventory.*/
      getInventory (): nmsiInventory;
   }
   /**Called when a player open an Inventory.    Executed by Player.openInventory(Inventory).*/
   export class nmseiInventoryOpenEvent extends nmseInventoryEvent implements nmseCancellableEvent {
      constructor (inventory: nmsiInventory, player: nmsePlayer);
      /**Gets the inventory to open, this could have been change by the setInventory(Inventory).*/
      getInventory (): nmsiInventory;
      /**Gets the player who opens the inventory.*/
      getPlayer (): nmsePlayer;
      /**Gets if the Event should be cancelled or not.*/
      isCancelled (): boolean;
      /**Marks the Event as cancelled or not.*/
      setCancelled (cancel: boolean): void;
      /**Changes the inventory to open.*/
      setInventory (inventory: nmsiInventory): void;
   }
   /**Called before InventoryClickEvent, used to potentially cancel the click.*/
   export class nmseiInventoryPreClickEvent extends nmseInventoryEvent implements nmseCancellableEvent {
      constructor (inventory: nmsiInventory, player: nmsePlayer, slot: number, clickType: nmsicClickType, clicked: nmsiItemStack, cursor: nmsiItemStack);
      /**Gets the item who have been clicked.*/
      getClickedItem (): nmsiItemStack;
      /**Gets the click type.*/
      getClickType (): nmsicClickType;
      /**Gets the item who was in the player cursor.*/
      getCursorItem (): nmsiItemStack;
      /**Gets the player who is trying to click on the inventory.*/
      getPlayer (): nmsePlayer;
      /**Gets the clicked slot number.*/
      getSlot (): number;
      /**Gets if the Event should be cancelled or not.*/
      isCancelled (): boolean;
      /**Marks the Event as cancelled or not.*/
      setCancelled (cancel: boolean): void;
      /**Changes the clicked item.*/
      setClickedItem (clickedItem: nmsiItemStack): void;
      /**Changes the cursor item.*/
      setCursorItem (cursorItem: nmsiItemStack): void;
   }
   /**List of inventory property and their ID    See https:\/\/wiki.vg\/Protocol#Window_Property for more information*/
   export class nmsiInventoryProperty extends jlEnum<nmsiInventoryProperty> {
      static ANVIL_REPAIR_COST: nmsiInventoryProperty;
      static BEACON_FIRST_POTION: nmsiInventoryProperty;
      static BEACON_POWER_LEVEL: nmsiInventoryProperty;
      static BEACON_SECOND_POTION: nmsiInventoryProperty;
      static BREWING_STAND_BREW_TIME: nmsiInventoryProperty;
      static BREWING_STAND_FUEL_TIME: nmsiInventoryProperty;
      static ENCHANTMENT_TABLE_ENCH_ID_BOTTOM: nmsiInventoryProperty;
      static ENCHANTMENT_TABLE_ENCH_ID_MIDDLE: nmsiInventoryProperty;
      static ENCHANTMENT_TABLE_ENCH_ID_TOP: nmsiInventoryProperty;
      static ENCHANTMENT_TABLE_ENCH_LEVEL_BOTTOM: nmsiInventoryProperty;
      static ENCHANTMENT_TABLE_ENCH_LEVEL_MIDDLE: nmsiInventoryProperty;
      static ENCHANTMENT_TABLE_ENCH_LEVEL_TOP: nmsiInventoryProperty;
      static ENCHANTMENT_TABLE_LEVEL_REQUIREMENT_BOTTOM: nmsiInventoryProperty;
      static ENCHANTMENT_TABLE_LEVEL_REQUIREMENT_MIDDLE: nmsiInventoryProperty;
      static ENCHANTMENT_TABLE_LEVEL_REQUIREMENT_TOP: nmsiInventoryProperty;
      static ENCHANTMENT_TABLE_SEED: nmsiInventoryProperty;
      static FURNACE_FIRE_ICON: nmsiInventoryProperty;
      static FURNACE_MAXIMUM_FUEL_BURN_TIME: nmsiInventoryProperty;
      static FURNACE_MAXIMUM_PROGRESS: nmsiInventoryProperty;
      static FURNACE_PROGRESS_ARROW: nmsiInventoryProperty;
      getProperty (): number;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsiInventoryProperty;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsiInventoryProperty[];
   }
   /**Represents a type of Inventory*/
   export class nmsiInventoryType extends jlEnum<nmsiInventoryType> {
      static ANVIL: nmsiInventoryType;
      static BEACON: nmsiInventoryType;
      static BLAST_FURNACE: nmsiInventoryType;
      static BREWING_STAND: nmsiInventoryType;
      static CARTOGRAPHY: nmsiInventoryType;
      static CHEST_1_ROW: nmsiInventoryType;
      static CHEST_2_ROW: nmsiInventoryType;
      static CHEST_3_ROW: nmsiInventoryType;
      static CHEST_4_ROW: nmsiInventoryType;
      static CHEST_5_ROW: nmsiInventoryType;
      static CHEST_6_ROW: nmsiInventoryType;
      static CRAFTING: nmsiInventoryType;
      static ENCHANTMENT: nmsiInventoryType;
      static FURNACE: nmsiInventoryType;
      static GRINDSTONE: nmsiInventoryType;
      static HOPPER: nmsiInventoryType;
      static LECTERN: nmsiInventoryType;
      static LOOM: nmsiInventoryType;
      static MERCHANT: nmsiInventoryType;
      static SHULKER_BOX: nmsiInventoryType;
      static SMITHING: nmsiInventoryType;
      static SMOKER: nmsiInventoryType;
      static STONE_CUTTER: nmsiInventoryType;
      static WINDOW_3X3: nmsiInventoryType;
      getSize (): number;
      getWindowType (): number;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsiInventoryType;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsiInventoryType[];
   }
   export class nmsemgIronGolemMeta extends nmsemgAbstractGolemMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      isPlayerCreated (): boolean;
      setPlayerCreated (value: boolean): void;
   }
   export class nmsiaItemAttribute extends jlObject {
      constructor (uuid: juUUID, internalName: string, attribute: nmsaAttribute, operation: nmsaAttributeOperation, value: number, slot: nmsiaAttributeSlot);
      getAttribute (): nmsaAttribute;
      getInternalName (): string;
      getOperation (): nmsaAttributeOperation;
      getSlot (): nmsiaAttributeSlot;
      getUuid (): juUUID;
      getValue (): number;
   }
   export class nmseiItemDropEvent extends nmseEvent implements nmseCancellableEvent {
      constructor (player: nmsePlayer, itemStack: nmsiItemStack);
      getItemStack (): nmsiItemStack;
      getPlayer (): nmsePlayer;
      /**Gets if the Event should be cancelled or not.*/
      isCancelled (): boolean;
      /**Marks the Event as cancelled or not.*/
      setCancelled (cancel: boolean): void;
   }
   /**Represents an item on the ground.*/
   export class nmseItemEntity extends nmseObjectEntity {
      constructor (itemStack: nmsiItemStack, spawnPosition: nmsuPosition);
      constructor (itemStack: nmsiItemStack, spawnPosition: nmsuPosition, instance: nmsiInstance);
      /**Gets the item stack on ground.*/
      getItemStack (): nmsiItemStack;
      /**Gets the merge range.*/
      getMergeRange (): number;
      /**Gets the update option for the merging feature.*/
      static getMergeUpdateOption (): nmsutUpdateOption;
      /**Gets the data of this object entity.*/
      getObjectData (): number;
      /**Gets the pickup delay in milliseconds, defined by setPickupDelay(long, TimeUnit).*/
      getPickupDelay (): number;
      /**Used to know if the ItemEntity can be pickup.*/
      getSpawnTime (): number;
      /**Gets if the item is mergeable.*/
      isMergeable (): boolean;
      /**Gets if the item is currently pickable.*/
      isPickable (): boolean;
      /**Changes the item stack on ground.*/
      setItemStack (itemStack: nmsiItemStack): void;
      /**When set to true, close ItemEntity will try to merge together as a single entity  when their getItemStack() is similar and allowed to stack together.*/
      setMergeable (mergeable: boolean): void;
      /**Changes the merge range.*/
      setMergeRange (mergeRange: number): void;
      /**Changes the merge update option.*/
      static setMergeUpdateOption (mergeUpdateOption: nmsutUpdateOption): void;
      /**Makes the item pickable.*/
      setPickable (pickable: boolean): void;
      /**Sets the pickup delay of the ItemEntity.*/
      setPickupDelay (delay: number, timeUnit: nmsutTimeUnit): void;
      /**Called when a new instance is set.*/
      spawn (): void;
      /**Called each tick.*/
      update (time: number): void;
   }
   export class nmsemiItemEntityMeta extends nmsemEntityMeta implements nmsemObjectDataProvider {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getItem (): nmsiItemStack;
      getObjectData (): number;
      requiresVelocityPacketAtSpawn (): boolean;
      setItem (item: nmsiItemStack): void;
   }
   export class nmsgleItemEntry extends nmsglLEntry {
      generate (output: juList<nmsiItemStack>, arguments: nmsdData): void;
      getFunctions (): juList<nmsglLootTableFunction>;
      getItem (): nmsiMaterial;
   }
   export class nmsemoItemFrameMeta extends nmsemEntityMeta implements nmsemObjectDataProvider {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getItem (): nmsiItemStack;
      getObjectData (): number;
      getOrientation (): nmsemoIOrientation;
      getRotation (): nmsuRotation;
      requiresVelocityPacketAtSpawn (): boolean;
      setItem (value: nmsiItemStack): void;
      /**Sets orientation of the item frame.*/
      setOrientation (orientation: nmsemoIOrientation): void;
      setRotation (value: nmsuRotation): void;
   }
   export class nmsemoIOrientation extends jlEnum<nmsemoIOrientation> {
      static DOWN: nmsemoIOrientation;
      static EAST: nmsemoIOrientation;
      static NORTH: nmsemoIOrientation;
      static SOUTH: nmsemoIOrientation;
      static UP: nmsemoIOrientation;
      static WEST: nmsemoIOrientation;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsemoIOrientation;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsemoIOrientation[];
   }
   /**Represents a hide flag which can be applied to an ItemStack using ItemMetaBuilder.hideFlag(int).*/
   export class nmsiItemHideFlag extends jlEnum<nmsiItemHideFlag> {
      static HIDE_ATTRIBUTES: nmsiItemHideFlag;
      static HIDE_DESTROYS: nmsiItemHideFlag;
      static HIDE_ENCHANTS: nmsiItemHideFlag;
      static HIDE_PLACED_ON: nmsiItemHideFlag;
      static HIDE_POTION_EFFECTS: nmsiItemHideFlag;
      static HIDE_UNBREAKABLE: nmsiItemHideFlag;
      getBitFieldPart (): number;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsiItemHideFlag;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsiItemHideFlag[];
   }
   export class nmsiItemMeta extends jlObject implements nmstTagReadable, nmsubWriteable {
      constructor (metaBuilder: nmsiItemMetaBuilder);
      builder (): nmsiItemMetaBuilder;
      equals (o: jlObject): boolean;
      getAttributes (): juList<nmsiaItemAttribute>;
      getCanDestroy (): juSet<nmsibBlock>;
      getCanPlaceOn (): juSet<nmsibBlock>;
      getCustomModelData (): number;
      getDamage (): number;
      getDisplayName (): nkatComponent;
      getEnchantmentMap (): juMap<nmsiEnchantment,jlShort>;
      getHideFlag (): number;
      getLore (): juList<nkatComponent>;
      /**Reads the specified tag.*/
      getTag<T> (tag: nmstTag<T>): T;
      hashCode (): number;
      /**Returns if a tag is present.*/
      hasTag (tag: nmstTag<any>): boolean;
      isUnbreakable (): boolean;
      toNBT (): jhnNBTCompound;
      toSNBT (): string;
      with (builderConsumer: jufConsumer<nmsiItemMetaBuilder>): nmsiItemMeta;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsiItemMetaBuilder extends jlObject implements nmstTagWritable {
      constructor ();
      attributes (attributes: juList<nmsiaItemAttribute>): nmsiItemMetaBuilder;
      build (): nmsiItemMeta;
      canDestroy (blocks: juSet<nmsibBlock>): nmsiItemMetaBuilder;
      canDestroy (...blocks: nmsibBlock[]): nmsiItemMetaBuilder;
      canPlaceOn (blocks: juSet<nmsibBlock>): nmsiItemMetaBuilder;
      canPlaceOn (...blocks: nmsibBlock[]): nmsiItemMetaBuilder;
      clearEnchantment (): nmsiItemMetaBuilder;
      customModelData (customModelData: number): nmsiItemMetaBuilder;
      damage (damage: number): nmsiItemMetaBuilder;
      displayName (displayName: nkatComponent): nmsiItemMetaBuilder;
      enchantment (enchantment: nmsiEnchantment, level: number): nmsiItemMetaBuilder;
      enchantments (enchantments: juMap<nmsiEnchantment,jlShort>): nmsiItemMetaBuilder;
      static fromNBT (src: nmsiItemMetaBuilder, nbtCompound: org.jglrxavpok.hephaistos.nbt.NBTCompound): nmsiItemMetaBuilder;
      getSupplier (): jufSupplier<nmsiItemMetaBuilder>;
      handleCollection (objects: juCollection<any>, key: string, nbtCompound: org.jglrxavpok.hephaistos.nbt.NBTCompound, supplier: jufSupplier<org.jglrxavpok.hephaistos.nbt.NBT>): void;
      handleCompound (key: string, consumer: jufConsumer<org.jglrxavpok.hephaistos.nbt.NBTCompound>): void;
      handleMap (objects: juMap<any,any>, key: string, nbtCompound: org.jglrxavpok.hephaistos.nbt.NBTCompound, supplier: jufSupplier<org.jglrxavpok.hephaistos.nbt.NBT>): void;
      handleNullable (value: jlObject, key: string, nbtCompound: org.jglrxavpok.hephaistos.nbt.NBTCompound, supplier: jufSupplier<org.jglrxavpok.hephaistos.nbt.NBT>): void;
      hideFlag (hideFlag: number): nmsiItemMetaBuilder;
      hideFlag (...hideFlags: nmsiItemHideFlag[]): nmsiItemMetaBuilder;
      lore (lore: juList<nkatComponent>): nmsiItemMetaBuilder;
      lore (...lore: nkatComponent[]): nmsiItemMetaBuilder;
      read (nbtCompound: org.jglrxavpok.hephaistos.nbt.NBTCompound): void;
      set<T> (tag: nmstTag<T>, value: T): nmsiItemMetaBuilder;
      /**Writes the specified type.*/
      setTag<T> (tag: nmstTag<T>, value: T): void;
      unbreakable (unbreakable: boolean): nmsiItemMetaBuilder;
   }
   export interface nmsiIProvider<T extends ItemMetaBuilder> {}
   /**Represents an immutable item to be placed inside PlayerInventory,  Inventory or even on the ground ItemEntity.    An item stack cannot be null, AIR should be used instead.*/
   export class nmsiItemStack extends jlObject implements nmstTagReadable, nkateHoverEventSource<nkateHShowItem> {
      constructor (material: nmsiMaterial, amount: number, meta: nmsiItemMeta, stackingRule: nmsiStackingRule);
      asHoverEvent (op: jufUnaryOperator<nkateHShowItem>): nkateHoverEvent<nkateHShowItem>;
      builder (): nmsiItemStackBuilder;
      static builder (material: nmsiMaterial): nmsiItemStackBuilder;
      equals (o: jlObject): boolean;
      static fromNBT (material: nmsiMaterial, nbtCompound: org.jglrxavpok.hephaistos.nbt.NBTCompound): nmsiItemStack;
      static fromNBT (material: nmsiMaterial, nbtCompound: org.jglrxavpok.hephaistos.nbt.NBTCompound, amount: number): nmsiItemStack;
      getAmount (): number;
      getDisplayName (): nkatComponent;
      getLore (): juList<nkatComponent>;
      getMaterial (): nmsiMaterial;
      getMeta (): nmsiItemMeta;
      getStackingRule (): nmsiStackingRule;
      /**Reads the specified tag.*/
      getTag<T> (tag: nmstTag<T>): T;
      hashCode (): number;
      /**Returns if a tag is present.*/
      hasTag (tag: nmstTag<any>): boolean;
      isAir (): boolean;
      isSimilar (itemStack: nmsiItemStack): boolean;
      static of (material: nmsiMaterial): nmsiItemStack;
      static of (material: nmsiMaterial, amount: number): nmsiItemStack;
      with (builderConsumer: jufConsumer<nmsiItemStackBuilder>): nmsiItemStack;
      withAmount (amount: number): nmsiItemStack;
      withAmount (intUnaryOperator: jufIntUnaryOperator): nmsiItemStack;
      withDisplayName (componentUnaryOperator: jufUnaryOperator<nkatComponent>): nmsiItemStack;
      withDisplayName (displayName: nkatComponent): nmsiItemStack;
      withLore (loreUnaryOperator: jufUnaryOperator<juList<nkatComponent>>): nmsiItemStack;
      withLore (lore: juList<nkatComponent>): nmsiItemStack;
      withMeta (metaOperator: jufUnaryOperator<nmsiItemMetaBuilder>): nmsiItemStack;
      withMeta<T extends nmsiItemMetaBuilder,U extends nmsiIProvider<T>> (metaType: jlClass<U>, metaConsumer: jufConsumer<T>): nmsiItemStack;
      withTag<T> (tag: nmstTag<T>, value: T): nmsiItemStack;
   }
   export class nmsdtaItemStackArrayData extends nmsdDataType<nmsiItemStack> {
      constructor ();
      /**Decodes the data type.*/
      decode (reader: nmsubBinaryReader): nmsiItemStack[];
      /**Encodes the data type.*/
      encode (writer: nmsubBinaryWriter, value: nmsiItemStack[]): void;
   }
   export class nmsiItemStackBuilder extends jlObject {
      constructor (material: nmsiMaterial);
      constructor (material: nmsiMaterial, metaBuilder: nmsiItemMetaBuilder);
      amount (amount: number): nmsiItemStackBuilder;
      build (): nmsiItemStack;
      displayName (displayName: nkatComponent): nmsiItemStackBuilder;
      lore (lore: juList<nkatComponent>): nmsiItemStackBuilder;
      lore (...lore: nkatComponent[]): nmsiItemStackBuilder;
      meta<T extends nmsiItemMetaBuilder,U extends nmsiIProvider<T>> (metaType: jlClass<U>, itemMetaConsumer: jufConsumer<T>): nmsiItemStackBuilder;
      meta (itemMetaConsumer: jufUnaryOperator<nmsiItemMetaBuilder>): nmsiItemStackBuilder;
      meta (itemMeta: nmsiItemMeta): nmsiItemStackBuilder;
      stackingRule (stackingRule: nmsiStackingRule): nmsiItemStackBuilder;
   }
   export class nmsdtItemStackData extends nmsdDataType<nmsiItemStack> {
      constructor ();
      /**Decodes the data type.*/
      decode (reader: nmsubBinaryReader): nmsiItemStack;
      /**Encodes the data type.*/
      encode (writer: nmsubBinaryWriter, value: nmsiItemStack): void;
   }
   /**minecraft:item*/
   export class nmsgleItemType extends jlObject implements nmsglLootTableEntryType {
      constructor ();
      create (lootTableManager: nmsglLootTableManager, name: string, conditions: juList<nmsgCondition>, children: juList<nmsglLEntry>, expand: boolean, functions: juList<nmsglLootTableFunction>, weight: number, quality: number): nmsglLEntry;
   }
   export class nmseiItemUpdateStateEvent extends nmseEvent {
      constructor (player: nmsePlayer, hand: nmsePHand, itemStack: nmsiItemStack);
      getHand (): nmsePHand;
      getItemStack (): nmsiItemStack;
      getPlayer (): nmsePlayer;
      hasHandAnimation (): boolean;
      setHandAnimation (handAnimation: boolean): void;
   }
   export class nmsnpspJoinGamePacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmslKeepAliveListener extends jlObject {
      constructor ();
      static listener (packet: nmsnpcpClientKeepAlivePacket, player: nmsePlayer): void;
   }
   export class nmsnpspKeepAlivePacket extends jlObject implements nmsnpsServerPacket {
      constructor (id: number);
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   /**LargeFramebuffer with direct access to the colors array.    This implementation does not throw errors when accessing out-of-bounds coordinates through sub-views, and will instead  use MapColors.NONE. This is only the case for sub-views, access through setMapColor(int, int, byte)  and getMapColor(int, int) will throw an exception if out-of-bounds coordinates are inputted.*/
   export class nmsmfLargeDirectFramebuffer extends jlObject implements nmsmLargeFramebuffer {
      constructor (width: number, height: number);
      /**Returns a new Framebuffer that represent a 128x128 sub-view of this framebuffer.*/
      createSubView (left: number, top: number): nmsmFramebuffer;
      getColors (): number[];
      getMapColor (x: number, y: number): number;
      height (): number;
      setMapColor (x: number, y: number, color: number): nmsmfLargeDirectFramebuffer;
      width (): number;
   }
   /**Framebuffer that is meant to be split in sub-framebuffers.  Contrary to Framebuffer, LargeFramebuffer supports sizes over 128x128 pixels.*/
   export interface nmsmLargeFramebuffer {
      /**Returns a new Framebuffer that represent a 128x128 sub-view of this framebuffer.*/
      createSubView (left: number, top: number): nmsmFramebuffer;
      getMapColor (x: number, y: number): number;
      height (): number;
      /**Prepares the packet to render a 128x128 sub view of this framebuffer*/
      preparePacket (packet: nmsnpspMapDataPacket, left: number, top: number): void;
      width (): number;
   }
   export class nmsmfLargeFramebufferDefaultView extends jlObject implements nmsmFramebuffer {
      constructor (parent: nmsmLargeFramebuffer, x: number, y: number);
      toMapColors (): number[];
   }
   /**LargeFramebuffer that embeds a BufferedImage,  allowing for rendering directly via Graphics2D or its pixel array.*/
   export class nmsmfLargeGraphics2DFramebuffer extends jlObject implements nmsmLargeFramebuffer {
      constructor (width: number, height: number);
      /**Returns a new Framebuffer that represent a 128x128 sub-view of this framebuffer.*/
      createSubView (left: number, top: number): nmsmFramebuffer;
      get (x: number, z: number): number;
      getBackingImage (): jaiBufferedImage;
      getMapColor (x: number, y: number): number;
      getRenderer (): jaGraphics2D;
      height (): number;
      set (x: number, z: number, rgb: number): nmsmfLargeGraphics2DFramebuffer;
      width (): number;
   }
   /**Targets the last damager of this entity.*/
   export class nmseatLastEntityDamagerTarget extends nmseaTargetSelector {
      constructor (entityCreature: nmseEntityCreature, range: number);
      /**Finds the target.*/
      findTarget (): nmseEntity;
   }
   export class nmsemoLeashKnotMeta extends nmsemEntityMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   export class nmsimLeatherArmorMeta extends nmsiItemMeta implements nmsiIProvider<nmsimLBuilder> {
      constructor (metaBuilder: nmsiItemMetaBuilder, color: nmscColor);
      getColor (): nmscColor;
   }
   export class nmsimLBuilder extends nmsiItemMetaBuilder {
      constructor ();
      build (): nmsimLeatherArmorMeta;
      color (color: nmscColor): nmsimLBuilder;
      getSupplier (): jufSupplier<nmsiItemMetaBuilder>;
      read (nbtCompound: org.jglrxavpok.hephaistos.nbt.NBTCompound): void;
   }
   export class nmsnncLegacyPingHandler extends io.netty.channel.ChannelInboundHandlerAdapter {
      constructor ();
      channelRead (ctx: io.netty.channel.ChannelHandlerContext, object: jlObject): void;
      handlerRemoved (ctx: io.netty.channel.ChannelHandlerContext): void;
   }
   export class nmsnpcsLegacyServerListPingPacket extends jlObject implements nmsnpcClientPreplayPacket {
      constructor ();
      /**Called when the packet is received.*/
      process (connection: nmsnpPlayerConnection): void;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsemoLightningBoltMeta extends nmsemEntityMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   export class nmseLivingEntity extends nmseEntity implements nmsiEquipmentHandler {
      constructor (entityType: nmseEntityType);
      constructor (entityType: nmseEntityType, uuid: juUUID);
      constructor (entityType: nmseEntityType, uuid: juUUID, spawnPosition: nmsuPosition);
      constructor (entityType: nmseEntityType, spawnPosition: nmsuPosition);
      addViewer0 (player: nmsePlayer): boolean;
      /**Gets if the entity is able to pickup items.*/
      canPickupItem (): boolean;
      /**Damages the entity by a value, the type of the damage also has to be specified.*/
      damage (type: nmsedDamageType, value: number): boolean;
      /**Gets the amount of arrows in the entity.*/
      getArrowCount (): number;
      /**Retrieves the attribute instance and its modifiers.*/
      getAttribute (attribute: nmsaAttribute): nmsaAttributeInstance;
      /**Retrieves the attribute value.*/
      getAttributeValue (attribute: nmsaAttribute): number;
      /**Gets the boots.*/
      getBoots (): nmsiItemStack;
      /**Gets the chestplate.*/
      getChestplate (): nmsiItemStack;
      /**Gets the time in ms between two fire damage applications.*/
      getFireDamagePeriod (): number;
      /**Gets the entity health.*/
      getHealth (): number;
      /**Gets the helmet.*/
      getHelmet (): nmsiItemStack;
      /**Gets the ItemStack in main hand.*/
      getItemInMainHand (): nmsiItemStack;
      /**Gets the ItemStack in off hand.*/
      getItemInOffHand (): nmsiItemStack;
      /**Gets the last damage source which damaged of this entity.*/
      getLastDamageSource (): nmsedDamageType;
      /**Gets the leggings.*/
      getLeggings (): nmsiItemStack;
      /**Gets the line of sight in BlockPosition of the entity.*/
      getLineOfSight (maxDistance: number): juList<nmsuBlockPosition>;
      /**Gets EntityMeta of this entity casted to LivingEntityMeta.*/
      getLivingEntityMeta (): nmsemLivingEntityMeta;
      /**Gets the entity max health from getAttributeValue(Attribute) Attributes.MAX_HEALTH.*/
      getMaxHealth (): number;
      /**Gets an EntityPropertiesPacket for this entity with all of its attributes values.*/
      getPropertiesPacket (): nmsnpspEntityPropertiesPacket;
      /**Gets the target (not-air) BlockPosition of the entity.*/
      getTargetBlockPosition (maxDistance: number): nmsuBlockPosition;
      /**Gets the Team of the entity.*/
      getTeam (): nmssTeam;
      /**How does this entity handle being in the voidany*/
      handleVoid (): void;
      /**Checks whether the current entity has line of sight to the given one.*/
      hasLineOfSight (entity: nmseEntity): boolean;
      /**Sets the heal of the entity as its max health.*/
      heal (): void;
      /**Gets if the entity is dead or not.*/
      isDead (): boolean;
      isFlyingWithElytra (): boolean;
      /**Is this entity immune to the given type of damageany*/
      isImmune (type: nmsedDamageType): boolean;
      /**Gets if the entity is invulnerable.*/
      isInvulnerable (): boolean;
      /**Kills the entity, trigger the EntityDeathEvent event.*/
      kill (): void;
      /**Callback used when an attribute instance has been modified.*/
      onAttributeChanged (attributeInstance: nmsaAttributeInstance): void;
      refreshActiveHand (isHandActive: boolean, offHand: boolean, riptideSpinAttack: boolean): void;
      /**Used to change the isDead internal field.*/
      refreshIsDead (isDead: boolean): void;
      /**Changes the amount of arrow stuck in the entity.*/
      setArrowCount (arrowCount: number): void;
      /**Changes the boots.*/
      setBoots (itemStack: nmsiItemStack): void;
      /**Changes the internal entity bounding box.*/
      setBoundingBox (x: number, y: number, z: number): void;
      /**When set to false, the entity will not be able to pick ItemEntity on the ground.*/
      setCanPickupItem (canPickupItem: boolean): void;
      /**Changes the chestplate.*/
      setChestplate (itemStack: nmsiItemStack): void;
      /**Changes the delay between two fire damage applications.*/
      setFireDamagePeriod (fireDamagePeriod: number, timeUnit: nmsutTimeUnit): void;
      /**Sets fire to this entity for a given duration.*/
      setFireForDuration (duration: number): void;
      /**Sets fire to this entity for a given duration.*/
      setFireForDuration (duration: number, unit: nmsutTimeUnit): void;
      setFlyingWithElytra (isFlying: boolean): void;
      /**Changes the entity health, kill it if health is >= 0 and is not dead yet.*/
      setHealth (health: number): void;
      /**Changes the helmet.*/
      setHelmet (itemStack: nmsiItemStack): void;
      /**Makes the entity vulnerable or invulnerable.*/
      setInvulnerable (invulnerable: boolean): void;
      /**Changes the main hand ItemStack.*/
      setItemInMainHand (itemStack: nmsiItemStack): void;
      /**Changes the off hand ItemStack.*/
      setItemInOffHand (itemStack: nmsiItemStack): void;
      /**Changes the leggings.*/
      setLeggings (itemStack: nmsiItemStack): void;
      /**Changes the Team for the entity.*/
      setTeam (team: nmssTeam): void;
      /**Sends a EntityAnimationPacket to swing the main hand  (can be used for attack animation).*/
      swingMainHand (): void;
      /**Sends a EntityAnimationPacket to swing the off hand  (can be used for attack animation).*/
      swingOffHand (): void;
      /**Called each tick.*/
      update (time: number): void;
   }
   export class nmsemLivingEntityMeta extends nmsemEntityMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getActiveHand (): nmsePHand;
      getArrowCount (): number;
      getBedInWhichSleepingPosition (): nmsuBlockPosition;
      getHealth (): number;
      getHealthAddedByAbsorption (): number;
      getPotionEffectColor (): number;
      isHandActive (): boolean;
      isInRiptideSpinAttack (): boolean;
      isPotionEffectAmbient (): boolean;
      setActiveHand (hand: nmsePHand): void;
      setArrowCount (value: number): void;
      setBedInWhichSleepingPosition (value: nmsuBlockPosition): void;
      setHandActive (value: boolean): void;
      setHealth (value: number): void;
      setHealthAddedByAbsorption (value: number): void;
      setInRiptideSpinAttack (value: boolean): void;
      setPotionEffectAmbient (value: boolean): void;
      setPotionEffectColor (value: number): void;
   }
   export class nmsemaLlamaMeta extends nmsemaChestedHorseMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getCarpetColor (): number;
      getStrength (): number;
      getVariant (): nmsemaLVariant;
      setCarpetColor (value: number): void;
      setStrength (value: number): void;
      setVariant (value: nmsemaLVariant): void;
   }
   export class nmsemaLVariant extends jlEnum<nmsemaLVariant> {
      static BROWN: nmsemaLVariant;
      static CREAMY: nmsemaLVariant;
      static GRAY: nmsemaLVariant;
      static WHITE: nmsemaLVariant;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsemaLVariant;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsemaLVariant[];
   }
   export class nmsemoLlamaSpitMeta extends nmsemEntityMeta implements nmsemObjectDataProvider {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getObjectData (): number;
      requiresVelocityPacketAtSpawn (): boolean;
   }
   /**Represents something which can have a locale.*/
   export interface nmsaLocalizable {
      /**Gets a localizable that returns null for all calls to getLocale().*/
      static empty (): nmsaLocalizable;
      /**Gets the locale.*/
      getLocale (): juLocale;
      /**Sets the locale.*/
      setLocale (locale: juLocale): void;
   }
   export class nmsnpslLoginDisconnectPacket extends jlObject implements nmsnpsComponentHoldingServerPacket {
      constructor (kickMessage: nkatComponent);
      constructor (jsonKickMessage: nmscJsonMessage);
      /**Gets the components held by this object.*/
      components (): juCollection<nkatComponent>;
      /**Returns a copy of this object.*/
      copyWithOperator (operator: jufUnaryOperator<nkatComponent>): nmsnpslLoginDisconnectPacket;
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpslLoginPluginRequestPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpclLoginPluginResponsePacket extends jlObject implements nmsnpcClientPreplayPacket {
      constructor ();
      /**Called when the packet is received.*/
      process (connection: nmsnpPlayerConnection): void;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpclLoginStartPacket extends jlObject implements nmsnpcClientPreplayPacket {
      constructor ();
      /**Called when the packet is received.*/
      process (connection: nmsnpPlayerConnection): void;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpslLoginSuccessPacket extends jlObject implements nmsnpsServerPacket {
      constructor (uuid: juUUID, username: string);
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsdtaLongArrayData extends nmsdDataType<long[]> {
      constructor ();
      /**Decodes the data type.*/
      decode (reader: nmsubBinaryReader): number[];
      /**Encodes the data type.*/
      encode (writer: nmsubBinaryWriter, value: number[]): void;
   }
   export class nmsdtLongData extends nmsdDataType<jlLong> {
      constructor ();
      /**Decodes the data type.*/
      decode (reader: nmsubBinaryReader): jlLong;
      /**Encodes the data type.*/
      encode (writer: nmsubBinaryWriter, value: jlLong): void;
   }
   export class nmsumLongRange extends nmsumRange<jlLong> {
      constructor (value: jlLong);
      constructor (minimum: jlLong, maximum: jlLong);
      /**Whether the given value is in range of the minimum and the maximum.*/
      isInRange (value: jlLong): boolean;
   }
   export class nmsglLootTable extends jlObject {
      constructor (type: nmsglLootTableType, pools: juList<nmsglLPool>);
      generate (arguments: nmsdData): juList<nmsiItemStack>;
      getPools (): juList<nmsglLPool>;
      getType (): nmsglLootTableType;
   }
   export class nmsglLEntry extends jlObject implements nmsuWeightedRandomItem {
      constructor (type: nmsglLootTableEntryType, weight: number, quality: number, conditions: juList<nmsgCondition>);
      generate (output: juList<nmsiItemStack>, arguments: nmsdData): void;
      generateStacks (output: juList<nmsiItemStack>, arguments: nmsdData): void;
      getConditions (): juList<nmsgCondition>;
      getQuality (): number;
      getType (): nmsglLootTableEntryType;
      getWeight (): number;
   }
   export class nmsglLPool extends jlObject {
      constructor (minRollCount: number, maxRollCount: number, bonusMinRollCount: number, bonusMaxRollCount: number, entries: juList<nmsglLEntry>, conditions: juList<nmsgCondition>);
      generate (output: juList<nmsiItemStack>, arguments: nmsdData): void;
      getConditions (): juList<nmsgCondition>;
      getEntries (): juList<nmsglLEntry>;
      getMaxRollCount (): number;
      getMinRollCount (): number;
   }
   export interface nmsglLootTableEntryType {
      create (lootTableManager: nmsglLootTableManager, name: string, conditions: juList<nmsgCondition>, children: juList<nmsglLEntry>, expand: boolean, functions: juList<nmsglLootTableFunction>, weight: number, quality: number): nmsglLEntry;
   }
   /**Changes to apply to the stack being produced*/
   export interface nmsglLootTableFunction {
      /**Applies changes to the stack being produced*/
      apply (stack: nmsiItemStack, data: nmsdData): nmsiItemStack;
   }
   /**Handles loading and configuration of loot tables*/
   export class nmsglLootTableManager extends jlObject {
      constructor ();
      getConditionDeserializer (id: nmsuNamespaceID): cggJsonDeserializer<nmsgCondition>;
      /**Returns the registered entry type corresponding to the given namespace ID.*/
      getEntryType (id: nmsuNamespaceID): nmsglLootTableEntryType;
      /**Returns the registered table type corresponding to the given namespace ID.*/
      getFunction (id: nmsuNamespaceID): nmsglLootTableFunction;
      /**Returns the registered table type corresponding to the given namespace ID.*/
      getTableType (id: nmsuNamespaceID): nmsglLootTableType;
      load (name: nmsuNamespaceID): nmsglLootTable;
      /**Loads a loot table with the given name.*/
      load (name: nmsuNamespaceID, reader: jiReader): nmsglLootTable;
      /**Registers a condition factory to the given namespaceID*/
      registerConditionDeserializer<T extends nmsgCondition> (namespaceID: nmsuNamespaceID, factory: com.google.gson.JsonDeserializer<T>): void;
      /**Registers a loot table entry type to the given namespaceID*/
      registerEntryType (namespaceID: nmsuNamespaceID, type: nmsglLootTableEntryType): void;
      /**Registers a loot table function to the given namespaceID*/
      registerFunction (namespaceID: nmsuNamespaceID, _function: nmsglLootTableFunction): void;
      /**Registers a loot table type to the given namespaceID*/
      registerTableType (namespaceID: nmsuNamespaceID, type: nmsglLootTableType): void;
   }
   export interface nmsglLootTableType {}
   export class nmsemoMagmaCubeMeta extends nmsemoSlimeMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   export class nmsmMapColors extends jlEnum<nmsmMapColors> {
      static CLAY: nmsmMapColors;
      static COLOR_BLACK: nmsmMapColors;
      static COLOR_BLUE: nmsmMapColors;
      static COLOR_BROWN: nmsmMapColors;
      static COLOR_CYAN: nmsmMapColors;
      static COLOR_GRAY: nmsmMapColors;
      static COLOR_GREEN: nmsmMapColors;
      static COLOR_LIGHT_BLUE: nmsmMapColors;
      static COLOR_LIGHT_GRAY: nmsmMapColors;
      static COLOR_LIGHT_GREEN: nmsmMapColors;
      static COLOR_MAGENTA: nmsmMapColors;
      static COLOR_ORANGE: nmsmMapColors;
      static COLOR_PINK: nmsmMapColors;
      static COLOR_PURPLE: nmsmMapColors;
      static COLOR_RED: nmsmMapColors;
      static COLOR_YELLOW: nmsmMapColors;
      static CRIMSON_HYPHAE: nmsmMapColors;
      static CRIMSON_NYLIUM: nmsmMapColors;
      static CRIMSON_STEM: nmsmMapColors;
      static DIAMOND: nmsmMapColors;
      static DIRT: nmsmMapColors;
      static EMERALD: nmsmMapColors;
      static FIRE: nmsmMapColors;
      static GOLD: nmsmMapColors;
      static GRASS: nmsmMapColors;
      static ICE: nmsmMapColors;
      static LAPIS: nmsmMapColors;
      static METAL: nmsmMapColors;
      static NETHER: nmsmMapColors;
      static NONE: nmsmMapColors;
      static PLANT: nmsmMapColors;
      static PODZOL: nmsmMapColors;
      static QUARTZ: nmsmMapColors;
      static SAND: nmsmMapColors;
      static SNOW: nmsmMapColors;
      static STONE: nmsmMapColors;
      static TERRACOTTA_BLACK: nmsmMapColors;
      static TERRACOTTA_BLUE: nmsmMapColors;
      static TERRACOTTA_BROWN: nmsmMapColors;
      static TERRACOTTA_CYAN: nmsmMapColors;
      static TERRACOTTA_GRAY: nmsmMapColors;
      static TERRACOTTA_GREEN: nmsmMapColors;
      static TERRACOTTA_LIGHT_BLUE: nmsmMapColors;
      static TERRACOTTA_LIGHT_GRAY: nmsmMapColors;
      static TERRACOTTA_LIGHT_GREEN: nmsmMapColors;
      static TERRACOTTA_MAGENTA: nmsmMapColors;
      static TERRACOTTA_ORANGE: nmsmMapColors;
      static TERRACOTTA_PINK: nmsmMapColors;
      static TERRACOTTA_PURPLE: nmsmMapColors;
      static TERRACOTTA_RED: nmsmMapColors;
      static TERRACOTTA_WHITE: nmsmMapColors;
      static TERRACOTTA_YELLOW: nmsmMapColors;
      static WARPED_HYPHAE: nmsmMapColors;
      static WARPED_NYLIUM: nmsmMapColors;
      static WARPED_STEM: nmsmMapColors;
      static WARPED_WART_BLOCK: nmsmMapColors;
      static WATER: nmsmMapColors;
      static WOOD: nmsmMapColors;
      static WOOL: nmsmMapColors;
      /**Returns the color index to use on a map*/
      baseColor (): number;
      blue (): number;
      static closestColor (argb: number): nmsmMPreciseMapColor;
      green (): number;
      /**Returns the color index with RGB multiplied by 0.53, to use on a map*/
      multiply53 (): number;
      /**Returns the color index with RGB multiplied by 0.71, to use on a map*/
      multiply71 (): number;
      /**Returns the color index with RGB multiplied by 0.86, to use on a map*/
      multiply86 (): number;
      red (): number;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsmMapColors;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsmMapColors[];
   }
   /**How does Minestom compute RGB to MapColor transitionsany*/
   export class nmsmMColorMappingStrategy extends jlEnum<nmsmMColorMappingStrategy> {
      /**RGB components are divided by 10 before issuing a lookup (as with the PRECISE strategy), but saves on memory usage*/
      static APPROXIMATE: nmsmMColorMappingStrategy;
      /**If already computed, send the result.*/
      static LAZY: nmsmMColorMappingStrategy;
      /**All colors are already in the map after the first call.*/
      static PRECISE: nmsmMColorMappingStrategy;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsmMColorMappingStrategy;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsmMColorMappingStrategy[];
   }
   export class nmsmMMultiplier extends jlEnum<nmsmMMultiplier> {
      static x0_53: nmsmMMultiplier;
      static x0_71: nmsmMMultiplier;
      static x0_86: nmsmMMultiplier;
      static x1_00: nmsmMMultiplier;
      apply (baseColor: nmsmMapColors): number;
      multiplier (): number;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsmMMultiplier;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsmMMultiplier[];
   }
   export class nmsmMPreciseMapColor extends jlObject {
      getBaseColor (): nmsmMapColors;
      getIndex (): number;
      getMultiplier (): nmsmMMultiplier;
      toRGB (): number;
      static toRGB (baseColor: nmsmMapColors, multiplier: nmsmMMultiplier): number;
   }
   export class nmsnpspMapDataPacket extends jlObject implements nmsnpsComponentHoldingServerPacket {
      constructor ();
      /**Gets the components held by this object.*/
      components (): juCollection<nkatComponent>;
      /**Returns a copy of this object.*/
      copyWithOperator (operator: jufUnaryOperator<nkatComponent>): nmsnpsServerPacket;
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspMIcon extends jlObject implements nmsubWriteable, nmsubReadable {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsimMapMeta extends nmsiItemMeta implements nmsiIProvider<nmsimMBuilder> {
      constructor (metaBuilder: nmsiItemMetaBuilder, mapId: number, mapScaleDirection: number, decorations: juList<nmsimMMapDecoration>, mapColor: nmscColor);
      /**Gets the map decorations.*/
      getDecorations (): juList<nmsimMMapDecoration>;
      /**Gets the map color.*/
      getMapColor (): nmscColor;
      /**Gets the map id.*/
      getMapId (): number;
      /**Gets the map scale direction.*/
      getMapScaleDirection (): number;
   }
   export class nmsimMBuilder extends nmsiItemMetaBuilder {
      constructor ();
      build (): nmsiItemMeta;
      decorations (value: juList<nmsimMMapDecoration>): nmsimMBuilder;
      getSupplier (): jufSupplier<nmsiItemMetaBuilder>;
      mapColor (value: nmscColor): nmsimMBuilder;
      mapId (value: number): nmsimMBuilder;
      mapScaleDirection (value: number): nmsimMBuilder;
      read (compound: org.jglrxavpok.hephaistos.nbt.NBTCompound): void;
   }
   export class nmsimMMapDecoration extends jlObject implements nmsucPublicCloneable<nmsimMMapDecoration> {
      constructor (id: string, type: number, x: number, z: number, rotation: number);
      /**Creates and returns a copy of this object.*/
      clone (): nmsimMMapDecoration;
      /**Gets the arbitrary decoration id.*/
      getId (): string;
      /**Gets the rotation of the symbol (0;360).*/
      getRotation (): number;
      /**Gets the decoration type.*/
      getType (): number;
      /**Gets the X position of the decoration.*/
      getX (): number;
      /**Gets the Z position of the decoration.*/
      getZ (): number;
   }
   /**\/\/==============================  \/\/  AUTOGENERATED BY EnumGenerator  \/\/==============================*/
   export class nmsiMaterial extends jlEnum<nmsiMaterial> implements net.kyori.adventure.key.Keyed {
      static ACACIA_BOAT: nmsiMaterial;
      static ACACIA_BUTTON: nmsiMaterial;
      static ACACIA_DOOR: nmsiMaterial;
      static ACACIA_FENCE: nmsiMaterial;
      static ACACIA_FENCE_GATE: nmsiMaterial;
      static ACACIA_LEAVES: nmsiMaterial;
      static ACACIA_LOG: nmsiMaterial;
      static ACACIA_PLANKS: nmsiMaterial;
      static ACACIA_PRESSURE_PLATE: nmsiMaterial;
      static ACACIA_SAPLING: nmsiMaterial;
      static ACACIA_SIGN: nmsiMaterial;
      static ACACIA_SLAB: nmsiMaterial;
      static ACACIA_STAIRS: nmsiMaterial;
      static ACACIA_TRAPDOOR: nmsiMaterial;
      static ACACIA_WOOD: nmsiMaterial;
      static ACTIVATOR_RAIL: nmsiMaterial;
      static AIR: nmsiMaterial;
      static ALLIUM: nmsiMaterial;
      static ANCIENT_DEBRIS: nmsiMaterial;
      static ANDESITE: nmsiMaterial;
      static ANDESITE_SLAB: nmsiMaterial;
      static ANDESITE_STAIRS: nmsiMaterial;
      static ANDESITE_WALL: nmsiMaterial;
      static ANVIL: nmsiMaterial;
      static APPLE: nmsiMaterial;
      static ARMOR_STAND: nmsiMaterial;
      static ARROW: nmsiMaterial;
      static AZURE_BLUET: nmsiMaterial;
      static BAKED_POTATO: nmsiMaterial;
      static BAMBOO: nmsiMaterial;
      static BARREL: nmsiMaterial;
      static BARRIER: nmsiMaterial;
      static BASALT: nmsiMaterial;
      static BAT_SPAWN_EGG: nmsiMaterial;
      static BEACON: nmsiMaterial;
      static BEDROCK: nmsiMaterial;
      static BEE_NEST: nmsiMaterial;
      static BEE_SPAWN_EGG: nmsiMaterial;
      static BEEF: nmsiMaterial;
      static BEEHIVE: nmsiMaterial;
      static BEETROOT: nmsiMaterial;
      static BEETROOT_SEEDS: nmsiMaterial;
      static BEETROOT_SOUP: nmsiMaterial;
      static BELL: nmsiMaterial;
      static BIRCH_BOAT: nmsiMaterial;
      static BIRCH_BUTTON: nmsiMaterial;
      static BIRCH_DOOR: nmsiMaterial;
      static BIRCH_FENCE: nmsiMaterial;
      static BIRCH_FENCE_GATE: nmsiMaterial;
      static BIRCH_LEAVES: nmsiMaterial;
      static BIRCH_LOG: nmsiMaterial;
      static BIRCH_PLANKS: nmsiMaterial;
      static BIRCH_PRESSURE_PLATE: nmsiMaterial;
      static BIRCH_SAPLING: nmsiMaterial;
      static BIRCH_SIGN: nmsiMaterial;
      static BIRCH_SLAB: nmsiMaterial;
      static BIRCH_STAIRS: nmsiMaterial;
      static BIRCH_TRAPDOOR: nmsiMaterial;
      static BIRCH_WOOD: nmsiMaterial;
      static BLACK_BANNER: nmsiMaterial;
      static BLACK_BED: nmsiMaterial;
      static BLACK_CARPET: nmsiMaterial;
      static BLACK_CONCRETE: nmsiMaterial;
      static BLACK_CONCRETE_POWDER: nmsiMaterial;
      static BLACK_DYE: nmsiMaterial;
      static BLACK_GLAZED_TERRACOTTA: nmsiMaterial;
      static BLACK_SHULKER_BOX: nmsiMaterial;
      static BLACK_STAINED_GLASS: nmsiMaterial;
      static BLACK_STAINED_GLASS_PANE: nmsiMaterial;
      static BLACK_TERRACOTTA: nmsiMaterial;
      static BLACK_WOOL: nmsiMaterial;
      static BLACKSTONE: nmsiMaterial;
      static BLACKSTONE_SLAB: nmsiMaterial;
      static BLACKSTONE_STAIRS: nmsiMaterial;
      static BLACKSTONE_WALL: nmsiMaterial;
      static BLAST_FURNACE: nmsiMaterial;
      static BLAZE_POWDER: nmsiMaterial;
      static BLAZE_ROD: nmsiMaterial;
      static BLAZE_SPAWN_EGG: nmsiMaterial;
      static BLUE_BANNER: nmsiMaterial;
      static BLUE_BED: nmsiMaterial;
      static BLUE_CARPET: nmsiMaterial;
      static BLUE_CONCRETE: nmsiMaterial;
      static BLUE_CONCRETE_POWDER: nmsiMaterial;
      static BLUE_DYE: nmsiMaterial;
      static BLUE_GLAZED_TERRACOTTA: nmsiMaterial;
      static BLUE_ICE: nmsiMaterial;
      static BLUE_ORCHID: nmsiMaterial;
      static BLUE_SHULKER_BOX: nmsiMaterial;
      static BLUE_STAINED_GLASS: nmsiMaterial;
      static BLUE_STAINED_GLASS_PANE: nmsiMaterial;
      static BLUE_TERRACOTTA: nmsiMaterial;
      static BLUE_WOOL: nmsiMaterial;
      static BONE: nmsiMaterial;
      static BONE_BLOCK: nmsiMaterial;
      static BONE_MEAL: nmsiMaterial;
      static BOOK: nmsiMaterial;
      static BOOKSHELF: nmsiMaterial;
      static BOW: nmsiMaterial;
      static BOWL: nmsiMaterial;
      static BRAIN_CORAL: nmsiMaterial;
      static BRAIN_CORAL_BLOCK: nmsiMaterial;
      static BRAIN_CORAL_FAN: nmsiMaterial;
      static BREAD: nmsiMaterial;
      static BREWING_STAND: nmsiMaterial;
      static BRICK: nmsiMaterial;
      static BRICK_SLAB: nmsiMaterial;
      static BRICK_STAIRS: nmsiMaterial;
      static BRICK_WALL: nmsiMaterial;
      static BRICKS: nmsiMaterial;
      static BROWN_BANNER: nmsiMaterial;
      static BROWN_BED: nmsiMaterial;
      static BROWN_CARPET: nmsiMaterial;
      static BROWN_CONCRETE: nmsiMaterial;
      static BROWN_CONCRETE_POWDER: nmsiMaterial;
      static BROWN_DYE: nmsiMaterial;
      static BROWN_GLAZED_TERRACOTTA: nmsiMaterial;
      static BROWN_MUSHROOM: nmsiMaterial;
      static BROWN_MUSHROOM_BLOCK: nmsiMaterial;
      static BROWN_SHULKER_BOX: nmsiMaterial;
      static BROWN_STAINED_GLASS: nmsiMaterial;
      static BROWN_STAINED_GLASS_PANE: nmsiMaterial;
      static BROWN_TERRACOTTA: nmsiMaterial;
      static BROWN_WOOL: nmsiMaterial;
      static BUBBLE_CORAL: nmsiMaterial;
      static BUBBLE_CORAL_BLOCK: nmsiMaterial;
      static BUBBLE_CORAL_FAN: nmsiMaterial;
      static BUCKET: nmsiMaterial;
      static CACTUS: nmsiMaterial;
      static CAKE: nmsiMaterial;
      static CAMPFIRE: nmsiMaterial;
      static CARROT: nmsiMaterial;
      static CARROT_ON_A_STICK: nmsiMaterial;
      static CARTOGRAPHY_TABLE: nmsiMaterial;
      static CARVED_PUMPKIN: nmsiMaterial;
      static CAT_SPAWN_EGG: nmsiMaterial;
      static CAULDRON: nmsiMaterial;
      static CAVE_SPIDER_SPAWN_EGG: nmsiMaterial;
      static CHAIN: nmsiMaterial;
      static CHAIN_COMMAND_BLOCK: nmsiMaterial;
      static CHAINMAIL_BOOTS: nmsiMaterial;
      static CHAINMAIL_CHESTPLATE: nmsiMaterial;
      static CHAINMAIL_HELMET: nmsiMaterial;
      static CHAINMAIL_LEGGINGS: nmsiMaterial;
      static CHARCOAL: nmsiMaterial;
      static CHEST: nmsiMaterial;
      static CHEST_MINECART: nmsiMaterial;
      static CHICKEN: nmsiMaterial;
      static CHICKEN_SPAWN_EGG: nmsiMaterial;
      static CHIPPED_ANVIL: nmsiMaterial;
      static CHISELED_NETHER_BRICKS: nmsiMaterial;
      static CHISELED_POLISHED_BLACKSTONE: nmsiMaterial;
      static CHISELED_QUARTZ_BLOCK: nmsiMaterial;
      static CHISELED_RED_SANDSTONE: nmsiMaterial;
      static CHISELED_SANDSTONE: nmsiMaterial;
      static CHISELED_STONE_BRICKS: nmsiMaterial;
      static CHORUS_FLOWER: nmsiMaterial;
      static CHORUS_FRUIT: nmsiMaterial;
      static CHORUS_PLANT: nmsiMaterial;
      static CLAY: nmsiMaterial;
      static CLAY_BALL: nmsiMaterial;
      static CLOCK: nmsiMaterial;
      static COAL: nmsiMaterial;
      static COAL_BLOCK: nmsiMaterial;
      static COAL_ORE: nmsiMaterial;
      static COARSE_DIRT: nmsiMaterial;
      static COBBLESTONE: nmsiMaterial;
      static COBBLESTONE_SLAB: nmsiMaterial;
      static COBBLESTONE_STAIRS: nmsiMaterial;
      static COBBLESTONE_WALL: nmsiMaterial;
      static COBWEB: nmsiMaterial;
      static COCOA_BEANS: nmsiMaterial;
      static COD: nmsiMaterial;
      static COD_BUCKET: nmsiMaterial;
      static COD_SPAWN_EGG: nmsiMaterial;
      static COMMAND_BLOCK: nmsiMaterial;
      static COMMAND_BLOCK_MINECART: nmsiMaterial;
      static COMPARATOR: nmsiMaterial;
      static COMPASS: nmsiMaterial;
      static COMPOSTER: nmsiMaterial;
      static CONDUIT: nmsiMaterial;
      static COOKED_BEEF: nmsiMaterial;
      static COOKED_CHICKEN: nmsiMaterial;
      static COOKED_COD: nmsiMaterial;
      static COOKED_MUTTON: nmsiMaterial;
      static COOKED_PORKCHOP: nmsiMaterial;
      static COOKED_RABBIT: nmsiMaterial;
      static COOKED_SALMON: nmsiMaterial;
      static COOKIE: nmsiMaterial;
      static CORNFLOWER: nmsiMaterial;
      static COW_SPAWN_EGG: nmsiMaterial;
      static CRACKED_NETHER_BRICKS: nmsiMaterial;
      static CRACKED_POLISHED_BLACKSTONE_BRICKS: nmsiMaterial;
      static CRACKED_STONE_BRICKS: nmsiMaterial;
      static CRAFTING_TABLE: nmsiMaterial;
      static CREEPER_BANNER_PATTERN: nmsiMaterial;
      static CREEPER_HEAD: nmsiMaterial;
      static CREEPER_SPAWN_EGG: nmsiMaterial;
      static CRIMSON_BUTTON: nmsiMaterial;
      static CRIMSON_DOOR: nmsiMaterial;
      static CRIMSON_FENCE: nmsiMaterial;
      static CRIMSON_FENCE_GATE: nmsiMaterial;
      static CRIMSON_FUNGUS: nmsiMaterial;
      static CRIMSON_HYPHAE: nmsiMaterial;
      static CRIMSON_NYLIUM: nmsiMaterial;
      static CRIMSON_PLANKS: nmsiMaterial;
      static CRIMSON_PRESSURE_PLATE: nmsiMaterial;
      static CRIMSON_ROOTS: nmsiMaterial;
      static CRIMSON_SIGN: nmsiMaterial;
      static CRIMSON_SLAB: nmsiMaterial;
      static CRIMSON_STAIRS: nmsiMaterial;
      static CRIMSON_STEM: nmsiMaterial;
      static CRIMSON_TRAPDOOR: nmsiMaterial;
      static CROSSBOW: nmsiMaterial;
      static CRYING_OBSIDIAN: nmsiMaterial;
      static CUT_RED_SANDSTONE: nmsiMaterial;
      static CUT_RED_SANDSTONE_SLAB: nmsiMaterial;
      static CUT_SANDSTONE: nmsiMaterial;
      static CUT_SANDSTONE_SLAB: nmsiMaterial;
      static CYAN_BANNER: nmsiMaterial;
      static CYAN_BED: nmsiMaterial;
      static CYAN_CARPET: nmsiMaterial;
      static CYAN_CONCRETE: nmsiMaterial;
      static CYAN_CONCRETE_POWDER: nmsiMaterial;
      static CYAN_DYE: nmsiMaterial;
      static CYAN_GLAZED_TERRACOTTA: nmsiMaterial;
      static CYAN_SHULKER_BOX: nmsiMaterial;
      static CYAN_STAINED_GLASS: nmsiMaterial;
      static CYAN_STAINED_GLASS_PANE: nmsiMaterial;
      static CYAN_TERRACOTTA: nmsiMaterial;
      static CYAN_WOOL: nmsiMaterial;
      static DAMAGED_ANVIL: nmsiMaterial;
      static DANDELION: nmsiMaterial;
      static DARK_OAK_BOAT: nmsiMaterial;
      static DARK_OAK_BUTTON: nmsiMaterial;
      static DARK_OAK_DOOR: nmsiMaterial;
      static DARK_OAK_FENCE: nmsiMaterial;
      static DARK_OAK_FENCE_GATE: nmsiMaterial;
      static DARK_OAK_LEAVES: nmsiMaterial;
      static DARK_OAK_LOG: nmsiMaterial;
      static DARK_OAK_PLANKS: nmsiMaterial;
      static DARK_OAK_PRESSURE_PLATE: nmsiMaterial;
      static DARK_OAK_SAPLING: nmsiMaterial;
      static DARK_OAK_SIGN: nmsiMaterial;
      static DARK_OAK_SLAB: nmsiMaterial;
      static DARK_OAK_STAIRS: nmsiMaterial;
      static DARK_OAK_TRAPDOOR: nmsiMaterial;
      static DARK_OAK_WOOD: nmsiMaterial;
      static DARK_PRISMARINE: nmsiMaterial;
      static DARK_PRISMARINE_SLAB: nmsiMaterial;
      static DARK_PRISMARINE_STAIRS: nmsiMaterial;
      static DAYLIGHT_DETECTOR: nmsiMaterial;
      static DEAD_BRAIN_CORAL: nmsiMaterial;
      static DEAD_BRAIN_CORAL_BLOCK: nmsiMaterial;
      static DEAD_BRAIN_CORAL_FAN: nmsiMaterial;
      static DEAD_BUBBLE_CORAL: nmsiMaterial;
      static DEAD_BUBBLE_CORAL_BLOCK: nmsiMaterial;
      static DEAD_BUBBLE_CORAL_FAN: nmsiMaterial;
      static DEAD_BUSH: nmsiMaterial;
      static DEAD_FIRE_CORAL: nmsiMaterial;
      static DEAD_FIRE_CORAL_BLOCK: nmsiMaterial;
      static DEAD_FIRE_CORAL_FAN: nmsiMaterial;
      static DEAD_HORN_CORAL: nmsiMaterial;
      static DEAD_HORN_CORAL_BLOCK: nmsiMaterial;
      static DEAD_HORN_CORAL_FAN: nmsiMaterial;
      static DEAD_TUBE_CORAL: nmsiMaterial;
      static DEAD_TUBE_CORAL_BLOCK: nmsiMaterial;
      static DEAD_TUBE_CORAL_FAN: nmsiMaterial;
      static DEBUG_STICK: nmsiMaterial;
      static DETECTOR_RAIL: nmsiMaterial;
      static DIAMOND: nmsiMaterial;
      static DIAMOND_AXE: nmsiMaterial;
      static DIAMOND_BLOCK: nmsiMaterial;
      static DIAMOND_BOOTS: nmsiMaterial;
      static DIAMOND_CHESTPLATE: nmsiMaterial;
      static DIAMOND_HELMET: nmsiMaterial;
      static DIAMOND_HOE: nmsiMaterial;
      static DIAMOND_HORSE_ARMOR: nmsiMaterial;
      static DIAMOND_LEGGINGS: nmsiMaterial;
      static DIAMOND_ORE: nmsiMaterial;
      static DIAMOND_PICKAXE: nmsiMaterial;
      static DIAMOND_SHOVEL: nmsiMaterial;
      static DIAMOND_SWORD: nmsiMaterial;
      static DIORITE: nmsiMaterial;
      static DIORITE_SLAB: nmsiMaterial;
      static DIORITE_STAIRS: nmsiMaterial;
      static DIORITE_WALL: nmsiMaterial;
      static DIRT: nmsiMaterial;
      static DISPENSER: nmsiMaterial;
      static DOLPHIN_SPAWN_EGG: nmsiMaterial;
      static DONKEY_SPAWN_EGG: nmsiMaterial;
      static DRAGON_BREATH: nmsiMaterial;
      static DRAGON_EGG: nmsiMaterial;
      static DRAGON_HEAD: nmsiMaterial;
      static DRIED_KELP: nmsiMaterial;
      static DRIED_KELP_BLOCK: nmsiMaterial;
      static DROPPER: nmsiMaterial;
      static DROWNED_SPAWN_EGG: nmsiMaterial;
      static EGG: nmsiMaterial;
      static ELDER_GUARDIAN_SPAWN_EGG: nmsiMaterial;
      static ELYTRA: nmsiMaterial;
      static EMERALD: nmsiMaterial;
      static EMERALD_BLOCK: nmsiMaterial;
      static EMERALD_ORE: nmsiMaterial;
      static ENCHANTED_BOOK: nmsiMaterial;
      static ENCHANTED_GOLDEN_APPLE: nmsiMaterial;
      static ENCHANTING_TABLE: nmsiMaterial;
      static END_CRYSTAL: nmsiMaterial;
      static END_PORTAL_FRAME: nmsiMaterial;
      static END_ROD: nmsiMaterial;
      static END_STONE: nmsiMaterial;
      static END_STONE_BRICK_SLAB: nmsiMaterial;
      static END_STONE_BRICK_STAIRS: nmsiMaterial;
      static END_STONE_BRICK_WALL: nmsiMaterial;
      static END_STONE_BRICKS: nmsiMaterial;
      static ENDER_CHEST: nmsiMaterial;
      static ENDER_EYE: nmsiMaterial;
      static ENDER_PEARL: nmsiMaterial;
      static ENDERMAN_SPAWN_EGG: nmsiMaterial;
      static ENDERMITE_SPAWN_EGG: nmsiMaterial;
      static EVOKER_SPAWN_EGG: nmsiMaterial;
      static EXPERIENCE_BOTTLE: nmsiMaterial;
      static FARMLAND: nmsiMaterial;
      static FEATHER: nmsiMaterial;
      static FERMENTED_SPIDER_EYE: nmsiMaterial;
      static FERN: nmsiMaterial;
      static FILLED_MAP: nmsiMaterial;
      static FIRE_CHARGE: nmsiMaterial;
      static FIRE_CORAL: nmsiMaterial;
      static FIRE_CORAL_BLOCK: nmsiMaterial;
      static FIRE_CORAL_FAN: nmsiMaterial;
      static FIREWORK_ROCKET: nmsiMaterial;
      static FIREWORK_STAR: nmsiMaterial;
      static FISHING_ROD: nmsiMaterial;
      static FLETCHING_TABLE: nmsiMaterial;
      static FLINT: nmsiMaterial;
      static FLINT_AND_STEEL: nmsiMaterial;
      static FLOWER_BANNER_PATTERN: nmsiMaterial;
      static FLOWER_POT: nmsiMaterial;
      static FOX_SPAWN_EGG: nmsiMaterial;
      static FURNACE: nmsiMaterial;
      static FURNACE_MINECART: nmsiMaterial;
      static GHAST_SPAWN_EGG: nmsiMaterial;
      static GHAST_TEAR: nmsiMaterial;
      static GILDED_BLACKSTONE: nmsiMaterial;
      static GLASS: nmsiMaterial;
      static GLASS_BOTTLE: nmsiMaterial;
      static GLASS_PANE: nmsiMaterial;
      static GLISTERING_MELON_SLICE: nmsiMaterial;
      static GLOBE_BANNER_PATTERN: nmsiMaterial;
      static GLOWSTONE: nmsiMaterial;
      static GLOWSTONE_DUST: nmsiMaterial;
      static GOLD_BLOCK: nmsiMaterial;
      static GOLD_INGOT: nmsiMaterial;
      static GOLD_NUGGET: nmsiMaterial;
      static GOLD_ORE: nmsiMaterial;
      static GOLDEN_APPLE: nmsiMaterial;
      static GOLDEN_AXE: nmsiMaterial;
      static GOLDEN_BOOTS: nmsiMaterial;
      static GOLDEN_CARROT: nmsiMaterial;
      static GOLDEN_CHESTPLATE: nmsiMaterial;
      static GOLDEN_HELMET: nmsiMaterial;
      static GOLDEN_HOE: nmsiMaterial;
      static GOLDEN_HORSE_ARMOR: nmsiMaterial;
      static GOLDEN_LEGGINGS: nmsiMaterial;
      static GOLDEN_PICKAXE: nmsiMaterial;
      static GOLDEN_SHOVEL: nmsiMaterial;
      static GOLDEN_SWORD: nmsiMaterial;
      static GRANITE: nmsiMaterial;
      static GRANITE_SLAB: nmsiMaterial;
      static GRANITE_STAIRS: nmsiMaterial;
      static GRANITE_WALL: nmsiMaterial;
      static GRASS: nmsiMaterial;
      static GRASS_BLOCK: nmsiMaterial;
      static GRASS_PATH: nmsiMaterial;
      static GRAVEL: nmsiMaterial;
      static GRAY_BANNER: nmsiMaterial;
      static GRAY_BED: nmsiMaterial;
      static GRAY_CARPET: nmsiMaterial;
      static GRAY_CONCRETE: nmsiMaterial;
      static GRAY_CONCRETE_POWDER: nmsiMaterial;
      static GRAY_DYE: nmsiMaterial;
      static GRAY_GLAZED_TERRACOTTA: nmsiMaterial;
      static GRAY_SHULKER_BOX: nmsiMaterial;
      static GRAY_STAINED_GLASS: nmsiMaterial;
      static GRAY_STAINED_GLASS_PANE: nmsiMaterial;
      static GRAY_TERRACOTTA: nmsiMaterial;
      static GRAY_WOOL: nmsiMaterial;
      static GREEN_BANNER: nmsiMaterial;
      static GREEN_BED: nmsiMaterial;
      static GREEN_CARPET: nmsiMaterial;
      static GREEN_CONCRETE: nmsiMaterial;
      static GREEN_CONCRETE_POWDER: nmsiMaterial;
      static GREEN_DYE: nmsiMaterial;
      static GREEN_GLAZED_TERRACOTTA: nmsiMaterial;
      static GREEN_SHULKER_BOX: nmsiMaterial;
      static GREEN_STAINED_GLASS: nmsiMaterial;
      static GREEN_STAINED_GLASS_PANE: nmsiMaterial;
      static GREEN_TERRACOTTA: nmsiMaterial;
      static GREEN_WOOL: nmsiMaterial;
      static GRINDSTONE: nmsiMaterial;
      static GUARDIAN_SPAWN_EGG: nmsiMaterial;
      static GUNPOWDER: nmsiMaterial;
      static HAY_BLOCK: nmsiMaterial;
      static HEART_OF_THE_SEA: nmsiMaterial;
      static HEAVY_WEIGHTED_PRESSURE_PLATE: nmsiMaterial;
      static HOGLIN_SPAWN_EGG: nmsiMaterial;
      static HONEY_BLOCK: nmsiMaterial;
      static HONEY_BOTTLE: nmsiMaterial;
      static HONEYCOMB: nmsiMaterial;
      static HONEYCOMB_BLOCK: nmsiMaterial;
      static HOPPER: nmsiMaterial;
      static HOPPER_MINECART: nmsiMaterial;
      static HORN_CORAL: nmsiMaterial;
      static HORN_CORAL_BLOCK: nmsiMaterial;
      static HORN_CORAL_FAN: nmsiMaterial;
      static HORSE_SPAWN_EGG: nmsiMaterial;
      static HUSK_SPAWN_EGG: nmsiMaterial;
      static ICE: nmsiMaterial;
      static INFESTED_CHISELED_STONE_BRICKS: nmsiMaterial;
      static INFESTED_COBBLESTONE: nmsiMaterial;
      static INFESTED_CRACKED_STONE_BRICKS: nmsiMaterial;
      static INFESTED_MOSSY_STONE_BRICKS: nmsiMaterial;
      static INFESTED_STONE: nmsiMaterial;
      static INFESTED_STONE_BRICKS: nmsiMaterial;
      static INK_SAC: nmsiMaterial;
      static IRON_AXE: nmsiMaterial;
      static IRON_BARS: nmsiMaterial;
      static IRON_BLOCK: nmsiMaterial;
      static IRON_BOOTS: nmsiMaterial;
      static IRON_CHESTPLATE: nmsiMaterial;
      static IRON_DOOR: nmsiMaterial;
      static IRON_HELMET: nmsiMaterial;
      static IRON_HOE: nmsiMaterial;
      static IRON_HORSE_ARMOR: nmsiMaterial;
      static IRON_INGOT: nmsiMaterial;
      static IRON_LEGGINGS: nmsiMaterial;
      static IRON_NUGGET: nmsiMaterial;
      static IRON_ORE: nmsiMaterial;
      static IRON_PICKAXE: nmsiMaterial;
      static IRON_SHOVEL: nmsiMaterial;
      static IRON_SWORD: nmsiMaterial;
      static IRON_TRAPDOOR: nmsiMaterial;
      static ITEM_FRAME: nmsiMaterial;
      static JACK_O_LANTERN: nmsiMaterial;
      static JIGSAW: nmsiMaterial;
      static JUKEBOX: nmsiMaterial;
      static JUNGLE_BOAT: nmsiMaterial;
      static JUNGLE_BUTTON: nmsiMaterial;
      static JUNGLE_DOOR: nmsiMaterial;
      static JUNGLE_FENCE: nmsiMaterial;
      static JUNGLE_FENCE_GATE: nmsiMaterial;
      static JUNGLE_LEAVES: nmsiMaterial;
      static JUNGLE_LOG: nmsiMaterial;
      static JUNGLE_PLANKS: nmsiMaterial;
      static JUNGLE_PRESSURE_PLATE: nmsiMaterial;
      static JUNGLE_SAPLING: nmsiMaterial;
      static JUNGLE_SIGN: nmsiMaterial;
      static JUNGLE_SLAB: nmsiMaterial;
      static JUNGLE_STAIRS: nmsiMaterial;
      static JUNGLE_TRAPDOOR: nmsiMaterial;
      static JUNGLE_WOOD: nmsiMaterial;
      static KELP: nmsiMaterial;
      static KNOWLEDGE_BOOK: nmsiMaterial;
      static LADDER: nmsiMaterial;
      static LANTERN: nmsiMaterial;
      static LAPIS_BLOCK: nmsiMaterial;
      static LAPIS_LAZULI: nmsiMaterial;
      static LAPIS_ORE: nmsiMaterial;
      static LARGE_FERN: nmsiMaterial;
      static LAVA_BUCKET: nmsiMaterial;
      static LEAD: nmsiMaterial;
      static LEATHER: nmsiMaterial;
      static LEATHER_BOOTS: nmsiMaterial;
      static LEATHER_CHESTPLATE: nmsiMaterial;
      static LEATHER_HELMET: nmsiMaterial;
      static LEATHER_HORSE_ARMOR: nmsiMaterial;
      static LEATHER_LEGGINGS: nmsiMaterial;
      static LECTERN: nmsiMaterial;
      static LEVER: nmsiMaterial;
      static LIGHT_BLUE_BANNER: nmsiMaterial;
      static LIGHT_BLUE_BED: nmsiMaterial;
      static LIGHT_BLUE_CARPET: nmsiMaterial;
      static LIGHT_BLUE_CONCRETE: nmsiMaterial;
      static LIGHT_BLUE_CONCRETE_POWDER: nmsiMaterial;
      static LIGHT_BLUE_DYE: nmsiMaterial;
      static LIGHT_BLUE_GLAZED_TERRACOTTA: nmsiMaterial;
      static LIGHT_BLUE_SHULKER_BOX: nmsiMaterial;
      static LIGHT_BLUE_STAINED_GLASS: nmsiMaterial;
      static LIGHT_BLUE_STAINED_GLASS_PANE: nmsiMaterial;
      static LIGHT_BLUE_TERRACOTTA: nmsiMaterial;
      static LIGHT_BLUE_WOOL: nmsiMaterial;
      static LIGHT_GRAY_BANNER: nmsiMaterial;
      static LIGHT_GRAY_BED: nmsiMaterial;
      static LIGHT_GRAY_CARPET: nmsiMaterial;
      static LIGHT_GRAY_CONCRETE: nmsiMaterial;
      static LIGHT_GRAY_CONCRETE_POWDER: nmsiMaterial;
      static LIGHT_GRAY_DYE: nmsiMaterial;
      static LIGHT_GRAY_GLAZED_TERRACOTTA: nmsiMaterial;
      static LIGHT_GRAY_SHULKER_BOX: nmsiMaterial;
      static LIGHT_GRAY_STAINED_GLASS: nmsiMaterial;
      static LIGHT_GRAY_STAINED_GLASS_PANE: nmsiMaterial;
      static LIGHT_GRAY_TERRACOTTA: nmsiMaterial;
      static LIGHT_GRAY_WOOL: nmsiMaterial;
      static LIGHT_WEIGHTED_PRESSURE_PLATE: nmsiMaterial;
      static LILAC: nmsiMaterial;
      static LILY_OF_THE_VALLEY: nmsiMaterial;
      static LILY_PAD: nmsiMaterial;
      static LIME_BANNER: nmsiMaterial;
      static LIME_BED: nmsiMaterial;
      static LIME_CARPET: nmsiMaterial;
      static LIME_CONCRETE: nmsiMaterial;
      static LIME_CONCRETE_POWDER: nmsiMaterial;
      static LIME_DYE: nmsiMaterial;
      static LIME_GLAZED_TERRACOTTA: nmsiMaterial;
      static LIME_SHULKER_BOX: nmsiMaterial;
      static LIME_STAINED_GLASS: nmsiMaterial;
      static LIME_STAINED_GLASS_PANE: nmsiMaterial;
      static LIME_TERRACOTTA: nmsiMaterial;
      static LIME_WOOL: nmsiMaterial;
      static LINGERING_POTION: nmsiMaterial;
      static LLAMA_SPAWN_EGG: nmsiMaterial;
      static LODESTONE: nmsiMaterial;
      static LOOM: nmsiMaterial;
      static MAGENTA_BANNER: nmsiMaterial;
      static MAGENTA_BED: nmsiMaterial;
      static MAGENTA_CARPET: nmsiMaterial;
      static MAGENTA_CONCRETE: nmsiMaterial;
      static MAGENTA_CONCRETE_POWDER: nmsiMaterial;
      static MAGENTA_DYE: nmsiMaterial;
      static MAGENTA_GLAZED_TERRACOTTA: nmsiMaterial;
      static MAGENTA_SHULKER_BOX: nmsiMaterial;
      static MAGENTA_STAINED_GLASS: nmsiMaterial;
      static MAGENTA_STAINED_GLASS_PANE: nmsiMaterial;
      static MAGENTA_TERRACOTTA: nmsiMaterial;
      static MAGENTA_WOOL: nmsiMaterial;
      static MAGMA_BLOCK: nmsiMaterial;
      static MAGMA_CREAM: nmsiMaterial;
      static MAGMA_CUBE_SPAWN_EGG: nmsiMaterial;
      static MAP: nmsiMaterial;
      static MELON: nmsiMaterial;
      static MELON_SEEDS: nmsiMaterial;
      static MELON_SLICE: nmsiMaterial;
      static MILK_BUCKET: nmsiMaterial;
      static MINECART: nmsiMaterial;
      static MOJANG_BANNER_PATTERN: nmsiMaterial;
      static MOOSHROOM_SPAWN_EGG: nmsiMaterial;
      static MOSSY_COBBLESTONE: nmsiMaterial;
      static MOSSY_COBBLESTONE_SLAB: nmsiMaterial;
      static MOSSY_COBBLESTONE_STAIRS: nmsiMaterial;
      static MOSSY_COBBLESTONE_WALL: nmsiMaterial;
      static MOSSY_STONE_BRICK_SLAB: nmsiMaterial;
      static MOSSY_STONE_BRICK_STAIRS: nmsiMaterial;
      static MOSSY_STONE_BRICK_WALL: nmsiMaterial;
      static MOSSY_STONE_BRICKS: nmsiMaterial;
      static MULE_SPAWN_EGG: nmsiMaterial;
      static MUSHROOM_STEM: nmsiMaterial;
      static MUSHROOM_STEW: nmsiMaterial;
      static MUSIC_DISC_11: nmsiMaterial;
      static MUSIC_DISC_13: nmsiMaterial;
      static MUSIC_DISC_BLOCKS: nmsiMaterial;
      static MUSIC_DISC_CAT: nmsiMaterial;
      static MUSIC_DISC_CHIRP: nmsiMaterial;
      static MUSIC_DISC_FAR: nmsiMaterial;
      static MUSIC_DISC_MALL: nmsiMaterial;
      static MUSIC_DISC_MELLOHI: nmsiMaterial;
      static MUSIC_DISC_PIGSTEP: nmsiMaterial;
      static MUSIC_DISC_STAL: nmsiMaterial;
      static MUSIC_DISC_STRAD: nmsiMaterial;
      static MUSIC_DISC_WAIT: nmsiMaterial;
      static MUSIC_DISC_WARD: nmsiMaterial;
      static MUTTON: nmsiMaterial;
      static MYCELIUM: nmsiMaterial;
      static NAME_TAG: nmsiMaterial;
      static NAUTILUS_SHELL: nmsiMaterial;
      static NETHER_BRICK: nmsiMaterial;
      static NETHER_BRICK_FENCE: nmsiMaterial;
      static NETHER_BRICK_SLAB: nmsiMaterial;
      static NETHER_BRICK_STAIRS: nmsiMaterial;
      static NETHER_BRICK_WALL: nmsiMaterial;
      static NETHER_BRICKS: nmsiMaterial;
      static NETHER_GOLD_ORE: nmsiMaterial;
      static NETHER_QUARTZ_ORE: nmsiMaterial;
      static NETHER_SPROUTS: nmsiMaterial;
      static NETHER_STAR: nmsiMaterial;
      static NETHER_WART: nmsiMaterial;
      static NETHER_WART_BLOCK: nmsiMaterial;
      static NETHERITE_AXE: nmsiMaterial;
      static NETHERITE_BLOCK: nmsiMaterial;
      static NETHERITE_BOOTS: nmsiMaterial;
      static NETHERITE_CHESTPLATE: nmsiMaterial;
      static NETHERITE_HELMET: nmsiMaterial;
      static NETHERITE_HOE: nmsiMaterial;
      static NETHERITE_INGOT: nmsiMaterial;
      static NETHERITE_LEGGINGS: nmsiMaterial;
      static NETHERITE_PICKAXE: nmsiMaterial;
      static NETHERITE_SCRAP: nmsiMaterial;
      static NETHERITE_SHOVEL: nmsiMaterial;
      static NETHERITE_SWORD: nmsiMaterial;
      static NETHERRACK: nmsiMaterial;
      static NOTE_BLOCK: nmsiMaterial;
      static OAK_BOAT: nmsiMaterial;
      static OAK_BUTTON: nmsiMaterial;
      static OAK_DOOR: nmsiMaterial;
      static OAK_FENCE: nmsiMaterial;
      static OAK_FENCE_GATE: nmsiMaterial;
      static OAK_LEAVES: nmsiMaterial;
      static OAK_LOG: nmsiMaterial;
      static OAK_PLANKS: nmsiMaterial;
      static OAK_PRESSURE_PLATE: nmsiMaterial;
      static OAK_SAPLING: nmsiMaterial;
      static OAK_SIGN: nmsiMaterial;
      static OAK_SLAB: nmsiMaterial;
      static OAK_STAIRS: nmsiMaterial;
      static OAK_TRAPDOOR: nmsiMaterial;
      static OAK_WOOD: nmsiMaterial;
      static OBSERVER: nmsiMaterial;
      static OBSIDIAN: nmsiMaterial;
      static OCELOT_SPAWN_EGG: nmsiMaterial;
      static ORANGE_BANNER: nmsiMaterial;
      static ORANGE_BED: nmsiMaterial;
      static ORANGE_CARPET: nmsiMaterial;
      static ORANGE_CONCRETE: nmsiMaterial;
      static ORANGE_CONCRETE_POWDER: nmsiMaterial;
      static ORANGE_DYE: nmsiMaterial;
      static ORANGE_GLAZED_TERRACOTTA: nmsiMaterial;
      static ORANGE_SHULKER_BOX: nmsiMaterial;
      static ORANGE_STAINED_GLASS: nmsiMaterial;
      static ORANGE_STAINED_GLASS_PANE: nmsiMaterial;
      static ORANGE_TERRACOTTA: nmsiMaterial;
      static ORANGE_TULIP: nmsiMaterial;
      static ORANGE_WOOL: nmsiMaterial;
      static OXEYE_DAISY: nmsiMaterial;
      static PACKED_ICE: nmsiMaterial;
      static PAINTING: nmsiMaterial;
      static PANDA_SPAWN_EGG: nmsiMaterial;
      static PAPER: nmsiMaterial;
      static PARROT_SPAWN_EGG: nmsiMaterial;
      static PEONY: nmsiMaterial;
      static PETRIFIED_OAK_SLAB: nmsiMaterial;
      static PHANTOM_MEMBRANE: nmsiMaterial;
      static PHANTOM_SPAWN_EGG: nmsiMaterial;
      static PIG_SPAWN_EGG: nmsiMaterial;
      static PIGLIN_BANNER_PATTERN: nmsiMaterial;
      static PIGLIN_BRUTE_SPAWN_EGG: nmsiMaterial;
      static PIGLIN_SPAWN_EGG: nmsiMaterial;
      static PILLAGER_SPAWN_EGG: nmsiMaterial;
      static PINK_BANNER: nmsiMaterial;
      static PINK_BED: nmsiMaterial;
      static PINK_CARPET: nmsiMaterial;
      static PINK_CONCRETE: nmsiMaterial;
      static PINK_CONCRETE_POWDER: nmsiMaterial;
      static PINK_DYE: nmsiMaterial;
      static PINK_GLAZED_TERRACOTTA: nmsiMaterial;
      static PINK_SHULKER_BOX: nmsiMaterial;
      static PINK_STAINED_GLASS: nmsiMaterial;
      static PINK_STAINED_GLASS_PANE: nmsiMaterial;
      static PINK_TERRACOTTA: nmsiMaterial;
      static PINK_TULIP: nmsiMaterial;
      static PINK_WOOL: nmsiMaterial;
      static PISTON: nmsiMaterial;
      static PLAYER_HEAD: nmsiMaterial;
      static PODZOL: nmsiMaterial;
      static POISONOUS_POTATO: nmsiMaterial;
      static POLAR_BEAR_SPAWN_EGG: nmsiMaterial;
      static POLISHED_ANDESITE: nmsiMaterial;
      static POLISHED_ANDESITE_SLAB: nmsiMaterial;
      static POLISHED_ANDESITE_STAIRS: nmsiMaterial;
      static POLISHED_BASALT: nmsiMaterial;
      static POLISHED_BLACKSTONE: nmsiMaterial;
      static POLISHED_BLACKSTONE_BRICK_SLAB: nmsiMaterial;
      static POLISHED_BLACKSTONE_BRICK_STAIRS: nmsiMaterial;
      static POLISHED_BLACKSTONE_BRICK_WALL: nmsiMaterial;
      static POLISHED_BLACKSTONE_BRICKS: nmsiMaterial;
      static POLISHED_BLACKSTONE_BUTTON: nmsiMaterial;
      static POLISHED_BLACKSTONE_PRESSURE_PLATE: nmsiMaterial;
      static POLISHED_BLACKSTONE_SLAB: nmsiMaterial;
      static POLISHED_BLACKSTONE_STAIRS: nmsiMaterial;
      static POLISHED_BLACKSTONE_WALL: nmsiMaterial;
      static POLISHED_DIORITE: nmsiMaterial;
      static POLISHED_DIORITE_SLAB: nmsiMaterial;
      static POLISHED_DIORITE_STAIRS: nmsiMaterial;
      static POLISHED_GRANITE: nmsiMaterial;
      static POLISHED_GRANITE_SLAB: nmsiMaterial;
      static POLISHED_GRANITE_STAIRS: nmsiMaterial;
      static POPPED_CHORUS_FRUIT: nmsiMaterial;
      static POPPY: nmsiMaterial;
      static PORKCHOP: nmsiMaterial;
      static POTATO: nmsiMaterial;
      static POTION: nmsiMaterial;
      static POWERED_RAIL: nmsiMaterial;
      static PRISMARINE: nmsiMaterial;
      static PRISMARINE_BRICK_SLAB: nmsiMaterial;
      static PRISMARINE_BRICK_STAIRS: nmsiMaterial;
      static PRISMARINE_BRICKS: nmsiMaterial;
      static PRISMARINE_CRYSTALS: nmsiMaterial;
      static PRISMARINE_SHARD: nmsiMaterial;
      static PRISMARINE_SLAB: nmsiMaterial;
      static PRISMARINE_STAIRS: nmsiMaterial;
      static PRISMARINE_WALL: nmsiMaterial;
      static PUFFERFISH: nmsiMaterial;
      static PUFFERFISH_BUCKET: nmsiMaterial;
      static PUFFERFISH_SPAWN_EGG: nmsiMaterial;
      static PUMPKIN: nmsiMaterial;
      static PUMPKIN_PIE: nmsiMaterial;
      static PUMPKIN_SEEDS: nmsiMaterial;
      static PURPLE_BANNER: nmsiMaterial;
      static PURPLE_BED: nmsiMaterial;
      static PURPLE_CARPET: nmsiMaterial;
      static PURPLE_CONCRETE: nmsiMaterial;
      static PURPLE_CONCRETE_POWDER: nmsiMaterial;
      static PURPLE_DYE: nmsiMaterial;
      static PURPLE_GLAZED_TERRACOTTA: nmsiMaterial;
      static PURPLE_SHULKER_BOX: nmsiMaterial;
      static PURPLE_STAINED_GLASS: nmsiMaterial;
      static PURPLE_STAINED_GLASS_PANE: nmsiMaterial;
      static PURPLE_TERRACOTTA: nmsiMaterial;
      static PURPLE_WOOL: nmsiMaterial;
      static PURPUR_BLOCK: nmsiMaterial;
      static PURPUR_PILLAR: nmsiMaterial;
      static PURPUR_SLAB: nmsiMaterial;
      static PURPUR_STAIRS: nmsiMaterial;
      static QUARTZ: nmsiMaterial;
      static QUARTZ_BLOCK: nmsiMaterial;
      static QUARTZ_BRICKS: nmsiMaterial;
      static QUARTZ_PILLAR: nmsiMaterial;
      static QUARTZ_SLAB: nmsiMaterial;
      static QUARTZ_STAIRS: nmsiMaterial;
      static RABBIT: nmsiMaterial;
      static RABBIT_FOOT: nmsiMaterial;
      static RABBIT_HIDE: nmsiMaterial;
      static RABBIT_SPAWN_EGG: nmsiMaterial;
      static RABBIT_STEW: nmsiMaterial;
      static RAIL: nmsiMaterial;
      static RAVAGER_SPAWN_EGG: nmsiMaterial;
      static RED_BANNER: nmsiMaterial;
      static RED_BED: nmsiMaterial;
      static RED_CARPET: nmsiMaterial;
      static RED_CONCRETE: nmsiMaterial;
      static RED_CONCRETE_POWDER: nmsiMaterial;
      static RED_DYE: nmsiMaterial;
      static RED_GLAZED_TERRACOTTA: nmsiMaterial;
      static RED_MUSHROOM: nmsiMaterial;
      static RED_MUSHROOM_BLOCK: nmsiMaterial;
      static RED_NETHER_BRICK_SLAB: nmsiMaterial;
      static RED_NETHER_BRICK_STAIRS: nmsiMaterial;
      static RED_NETHER_BRICK_WALL: nmsiMaterial;
      static RED_NETHER_BRICKS: nmsiMaterial;
      static RED_SAND: nmsiMaterial;
      static RED_SANDSTONE: nmsiMaterial;
      static RED_SANDSTONE_SLAB: nmsiMaterial;
      static RED_SANDSTONE_STAIRS: nmsiMaterial;
      static RED_SANDSTONE_WALL: nmsiMaterial;
      static RED_SHULKER_BOX: nmsiMaterial;
      static RED_STAINED_GLASS: nmsiMaterial;
      static RED_STAINED_GLASS_PANE: nmsiMaterial;
      static RED_TERRACOTTA: nmsiMaterial;
      static RED_TULIP: nmsiMaterial;
      static RED_WOOL: nmsiMaterial;
      static REDSTONE: nmsiMaterial;
      static REDSTONE_BLOCK: nmsiMaterial;
      static REDSTONE_LAMP: nmsiMaterial;
      static REDSTONE_ORE: nmsiMaterial;
      static REDSTONE_TORCH: nmsiMaterial;
      static REPEATER: nmsiMaterial;
      static REPEATING_COMMAND_BLOCK: nmsiMaterial;
      static RESPAWN_ANCHOR: nmsiMaterial;
      static ROSE_BUSH: nmsiMaterial;
      static ROTTEN_FLESH: nmsiMaterial;
      static SADDLE: nmsiMaterial;
      static SALMON: nmsiMaterial;
      static SALMON_BUCKET: nmsiMaterial;
      static SALMON_SPAWN_EGG: nmsiMaterial;
      static SAND: nmsiMaterial;
      static SANDSTONE: nmsiMaterial;
      static SANDSTONE_SLAB: nmsiMaterial;
      static SANDSTONE_STAIRS: nmsiMaterial;
      static SANDSTONE_WALL: nmsiMaterial;
      static SCAFFOLDING: nmsiMaterial;
      static SCUTE: nmsiMaterial;
      static SEA_LANTERN: nmsiMaterial;
      static SEA_PICKLE: nmsiMaterial;
      static SEAGRASS: nmsiMaterial;
      static SHEARS: nmsiMaterial;
      static SHEEP_SPAWN_EGG: nmsiMaterial;
      static SHIELD: nmsiMaterial;
      static SHROOMLIGHT: nmsiMaterial;
      static SHULKER_BOX: nmsiMaterial;
      static SHULKER_SHELL: nmsiMaterial;
      static SHULKER_SPAWN_EGG: nmsiMaterial;
      static SILVERFISH_SPAWN_EGG: nmsiMaterial;
      static SKELETON_HORSE_SPAWN_EGG: nmsiMaterial;
      static SKELETON_SKULL: nmsiMaterial;
      static SKELETON_SPAWN_EGG: nmsiMaterial;
      static SKULL_BANNER_PATTERN: nmsiMaterial;
      static SLIME_BALL: nmsiMaterial;
      static SLIME_BLOCK: nmsiMaterial;
      static SLIME_SPAWN_EGG: nmsiMaterial;
      static SMITHING_TABLE: nmsiMaterial;
      static SMOKER: nmsiMaterial;
      static SMOOTH_QUARTZ: nmsiMaterial;
      static SMOOTH_QUARTZ_SLAB: nmsiMaterial;
      static SMOOTH_QUARTZ_STAIRS: nmsiMaterial;
      static SMOOTH_RED_SANDSTONE: nmsiMaterial;
      static SMOOTH_RED_SANDSTONE_SLAB: nmsiMaterial;
      static SMOOTH_RED_SANDSTONE_STAIRS: nmsiMaterial;
      static SMOOTH_SANDSTONE: nmsiMaterial;
      static SMOOTH_SANDSTONE_SLAB: nmsiMaterial;
      static SMOOTH_SANDSTONE_STAIRS: nmsiMaterial;
      static SMOOTH_STONE: nmsiMaterial;
      static SMOOTH_STONE_SLAB: nmsiMaterial;
      static SNOW: nmsiMaterial;
      static SNOW_BLOCK: nmsiMaterial;
      static SNOWBALL: nmsiMaterial;
      static SOUL_CAMPFIRE: nmsiMaterial;
      static SOUL_LANTERN: nmsiMaterial;
      static SOUL_SAND: nmsiMaterial;
      static SOUL_SOIL: nmsiMaterial;
      static SOUL_TORCH: nmsiMaterial;
      static SPAWNER: nmsiMaterial;
      static SPECTRAL_ARROW: nmsiMaterial;
      static SPIDER_EYE: nmsiMaterial;
      static SPIDER_SPAWN_EGG: nmsiMaterial;
      static SPLASH_POTION: nmsiMaterial;
      static SPONGE: nmsiMaterial;
      static SPRUCE_BOAT: nmsiMaterial;
      static SPRUCE_BUTTON: nmsiMaterial;
      static SPRUCE_DOOR: nmsiMaterial;
      static SPRUCE_FENCE: nmsiMaterial;
      static SPRUCE_FENCE_GATE: nmsiMaterial;
      static SPRUCE_LEAVES: nmsiMaterial;
      static SPRUCE_LOG: nmsiMaterial;
      static SPRUCE_PLANKS: nmsiMaterial;
      static SPRUCE_PRESSURE_PLATE: nmsiMaterial;
      static SPRUCE_SAPLING: nmsiMaterial;
      static SPRUCE_SIGN: nmsiMaterial;
      static SPRUCE_SLAB: nmsiMaterial;
      static SPRUCE_STAIRS: nmsiMaterial;
      static SPRUCE_TRAPDOOR: nmsiMaterial;
      static SPRUCE_WOOD: nmsiMaterial;
      static SQUID_SPAWN_EGG: nmsiMaterial;
      static STICK: nmsiMaterial;
      static STICKY_PISTON: nmsiMaterial;
      static STONE: nmsiMaterial;
      static STONE_AXE: nmsiMaterial;
      static STONE_BRICK_SLAB: nmsiMaterial;
      static STONE_BRICK_STAIRS: nmsiMaterial;
      static STONE_BRICK_WALL: nmsiMaterial;
      static STONE_BRICKS: nmsiMaterial;
      static STONE_BUTTON: nmsiMaterial;
      static STONE_HOE: nmsiMaterial;
      static STONE_PICKAXE: nmsiMaterial;
      static STONE_PRESSURE_PLATE: nmsiMaterial;
      static STONE_SHOVEL: nmsiMaterial;
      static STONE_SLAB: nmsiMaterial;
      static STONE_STAIRS: nmsiMaterial;
      static STONE_SWORD: nmsiMaterial;
      static STONECUTTER: nmsiMaterial;
      static STRAY_SPAWN_EGG: nmsiMaterial;
      static STRIDER_SPAWN_EGG: nmsiMaterial;
      static STRING: nmsiMaterial;
      static STRIPPED_ACACIA_LOG: nmsiMaterial;
      static STRIPPED_ACACIA_WOOD: nmsiMaterial;
      static STRIPPED_BIRCH_LOG: nmsiMaterial;
      static STRIPPED_BIRCH_WOOD: nmsiMaterial;
      static STRIPPED_CRIMSON_HYPHAE: nmsiMaterial;
      static STRIPPED_CRIMSON_STEM: nmsiMaterial;
      static STRIPPED_DARK_OAK_LOG: nmsiMaterial;
      static STRIPPED_DARK_OAK_WOOD: nmsiMaterial;
      static STRIPPED_JUNGLE_LOG: nmsiMaterial;
      static STRIPPED_JUNGLE_WOOD: nmsiMaterial;
      static STRIPPED_OAK_LOG: nmsiMaterial;
      static STRIPPED_OAK_WOOD: nmsiMaterial;
      static STRIPPED_SPRUCE_LOG: nmsiMaterial;
      static STRIPPED_SPRUCE_WOOD: nmsiMaterial;
      static STRIPPED_WARPED_HYPHAE: nmsiMaterial;
      static STRIPPED_WARPED_STEM: nmsiMaterial;
      static STRUCTURE_BLOCK: nmsiMaterial;
      static STRUCTURE_VOID: nmsiMaterial;
      static SUGAR: nmsiMaterial;
      static SUGAR_CANE: nmsiMaterial;
      static SUNFLOWER: nmsiMaterial;
      static SUSPICIOUS_STEW: nmsiMaterial;
      static SWEET_BERRIES: nmsiMaterial;
      static TALL_GRASS: nmsiMaterial;
      static TARGET: nmsiMaterial;
      static TERRACOTTA: nmsiMaterial;
      static TIPPED_ARROW: nmsiMaterial;
      static TNT: nmsiMaterial;
      static TNT_MINECART: nmsiMaterial;
      static TORCH: nmsiMaterial;
      static TOTEM_OF_UNDYING: nmsiMaterial;
      static TRADER_LLAMA_SPAWN_EGG: nmsiMaterial;
      static TRAPPED_CHEST: nmsiMaterial;
      static TRIDENT: nmsiMaterial;
      static TRIPWIRE_HOOK: nmsiMaterial;
      static TROPICAL_FISH: nmsiMaterial;
      static TROPICAL_FISH_BUCKET: nmsiMaterial;
      static TROPICAL_FISH_SPAWN_EGG: nmsiMaterial;
      static TUBE_CORAL: nmsiMaterial;
      static TUBE_CORAL_BLOCK: nmsiMaterial;
      static TUBE_CORAL_FAN: nmsiMaterial;
      static TURTLE_EGG: nmsiMaterial;
      static TURTLE_HELMET: nmsiMaterial;
      static TURTLE_SPAWN_EGG: nmsiMaterial;
      static TWISTING_VINES: nmsiMaterial;
      static VEX_SPAWN_EGG: nmsiMaterial;
      static VILLAGER_SPAWN_EGG: nmsiMaterial;
      static VINDICATOR_SPAWN_EGG: nmsiMaterial;
      static VINE: nmsiMaterial;
      static WANDERING_TRADER_SPAWN_EGG: nmsiMaterial;
      static WARPED_BUTTON: nmsiMaterial;
      static WARPED_DOOR: nmsiMaterial;
      static WARPED_FENCE: nmsiMaterial;
      static WARPED_FENCE_GATE: nmsiMaterial;
      static WARPED_FUNGUS: nmsiMaterial;
      static WARPED_FUNGUS_ON_A_STICK: nmsiMaterial;
      static WARPED_HYPHAE: nmsiMaterial;
      static WARPED_NYLIUM: nmsiMaterial;
      static WARPED_PLANKS: nmsiMaterial;
      static WARPED_PRESSURE_PLATE: nmsiMaterial;
      static WARPED_ROOTS: nmsiMaterial;
      static WARPED_SIGN: nmsiMaterial;
      static WARPED_SLAB: nmsiMaterial;
      static WARPED_STAIRS: nmsiMaterial;
      static WARPED_STEM: nmsiMaterial;
      static WARPED_TRAPDOOR: nmsiMaterial;
      static WARPED_WART_BLOCK: nmsiMaterial;
      static WATER_BUCKET: nmsiMaterial;
      static WEEPING_VINES: nmsiMaterial;
      static WET_SPONGE: nmsiMaterial;
      static WHEAT: nmsiMaterial;
      static WHEAT_SEEDS: nmsiMaterial;
      static WHITE_BANNER: nmsiMaterial;
      static WHITE_BED: nmsiMaterial;
      static WHITE_CARPET: nmsiMaterial;
      static WHITE_CONCRETE: nmsiMaterial;
      static WHITE_CONCRETE_POWDER: nmsiMaterial;
      static WHITE_DYE: nmsiMaterial;
      static WHITE_GLAZED_TERRACOTTA: nmsiMaterial;
      static WHITE_SHULKER_BOX: nmsiMaterial;
      static WHITE_STAINED_GLASS: nmsiMaterial;
      static WHITE_STAINED_GLASS_PANE: nmsiMaterial;
      static WHITE_TERRACOTTA: nmsiMaterial;
      static WHITE_TULIP: nmsiMaterial;
      static WHITE_WOOL: nmsiMaterial;
      static WITCH_SPAWN_EGG: nmsiMaterial;
      static WITHER_ROSE: nmsiMaterial;
      static WITHER_SKELETON_SKULL: nmsiMaterial;
      static WITHER_SKELETON_SPAWN_EGG: nmsiMaterial;
      static WOLF_SPAWN_EGG: nmsiMaterial;
      static WOODEN_AXE: nmsiMaterial;
      static WOODEN_HOE: nmsiMaterial;
      static WOODEN_PICKAXE: nmsiMaterial;
      static WOODEN_SHOVEL: nmsiMaterial;
      static WOODEN_SWORD: nmsiMaterial;
      static WRITABLE_BOOK: nmsiMaterial;
      static WRITTEN_BOOK: nmsiMaterial;
      static YELLOW_BANNER: nmsiMaterial;
      static YELLOW_BED: nmsiMaterial;
      static YELLOW_CARPET: nmsiMaterial;
      static YELLOW_CONCRETE: nmsiMaterial;
      static YELLOW_CONCRETE_POWDER: nmsiMaterial;
      static YELLOW_DYE: nmsiMaterial;
      static YELLOW_GLAZED_TERRACOTTA: nmsiMaterial;
      static YELLOW_SHULKER_BOX: nmsiMaterial;
      static YELLOW_STAINED_GLASS: nmsiMaterial;
      static YELLOW_STAINED_GLASS_PANE: nmsiMaterial;
      static YELLOW_TERRACOTTA: nmsiMaterial;
      static YELLOW_WOOL: nmsiMaterial;
      static ZOGLIN_SPAWN_EGG: nmsiMaterial;
      static ZOMBIE_HEAD: nmsiMaterial;
      static ZOMBIE_HORSE_SPAWN_EGG: nmsiMaterial;
      static ZOMBIE_SPAWN_EGG: nmsiMaterial;
      static ZOMBIE_VILLAGER_SPAWN_EGG: nmsiMaterial;
      static ZOMBIFIED_PIGLIN_SPAWN_EGG: nmsiMaterial;
      static fromId (id: number): nmsiMaterial;
      getBlock (): nmsibBlock;
      getId (): number;
      getMaxDefaultStackSize (): number;
      getName (): string;
      hasState (): boolean;
      isArmor (): boolean;
      isBlock (): boolean;
      isBoots (): boolean;
      isChestplate (): boolean;
      isFood (): boolean;
      isHelmet (): boolean;
      isLeggings (): boolean;
      key (): nkakKey;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsiMaterial;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsiMaterial[];
   }
   export class nmsuMathUtils extends jlObject {
      static clamp (value: number, min: number, max: number): number;
      static clampFloat (t: number, a: number, b: number): number;
      static getHorizontalDirection (yawInDegrees: number): nmsuDirection;
      static isBetween (number: number, min: number, max: number): boolean;
      static isBetween (number: number, min: number, max: number): boolean;
      static isBetween (number: number, min: number, max: number): boolean;
      static isBetween (number: number, min: number, max: number): boolean;
      static isBetweenUnordered (number: number, compare1: number, compare2: number): boolean;
      static isBetweenUnordered (number: number, compare1: number, compare2: number): boolean;
      static mod (a: number, b: number): number;
      static round (value: number, places: number): number;
      static round (value: number, places: number): number;
      static square (num: number): number;
      static square (num: number): number;
      static square (num: number): number;
      static tryParse (string: string): jlInteger;
   }
   /**Attacks the entity's target (EntityCreature.getTarget()) OR the closest entity  which can be targeted with the entity TargetSelector.*/
   export class nmseagMeleeAttackGoal extends nmseaGoalSelector {
      constructor (entityCreature: nmseEntityCreature, range: number, delay: number, timeUnit: nmsutTimeUnit);
      /**Ends this GoalSelector.*/
      end (): void;
      getCooldown (): nmsutCooldown;
      /**Whether or not this GoalSelector should end.*/
      shouldEnd (): boolean;
      /**Whether or not this GoalSelector should start.*/
      shouldStart (): boolean;
      /**Starts this GoalSelector.*/
      start (): void;
      /**Called every tick when this GoalSelector is running.*/
      tick (time: number): void;
   }
   /**Utility class to handle client chat settings.*/
   export class nmsmMessenger extends jlObject {
      constructor ();
      /**Checks if the server should receive commands from a player, given their chat settings.*/
      static canReceiveCommand (player: nmsePlayer): boolean;
      /**Checks if the server should receive messages from a player, given their chat settings.*/
      static canReceiveMessage (player: nmsePlayer): boolean;
      /**Sends a message to some players, respecting their chat settings.*/
      static sendMessage (players: juCollection<nmsePlayer>, message: nkatComponent, position: nmsmChatPosition, uuid: juUUID): void;
      /**Sends a message to a player, respecting their chat settings.*/
      static sendMessage (player: nmsePlayer, message: nkatComponent, position: nmsmChatPosition, uuid: juUUID): boolean;
      /**Sends a message to the player informing them we are rejecting their message or command.*/
      static sendRejectionMessage (player: nmsePlayer): void;
   }
   export class nmseMetadata extends jlObject {
      constructor (entity: nmseEntity);
      static Boolean (value: boolean): nmseMValue<boolean>;
      static Byte (value: number): nmseMValue<jlByte>;
      static Chat (value: nkatComponent): nmseMValue<nkatComponent>;
      static Direction (value: nmsuDirection): nmseMValue<nmsuDirection>;
      static Float (value: number): nmseMValue<jlFloat>;
      getEntries (): juCollection<nmseMEntry<any>>;
      getIndex<T> (index: number, defaultValue: T): T;
      static NBT (nbt: org.jglrxavpok.hephaistos.nbt.NBT): njhnNBT;
      static OptBlockID (value: jlInteger): nmseMValue<jlInteger>;
      static OptChat (value: nkatComponent): nmseMValue<nkatComponent>;
      static OptPosition (value: nmsuBlockPosition): nmseMValue<nmsuBlockPosition>;
      static OptUUID (value: juUUID): nmseMValue<juUUID>;
      static OptVarInt (value: jlInteger): nmseMValue<jlInteger>;
      static Pose (value: nmseEPose): nmseMValue<nmseEPose>;
      static Position (value: nmsuBlockPosition): nmseMValue<nmsuBlockPosition>;
      static Rotation (value: nmsuVector): nmseMValue<nmsuVector>;
      setIndex (index: number, value: nmseMValue<any>): void;
      setNotifyAboutChanges (notifyAboutChanges: boolean): void;
      static Slot (value: nmsiItemStack): nmseMValue<nmsiItemStack>;
      static String (value: string): nmseMValue<string>;
      static VarInt (value: number): nmseMValue<jlInteger>;
      static VillagerData (villagerType: number, villagerProfession: number, level: number): nmseMValue<number[]>;
   }
   export class nmseMEntry<T> extends jlObject implements nmsubWriteable {
      constructor (index: number, value: nmseMValue<T>);
      constructor (reader: nmsubBinaryReader);
      getIndex (): number;
      getMetaValue (): nmseMValue<T>;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmseMValue<T> extends jlObject implements nmsubWriteable, nmsubReadable {
      constructor (type: number, value: T, valueWriter: jufConsumer<nmsubBinaryWriter>, readingFunction: jufFunction<nmsubBinaryReader,T>);
      getType (): number;
      getValue (): T;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsemmMinecartMeta extends nmsemmAbstractMinecartMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getObjectData (): number;
   }
   /**The main server class used to start the server and retrieve all the managers.    The server needs to be initialized with init() and started with start(String, int).  You should register all of your dimensions, biomes, commands, events, etc... in-between.*/
   export class nmsMinecraftServer extends jlObject {
      constructor ();
      /**Gets the manager handling advancements.*/
      static getAdvancementManager (): nmsaAdvancementManager;
      /**Gets the manager handling server monitoring.*/
      static getBenchmarkManager (): nmsmBenchmarkManager;
      /**Gets the manager handling biomes.*/
      static getBiomeManager (): nmswbBiomeManager;
      /**Gets the manager handling CustomBlock and BlockPlacementRule.*/
      static getBlockManager (): nmsibBlockManager;
      /**Gets the boss bar manager.*/
      static getBossBarManager (): nmsabBossBarManager;
      /**Gets the current server brand name.*/
      static getBrandName (): string;
      /**Gets the chunk view distance of the server.*/
      static getChunkViewDistance (): number;
      /**Gets the manager handling commands.*/
      static getCommandManager (): nmscCommandManager;
      /**Gets the compression threshold of the server.*/
      static getCompressionThreshold (): number;
      /**Gets the manager handling server connections.*/
      static getConnectionManager (): nmsnConnectionManager;
      /**Gets the manager handling DataType used by SerializableData.*/
      static getDataManager (): nmsdDataManager;
      /**Gets the server difficulty showed in game option.*/
      static getDifficulty (): nmswDifficulty;
      /**Gets the manager handling dimensions.*/
      static getDimensionTypeManager (): nmswDimensionTypeManager;
      /**Gets the entity view distance of the server.*/
      static getEntityViewDistance (): number;
      /**Gets the exception manager for exception handling.*/
      static getExceptionManager (): nmseExceptionManager;
      /**Get the manager handling Extension.*/
      static getExtensionManager (): nmseExtensionManager;
      /**Gets the global event handler.*/
      static getGlobalEventHandler (): nmseGlobalEventHandler;
      /**Gets the manager handling all registered instances.*/
      static getInstanceManager (): nmsiInstanceManager;
      /**Gets the manager handling loot tables.*/
      static getLootTableManager (): nmsglLootTableManager;
      /**Gets the maximum packet size (in bytes) that a client can send without getting disconnected.*/
      static getMaxPacketSize (): number;
      /**Gets the netty server.*/
      static getNettyServer (): nmsnnNettyServer;
      /**Gets the number of threads used by Netty.*/
      static getNettyThreadCount (): number;
      /**Gets the manager handling all incoming packets*/
      static getPacketListenerManager (): nmslmPacketListenerManager;
      /**Gets the object handling the client packets processing.*/
      static getPacketProcessor (): nmsnPacketProcessor;
      /**Gets the maximum number of packets a client can send over 1 second.*/
      static getRateLimit (): number;
      /**Gets the manager handling recipes show to the clients.*/
      static getRecipeManager (): nmsrRecipeManager;
      /**Gets the manager handling scheduled tasks.*/
      static getSchedulerManager (): nmstSchedulerManager;
      /**Gets the manager handling storage.*/
      static getStorageManager (): nmssStorageManager;
      /**Gets the manager handling tags.*/
      static getTagManager (): nmsgtTagManager;
      /**Gets the manager handling teams.*/
      static getTeamManager (): nmssTeamManager;
      /**Gets the manager handling the server ticks.*/
      static getUpdateManager (): nmsUpdateManager;
      /**Gets if the packet caching feature is enabled.*/
      static hasGroupedPacket (): boolean;
      /**Gets if the packet caching feature is enabled.*/
      static hasPacketCaching (): boolean;
      static init (): nmsMinecraftServer;
      /**Gets if the server is up and running.*/
      static isStarted (): boolean;
      /**Gets if the server is currently being shutdown using stopCleanly().*/
      static isStopping (): boolean;
      /**Changes the server brand name and send the change to all connected players.*/
      static setBrandName (brandName: string): void;
      /**Changes the chunk view distance of the server.*/
      static setChunkViewDistance (chunkViewDistance: number): void;
      /**Changes the compression threshold of the server.*/
      static setCompressionThreshold (compressionThreshold: number): void;
      /**Changes the server difficulty and send the appropriate packet to all connected clients.*/
      static setDifficulty (difficulty: nmswDifficulty): void;
      /**Changes the entity view distance of the server.*/
      static setEntityViewDistance (entityViewDistance: number): void;
      /**Enables or disable grouped packet.*/
      static setGroupedPacket (groupedPacket: boolean): void;
      /**Changes the maximum packet size (in bytes) that a client can send without getting disconnected.*/
      static setMaxPacketSize (maxPacketSize: number): void;
      /**Changes the number of threads used by Netty.*/
      static setNettyThreadCount (nettyThreadCount: number): void;
      /**Enables or disable packet caching.*/
      static setPacketCaching (packetCaching: boolean): void;
      /**Changes the number of packet a client can send over 1 second without being disconnected.*/
      static setRateLimit (rateLimit: number): void;
      /**Sets if the server should process netty errors and other unnecessary netty events.*/
      static setShouldProcessNettyErrors (processNettyErrors: boolean): void;
      /**Gets if the server should process netty errors and other unnecessary netty events.*/
      static shouldProcessNettyErrors (): boolean;
      /**Starts the server.*/
      start (address: string, port: number): void;
      /**Stops this server properly (saves if needed, kicking players, etc.)*/
      static stopCleanly (): void;
   }
   /**A IChunkLoader used by InstanceContainer  which is based on the StorageLocation and ChunkSupplier associated to it.    It simply save chunk serialized data from Chunk.getSerializedData()  and deserialize it later with Chunk.readChunk(BinaryReader, ChunkCallback).    The key used in the StorageLocation is defined by getChunkKey(int, int) and should NOT be changed.*/
   export class nmsiMinestomBasicChunkLoader extends jlObject implements nmsiIChunkLoader {
      constructor (instanceContainer: nmsiInstanceContainer);
      /**Loads a Chunk, all blocks should be set since the ChunkGenerator is not applied.*/
      loadChunk (instance: nmsiInstance, chunkX: number, chunkZ: number, callback: nmsucChunkCallback): boolean;
      /**Saves a Chunk with an optional callback for when it is done.*/
      saveChunk (chunk: nmsiChunk, callback: jlRunnable): void;
      /**Does this IChunkLoader allow for multi-threaded loading of Chunkany*/
      supportsParallelLoading (): boolean;
      /**Does this IChunkLoader allow for multi-threaded saving of Chunkany*/
      supportsParallelSaving (): boolean;
   }
   /**Provides class bytecode for Mixin*/
   export class nmsesmMinestomBytecodeProvider extends jlObject implements org.spongepowered.asm.service.IClassBytecodeProvider {
      constructor (classLoader: nmsesMinestomRootClassLoader);
      getClassNode (name: string): ooatClassNode;
      getClassNode (name: string, runTransformers: boolean): ooatClassNode;
   }
   /**Provides classes for Mixin*/
   export class nmsesmMinestomClassProvider extends jlObject implements org.spongepowered.asm.service.IClassProvider {
      constructor (classLoader: nmsesMinestomRootClassLoader);
      findAgentClass (name: string, initialize: boolean): jlClass<any>;
      findClass (name: string): jlClass<any>;
      findClass (name: string, initialize: boolean): jlClass<any>;
      getClassPath (): jnURL[];
   }
   export class nmsesMinestomExtensionClassLoader extends nmsesHierarchyClassLoader {
      constructor (extensionName: string, mainClassName: string, urls: jnURL[], root: nmsesMinestomRootClassLoader);
      finalize (): void;
      /**Returns the name of the extension linked to this classloader*/
      getExtensionName (): string;
      /**Returns the main class name linked to the extension responsible for this classloader.*/
      getMainClassName (): string;
      /**Is the given class name the name of the entry point of one the extensions from this classloader chainany*/
      isMainExtensionClass (name: string): boolean;
      loadClass (name: string): jlClass<any>;
      loadClass (name: string, resolve: boolean): jlClass<any>;
      /**Assumes the name is not null, nor it does represent a protected class*/
      loadClassAsChild (name: string, resolve: boolean): jlClass<any>;
   }
   /**Class Loader that can modify class bytecode when they are loaded*/
   export class nmsesMinestomRootClassLoader extends nmsesHierarchyClassLoader {
      addCodeModifier (modifier: nmsesCodeModifier): void;
      addURL (url: jnURL): void;
      findClass (name: string): jlClass<any>;
      /**Tries to know which extension created this object, based on the classloader of the object.*/
      static findExtensionObjectOwner (obj: jlObject): string;
      static getInstance (): nmsesMinestomRootClassLoader;
      getModifiers (): juList<nmsesCodeModifier>;
      /**Loads and possibly transforms class bytecode corresponding to the given binary name.*/
      loadBytes (name: string, transform: boolean): number[];
      loadBytesWithChildren (name: string, transform: boolean): number[];
      loadClass (name: string, resolve: boolean): jlClass<any>;
      /**Loads a code modifier.*/
      loadModifier (urls: jnURL[], codeModifierClass: string): boolean;
      newChild (urls: jnURL[]): jnURLClassLoader;
   }
   export class nmstMinestomTerminal extends jlObject {
      constructor ();
      static start (): void;
      static stop (): void;
   }
   export class nmsutMinestomThread extends jucThreadPoolExecutor {
      constructor (nThreads: number, name: string);
      constructor (nThreads: number, name: string, local: boolean);
      /**Shutdown all the thread pools*/
      static shutdownAll (): void;
   }
   /**Takes care of logging mixin operations*/
   export class nmsesmMixinAuditTrailMinestom extends jlObject implements org.spongepowered.asm.service.IMixinAuditTrail {
      constructor ();
      onApply (className: string, mixinName: string): void;
      onGenerate (className: string, generatorName: string): void;
      onPostProcess (className: string): void;
   }
   /**CodeModifier responsible for applying Mixins during class load*/
   export class nmsesmMixinCodeModifier extends nmsesCodeModifier {
      constructor ();
      /**Beginning of the class names to transform.*/
      getNamespace (): string;
      /**Must return true iif the class node has been modified*/
      transform (source: org.objectweb.asm.tree.ClassNode): boolean;
   }
   export class nmsesmMixinPlatformAgentMinestom extends org.spongepowered.asm.launch.platform.MixinPlatformAgentAbstract implements org.spongepowered.asm.launch.platform.IMixinPlatformServiceAgent {
      constructor ();
      accept (manager: org.spongepowered.asm.launch.platform.MixinPlatformManager, handle: org.spongepowered.asm.launch.platform.container.IContainerHandle): osalpIAcceptResult;
      getMixinContainers (): jsalpcIContainerHandle;
      getSideName (): string;
      init (): void;
   }
   export class nmsesmMixinServiceMinestom extends org.spongepowered.asm.service.MixinServiceAbstract {
      constructor ();
      getAuditTrail (): osasIMixinAuditTrail;
      getBytecodeProvider (): osasIClassBytecodeProvider;
      getClassProvider (): osasIClassProvider;
      getClassTracker (): osasIClassTracker;
      getName (): string;
      getPlatformAgents (): juCollection<string>;
      getPrimaryContainer (): osalpcIContainerHandle;
      getResourceAsStream (name: string): jiInputStream;
      getTransformerProvider (): osasITransformerProvider;
      static gotoDefaultPhase (): void;
      static gotoInitPhase (): void;
      static gotoPreinitPhase (): void;
      isValid (): boolean;
      wire (phase: org.spongepowered.asm.mixin.MixinEnvironment.Phase, phaseConsumer: org.spongepowered.asm.util.IConsumer<org.spongepowered.asm.mixin.MixinEnvironment.Phase>): void;
   }
   export class nmsesmMixinServiceMinestomBootstrap extends jlObject implements org.spongepowered.asm.service.IMixinServiceBootstrap {
      constructor ();
      bootstrap (): void;
      getName (): string;
      getServiceClassName (): string;
   }
   export class nmsemMobMeta extends nmsemLivingEntityMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      isAggressive (): boolean;
      isLeftHanded (): boolean;
      isNoAi (): boolean;
      setAggressive (value: boolean): void;
      setLeftHanded (value: boolean): void;
      setNoAi (value: boolean): void;
   }
   export class nmseMojangAuth extends jlObject {
      constructor ();
      static getKeyPair (): jsKeyPair;
      /**Enables mojang authentication on the server.*/
      static init (): void;
      static isEnabled (): boolean;
   }
   export class nmsemMojangCrypt extends jlObject {
      constructor ();
      static decryptByteToSecretKey (privateKey: jsPrivateKey, bytes: number[]): jcSecretKey;
      static decryptUsingKey (key: jsKey, bytes: number[]): number[];
      static digestData (data: string, publicKey: jsPublicKey, secretKey: jcSecretKey): number[];
      static generateKeyPair (): jsKeyPair;
      static getCipher (mode: number, key: jsKey): jcCipher;
   }
   /**Utils class using mojang API.*/
   export class nmsumMojangUtils extends jlObject {
      constructor ();
      static fromUsername (username: string): ggJsonObject;
      static fromUuid (uuid: string): ggJsonObject;
   }
   export interface nmsetMonster {}
   export class nmsemmMonsterMeta extends nmsemPathfinderMobMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   export class nmsemaMooshroomMeta extends nmsemaCowMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getVariant (): nmsemaMVariant;
      setVariant (value: nmsemaMVariant): void;
   }
   export class nmsemaMVariant extends jlEnum<nmsemaMVariant> {
      static BROWN: nmsemaMVariant;
      static RED: nmsemaMVariant;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsemaMVariant;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsemaMVariant[];
   }
   export class nmsemaMuleMeta extends nmsemaChestedHorseMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   export class nmsnpspMultiBlockChangePacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      static getLocalBlockPosAsShort (x: number, y: number, z: number): number;
      static getXFromLocalBlockPosAsShort (localPos: number): number;
      static getYFromLocalBlockPosAsShort (localPos: number): number;
      static getZFromLocalBlockPosAsShort (localPos: number): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspMBlockChange extends jlObject {
      constructor ();
   }
   /**An object with a Component name and a UUID identity.*/
   export interface nmsuiNamedAndIdentified {
      /**Creates a NamedAndIdentified instance with an empty name and a random UUID.*/
      static empty (): nmsuiNamedAndIdentified;
      /**Gets the name of this object.*/
      getName (): nkatComponent;
      /**Gets the UUID of this object.*/
      getUuid (): juUUID;
      /**Creates a NamedAndIdentified instance with an empty name and a given UUID.*/
      static identified (uuid: juUUID): nmsuiNamedAndIdentified;
      /**Creates a NamedAndIdentified instance with a given name and a random UUID.*/
      static named (name: string): nmsuiNamedAndIdentified;
      /**Creates a NamedAndIdentified instance with a given name and a random UUID.*/
      static named (name: nkatComponent): nmsuiNamedAndIdentified;
      /**Creates a NamedAndIdentified instance with a given name and UUID.*/
      static of (name: string, uuid: juUUID): nmsuiNamedAndIdentified;
      /**Creates a NamedAndIdentified instance with a given name and UUID.*/
      static of (name: nkatComponent, uuid: juUUID): nmsuiNamedAndIdentified;
   }
   export class nmsnpspNamedSoundEffectPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   /**Represents a namespaced ID  https:\/\/minecraft.gamepedia.com\/Namespaced_ID*/
   export class nmsuNamespaceID extends jlObject implements jlCharSequence {
      asString (): string;
      charAt (index: number): string;
      equals (o: jlObject): boolean;
      static from (id: string): nmsuNamespaceID;
      static from (domain: string, path: string): nmsuNamespaceID;
      static from (key: net.kyori.adventure.key.Key): nmsuNamespaceID;
      getDomain (): string;
      /**Extracts the domain from the namespace ID.*/
      static getDomain (namespaceID: string): string;
      getPath (): string;
      /**Extracts the path from the namespace ID.*/
      static getPath (namespaceID: string): string;
      hashCode (): number;
      length (): number;
      namespace (): string;
      subSequence (start: number, end: number): jlCharSequence;
      toString (): string;
      value (): string;
   }
   export class nmsuNamespaceIDHashMap<V> extends juAbstractMap<nmsuNamespaceID> {
      constructor ();
      computeIfAbsent (domain: string, path: string, mappingFunction: jufFunction<nmsuNamespaceID,V>): V;
      computeIfAbsent (id: string, mappingFunction: jufFunction<nmsuNamespaceID,V>): V;
      containsKey (id: string): boolean;
      containsKey (domain: string, path: string): boolean;
      entrySet (): juSet<juMEntry<nmsuNamespaceID,V>>;
      get (key: jlObject): V;
      get (id: string): V;
      get (domain: string, path: string): V;
      getOrDefault (domain: string, path: string, defaultValue: V): V;
      getOrDefault (id: string, defaultValue: V): V;
      put (domain: string, path: string, value: V): V;
      put (id: string, value: V): V;
      put (key: nmsuNamespaceID, value: V): V;
   }
   /**Represents an entity which can use the pathfinder.    All pathfinder methods are available with getNavigator().*/
   export interface nmsepNavigableEntity {
      getNavigator (): nmsepNavigator;
   }
   /**Necessary object for all NavigableEntity.*/
   export class nmsepNavigator extends jlObject {
      constructor (entity: nmseEntity);
      getEntity (): nmseEntity;
      getPath (): egapmIPath;
      /**Gets the assigned pathfinder.*/
      getPathFinder (): egapHydrazinePathFinder;
      /**Gets the pathing entity.*/
      getPathingEntity (): nmsepPFPathingEntity;
      /**Gets the target pathfinder position.*/
      getPathPosition (): nmsuPosition;
      jump (height: number): void;
      /**Used to move the entity toward direction in the X and Z axis  Gravity is still applied but the entity will not attempt to jump  Also update the yaw\/pitch of the entity to look along 'direction'*/
      moveTowards (direction: nmsuPosition, speed: number): void;
      setPath (path: com.extollit.gaming.ai.path.model.IPath): void;
      setPathFinder (pathFinder: com.extollit.gaming.ai.path.HydrazinePathFinder): void;
      setPathTo (position: nmsuPosition): boolean;
      /**Retrieves the path to position and ask the entity to follow the path.*/
      setPathTo (position: nmsuPosition, bestEffort: boolean): boolean;
      tick (speed: number): void;
   }
   export class nmsnpspNbtQueryResponsePacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsuNBTUtils extends jlObject {
      /**Turns an NBTCompound into an Adventure BinaryTagHolder.*/
      static asBinaryTagHolder (tag: org.jglrxavpok.hephaistos.nbt.NBTCompound): nkanaBinaryTagHolder;
      /**Loads all the items from the 'items' list into the given inventory*/
      static loadAllItems (items: org.jglrxavpok.hephaistos.nbt.NBTList<org.jglrxavpok.hephaistos.nbt.NBTCompound>, destination: nmsiInventory): void;
      static loadDataIntoMeta (metaBuilder: nmsiItemMetaBuilder, nbt: org.jglrxavpok.hephaistos.nbt.NBTCompound): void;
      static loadEnchantments (enchantments: org.jglrxavpok.hephaistos.nbt.NBTList<org.jglrxavpok.hephaistos.nbt.NBTCompound>, setter: nmsuNEnchantmentSetter): void;
      static readItemStack (reader: nmsubBinaryReader): nmsiItemStack;
      static saveAllItems (list: org.jglrxavpok.hephaistos.nbt.NBTList<org.jglrxavpok.hephaistos.nbt.NBTCompound>, inventory: nmsiInventory): void;
      static writeEnchant (nbt: org.jglrxavpok.hephaistos.nbt.NBTCompound, listName: string, enchantmentMap: juMap<nmsiEnchantment,jlShort>): void;
   }
   export interface nmsuNEnchantmentSetter {
      applyEnchantment (name: nmsiEnchantment, level: number): void;
   }
   /**Represents a networking connection with Netty.    It is the implementation used for all network client.*/
   export class nmsnpNettyPlayerConnection extends nmsnpPlayerConnection {
      constructor (channel: io.netty.channel.socket.SocketChannel);
      /**Adds an entry to the plugin request map.*/
      addPluginRequestEntry (messageId: number, channel: string): void;
      /**Forcing the player to disconnect.*/
      disconnect (): void;
      flush (): void;
      getBungeeSkin (): nmsePlayerSkin;
      getBungeeUuid (): juUUID;
      getChannel (): ncChannel;
      /**Retrieves the username received from the client during connection.*/
      getLoginUsername (): string;
      getNonce (): number[];
      /**Gets a request channel from a message id, previously cached using addPluginRequestEntry(int, String).*/
      getPluginRequestChannel (messageId: number): string;
      /**Gets the protocol version of a client.*/
      getProtocolVersion (): number;
      /**Gets the remote address of the client.*/
      getRemoteAddress (): jnSocketAddress;
      /**Gets the server address that the client used to connect.*/
      getServerAddress (): string;
      /**Gets the server port that the client used to connect.*/
      getServerPort (): number;
      /**Used in HandshakePacket to change the internal fields.*/
      refreshServerInformation (serverAddress: string, serverPort: number, protocolVersion: number): void;
      releaseTickBuffer (): void;
      /**Writes a packet to the connection channel.*/
      sendPacket (serverPacket: nmsnpsServerPacket, skipTranslating: boolean): void;
      setConnectionState (connectionState: nmsnConnectionState): void;
      /**Sets the encryption key and add the codecs to the pipeline.*/
      setEncryptionKey (secretKey: jcSecretKey): void;
      setNonce (nonce: number[]): void;
      /**Changes the internal remote address field.*/
      setRemoteAddress (remoteAddress: jnSocketAddress): void;
      /**Enables compression and add a new codec to the pipeline.*/
      startCompression (): void;
      UNSAFE_setBungeeSkin (bungeeSkin: nmsePlayerSkin): void;
      UNSAFE_setBungeeUuid (bungeeUuid: juUUID): void;
      /**Sets the internal login username field.*/
      UNSAFE_setLoginUsername (loginUsername: string): void;
      write (message: jlObject): void;
      write (message: jlObject, skipTranslating: boolean): void;
      writeAndFlush (message: jlObject): void;
      writeWaitingPackets (): void;
   }
   export class nmsnnNettyServer extends jlObject {
      constructor (packetProcessor: nmsnPacketProcessor);
      /**Gets the address of the server.*/
      getAddress (): string;
      /**Gets the port used by the server.*/
      getPort (): number;
      /**Inits the server by choosing which transport layer to use, number of threads, pipeline order, etc...*/
      init (): void;
      /**Binds the address to start the server.*/
      start (address: string, port: number): void;
      /**Stops the server.*/
      stop (): void;
   }
   /**Network related utilities.*/
   export class nmsuNetworkUtils extends jlObject {
      /**Gets a free port.*/
      static getFreePort (): number;
   }
   export class nmscbNodeMaker extends jlObject {
      constructor (commandNodes: nmsnpspDNode[], id: number);
      addNodes (nodes: nmsnpspDNode[]): void;
      getConfiguredNodes (): juList<nmscbNConfiguredNodes>;
      getLatestConfiguredNodes (): nmscbNConfiguredNodes;
      getLatestNodes (): nmsnpspDNode[];
      getNodeIdsMap (): udfoObject2IntMap<nmsnpspDNode>;
      getNodeRequests (): judfPair<string,nmscbNRequest>;
      getNodes (): juList<nmsnpspDNode[]>;
      getNodesCount (): number;
      request (input: string, request: nmscbNRequest): void;
   }
   export class nmscbNConfiguredNodes extends jlObject {
      constructor ();
      getNodes (): nmsnpspDNode[];
      getOptions (): nmscbNOptions;
   }
   export class nmscbNOptions extends jlObject {
      constructor ();
      getPreviousNodes (): nmsnpspDNode[];
      static init (): nmscbNOptions;
      setPreviousNodes (previousNodes: nmsnpspDNode[]): nmscbNOptions;
      shouldUpdateLastNode (): boolean;
      updateLastNode (updateLastNode: boolean): nmscbNOptions;
   }
   export interface nmscbNRequest {
      retrieve (id: number): void;
   }
   /**Represents a message which can be send using the NotificationCenter.*/
   export class nmsanNotification extends jlObject {
      constructor (title: nkatComponent, frameType: nmsaFrameType, icon: nmsiItemStack);
      constructor (title: nkatComponent, frameType: nmsaFrameType, icon: nmsiMaterial);
      constructor (title: nmscJsonMessage, frameType: nmsaFrameType, icon: nmsiItemStack);
      constructor (title: nmscJsonMessage, frameType: nmsaFrameType, icon: nmsiMaterial);
      /**Gets the FrameType of the notification.*/
      getFrameType (): nmsaFrameType;
      /**Gets the icon of the notification.*/
      getIcon (): nmsiItemStack;
      /**Gets the title of the notification.*/
      getTitle (): nkatComponent;
   }
   /**Used to send one or multiples Notification.    Works by sending a completed advancement and remove it immediately.    You can simply create a Notification object and call send(Notification, Player).*/
   export class nmsanNotificationCenter extends jlObject {
      /**Send a Notification to a collection of players.*/
      static send (notification: nmsanNotification, players: juCollection<nmsePlayer>): void;
      /**Send a Notification to one player.*/
      static send (notification: nmsanNotification, player: nmsePlayer): void;
   }
   export interface nmsemObjectDataProvider {
      getObjectData (): number;
      requiresVelocityPacketAtSpawn (): boolean;
   }
   export class nmsemaOcelotMeta extends nmsemaAnimalMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      isTrusting (): boolean;
      setTrusting (value: boolean): void;
   }
   export class nmsnpspOpenBookPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspOpenHorseWindowPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspOpenSignEditorPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   /**Utility class to manage opening the server to LAN. Note that this doesn't actually  open your server to LAN if it isn't already visible to anyone on your local network.  Instead it simply sends the packets needed to trick the Minecraft client into thinking  that this is a single-player world that has been opened to LANfor it to be displayed on  the bottom of the server list.*/
   export class nmselOpenToLAN extends jlObject {
      /**Closes the server to LAN.*/
      static close (): boolean;
      /**Checks if the server is currently opened to LAN.*/
      static isOpen (): boolean;
      /**Opens the server to LAN with the default config.*/
      static open (): boolean;
      /**Opens the server to LAN.*/
      static open (config: nmselOpenToLANConfig): boolean;
   }
   /**Configuration for opening the server to LAN.*/
   export class nmselOpenToLANConfig extends jlObject {
      constructor ();
      /**Sets the delay between calls of ServerListPingEvent.*/
      eventCallDelay (delay: nmsutUpdateOption): nmselOpenToLANConfig;
      /**Sets the delay between outgoing pings.*/
      pingDelay (delay: nmsutUpdateOption): nmselOpenToLANConfig;
      /**Sets the port used to send pings from.*/
      port (port: number): nmselOpenToLANConfig;
   }
   export class nmsnpspOpenWindowPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      constructor (title: nkatComponent);
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   /**Hacky class for Optifine because of an issue making the client crash if biomes 'swamp' and 'swamp_hills'  are not registered.    Can be removed anytime, hope that it will be fixed.*/
   export class nmseoOptifineSupport extends jlObject {
      constructor ();
      /**Enables optifine support by registering the required biomes.*/
      static enable (): void;
      static isEnabled (): boolean;
   }
   /**Convenient class to execute callbacks which can be null.*/
   export class nmsucOptionalCallback extends jlObject {
      constructor ();
      /**Executes an optional Runnable.*/
      static execute (callback: jlRunnable): void;
      /**Executes an optional ChunkCallback.*/
      static execute (callback: nmsucChunkCallback, chunk: nmsiChunk): void;
   }
   export class nmsnncPacketCompressor extends io.netty.handler.codec.ByteToMessageCodec<io.netty.buffer.ByteBuf> {
      constructor (threshold: number);
      decode (ctx: io.netty.channel.ChannelHandlerContext, _in: io.netty.buffer.ByteBuf, out: juList<jlObject>): void;
      encode (ctx: io.netty.channel.ChannelHandlerContext, from: io.netty.buffer.ByteBuf, to: io.netty.buffer.ByteBuf): void;
   }
   /**Used to control the output of a packet in ClientPacketConsumer.accept(Player, PacketController, ClientPlayPacket)  and ServerPacketConsumer.accept(Collection, PacketController, ServerPacket).*/
   export class nmslmPacketController extends jlObject {
      constructor ();
      /**Gets if the packet is cancelled.*/
      isCancel (): boolean;
      /**Used to cancel the packet.*/
      setCancel (cancel: boolean): void;
   }
   export class nmsnncPacketDecoder extends io.netty.handler.codec.ByteToMessageDecoder {
      constructor ();
      decode (ctx: io.netty.channel.ChannelHandlerContext, buf: io.netty.buffer.ByteBuf, list: juList<jlObject>): void;
   }
   export class nmsnncPacketEncoder extends io.netty.handler.codec.MessageToByteEncoder< nmsnpsServerPacket> {
      constructor ();
      encode (ctx: io.netty.channel.ChannelHandlerContext, packet: nmsnpsServerPacket, buf: io.netty.buffer.ByteBuf): void;
   }
   export class nmsnncPacketFramer extends io.netty.handler.codec.ByteToMessageCodec<io.netty.buffer.ByteBuf> {
      constructor (packetProcessor: nmsnPacketProcessor);
      decode (ctx: io.netty.channel.ChannelHandlerContext, buf: io.netty.buffer.ByteBuf, out: juList<jlObject>): void;
      encode (ctx: io.netty.channel.ChannelHandlerContext, from: io.netty.buffer.ByteBuf, to: io.netty.buffer.ByteBuf): void;
   }
   /**An audience implementation that sends grouped packets if possible.*/
   export interface nmsaaPacketGroupingAudience extends nkaaForwardingAudience {
      audiences (): jlIterable<nkaaAudience>;
      clearTitle (): void;
      /**Gets an iterable of the players this audience contains.*/
      getPlayers (): juCollection<nmsePlayer>;
      hideBossBar (bar: nkabBossBar): void;
      /**Creates a packet grouping audience that copies an iterable of players.*/
      static of (players: juCollection<nmsePlayer>): nmsaaPacketGroupingAudience;
      playSound (sound: nkasSound, x: number, y: number, z: number): void;
      resetTitle (): void;
      sendActionBar (message: nkatComponent): void;
      sendMessage (source: nkaiIdentity, message: nkatComponent, type: nkaaMessageType): void;
      sendPlayerListHeaderAndFooter (header: nkatComponent, footer: nkatComponent): void;
      showBossBar (bar: nkabBossBar): void;
      showTitle (title: nkatTitle): void;
      stopSound (stop: nkasSoundStop): void;
   }
   /**Small convenient interface to use method references with PacketListenerManager.setListener(Class, PacketListenerConsumer).*/
   export interface nmslmPacketListenerConsumer<T extends ClientPlayPacket> {
      accept (packet: T, player: nmsePlayer): void;
   }
   export class nmslmPacketListenerManager extends jlObject {
      constructor ();
      /**Processes a packet by getting its PacketListenerConsumer and calling all the packet listeners.*/
      processClientPacket<T extends nmsnpcClientPlayPacket> (packet: T, player: nmsePlayer): void;
      /**Executes the consumers from ConnectionManager.onPacketSend(ServerPacketConsumer).*/
      processServerPacket (packet: nmsnpsServerPacket, players: juCollection<nmsePlayer>): boolean;
      /**Sets the listener of a packet.*/
      setListener<T extends nmsnpcClientPlayPacket> (packetClass: jlClass<T>, consumer: nmslmPacketListenerConsumer<T>): void;
   }
   /**Responsible for processing client packets.    You can retrieve the different packet handlers per state (status\/login\/play)  from the ClientPacketsHandler class.    Packet handlers are cached here and can be retrieved with getStatusPacketsHandler(), getLoginPacketsHandler()  and getPlayPacketsHandler(). The one to use depend on the type of packet you need to retrieve (the packet id 0 does not have  the same meaning as it is a login or play packet).*/
   export class nmsnPacketProcessor extends jlObject {
      constructor ();
      createPlayerConnection (context: io.netty.channel.ChannelHandlerContext): void;
      /**Gets the handler for client login packets.*/
      getLoginPacketsHandler (): nmsnpchClientLoginPacketsHandler;
      /**Retrieves a player connection from its channel.*/
      getPlayerConnection (context: io.netty.channel.ChannelHandlerContext): nmsnpPlayerConnection;
      /**Gets the handler for client play packets.*/
      getPlayPacketsHandler (): nmsnpchClientPlayPacketsHandler;
      /**Gets the handler for client status packets.*/
      getStatusPacketsHandler (): nmsnpchClientStatusPacketsHandler;
      process (context: io.netty.channel.ChannelHandlerContext, packet: nmsnnpInboundPacket): void;
      removePlayerConnection (context: io.netty.channel.ChannelHandlerContext): nmsnpPlayerConnection;
   }
   /**Utils class for packets. Including writing a ServerPacket into a ByteBuf  for network processing.*/
   export class nmsuPacketUtils extends jlObject {
      /**Compress using zlib the content of a packet.*/
      static compressBuffer (compressor: com.velocitypowered.natives.compression.VelocityCompressor, packetBuffer: io.netty.buffer.ByteBuf, compressionTarget: io.netty.buffer.ByteBuf): void;
      /**Creates a "framed packet" (packet which can be send and understood by a Minecraft client)  from a server packet, directly into an output buffer.*/
      static createFramedPacket (serverPacket: nmsnpsServerPacket): nbByteBuf;
      /**Frames a buffer for it to be understood by a Minecraft client.*/
      static frameBuffer (packetBuffer: io.netty.buffer.ByteBuf, frameTarget: io.netty.buffer.ByteBuf): void;
      /**Same as sendGroupedPacket(Collection, ServerPacket, PlayerValidator)  but with the player validator sets to null.*/
      static sendGroupedPacket (players: juCollection<nmsePlayer>, packet: nmsnpsServerPacket): void;
      /**Sends a ServerPacket to multiple players.*/
      static sendGroupedPacket (players: juCollection<nmsePlayer>, packet: nmsnpsServerPacket, playerValidator: nmsucvPlayerValidator): void;
      /**Sends a packet to an audience.*/
      static sendPacket (audience: nkaaAudience, packet: nmsnpsServerPacket): void;
      static writeFramedPacket (buffer: io.netty.buffer.ByteBuf, serverPacket: nmsnpsServerPacket): void;
      /**Writes a ServerPacket into a ByteBuf.*/
      static writePacket (buf: io.netty.buffer.ByteBuf, packet: nmsnpsServerPacket): void;
   }
   export class nmsemoPaintingMeta extends nmsemEntityMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getDirection (): nmsuDirection;
      getMotive (): nmsemoPMotive;
      /**Sets direction of a painting.*/
      setDirection (direction: nmsuDirection): void;
      /**Sets motive of a painting.*/
      setMotive (motive: nmsemoPMotive): void;
   }
   export class nmsemoPMotive extends jlEnum<nmsemoPMotive> {
      static ALBAN: nmsemoPMotive;
      static AZTEC: nmsemoPMotive;
      static AZTEC2: nmsemoPMotive;
      static BOMB: nmsemoPMotive;
      static BURNING_SKULL: nmsemoPMotive;
      static BUST: nmsemoPMotive;
      static COURBET: nmsemoPMotive;
      static CREEBET: nmsemoPMotive;
      static DONKEY_KONG: nmsemoPMotive;
      static FIGHTERS: nmsemoPMotive;
      static GRAHAM: nmsemoPMotive;
      static KEBAB: nmsemoPMotive;
      static MATCH: nmsemoPMotive;
      static PIGSCENE: nmsemoPMotive;
      static PLANT: nmsemoPMotive;
      static POINTER: nmsemoPMotive;
      static POOL: nmsemoPMotive;
      static SEA: nmsemoPMotive;
      static SKELETON: nmsemoPMotive;
      static SKULL_AND_ROSES: nmsemoPMotive;
      static STAGE: nmsemoPMotive;
      static SUNSET: nmsemoPMotive;
      static VOID: nmsemoPMotive;
      static WANDERER: nmsemoPMotive;
      static WASTELAND: nmsemoPMotive;
      static WITHER: nmsemoPMotive;
      getHeight (): number;
      getName (): string;
      getWidth (): number;
      getX (): number;
      getY (): number;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsemoPMotive;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsemoPMotive[];
   }
   /**Used to efficiently store blocks with an optional palette.    The format used is the one described in the ChunkDataPacket,  the reason is that it allows us to write the packet much faster.*/
   export class nmsipPaletteStorage extends jlObject implements nmsucPublicCloneable<nmsipPaletteStorage> {
      constructor (defaultBitsPerEntry: number, defaultBitsIncrement: number);
      /**Loops through all the sections and blocks to find unused array (empty chunk section)*/
      clean (): void;
      /**Clears all the data in the palette and data array.*/
      clear (): void;
      /**Creates and returns a copy of this object.*/
      clone (): nmsipPaletteStorage;
      getBlockAt (x: number, y: number, z: number): number;
      getSections (): nmsipSection[];
      setBlockAt (x: number, y: number, z: number, blockId: number): void;
   }
   export class nmsemaPandaMeta extends nmsemaAnimalMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getBreedTimer (): number;
      getEatTimer (): number;
      getHiddenGene (): nmsemaPGene;
      getMainGene (): nmsemaPGene;
      getSneezeTimer (): number;
      isOnBack (): boolean;
      isRolling (): boolean;
      isSitting (): boolean;
      isSneezing (): boolean;
      setBreedTimer (value: number): void;
      setEatTimer (value: number): void;
      setHiddenGene (value: nmsemaPGene): void;
      setMainGene (value: nmsemaPGene): void;
      setOnBack (value: boolean): void;
      setRolling (value: boolean): void;
      setSitting (value: boolean): void;
      setSneezeTimer (value: number): void;
      setSneezing (value: boolean): void;
   }
   export class nmsemaPGene extends jlEnum<nmsemaPGene> {
      static AGGRESSIVE: nmsemaPGene;
      static BROWN: nmsemaPGene;
      static LAZY: nmsemaPGene;
      static NORMAL: nmsemaPGene;
      static PLAYFUL: nmsemaPGene;
      static WEAK: nmsemaPGene;
      static WORRIED: nmsemaPGene;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsemaPGene;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsemaPGene[];
   }
   export class nmsematParrotMeta extends nmsematTameableAnimalMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getColor (): nmsematPColor;
      setColor (value: nmsematPColor): void;
   }
   export class nmsematPColor extends jlEnum<nmsematPColor> {
      static BLUE: nmsematPColor;
      static GREEN: nmsematPColor;
      static GREY: nmsematPColor;
      static RED_BLUE: nmsematPColor;
      static YELLOW_BLUE: nmsematPColor;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsematPColor;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsematPColor[];
   }
   /**Represents a Command ready to be executed (already parsed).*/
   export class nmscbParsedCommand extends jlObject {
      constructor ();
      /**Executes the command for the given source.*/
      execute (source: nmscCommandSender): nmscbCommandData;
      static withDefaultExecutor (command: nmscbCommand, input: string): nmscbParsedCommand;
   }
   /**\/\/==============================  \/\/  AUTOGENERATED BY EnumGenerator  \/\/==============================*/
   export class nmspParticle extends jlEnum<nmspParticle> implements net.kyori.adventure.key.Keyed {
      static AMBIENT_ENTITY_EFFECT: nmspParticle;
      static ANGRY_VILLAGER: nmspParticle;
      static ASH: nmspParticle;
      static BARRIER: nmspParticle;
      static BLOCK: nmspParticle;
      static BUBBLE: nmspParticle;
      static BUBBLE_COLUMN_UP: nmspParticle;
      static BUBBLE_POP: nmspParticle;
      static CAMPFIRE_COSY_SMOKE: nmspParticle;
      static CAMPFIRE_SIGNAL_SMOKE: nmspParticle;
      static CLOUD: nmspParticle;
      static COMPOSTER: nmspParticle;
      static CRIMSON_SPORE: nmspParticle;
      static CRIT: nmspParticle;
      static CURRENT_DOWN: nmspParticle;
      static DAMAGE_INDICATOR: nmspParticle;
      static DOLPHIN: nmspParticle;
      static DRAGON_BREATH: nmspParticle;
      static DRIPPING_HONEY: nmspParticle;
      static DRIPPING_LAVA: nmspParticle;
      static DRIPPING_OBSIDIAN_TEAR: nmspParticle;
      static DRIPPING_WATER: nmspParticle;
      static DUST: nmspParticle;
      static EFFECT: nmspParticle;
      static ELDER_GUARDIAN: nmspParticle;
      static ENCHANT: nmspParticle;
      static ENCHANTED_HIT: nmspParticle;
      static END_ROD: nmspParticle;
      static ENTITY_EFFECT: nmspParticle;
      static EXPLOSION: nmspParticle;
      static EXPLOSION_EMITTER: nmspParticle;
      static FALLING_DUST: nmspParticle;
      static FALLING_HONEY: nmspParticle;
      static FALLING_LAVA: nmspParticle;
      static FALLING_NECTAR: nmspParticle;
      static FALLING_OBSIDIAN_TEAR: nmspParticle;
      static FALLING_WATER: nmspParticle;
      static FIREWORK: nmspParticle;
      static FISHING: nmspParticle;
      static FLAME: nmspParticle;
      static FLASH: nmspParticle;
      static HAPPY_VILLAGER: nmspParticle;
      static HEART: nmspParticle;
      static INSTANT_EFFECT: nmspParticle;
      static ITEM: nmspParticle;
      static ITEM_SLIME: nmspParticle;
      static ITEM_SNOWBALL: nmspParticle;
      static LANDING_HONEY: nmspParticle;
      static LANDING_LAVA: nmspParticle;
      static LANDING_OBSIDIAN_TEAR: nmspParticle;
      static LARGE_SMOKE: nmspParticle;
      static LAVA: nmspParticle;
      static MYCELIUM: nmspParticle;
      static NAUTILUS: nmspParticle;
      static NOTE: nmspParticle;
      static POOF: nmspParticle;
      static PORTAL: nmspParticle;
      static RAIN: nmspParticle;
      static REVERSE_PORTAL: nmspParticle;
      static SMOKE: nmspParticle;
      static SNEEZE: nmspParticle;
      static SOUL: nmspParticle;
      static SOUL_FIRE_FLAME: nmspParticle;
      static SPIT: nmspParticle;
      static SPLASH: nmspParticle;
      static SQUID_INK: nmspParticle;
      static SWEEP_ATTACK: nmspParticle;
      static TOTEM_OF_UNDYING: nmspParticle;
      static UNDERWATER: nmspParticle;
      static WARPED_SPORE: nmspParticle;
      static WHITE_ASH: nmspParticle;
      static WITCH: nmspParticle;
      static fromId (id: number): nmspParticle;
      getId (): number;
      getNamespaceID (): string;
      key (): nkakKey;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmspParticle;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmspParticle[];
   }
   /**Small utils class to create particle packet*/
   export class nmspParticleCreator extends jlObject {
      constructor ();
      static createParticlePacket (particleType: nmspParticle, distance: boolean, x: number, y: number, z: number, offsetX: number, offsetY: number, offsetZ: number, particleData: number, count: number, dataWriter: jufConsumer<nmsubBinaryWriter>): nmsnpspParticlePacket;
      static createParticlePacket (particleType: nmspParticle, x: number, y: number, z: number, offsetX: number, offsetY: number, offsetZ: number, count: number): nmsnpspParticlePacket;
   }
   export class nmsnpspParticlePacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsemPathfinderMobMeta extends nmsemMobMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   /**Each Chunk gets assigned to a random thread.*/
   export class nmstPerChunkThreadProvider extends nmstThreadProvider {
      constructor ();
      constructor (threadCount: number);
      /**Performs a server tick for all chunks based on their linked thread.*/
      findThread (chunk: nmsiChunk): number;
      /**Defines how often chunks thread should be updated.*/
      getChunkRefreshType (): nmstTRefreshType;
   }
   /**Each Instance gets assigned to a random thread.*/
   export class nmstPerInstanceThreadProvider extends nmstThreadProvider {
      constructor ();
      constructor (threadCount: number);
      /**Performs a server tick for all chunks based on their linked thread.*/
      findThread (chunk: nmsiChunk): number;
      /**Defines how often chunks thread should be updated.*/
      getChunkRefreshType (): nmstTRefreshType;
   }
   /**Representation of a permission granted to a CommandSender.  Each permission has a string representation used as an identifier, and an optional  NBTCompound used to store additional data.    The class is immutable.*/
   export class nmspPermission extends jlObject {
      constructor (permissionName: string);
      constructor (permissionName: string, data: org.jglrxavpok.hephaistos.nbt.NBTCompound);
      equals (o: jlObject): boolean;
      /**Gets the data associated to this permission.*/
      getNBTData (): jhnNBTCompound;
      /**Gets the name of the permission.*/
      getPermissionName (): string;
      hashCode (): number;
   }
   /**Represents an object which can have permissions.    Permissions are in-memory only by default.  You have however the capacity to store them persistently as the Permission object  is serializer-friendly, Permission.getPermissionName() being a String  and Permission.getNBTData() serializable into a string using NBTCompound.toSNBT()  and deserialized back with SNBTParser.parse().*/
   export interface nmspPermissionHandler {
      /**Adds a Permission to this handler.*/
      addPermission (permission: nmspPermission): void;
      /**Returns all permissions associated to this handler.*/
      getAllPermissions (): juSet<nmspPermission>;
      /**Gets the Permission with the name permissionName.*/
      getPermission (permissionName: string): nmspPermission;
      /**Gets if this handler has the permission with the name permissionName.*/
      hasPermission (permissionName: string): boolean;
      /**Gets if this handler has the permission with the name permissionName and which verify the optional  PermissionVerifier.*/
      hasPermission (permissionName: string, permissionVerifier: nmspPermissionVerifier): boolean;
      /**Gets if this handler has the permission permission.*/
      hasPermission (permission: nmspPermission): boolean;
      /**Removes a Permission based on its string identifier.*/
      removePermission (permissionName: string): void;
      /**Removes a Permission from this handler.*/
      removePermission (permission: nmspPermission): void;
   }
   /**Interface used to check if the nbt data of a Permission is correct.*/
   export interface nmspPermissionVerifier {
      /**Called when using PermissionHandler.hasPermission(String, PermissionVerifier).*/
      isValid (nbtCompound: org.jglrxavpok.hephaistos.nbt.NBTCompound): boolean;
   }
   export class nmsepPFBlockDescription extends jlObject implements com.extollit.gaming.ai.path.model.IBlockDescription {
      constructor (block: nmsibBlock);
      /**Gets the PFBlockDescription linked to the block state id.*/
      static getBlockDescription (blockStateId: number): nmsepPFBlockDescription;
      isClimbable (): boolean;
      isDoor (): boolean;
      isFenceLike (): boolean;
      isFullyBounded (): boolean;
      isImpeding (): boolean;
      isIncinerating (): boolean;
      isLiquid (): boolean;
   }
   export class nmsepPFBlockObject extends jlObject implements com.extollit.gaming.ai.path.model.IBlockObject {
      constructor (block: nmsibBlock);
      bounds (): celiAxisAlignedBBox;
      /**Gets the PFBlockObject linked to the block state id.*/
      static getBlockObject (blockStateId: number): nmsepPFBlockObject;
      isClimbable (): boolean;
      isDoor (): boolean;
      isFenceLike (): boolean;
      isFullyBounded (): boolean;
      isImpeding (): boolean;
      isIncinerating (): boolean;
      isLiquid (): boolean;
   }
   export class nmsepPFColumnarSpace extends jlObject implements com.extollit.gaming.ai.path.model.IColumnarSpace {
      constructor (instanceSpace: nmsepPFInstanceSpace, chunk: nmsiChunk);
      blockAt (x: number, y: number, z: number): cegapmIBlockDescription;
      instance (): cegapmIInstanceSpace;
      metaDataAt (x: number, y: number, z: number): number;
      occlusionFields (): cegapmColumnarOcclusionFieldList;
   }
   export class nmsepPFInstanceSpace extends jlObject implements com.extollit.gaming.ai.path.model.IInstanceSpace {
      constructor (instance: nmsiInstance);
      blockObjectAt (x: number, y: number, z: number): cegapmIBlockObject;
      columnarSpaceAt (cx: number, cz: number): cegapmIColumnarSpace;
      getInstance (): nmsiInstance;
   }
   export class nmsepPFPathingEntity extends jlObject implements com.extollit.gaming.ai.path.model.IPathingEntity {
      constructor (navigator: nmsepNavigator);
      age (): number;
      bound (): boolean;
      capabilities (): cegapmICapabilities;
      coordinates (): celiVec3d;
      getTargetPosition (): nmsuPosition;
      height (): number;
      isAquaphobic (): boolean;
      isAquatic (): boolean;
      isAvian (): boolean;
      isAvoidsDoorways (): boolean;
      isCautious (): boolean;
      isClimber (): boolean;
      isFireResistant (): boolean;
      isOpensDoors (): boolean;
      isSwimmer (): boolean;
      moveTo (position: com.extollit.linalg.immutable.Vec3d, passibility: com.extollit.gaming.ai.path.model.Passibility, gravitation: com.extollit.gaming.ai.path.model.Gravitation): void;
      searchRange (): number;
      setAquaphobic (aquaphobic: boolean): void;
      setAquatic (aquatic: boolean): void;
      setAvian (avian: boolean): void;
      setAvoidsDoorways (avoidsDoorways: boolean): void;
      setCautious (cautious: boolean): void;
      setClimber (climber: boolean): void;
      setFireResistant (fireResistant: boolean): void;
      setOpensDoors (opensDoors: boolean): void;
      /**Changes the search range of the entity*/
      setSearchRange (searchRange: number): void;
      setSwimmer (swimmer: boolean): void;
      width (): number;
   }
   export class nmsemfPhantomMeta extends nmsemfFlyingMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getSize (): number;
      setSize (value: number): void;
   }
   export class nmseiPickupExperienceEvent extends nmseEvent implements nmseCancellableEvent {
      constructor (experienceOrb: nmseExperienceOrb);
      getExperienceCount (): number;
      getExperienceOrb (): nmseExperienceOrb;
      /**Gets if the Event should be cancelled or not.*/
      isCancelled (): boolean;
      /**Marks the Event as cancelled or not.*/
      setCancelled (cancel: boolean): void;
      setExperienceCount (experienceCount: number): void;
   }
   export class nmseiPickupItemEvent extends nmseEvent implements nmseCancellableEvent {
      constructor (livingEntity: nmseLivingEntity, itemEntity: nmseItemEntity);
      getItemEntity (): nmseItemEntity;
      getLivingEntity (): nmseLivingEntity;
      /**Gets if the Event should be cancelled or not.*/
      isCancelled (): boolean;
      /**Marks the Event as cancelled or not.*/
      setCancelled (cancel: boolean): void;
   }
   export class nmsemmPiglinBruteMeta extends nmsemmBasePiglinMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   export class nmsemmPiglinMeta extends nmsemmBasePiglinMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      isBaby (): boolean;
      isChargingCrossbow (): boolean;
      isDancing (): boolean;
      setBaby (value: boolean): void;
      setChargingCrossbow (value: boolean): void;
      setDancing (value: boolean): void;
   }
   export class nmsemaPigMeta extends nmsemaAnimalMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getTimeToBoost (): number;
      isHasSaddle (): boolean;
      setHasSaddle (value: boolean): void;
      setTimeToBoost (value: number): void;
   }
   export class nmsemmrPillagerMeta extends nmsemmrAbstractIllagerMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   export class nmsnpcsPingPacket extends jlObject implements nmsnpcClientPreplayPacket {
      constructor ();
      /**Called when the packet is received.*/
      process (connection: nmsnpPlayerConnection): void;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsePlacementRules extends jlObject {
      constructor ();
      static init (): void;
   }
   /**Those are the major actors of the server,  they are not necessary backed by a NettyPlayerConnection as shown by FakePlayer.    You can easily create your own implementation of this and use it with ConnectionManager.setPlayerProvider(PlayerProvider).*/
   export class nmsePlayer extends nmseLivingEntity implements nmscCommandSender, nmsaLocalizable, nkateHoverEventSource<nkateHShowEntity>, nkaiIdentified, nmsuiNamedAndIdentified {
      constructor (uuid: juUUID, username: string, playerConnection: nmsnpPlayerConnection);
      /**All packets in the queue are executed in the update(long) method  It is used internally to add all received packet from the client.*/
      addPacketToQueue (packet: nmsnpcClientPlayPacket): void;
      addViewer0 (player: nmsePlayer): boolean;
      asHoverEvent (op: jufUnaryOperator<nkateHShowEntity>): nkateHoverEvent<nkateHShowEntity>;
      /**Casts this object to a Player.*/
      asPlayer (): nmsePlayer;
      /**Used to call ItemUpdateStateEvent with the proper item  It does check which hand to get the item to update.*/
      callItemUpdateStateEvent (hand: nmsePHand): nmseiItemUpdateStateEvent;
      /**Makes the player send a message (can be used for commands).*/
      chat (message: string): void;
      clearTitle (): void;
      /**Closes the current inventory if there is any.*/
      closeInventory (): void;
      didAnswerKeepAlive (): boolean;
      /**Used internally to prevent an inventory click to be processed  when the inventory listeners closed the inventory.*/
      didCloseInventory (): boolean;
      /**Calls an ItemDropEvent with a specified item.*/
      dropItem (item: nmsiItemStack): boolean;
      /**Rotates the player to face targetPosition.*/
      facePosition (facePoint: nmsePFacePonumber, targetPosition: nmsuPosition): void;
      /**Rotates the player to face entity.*/
      facePosition (facePoint: nmsePFacePonumber, entity: nmseEntity, targetPoint: nmsePFacePonumber): void;
      /**Gets the player additional hearts.*/
      getAdditionalHearts (): number;
      /**Gets the packet to add the player from the tab-list.*/
      getAddPlayerToList (): nmsnpspPlayerInfoPacket;
      /**Gets the boots.*/
      getBoots (): nmsiItemStack;
      /**Gets the chestplate.*/
      getChestplate (): nmsiItemStack;
      getChunkRange (): number;
      /**Used to get the CustomBlock that the player is currently mining.*/
      getCustomBlockTarget (): nmsibCustomBlock;
      /**Gets the player default eating time.*/
      getDefaultEatingTime (): number;
      /**Gets the player dimension.*/
      getDimensionType (): nmswDimensionType;
      /**Gets the player display name in the tab-list.*/
      getDisplayName (): nkatComponent;
      /**Gets the hand which the player is eating from.*/
      getEatingHand (): nmsePHand;
      /**Gets the percentage displayed in the experience bar.*/
      getExp (): number;
      getFieldViewModifier (): number;
      /**Gets the player flying speed.*/
      getFlyingSpeed (): number;
      /**Gets the player food.*/
      getFood (): number;
      getFoodSaturation (): number;
      /**Gets the player GameMode.*/
      getGameMode (): nmseGameMode;
      /**Gets the player held slot (0-8).*/
      getHeldSlot (): number;
      /**Gets the helmet.*/
      getHelmet (): nmsiItemStack;
      getInventory (): nmsiPlayerInventory;
      /**Gets the ItemStack in main hand.*/
      getItemInMainHand (): nmsiItemStack;
      /**Gets the ItemStack in off hand.*/
      getItemInOffHand (): nmsiItemStack;
      /**Gets the last sent keep alive id.*/
      getLastKeepAlive (): number;
      getLastReceivedTeleportId (): number;
      getLastSentTeleportId (): number;
      /**Used to get the player latency,  computed by seeing how long it takes the client to answer the KeepAlivePacket packet.*/
      getLatency (): number;
      /**Gets the leggings.*/
      getLeggings (): nmsiItemStack;
      /**Gets the level of the player displayed in the experience bar.*/
      getLevel (): number;
      /**Gets the locale.*/
      getLocale (): juLocale;
      /**Gets the player's name as a component.*/
      getName (): nkatComponent;
      getNextTeleportId (): number;
      /**Gets the player open inventory.*/
      getOpenInventory (): nmsiInventory;
      /**Gets the player permission level.*/
      getPermissionLevel (): number;
      /**Gets the player connection.*/
      getPlayerConnection (): nmsnpPlayerConnection;
      /**Gets the packet to remove the player from the tab-list.*/
      getRemovePlayerToList (): nmsnpspPlayerInfoPacket;
      /**Used to retrieve the default spawn point.*/
      getRespawnPoint (): nmsuPosition;
      /**Gets the player settings.*/
      getSettings (): nmsePPlayerSettings;
      /**Gets the player skin.*/
      getSkin (): nmsePlayerSkin;
      /**This is the map used to send the statistic packet.*/
      getStatisticValueMap (): juMap<nmssPlayerStatistic,jlInteger>;
      /**Gets the player's username.*/
      getUsername (): string;
      /**Gets the player vehicle information.*/
      getVehicleInformation (): nmsevPlayerVehicleInformation;
      /**Gets the player viewable chunks.*/
      getViewableChunks (): juSet<nmsiChunk>;
      /**Gets if the player has the reduced debug screen.*/
      hasReducedDebugScreenInformation (): boolean;
      hideBossBar (bar: nkabBossBar): void;
      identity (): nkaiIdentity;
      /**Gets if the player is allowed to fly.*/
      isAllowFlying (): boolean;
      /**Gets if this player is in creative.*/
      isCreative (): boolean;
      /**Gets if the player is eating.*/
      isEating (): boolean;
      /**Gets if the player has the respawn screen enabled or disabled.*/
      isEnableRespawnScreen (): boolean;
      /**Gets if the player is currently flying.*/
      isFlying (): boolean;
      /**Is this entity immune to the given type of damageany*/
      isImmune (type: nmsedDamageType): boolean;
      isInstantBreak (): boolean;
      /**The invulnerable field appear in the PlayerAbilitiesPacket packet.*/
      isInvulnerable (): boolean;
      isOnGround (): boolean;
      /**Gets if the player is online or not.*/
      isOnline (): boolean;
      /**Gets if the sender is a Player.*/
      isPlayer (): boolean;
      /**Kicks the player with a reason.*/
      kick (component: nkatComponent): void;
      /**Kills the entity, trigger the EntityDeathEvent event.*/
      kill (): void;
      openBook (book: nkaiBook): void;
      /**Opens the specified Inventory, close the previous inventory if existing.*/
      openInventory (inventory: nmsiInventory): boolean;
      /**Plays a given effect at the given position for this player.*/
      playEffect (effect: nmseEffects, x: number, y: number, z: number, data: number, disableRelativeVolume: boolean): void;
      /**Used to initialize the player connection*/
      playerConnectionInit (): void;
      playSound (sound: nkasSound): void;
      playSound (sound: nkasSound, x: number, y: number, z: number): void;
      /**Sends to the player a PlayerAbilitiesPacket with all the updated fields.*/
      refreshAbilities (): void;
      /**Called after the player teleportation to refresh his position  and send data to his new viewers.*/
      refreshAfterTeleport (): void;
      refreshAnswerKeepAlive (answerKeepAlive: boolean): void;
      refreshEating (eatingHand: nmsePHand): void;
      refreshEating (eatingHand: nmsePHand, eatingTime: number): void;
      /**Updates the internal flying field.*/
      refreshFlying (flying: boolean): void;
      /**Sets the player food and health values to their maximum.*/
      refreshHealth (): void;
      /**Changes the held item for the player viewers  Also cancel eating if isEating() was true.*/
      refreshHeldSlot (slot: number): void;
      /**Used to change internally the last sent last keep alive id.*/
      refreshKeepAlive (lastKeepAlive: number): void;
      /**Changes the storage player latency and update its tab value.*/
      refreshLatency (latency: number): void;
      refreshOnGround (onGround: boolean): void;
      refreshReceivedTeleportId (receivedTeleportId: number): void;
      refreshVehicleSteer (sideways: number, forward: number, jump: boolean, unmount: boolean): void;
      refreshVisibleChunks (): void;
      /**Called when the player changes chunk (move from one to another).*/
      refreshVisibleChunks (newChunk: nmsiChunk): void;
      /**Refreshes the list of entities that the player should be able to see based  on MinecraftServer.getEntityViewDistance() and Entity.isAutoViewable().*/
      refreshVisibleEntities (newChunk: nmsiChunk): void;
      /**Removes the entity from the server immediately.*/
      remove (): void;
      removeViewer0 (player: nmsePlayer): boolean;
      /**Resets data from the current block the player is mining.*/
      resetTargetBlock (): void;
      resetTitle (): void;
      /**Respawns the player by sending a RespawnPacket to the player and teleporting him  to getRespawnPoint().*/
      respawn (): void;
      sendActionBar (message: nkatComponent): void;
      /**Changes the dimension of the player.*/
      sendDimension (dimensionType: nmswDimensionType): void;
      /**Sends a SetExperiencePacket to refresh client-side information about the experience bar.*/
      sendExperienceUpdatePacket (): void;
      sendMessage (source: nkaiIdentity, message: nkatComponent, type: nkaaMessageType): void;
      /**Sends a packet to all viewers and the viewable element if it is a player.*/
      sendPacketToViewersAndSelf (packet: nmsnpsServerPacket): void;
      sendPlayerListHeaderAndFooter (header: nkatComponent, footer: nkatComponent): void;
      /**Sends a plugin message to the player.*/
      sendPluginMessage (channel: string, data: number[]): void;
      /**Sends a plugin message to the player.*/
      sendPluginMessage (channel: string, message: string): void;
      /**Sends an UpdateHealthPacket to refresh client-side information about health and food.*/
      sendUpdateHealthPacket (): void;
      /**Changes the amount of additional hearts shown.*/
      setAdditionalHearts (additionalHearts: number): void;
      /**Allows or forbid the player to fly.*/
      setAllowFlying (allowFlying: boolean): void;
      /**Changes the tag below the name.*/
      setBelowNameTag (belowNameTag: nmssBelowNameTag): void;
      /**Changes the boots.*/
      setBoots (itemStack: nmsiItemStack): void;
      /**Changes the chestplate.*/
      setChestplate (itemStack: nmsiItemStack): void;
      /**Used to change the default eating time animation.*/
      setDefaultEatingTime (defaultEatingTime: number): void;
      /**Changes the player display name in the tab-list.*/
      setDisplayName (displayName: nkatComponent): void;
      /**Enables or disable the respawn screen.*/
      setEnableRespawnScreen (enableRespawnScreen: boolean): void;
      /**Used to change the percentage experience bar.*/
      setExp (exp: number): void;
      setFieldViewModifier (fieldViewModifier: number): void;
      /**Sets the player flying.*/
      setFlying (flying: boolean): void;
      /**Updates the internal field and send a PlayerAbilitiesPacket with the new flying speed.*/
      setFlyingSpeed (flyingSpeed: number): void;
      /**Sets and refresh client food bar.*/
      setFood (food: number): void;
      /**Sets and refresh client food saturation.*/
      setFoodSaturation (foodSaturation: number): void;
      /**Changes the player GameMode.*/
      setGameMode (gameMode: nmseGameMode): void;
      /**Changes the entity health, kill it if health is >= 0 and is not dead yet.*/
      setHealth (health: number): void;
      /**Changes the current held slot for the player.*/
      setHeldItemSlot (slot: number): void;
      /**Changes the helmet.*/
      setHelmet (itemStack: nmsiItemStack): void;
      /**Changes the player instance without changing its position (defaulted to getRespawnPoint()  if the player is not in any instance).*/
      setInstance (instance: nmsiInstance): void;
      /**Changes the player instance and load surrounding chunks if needed.*/
      setInstance (instance: nmsiInstance, spawnPosition: nmsuPosition): void;
      /**Changes the player ability "Creative Mode".*/
      setInstantBreak (instantBreak: boolean): void;
      /**This do update the invulnerable field in the packet PlayerAbilitiesPacket  and prevent the player from receiving damage.*/
      setInvulnerable (invulnerable: boolean): void;
      /**Changes the main hand ItemStack.*/
      setItemInMainHand (itemStack: nmsiItemStack): void;
      /**Changes the off hand ItemStack.*/
      setItemInOffHand (itemStack: nmsiItemStack): void;
      /**Changes the leggings.*/
      setLeggings (itemStack: nmsiItemStack): void;
      /**Used to change the level of the player  This cannot change the displayed percentage bar see setExp(float)*/
      setLevel (level: number): void;
      /**Sets the player's locale.*/
      setLocale (locale: juLocale): void;
      /**Changes the player permission level.*/
      setPermissionLevel (permissionLevel: number): void;
      /**Sets or remove the reduced debug screen.*/
      setReducedDebugScreenInformation (reduced: boolean): void;
      /**Sets the player resource pack.*/
      setResourcePack (resourcePack: nmsrResourcePack): void;
      /**Changes the default spawn point.*/
      setRespawnPoint (respawnPoint: nmsuPosition): void;
      /**Changes the player skin.*/
      setSkin (skin: nmsePlayerSkin): void;
      /**Makes the player digging a custom block, see resetTargetBlock() to rewind.*/
      setTargetBlock (targetCustomBlock: nmsibCustomBlock, targetBlockPosition: nmsuBlockPosition, breakers: juSet<nmsePlayer>): void;
      /**Changes the Team for the entity.*/
      setTeam (team: nmssTeam): void;
      /**Changes the internal player name, used for the AsyncPlayerPreLoginEvent  mostly unsafe outside of it.*/
      setUsernameField (username: string): void;
      /**Changes the internal entity UUID, mostly unsafe.*/
      setUuid (uuid: juUUID): void;
      showBossBar (bar: nkabBossBar): void;
      /**Sends all the related packet to have the player sent to another with related data  (create player, spawn position, velocity, metadata, equipments, passengers, team).*/
      showPlayer (connection: nmsnpPlayerConnection): void;
      showTitle (title: nkatTitle): void;
      /**Called when a new instance is set.*/
      spawn (): void;
      /**Sets the camera at entity eyes.*/
      spectate (entity: nmseEntity): void;
      stopSound (stop: nkasSoundStop): void;
      /**Resets the camera at the player.*/
      stopSpectating (): void;
      /**Used to synchronize entity position with viewers by sending an  EntityTeleportPacket to viewers, in case of a player this is  overridden in order to send an additional PlayerPositionAndLookPacket  to itself.*/
      synchronizePosition (includeSelf: boolean): void;
      /**Used internally to reset the didCloseInventory field.*/
      UNSAFE_changeDidCloseInventory (didCloseInventory: boolean): void;
      /**Used when the player is created.*/
      UNSAFE_init (spawnInstance: nmsiInstance): void;
      /**Called each tick.*/
      update (time: number): void;
      /**Sends a UpdateViewPositionPacket  to the player.*/
      updateViewPosition (chunkX: number, chunkZ: number): void;
   }
   export class nmsePFacePoint extends jlEnum<nmsePFacePoint> {
      static EYE: nmsePFacePoint;
      static FEET: nmsePFacePoint;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsePFacePonumber;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsePFacePonumber[];
   }
   /**Represents the main or off hand of the player.*/
   export class nmsePHand extends jlEnum<nmsePHand> {
      static MAIN: nmsePHand;
      static OFF: nmsePHand;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsePHand;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsePHand[];
   }
   /**Represents where is located the main hand of the player (can be changed in Minecraft option).*/
   export class nmsePMainHand extends jlEnum<nmsePMainHand> {
      static LEFT: nmsePMainHand;
      static RIGHT: nmsePMainHand;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsePMainHand;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsePMainHand[];
   }
   export class nmsnpspPlayerAbilitiesPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsepPlayerBlockBreakEvent extends nmsePlayerEvent implements nmseCancellableEvent {
      constructor (player: nmsePlayer, blockPosition: nmsuBlockPosition, blockStateId: number, customBlock: nmsibCustomBlock, resultBlockStateId: number, resultCustomBlockId: number);
      /**Gets the block position.*/
      getBlockPosition (): nmsuBlockPosition;
      /**Gets the broken block state id.*/
      getBlockStateId (): number;
      /**Gets the broken custom block.*/
      getCustomBlock (): nmsibCustomBlock;
      /**Gets the visual block id result, which will be placed after the event.*/
      getResultBlockStateId (): number;
      /**Gets the custom block id result, which will be placed after the event.*/
      getResultCustomBlockId (): number;
      /**Gets if the Event should be cancelled or not.*/
      isCancelled (): boolean;
      /**Marks the Event as cancelled or not.*/
      setCancelled (cancel: boolean): void;
      /**Changes the visual block id result.*/
      setResultBlockId (resultBlockStateId: number): void;
      /**Sets both the blockStateId and customBlockId.*/
      setResultCustomBlock (customBlockId: number): void;
      /**Sets both the blockId and customBlockId.*/
      setResultCustomBlock (customBlockId: string): void;
      /**Sets both the blockId and customBlockId.*/
      setResultCustomBlock (customBlock: nmsibCustomBlock): void;
      /**Changes the custom block id result, which will be placed after the event.*/
      setResultCustomBlockId (resultCustomBlockId: number): void;
   }
   /**Called when a player interacts with a block (right-click).  This is also called when a block is placed.*/
   export class nmsepPlayerBlockInteractEvent extends nmsePlayerEvent implements nmseCancellableEvent {
      constructor (player: nmsePlayer, blockPosition: nmsuBlockPosition, hand: nmsePHand, blockFace: nmsibBlockFace);
      /**Gets the block face.*/
      getBlockFace (): nmsibBlockFace;
      /**Gets the position of the interacted block.*/
      getBlockPosition (): nmsuBlockPosition;
      /**Gets the hand used for the interaction.*/
      getHand (): nmsePHand;
      /**Gets if the event should block the item use.*/
      isBlockingItemUse (): boolean;
      /**Gets if the Event should be cancelled or not.*/
      isCancelled (): boolean;
      setBlockingItemUse (blocks: boolean): void;
      /**Marks the Event as cancelled or not.*/
      setCancelled (cancel: boolean): void;
   }
   /**Called when a player tries placing a block.*/
   export class nmsepPlayerBlockPlaceEvent extends nmsePlayerEvent implements nmseCancellableEvent {
      constructor (player: nmsePlayer, block: nmsibBlock, blockPosition: nmsuBlockPosition, hand: nmsePHand);
      /**Should the block be consumed if not cancelled.*/
      consumeBlock (consumeBlock: boolean): void;
      /**Should the block be consumed if not cancelled.*/
      doesConsumeBlock (): boolean;
      /**Gets the data that the (not placed yet) block should have*/
      getBlockData (): nmsdData;
      /**Gets the block position.*/
      getBlockPosition (): nmsuBlockPosition;
      /**Gets the block state id.*/
      getBlockStateId (): number;
      /**Gets the custom block id.*/
      getCustomBlockId (): number;
      /**Gets the hand with which the player is trying to place.*/
      getHand (): nmsePHand;
      /**Gets if the Event should be cancelled or not.*/
      isCancelled (): boolean;
      /**Sets the data of the block to place.*/
      setBlockData (blockData: nmsdData): void;
      /**Changes the visual block id.*/
      setBlockStateId (blockStateId: number): void;
      /**Marks the Event as cancelled or not.*/
      setCancelled (cancel: boolean): void;
      /**Sets both the blockStateId and customBlockId.*/
      setCustomBlock (customBlockId: number): void;
      /**Sets both the blockId and customBlockId.*/
      setCustomBlock (customBlockId: string): void;
      /**Sets both the blockId and customBlockId.*/
      setCustomBlock (customBlock: nmsibCustomBlock): void;
      /**Sets the custom block id to place.*/
      setCustomBlockId (customBlockId: number): void;
   }
   /**Called when a player change his held slot (by pressing 1-9 keys).*/
   export class nmsepPlayerChangeHeldSlotEvent extends nmsePlayerEvent implements nmseCancellableEvent {
      constructor (player: nmsePlayer, slot: number);
      /**Gets the slot which the player will held.*/
      getSlot (): number;
      /**Gets if the Event should be cancelled or not.*/
      isCancelled (): boolean;
      /**Marks the Event as cancelled or not.*/
      setCancelled (cancel: boolean): void;
      /**Changes the final held slot of the player.*/
      setSlot (slot: number): void;
   }
   /**Called every time a Player write and send something in the chat.  The event can be cancelled to do not send anything, and the format can be changed.*/
   export class nmsepPlayerChatEvent extends nmsePlayerEvent implements nmseCancellableEvent {
      constructor (player: nmsePlayer, recipients: juCollection<nmsePlayer>, defaultChatFormat: jufSupplier<nkatComponent>, message: string);
      /**Used to retrieve the chat format for this message.*/
      getChatFormatFunction (): jufFunction<nmsepPlayerChatEvent,nkatComponent>;
      getDefaultChatFormat (): jufSupplier<nkatComponent>;
      /**Gets the message sent.*/
      getMessage (): string;
      /**Those are the players who will receive the message.*/
      getRecipients (): juCollection<nmsePlayer>;
      /**Gets if the Event should be cancelled or not.*/
      isCancelled (): boolean;
      /**Marks the Event as cancelled or not.*/
      setCancelled (cancel: boolean): void;
      /**Changes the chat format.*/
      setChatFormat (chatFormat: jufFunction<nmsepPlayerChatEvent,nkatComponent>): void;
      /**Used to change the message.*/
      setMessage (message: string): void;
   }
   /**Called when a player receive a new chunk data.*/
   export class nmsepPlayerChunkLoadEvent extends nmsePlayerEvent {
      constructor (player: nmsePlayer, chunkX: number, chunkZ: number);
      /**Gets the chunk X.*/
      getChunkX (): number;
      /**Gets the chunk Z.*/
      getChunkZ (): number;
   }
   /**Called after a chunk being unload to a certain player.    Could be used to unload the chunk internally in order to save memory.*/
   export class nmsepPlayerChunkUnloadEvent extends nmsePlayerEvent {
      constructor (player: nmsePlayer, chunkX: number, chunkZ: number);
      /**Gets the chunk X.*/
      getChunkX (): number;
      /**Gets the chunk Z.*/
      getChunkZ (): number;
   }
   /**Called every time a player send a message starting by '\/'.*/
   export class nmsepPlayerCommandEvent extends nmsePlayerEvent implements nmseCancellableEvent {
      constructor (player: nmsePlayer, command: string);
      /**Gets the command used (command name + arguments).*/
      getCommand (): string;
      /**Gets if the Event should be cancelled or not.*/
      isCancelled (): boolean;
      /**Marks the Event as cancelled or not.*/
      setCancelled (cancel: boolean): void;
      /**Changes the command to execute.*/
      setCommand (command: string): void;
   }
   /**A PlayerConnection is an object needed for all created Player.  It can be extended to create a new kind of player (NPC for instance).*/
   export class nmsnpPlayerConnection extends jlObject {
      constructor ();
      /**Forcing the player to disconnect.*/
      disconnect (): void;
      /**Gets the client connection state.*/
      getConnectionState (): nmsnConnectionState;
      /**Returns a printable identifier for this connection, will be the player username  or the connection remote address.*/
      getIdentifier (): string;
      /**Gets the number of packet the client sent over the last second.*/
      getLastPacketCounter (): number;
      getPacketCounter (): jucaAtomicInteger;
      /**Gets the player linked to this connection.*/
      getPlayer (): nmsePlayer;
      /**Gets protocol version of client.*/
      getProtocolVersion (): number;
      /**Gets the remote address of the client.*/
      getRemoteAddress (): jnSocketAddress;
      /**Gets the server address that the client used to connect.*/
      getServerAddress (): string;
      /**Gets the server port that the client used to connect.*/
      getServerPort (): number;
      /**Gets if the client is still connected to the server.*/
      isOnline (): boolean;
      refreshOnline (online: boolean): void;
      /**Serializes the packet and send it to the client.*/
      sendPacket (serverPacket: nmsnpsServerPacket): void;
      /**Serializes the packet and send it to the client, optionally skipping the translation phase.*/
      sendPacket (serverPacket: nmsnpsServerPacket, skipTranslating: boolean): void;
      setConnectionState (connectionState: nmsnConnectionState): void;
      /**Changes the player linked to this connection.*/
      setPlayer (player: nmsePlayer): void;
      shouldSendPacket (serverPacket: nmsnpsServerPacket): boolean;
      toString (): string;
      /**Updates values related to the network connection.*/
      update (): void;
   }
   /**Called when a player die in Player.kill().*/
   export class nmsepPlayerDeathEvent extends nmsePlayerEvent {
      constructor (player: nmsePlayer, deathText: nkatComponent, chatMessage: nkatComponent);
      constructor (player: nmsePlayer, deathText: nmscJsonMessage, chatMessage: nmscJsonMessage);
      /**Gets the message sent to chat.*/
      getChatMessage (): nkatComponent;
      /**Gets the text displayed in the death screen.*/
      getDeathText (): nkatComponent;
      /**Changes the text sent in chat*/
      setChatMessage (chatMessage: nkatComponent): void;
      /**Changes the text displayed in the death screen.*/
      setDeathText (deathText: nkatComponent): void;
   }
   export class nmslPlayerDiggingListener extends jlObject {
      constructor ();
      static playerDiggingListener (packet: nmsnpcpClientPlayerDiggingPacket, player: nmsePlayer): void;
      /**Used to remove the affect from addEffect(Player).*/
      static removeEffect (player: nmsePlayer): void;
   }
   /**Called when a player disconnect.*/
   export class nmsepPlayerDisconnectEvent extends nmsePlayerEvent {
      constructor (player: nmsePlayer);
   }
   /**Called when a player is finished eating.*/
   export class nmsepPlayerEatEvent extends nmsePlayerEvent {
      constructor (player: nmsePlayer, foodItem: nmsiItemStack, hand: nmsePHand);
      /**Gets the food item that has been eaten.*/
      getFoodItem (): nmsiItemStack;
      getHand (): nmsePHand;
   }
   /**Called when a Player interacts (right-click) with an Entity.*/
   export class nmsepPlayerEntityInteractEvent extends nmsePlayerEvent {
      constructor (player: nmsePlayer, entityTarget: nmseEntity, hand: nmsePHand);
      /**Gets with which hand the player interacted with the entity.*/
      getHand (): nmsePHand;
      /**Gets the Entity with who PlayerEvent.getPlayer() is interacting.*/
      getTarget (): nmseEntity;
   }
   export class nmsePlayerEvent extends nmseEvent {
      constructor (player: nmsePlayer);
      /**Gets the player.*/
      getPlayer (): nmsePlayer;
   }
   /**Called when the player swings his hand.*/
   export class nmsepPlayerHandAnimationEvent extends nmsePlayerEvent implements nmseCancellableEvent {
      constructor (player: nmsePlayer, hand: nmsePHand);
      /**Gets the hand used.*/
      getHand (): nmsePHand;
      /**Gets if the Event should be cancelled or not.*/
      isCancelled (): boolean;
      /**Marks the Event as cancelled or not.*/
      setCancelled (cancel: boolean): void;
   }
   export class nmsimPlayerHeadMeta extends nmsiItemMeta implements nmsiIProvider<nmsimPBuilder> {
      constructor (metaBuilder: nmsiItemMetaBuilder, skullOwner: juUUID, playerSkin: nmsePlayerSkin);
      getPlayerSkin (): nmsePlayerSkin;
      getSkullOwner (): juUUID;
   }
   export class nmsimPBuilder extends nmsiItemMetaBuilder {
      constructor ();
      build (): nmsimPlayerHeadMeta;
      getSupplier (): jufSupplier<nmsiItemMetaBuilder>;
      playerSkin (playerSkin: nmsePlayerSkin): nmsimPBuilder;
      read (nbtCompound: org.jglrxavpok.hephaistos.nbt.NBTCompound): void;
      skullOwner (skullOwner: juUUID): nmsimPBuilder;
   }
   export class nmslPlayerHeldListener extends jlObject {
      constructor ();
      static heldListener (packet: nmsnpcpClientHeldItemChangePacket, player: nmsePlayer): void;
   }
   export class nmsnpspPlayerInfoPacket extends jlObject implements nmsnpsComponentHoldingServerPacket {
      constructor (action: nmsnpspPAction);
      /**Gets the components held by this object.*/
      components (): juCollection<nkatComponent>;
      /**Returns a copy of this object.*/
      copyWithOperator (operator: jufUnaryOperator<nkatComponent>): nmsnpsServerPacket;
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspPAction extends jlEnum<nmsnpspPAction> {
      static ADD_PLAYER: nmsnpspPAction;
      static REMOVE_PLAYER: nmsnpspPAction;
      static UPDATE_DISPLAY_NAME: nmsnpspPAction;
      static UPDATE_GAMEMODE: nmsnpspPAction;
      static UPDATE_LATENCY: nmsnpspPAction;
      getClazz (): jlClass<nmsnpspPPlayerInfo>;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsnpspPAction;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsnpspPAction[];
   }
   export class nmsnpspPAddPlayer extends nmsnpspPPlayerInfo implements nmsaComponentHolder<nmsnpspPAddPlayer> {
      constructor (uuid: juUUID, name: string, gameMode: nmseGameMode, ping: number);
      /**Gets the components held by this object.*/
      components (): juCollection<nkatComponent>;
      /**Returns a copy of this object.*/
      copyWithOperator (operator: jufUnaryOperator<nkatComponent>): nmsnpspPAddPlayer;
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspPAProperty extends jlObject {
      constructor (name: string, value: string);
      constructor (name: string, value: string, signature: string);
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspPPlayerInfo extends jlObject {
      constructor (uuid: juUUID);
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspPRemovePlayer extends nmsnpspPPlayerInfo {
      constructor (uuid: juUUID);
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspPUpdateDisplayName extends nmsnpspPPlayerInfo implements nmsaComponentHolder<nmsnpspPUpdateDisplayName> {
      constructor (uuid: juUUID, displayName: nkatComponent);
      /**Gets the components held by this object.*/
      components (): juCollection<nkatComponent>;
      /**Returns a copy of this object.*/
      copyWithOperator (operator: jufUnaryOperator<nkatComponent>): nmsnpspPUpdateDisplayName;
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspPUpdateGamemode extends nmsnpspPPlayerInfo {
      constructor (uuid: juUUID, gameMode: nmseGameMode);
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspPUpdateLatency extends nmsnpspPPlayerInfo {
      constructor (uuid: juUUID, ping: number);
      write (writer: nmsubBinaryWriter): void;
   }
   /**Represents the inventory of a Player, retrieved with Player.getInventory().*/
   export class nmsiPlayerInventory extends nmsiAbstractInventory implements nmsiEquipmentHandler {
      constructor (player: nmsePlayer);
      /**Adds a new InventoryCondition to this inventory.*/
      addInventoryCondition (inventoryCondition: nmsicInventoryCondition): void;
      /**Called when a Player held click in the inventory*/
      changeHeld (player: nmsePlayer, slot: number, key: number): boolean;
      /**Clears the inventory and send relevant update to the viewer(s).*/
      clear (): void;
      /**Called when a Player double click in the inventory*/
      doubleClick (player: nmsePlayer, slot: number): boolean;
      dragging (player: nmsePlayer, slot: number, button: number): boolean;
      /**Called when a Player press the drop button*/
      drop (player: nmsePlayer, mode: number, slot: number, button: number): boolean;
      /**Gets the boots.*/
      getBoots (): nmsiItemStack;
      /**Gets the chestplate.*/
      getChestplate (): nmsiItemStack;
      /**Gets the item in player cursor.*/
      getCursorItem (): nmsiItemStack;
      /**Gets the helmet.*/
      getHelmet (): nmsiItemStack;
      /**Gets the size of the "inner inventory" (which includes only "usable" slots).*/
      getInnerSize (): number;
      /**Gets the ItemStack in main hand.*/
      getItemInMainHand (): nmsiItemStack;
      /**Gets the ItemStack in off hand.*/
      getItemInOffHand (): nmsiItemStack;
      /**Gets the item from a packet slot.*/
      getItemStack (slot: number, offset: number): nmsiItemStack;
      /**Gets the leggings.*/
      getLeggings (): nmsiItemStack;
      /**Called when a Player left click in the inventory.*/
      leftClick (player: nmsePlayer, slot: number): boolean;
      middleClick (player: nmsePlayer, slot: number): boolean;
      /**Called when a Player right click in the inventory.*/
      rightClick (player: nmsePlayer, slot: number): boolean;
      /**Inserts an item safely (synchronized) in the appropriate slot.*/
      safeItemInsert (slot: number, itemStack: nmsiItemStack): void;
      /**Refreshes an inventory slot.*/
      sendSlotRefresh (slot: number, itemStack: nmsiItemStack): void;
      /**Changes the boots.*/
      setBoots (itemStack: nmsiItemStack): void;
      /**Changes the chestplate.*/
      setChestplate (itemStack: nmsiItemStack): void;
      /**Changes the player cursor item.*/
      setCursorItem (cursorItem: nmsiItemStack): void;
      /**Changes the helmet.*/
      setHelmet (itemStack: nmsiItemStack): void;
      /**Changes the main hand ItemStack.*/
      setItemInMainHand (itemStack: nmsiItemStack): void;
      /**Changes the off hand ItemStack.*/
      setItemInOffHand (itemStack: nmsiItemStack): void;
      /**Sets an item from a packet slot.*/
      setItemStack (slot: number, offset: number, itemStack: nmsiItemStack): void;
      /**Changes the leggings.*/
      setLeggings (itemStack: nmsiItemStack): void;
      /**Called when a Player shift click in the inventory*/
      shiftClick (player: nmsePlayer, slot: number): boolean;
      /**Refreshes the player inventory by sending a WindowItemsPacket containing all.*/
      update (): void;
   }
   export class nmsuiPlayerInventoryUtils extends jlObject {
      /**Converts a packet slot to an internal one.*/
      static convertPlayerInventorySlot (slot: number, offset: number): number;
      static convertSlot (slot: number, offset: number): number;
      /**Used to convert internal slot to one used in packets*/
      static convertToPacketSlot (slot: number): number;
   }
   /**Used when a Player finish the animation of an item.*/
   export class nmsepPlayerItemAnimationEvent extends nmsePlayerEvent implements nmseCancellableEvent {
      constructor (player: nmsePlayer, armAnimationType: nmsepPItemAnimationType);
      /**Gets the animation.*/
      getArmAnimationType (): nmsepPItemAnimationType;
      /**Gets if the Event should be cancelled or not.*/
      isCancelled (): boolean;
      /**Marks the Event as cancelled or not.*/
      setCancelled (cancel: boolean): void;
   }
   export class nmsepPItemAnimationType extends jlEnum<nmsepPItemAnimationType> {
      static BOW: nmsepPItemAnimationType;
      static CROSSBOW: nmsepPItemAnimationType;
      static EAT: nmsepPItemAnimationType;
      static SHIELD: nmsepPItemAnimationType;
      static TRIDENT: nmsepPItemAnimationType;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsepPItemAnimationType;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsepPItemAnimationType[];
   }
   export class nmsnpspPlayerListHeaderAndFooterPacket extends jlObject implements nmsnpsComponentHoldingServerPacket {
      constructor ();
      constructor (header: nkatComponent, footer: nkatComponent);
      /**Gets the components held by this object.*/
      components (): juCollection<nkatComponent>;
      /**Returns a copy of this object.*/
      copyWithOperator (operator: jufUnaryOperator<nkatComponent>): nmsnpsServerPacket;
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   /**Called at player login, used to define his spawn instance.    Be aware that the player is not yet in a world when the event  is called, meaning that most player methods will not work.  You can use PlayerSpawnEvent and PlayerSpawnEvent.isFirstSpawn()  if needed.    WARNING: defining the spawning instance is MANDATORY.*/
   export class nmsepPlayerLoginEvent extends nmsePlayerEvent {
      constructor (player: nmsePlayer);
      /**Gets the spawning instance of the player.*/
      getSpawningInstance (): nmsiInstance;
      /**Changes the spawning instance.*/
      setSpawningInstance (instance: nmsiInstance): void;
   }
   export class nmsemPlayerMeta extends nmsemLivingEntityMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getAdditionalHearts (): number;
      getLeftShoulderEntityData (): jhnNBT;
      getRightShoulderEntityData (): jhnNBT;
      getScore (): number;
      isCapeEnabled (): boolean;
      isHatEnabled (): boolean;
      isJacketEnabled (): boolean;
      isLeftLegEnabled (): boolean;
      isLeftSleeveEnabled (): boolean;
      isRightLegEnabled (): boolean;
      isRightMainHand (): boolean;
      isRightSleeveEnabled (): boolean;
      setAdditionalHearts (value: number): void;
      setCapeEnabled (value: boolean): void;
      setHatEnabled (value: boolean): void;
      setJacketEnabled (value: boolean): void;
      setLeftLegEnabled (value: boolean): void;
      setLeftShoulderEntityData (value: org.jglrxavpok.hephaistos.nbt.NBT): void;
      setLeftSleeveEnabled (value: boolean): void;
      setRightLegEnabled (value: boolean): void;
      setRightMainHand (value: boolean): void;
      setRightShoulderEntityData (value: org.jglrxavpok.hephaistos.nbt.NBT): void;
      setRightSleeveEnabled (value: boolean): void;
      setScore (value: number): void;
   }
   /**Called when a player is modifying his position.*/
   export class nmsepPlayerMoveEvent extends nmsePlayerEvent implements nmseCancellableEvent {
      constructor (player: nmsePlayer, newPosition: nmsuPosition);
      /**Gets the target position.*/
      getNewPosition (): nmsuPosition;
      /**Gets if the Event should be cancelled or not.*/
      isCancelled (): boolean;
      /**Marks the Event as cancelled or not.*/
      setCancelled (cancel: boolean): void;
      /**Changes the target position.*/
      setNewPosition (newPosition: nmsuPosition): void;
   }
   /**Called when a player send ClientPluginMessagePacket.*/
   export class nmsepPlayerPluginMessageEvent extends nmsePlayerEvent {
      constructor (player: nmsePlayer, identifier: string, message: number[]);
      /**Gets the message identifier.*/
      getIdentifier (): string;
      /**Gets the message data as a byte array.*/
      getMessage (): number[];
      /**Gets the message data as a String.*/
      getMessageString (): string;
   }
   export class nmsnpspPlayerPositionAndLookPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmslPlayerPositionListener extends jlObject {
      constructor ();
      static playerLookListener (packet: nmsnpcpClientPlayerRotationPacket, player: nmsePlayer): void;
      static playerPacketListener (packet: nmsnpcpClientPlayerPacket, player: nmsePlayer): void;
      static playerPositionAndLookListener (packet: nmsnpcpClientPlayerPositionAndRotationPacket, player: nmsePlayer): void;
      static playerPositionListener (packet: nmsnpcpClientPlayerPositionPacket, player: nmsePlayer): void;
      static teleportConfirmListener (packet: nmsnpcpClientTeleportConfirmPacket, player: nmsePlayer): void;
   }
   /**Called before the PlayerEatEvent and can be used to change the eating time  or to cancel its processing, cancelling the event means that the player will  continue the animation indefinitely.*/
   export class nmsepPlayerPreEatEvent extends nmsePlayerEvent implements nmseCancellableEvent {
      constructor (player: nmsePlayer, foodItem: nmsiItemStack, hand: nmsePHand, eatingTime: number);
      /**Gets the food eating time.*/
      getEatingTime (): number;
      /**The food item which will be eaten.*/
      getFoodItem (): nmsiItemStack;
      getHand (): nmsePHand;
      /**Gets if the Event should be cancelled or not.*/
      isCancelled (): boolean;
      /**Marks the Event as cancelled or not.*/
      setCancelled (cancel: boolean): void;
      /**Changes the food eating time.*/
      setEatingTime (eatingTime: number): void;
   }
   /**Used when you want to provide your own player object instead of using the default one.    Sets with ConnectionManager.setPlayerProvider(PlayerProvider).*/
   export interface nmsnPlayerProvider {
      /**Creates a new Player object based on his connection data.*/
      createPlayer (uuid: juUUID, username: string, connection: nmsnpPlayerConnection): nmsePlayer;
   }
   /**Called when a player warns the server of a resource pack status.*/
   export class nmsepPlayerResourcePackStatusEvent extends nmsePlayerEvent {
      constructor (player: nmsePlayer, status: nmsrResourcePackStatus);
      /**Gets the resource pack status.*/
      getStatus (): nmsrResourcePackStatus;
   }
   /**Called when Player.respawn() is executed (for custom respawn or as a result of  ClientStatusPacket*/
   export class nmsepPlayerRespawnEvent extends nmsePlayerEvent {
      constructor (player: nmsePlayer);
      /**Gets the respawn position.*/
      getRespawnPosition (): nmsuPosition;
      /**Changes the respawn position.*/
      setRespawnPosition (respawnPosition: nmsuPosition): void;
   }
   /**Called after the player signals the server that his settings has been modified.*/
   export class nmsepPlayerSettingsChangeEvent extends nmsePlayerEvent {
      constructor (player: nmsePlayer);
      /**Gets the player who changed his settings.*/
      getPlayer (): nmsePlayer;
   }
   /**Contains all the data required to store a skin.    Can be applied to a player with Player.setSkin(PlayerSkin)  or in the linked event PlayerSkinInitEvent.*/
   export class nmsePlayerSkin extends jlObject {
      constructor (textures: string, signature: string);
      equals (object: jlObject): boolean;
      /**Gets a skin from a Minecraft username.*/
      static fromUsername (username: string): nmsePlayerSkin;
      /**Gets a skin from a Mojang UUID.*/
      static fromUuid (uuid: string): nmsePlayerSkin;
      /**Gets the skin signature.*/
      getSignature (): string;
      /**Gets the skin textures value.*/
      getTextures (): string;
      hashCode (): number;
      toString (): string;
   }
   /**Called at the player connection to initialize his skin.*/
   export class nmsepPlayerSkinInitEvent extends nmsePlayerEvent {
      constructor (player: nmsePlayer, currentSkin: nmsePlayerSkin);
      /**Gets the spawning skin of the player.*/
      getSkin (): nmsePlayerSkin;
      /**Sets the spawning skin of the player.*/
      setSkin (skin: nmsePlayerSkin): void;
   }
   /**Called when a new instance is set for a player.*/
   export class nmsepPlayerSpawnEvent extends nmsePlayerEvent {
      constructor (player: nmsePlayer, spawnInstance: nmsiInstance, firstSpawn: boolean);
      /**Gets the entity new instance.*/
      getSpawnInstance (): nmsiInstance;
      /**'true' if the player is spawning for the first time.*/
      isFirstSpawn (): boolean;
   }
   /**Called when a Player start digging a block,  can be used to forbid the Player from mining it.    Be aware that cancelling this event does not necessary prevent the player from breaking the block  (could be because of high latency or a modified client) so cancelling PlayerBlockBreakEvent is also necessary.  Could be fixed in future Minestom version.*/
   export class nmsepPlayerStartDiggingEvent extends nmsePlayerEvent implements nmseCancellableEvent {
      constructor (player: nmsePlayer, blockPosition: nmsuBlockPosition, blockStateId: number, customBlockId: number);
      /**Gets the BlockPosition.*/
      getBlockPosition (): nmsuBlockPosition;
      /**Gets the block state id.*/
      getBlockStateId (): number;
      /**Gets the custom block id.*/
      getCustomBlockId (): number;
      /**Gets if the Event should be cancelled or not.*/
      isCancelled (): boolean;
      /**Marks the Event as cancelled or not.*/
      setCancelled (cancel: boolean): void;
   }
   /**Called when a player start flying.*/
   export class nmsepPlayerStartFlyingEvent extends nmsePlayerEvent {
      constructor (player: nmsePlayer);
   }
   export class nmsepPlayerStartFlyingWithElytraEvent extends nmsePlayerEvent {
      constructor (player: nmsePlayer);
   }
   /**Called when a player starts sneaking.*/
   export class nmsepPlayerStartSneakingEvent extends nmsePlayerEvent {
      constructor (player: nmsePlayer);
   }
   /**Called when a player starts sprinting.*/
   export class nmsepPlayerStartSprintingEvent extends nmsePlayerEvent {
      constructor (player: nmsePlayer);
   }
   /**Represents a single statistic in the "statistics" game menu.    You can retrieve the statistics map with Player.getStatisticValueMap() and modify it with your own values.*/
   export class nmssPlayerStatistic extends jlObject {
      constructor (category: nmssStatisticCategory, statisticId: number);
      constructor (type: nmssStatisticType);
      getCategory (): nmssStatisticCategory;
      getStatisticId (): number;
   }
   /**Called when a player stop flying.*/
   export class nmsepPlayerStopFlyingEvent extends nmsePlayerEvent {
      constructor (player: nmsePlayer);
   }
   export class nmsepPlayerStopFlyingWithElytraEvent extends nmsePlayerEvent {
      constructor (player: nmsePlayer);
   }
   /**Called when a player stops sneaking.*/
   export class nmsepPlayerStopSneakingEvent extends nmsePlayerEvent {
      constructor (player: nmsePlayer);
   }
   /**Called when a player stops sprinting.*/
   export class nmsepPlayerStopSprintingEvent extends nmsePlayerEvent {
      constructor (player: nmsePlayer);
   }
   /**Called when a player is trying to swap his main and off hand item.*/
   export class nmsepPlayerSwapItemEvent extends nmsePlayerEvent implements nmseCancellableEvent {
      constructor (player: nmsePlayer, mainHandItem: nmsiItemStack, offHandItem: nmsiItemStack);
      /**Gets the item which will be in player main hand after the event.*/
      getMainHandItem (): nmsiItemStack;
      /**Gets the item which will be in player off hand after the event.*/
      getOffHandItem (): nmsiItemStack;
      /**Gets if the Event should be cancelled or not.*/
      isCancelled (): boolean;
      /**Marks the Event as cancelled or not.*/
      setCancelled (cancel: boolean): void;
      /**Changes the item which will be in the player main hand.*/
      setMainHandItem (mainHandItem: nmsiItemStack): void;
      /**Changes the item which will be in the player off hand.*/
      setOffHandItem (offHandItem: nmsiItemStack): void;
   }
   /**Called at each player tick.*/
   export class nmsepPlayerTickEvent extends nmsePlayerEvent {
      constructor (player: nmsePlayer);
   }
   /**Event when an item is used without clicking on a block.*/
   export class nmsepPlayerUseItemEvent extends nmsePlayerEvent implements nmseCancellableEvent {
      constructor (player: nmsePlayer, hand: nmsePHand, itemStack: nmsiItemStack);
      /**Gets which hand the player used.*/
      getHand (): nmsePHand;
      /**Gets the item which have been used.*/
      getItemStack (): nmsiItemStack;
      /**Gets if the Event should be cancelled or not.*/
      isCancelled (): boolean;
      /**Marks the Event as cancelled or not.*/
      setCancelled (cancel: boolean): void;
   }
   /**Used when a player is clicking on a block with an item (but is not a block in item form).*/
   export class nmsepPlayerUseItemOnBlockEvent extends nmsePlayerEvent {
      constructor (player: nmsePlayer, hand: nmsePHand, itemStack: nmsiItemStack, position: nmsuBlockPosition, blockFace: nmsuDirection);
      /**Gets which face the player has interacted with.*/
      getBlockFace (): nmsuDirection;
      /**Gets which hand the player used to interact with the block.*/
      getHand (): nmsePHand;
      /**Gets with which item the player has interacted with the block.*/
      getItemStack (): nmsiItemStack;
      /**Gets the position of the interacted block.*/
      getPosition (): nmsuBlockPosition;
   }
   export class nmsupPlayerUtils extends jlObject {
      static isNettyClient (entity: nmseEntity): boolean;
      static isNettyClient (player: nmsePlayer): boolean;
      static isNettyClient (playerConnection: nmsnpPlayerConnection): boolean;
   }
   export interface nmsucvPlayerValidator extends nmsucvValidator<nmsePlayer> {}
   export class nmsevPlayerVehicleInformation extends jlObject {
      constructor ();
      getForward (): number;
      getSideways (): number;
      /**Refresh internal data*/
      refresh (sideways: number, forward: number, jump: boolean, unmount: boolean): void;
      shouldJump (): boolean;
      shouldUnmount (): boolean;
   }
   export class nmslPlayerVehicleListener extends jlObject {
      constructor ();
      static boatSteerListener (packet: nmsnpcpClientSteerBoatPacket, player: nmsePlayer): void;
      static steerVehicleListener (packet: nmsnpcpClientSteerVehiclePacket, player: nmsePlayer): void;
      static vehicleMoveListener (packet: nmsnpcpClientVehicleMovePacket, player: nmsePlayer): void;
   }
   export class nmslPluginMessageListener extends jlObject {
      constructor ();
      static listener (packet: nmsnpcpClientPluginMessagePacket, player: nmsePlayer): void;
   }
   export class nmsnpspPluginMessagePacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the current server brand name packet.*/
      static getBrandPacket (): nmsnpspPluginMessagePacket;
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsemaPolarBearMeta extends nmsemaAnimalMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      isStandingUp (): boolean;
      setStandingUp (value: boolean): void;
   }
   export class nmsnpssPongPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      constructor (number: number);
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   /**Represents a position.  The instance is not contained.*/
   export class nmsuPosition extends jlObject implements nmsucPublicCloneable<nmsuPosition> {
      constructor ();
      constructor (x: number, y: number, z: number);
      constructor (x: number, y: number, z: number, yaw: number, pitch: number);
      /**Adds offsets to the current position.*/
      add (x: number, y: number, z: number): nmsuPosition;
      /**Adds a position to the current position.*/
      add (position: nmsuPosition): nmsuPosition;
      /**Creates and returns a copy of this object.*/
      clone (): nmsuPosition;
      /**Sets the x\/y\/z\/yaw\/pitch fields of this position to the value of position.*/
      copy (position: nmsuPosition): void;
      /**Sets the x\/y\/z field of this position to the value of position.*/
      copy (position: nmsuVector): void;
      /**Sets the x\/y\/z fields of this position to the value of position.*/
      copyCoordinates (position: nmsuPosition): void;
      /**Gets if the two objects are position and have the same values.*/
      equals (o: jlObject): boolean;
      /**Gets a unit-vector pointing in the direction that this Location is  facing.*/
      getDirection (): nmsuVector;
      getDistance (x: number, y: number, z: number): number;
      /**Gets the distance between 2 positions.*/
      getDistance (position: nmsuPosition): number;
      /**Gets the square distance to another position.*/
      getDistanceSquared (position: nmsuPosition): number;
      /**Gets the position pitch.*/
      getPitch (): number;
      /**Gets the position X.*/
      getX (): number;
      /**Gets the position Y.*/
      getY (): number;
      /**Gets the position yaw.*/
      getYaw (): number;
      /**Gets the position Z.*/
      getZ (): number;
      hashCode (): number;
      /**Checks if two positions have a similar view (yaw\/pitch).*/
      hasSimilarView (position: nmsuPosition): boolean;
      /**Gets if two positions are in the same chunk.*/
      inSameChunk (position: nmsuPosition): boolean;
      /**Checks it two positions are similar (x\/y\/z).*/
      isSimilar (position: nmsuPosition): boolean;
      /**Changes the position to the given one.*/
      set (position: nmsuPosition): void;
      /**Sets the yaw and pitch to point  in the direction of the vector.*/
      setDirection (vector: nmsuVector): nmsuPosition;
      /**Changes the position pitch.*/
      setPitch (pitch: number): void;
      /**Changes the position X.*/
      setX (x: number): void;
      /**Changes the position Y.*/
      setY (y: number): void;
      /**Changes the position yaw.*/
      setYaw (yaw: number): void;
      /**Changes the position Z.*/
      setZ (z: number): void;
      /**Removes offsets to the current position.*/
      subtract (x: number, y: number, z: number): nmsuPosition;
      /**Converts this position to a BlockPosition.*/
      toBlockPosition (): nmsuBlockPosition;
      toString (): string;
      /**Converts this position to a Vector.*/
      toVector (): nmsuVector;
   }
   export class nmsupPositionUtils extends jlObject {
      constructor ();
      static lookAlong (position: nmsuPosition, dx: number, dy: number, dz: number): void;
   }
   export class nmspPotion extends jlObject {
      constructor (effect: nmspPotionEffect, amplifier: number, duration: number);
      constructor (effect: nmspPotionEffect, amplifier: number, duration: number, particles: boolean);
      constructor (effect: nmspPotionEffect, amplifier: number, duration: number, particles: boolean, icon: boolean);
      constructor (effect: nmspPotionEffect, amplifier: number, duration: number, particles: boolean, icon: boolean, ambient: boolean);
      getAmplifier (): number;
      getDuration (): number;
      getEffect (): nmspPotionEffect;
      getFlags (): number;
      /**Sends a packet that a potion effect has been applied to the entity.*/
      sendAddPacket (entity: nmseEntity): void;
      /**Sends a packet that a potion effect has been removed from the entity.*/
      sendRemovePacket (entity: nmseEntity): void;
   }
   /**\/\/==============================  \/\/  AUTOGENERATED BY EnumGenerator  \/\/==============================*/
   export class nmspPotionEffect extends jlEnum<nmspPotionEffect> implements net.kyori.adventure.key.Keyed {
      static ABSORPTION: nmspPotionEffect;
      static BAD_OMEN: nmspPotionEffect;
      static BLINDNESS: nmspPotionEffect;
      static CONDUIT_POWER: nmspPotionEffect;
      static DOLPHINS_GRACE: nmspPotionEffect;
      static FIRE_RESISTANCE: nmspPotionEffect;
      static GLOWING: nmspPotionEffect;
      static HASTE: nmspPotionEffect;
      static HEALTH_BOOST: nmspPotionEffect;
      static HERO_OF_THE_VILLAGE: nmspPotionEffect;
      static HUNGER: nmspPotionEffect;
      static INSTANT_DAMAGE: nmspPotionEffect;
      static INSTANT_HEALTH: nmspPotionEffect;
      static INVISIBILITY: nmspPotionEffect;
      static JUMP_BOOST: nmspPotionEffect;
      static LEVITATION: nmspPotionEffect;
      static LUCK: nmspPotionEffect;
      static MINING_FATIGUE: nmspPotionEffect;
      static NAUSEA: nmspPotionEffect;
      static NIGHT_VISION: nmspPotionEffect;
      static POISON: nmspPotionEffect;
      static REGENERATION: nmspPotionEffect;
      static RESISTANCE: nmspPotionEffect;
      static SATURATION: nmspPotionEffect;
      static SLOW_FALLING: nmspPotionEffect;
      static SLOWNESS: nmspPotionEffect;
      static SPEED: nmspPotionEffect;
      static STRENGTH: nmspPotionEffect;
      static UNLUCK: nmspPotionEffect;
      static WATER_BREATHING: nmspPotionEffect;
      static WEAKNESS: nmspPotionEffect;
      static WITHER: nmspPotionEffect;
      static fromId (id: number): nmspPotionEffect;
      getId (): number;
      getNamespaceID (): string;
      key (): nkakKey;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmspPotionEffect;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmspPotionEffect[];
   }
   export class nmsimPotionMeta extends nmsiItemMeta implements nmsiIProvider<nmsimPBuilder> {
      constructor (metaBuilder: nmsiItemMetaBuilder, potionType: nmspPotionType, customPotionEffects: juList<nmspCustomPotionEffect>, color: nmscColor);
      getColor (): nmscColor;
      getCustomPotionEffects (): juList<nmspCustomPotionEffect>;
      getPotionType (): nmspPotionType;
   }
   export class nmsimPBuilder extends nmsiItemMetaBuilder {
      constructor ();
      build (): nmsimPotionMeta;
      color (color: nmscColor): nmsimPBuilder;
      effects (customPotionEffects: juList<nmspCustomPotionEffect>): nmsimPBuilder;
      getSupplier (): jufSupplier<nmsiItemMetaBuilder>;
      potionType (potionType: nmspPotionType): nmsimPBuilder;
      read (nbtCompound: org.jglrxavpok.hephaistos.nbt.NBTCompound): void;
   }
   /**\/\/==============================  \/\/  AUTOGENERATED BY EnumGenerator  \/\/==============================*/
   export class nmspPotionType extends jlEnum<nmspPotionType> implements net.kyori.adventure.key.Keyed {
      static AWKWARD: nmspPotionType;
      static EMPTY: nmspPotionType;
      static FIRE_RESISTANCE: nmspPotionType;
      static HARMING: nmspPotionType;
      static HEALING: nmspPotionType;
      static INVISIBILITY: nmspPotionType;
      static LEAPING: nmspPotionType;
      static LONG_FIRE_RESISTANCE: nmspPotionType;
      static LONG_INVISIBILITY: nmspPotionType;
      static LONG_LEAPING: nmspPotionType;
      static LONG_NIGHT_VISION: nmspPotionType;
      static LONG_POISON: nmspPotionType;
      static LONG_REGENERATION: nmspPotionType;
      static LONG_SLOW_FALLING: nmspPotionType;
      static LONG_SLOWNESS: nmspPotionType;
      static LONG_STRENGTH: nmspPotionType;
      static LONG_SWIFTNESS: nmspPotionType;
      static LONG_TURTLE_MASTER: nmspPotionType;
      static LONG_WATER_BREATHING: nmspPotionType;
      static LONG_WEAKNESS: nmspPotionType;
      static LUCK: nmspPotionType;
      static MUNDANE: nmspPotionType;
      static NIGHT_VISION: nmspPotionType;
      static POISON: nmspPotionType;
      static REGENERATION: nmspPotionType;
      static SLOW_FALLING: nmspPotionType;
      static SLOWNESS: nmspPotionType;
      static STRENGTH: nmspPotionType;
      static STRONG_HARMING: nmspPotionType;
      static STRONG_HEALING: nmspPotionType;
      static STRONG_LEAPING: nmspPotionType;
      static STRONG_POISON: nmspPotionType;
      static STRONG_REGENERATION: nmspPotionType;
      static STRONG_SLOWNESS: nmspPotionType;
      static STRONG_STRENGTH: nmspPotionType;
      static STRONG_SWIFTNESS: nmspPotionType;
      static STRONG_TURTLE_MASTER: nmspPotionType;
      static SWIFTNESS: nmspPotionType;
      static THICK: nmspPotionType;
      static TURTLE_MASTER: nmspPotionType;
      static WATER: nmspPotionType;
      static WATER_BREATHING: nmspPotionType;
      static WEAKNESS: nmspPotionType;
      static fromId (id: number): nmspPotionType;
      getId (): number;
      getNamespaceID (): string;
      key (): nkakKey;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmspPotionType;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmspPotionType[];
   }
   export class nmsemoPrimedTntMeta extends nmsemEntityMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getFuseTime (): number;
      setFuseTime (value: number): void;
   }
   export class nmsuPrimitiveConversion extends jlObject {
      constructor ();
      /**Converts primitive types to their boxed version.*/
      static getObjectClass (clazz: jlClass): jlClass;
      static getObjectClassString (clazz: string): string;
   }
   export interface nmsemProjectileMeta {
      getShooter (): nmseEntity;
      setShooter (shooter: nmseEntity): void;
   }
   /**Convenient interface to expose Object.clone() publicly with a generic.*/
   export interface nmsucPublicCloneable<T> extends jlCloneable {
      /**Creates and returns a copy of this object.*/
      clone (): T;
   }
   export class nmsemwfPufferfishMeta extends nmsemwfAbstractFishMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getState (): nmsemwfPState;
      setState (state: nmsemwfPState): void;
   }
   export class nmsemwfPState extends jlEnum<nmsemwfPState> {
      static FULLY_PUFFED: nmsemwfPState;
      static SEMI_PUFFED: nmsemwfPState;
      static UNPUFFED: nmsemwfPState;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsemwfPState;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsemwfPState[];
   }
   /**Utility class to manage responses to the GameSpy4 Query Protocol.*/
   export class nmseqQuery extends jlObject {
      /**Checks if the query system has been started.*/
      isStarted (): boolean;
      /**Starts the query system, responding to queries on a random port, logging if it could not be started.*/
      static start (): number;
      /**Starts the query system, responding to queries on a given port, logging if it could not be started.*/
      static start (port: number): boolean;
      /**Stops the query system.*/
      stop (): boolean;
   }
   /**An event called when a query is received and ready to be responded to.*/
   export class nmseqeQueryEvent<T extends Writeable> extends nmseEvent implements nmseCancellableEvent {
      constructor (sender: jnSocketAddress, sessionID: number, response: T);
      /**Gets the query response that will be sent back to the sender.*/
      getQueryResponse (): T;
      /**Gets the socket address of the initiator of the query.*/
      getSender (): jnSocketAddress;
      /**Gets the Session ID of the initiator of the query.*/
      getSessionID (): number;
      /**Gets if the Event should be cancelled or not.*/
      isCancelled (): boolean;
      /**Marks the Event as cancelled or not.*/
      setCancelled (cancel: boolean): void;
      /**Sets the query response that will be sent back to the sender.*/
      setQueryResponse (response: T): void;
   }
   /**An enum of default query keys.*/
   export class nmseqrQueryKey extends jlEnum<nmseqrQueryKey> {
      static GAME_ID: nmseqrQueryKey;
      static GAME_TYPE: nmseqrQueryKey;
      static HOST_IP: nmseqrQueryKey;
      static HOST_PORT: nmseqrQueryKey;
      static HOSTNAME: nmseqrQueryKey;
      static MAP: nmseqrQueryKey;
      static MAX_PLAYERS: nmseqrQueryKey;
      static NUM_PLAYERS: nmseqrQueryKey;
      static PLUGINS: nmseqrQueryKey;
      static VERSION: nmseqrQueryKey;
      /**Gets the key of this query key.*/
      getKey (): string;
      /**Gets the value of this query key.*/
      getValue (): string;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmseqrQueryKey;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmseqrQueryKey[];
   }
   export class nmsemaRabbitMeta extends nmsemaAnimalMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getType (): nmsemaRType;
      setType (value: nmsemaRType): void;
   }
   export class nmsemaRType extends jlEnum<nmsemaRType> {
      static BLACK: nmsemaRType;
      static BLACK_AND_WHITE: nmsemaRType;
      static BROWN: nmsemaRType;
      static GOLD: nmsemaRType;
      static KILLER_BUNNY: nmsemaRType;
      static SALT_AND_PEPPER: nmsemaRType;
      static WHITE: nmsemaRType;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsemaRType;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsemaRType[];
   }
   export class nmsemmrRaiderMeta extends nmsemmMonsterMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      isCelebrating (): boolean;
      setCelebrating (value: boolean): void;
   }
   export class nmseagRandomLookAroundGoal extends nmseaGoalSelector {
      constructor (entityCreature: nmseEntityCreature, chancePerTick: number);
      constructor (entityCreature: nmseEntityCreature, chancePerTick: number, minimalLookTimeSupplier: jufSupplier<jlInteger>, randomDirectionFunction: jufFunction<nmseEntityCreature,nmsuVector>);
      /**Ends this GoalSelector.*/
      end (): void;
      /**Whether or not this GoalSelector should end.*/
      shouldEnd (): boolean;
      /**Whether or not this GoalSelector should start.*/
      shouldStart (): boolean;
      /**Starts this GoalSelector.*/
      start (): void;
      /**Called every tick when this GoalSelector is running.*/
      tick (time: number): void;
   }
   export class nmseagRandomStrollGoal extends nmseaGoalSelector {
      constructor (entityCreature: nmseEntityCreature, radius: number);
      /**Ends this GoalSelector.*/
      end (): void;
      getRadius (): number;
      /**Whether or not this GoalSelector should end.*/
      shouldEnd (): boolean;
      /**Whether or not this GoalSelector should start.*/
      shouldStart (): boolean;
      /**Starts this GoalSelector.*/
      start (): void;
      /**Called every tick when this GoalSelector is running.*/
      tick (time: number): void;
   }
   /**Represents the base for any data type that is numeric.*/
   export class nmsumRange<T> extends jlObject {
      constructor (value: T);
      constructor (minimum: T, maximum: T);
      /**Retrieves the maximum value of the range.*/
      getMaximum (): T;
      /**Retrieves the minimum value of the range.*/
      getMinimum (): T;
      /**Whether the given value is in range of the minimum and the maximum.*/
      isInRange (value: T): boolean;
      /**Changes the maximum value of the range.*/
      setMaximum (maximum: T): void;
      /**Changes the minimum value of the range.*/
      setMinimum (minimum: T): void;
   }
   export class nmsglRangeContainer extends jlObject {
      constructor (min: number, max: number);
      getMax (): number;
      getMin (): number;
   }
   export class nmsglRDeserializer extends jlObject implements com.google.gson.JsonDeserializer< nmsglRangeContainer> {
      constructor ();
      deserialize (json: com.google.gson.JsonElement, typeOfT: jlrType, context: com.google.gson.JsonDeserializationContext): nmsglRangeContainer;
   }
   export class nmseagRangedAttackGoal extends nmseaGoalSelector {
      constructor (entityCreature: nmseEntityCreature, delay: number, attackRange: number, desirableRange: number, comeClose: boolean, power: number, spread: number, timeUnit: nmsutTimeUnit);
      /**Ends this GoalSelector.*/
      end (): void;
      getCooldown (): nmsutCooldown;
      setProjectileGenerator (projectileGenerator: jufFunction<nmseEntity,nmsetpEntityProjectile>): void;
      /**Whether or not this GoalSelector should end.*/
      shouldEnd (): boolean;
      /**Whether or not this GoalSelector should start.*/
      shouldStart (): boolean;
      /**Starts this GoalSelector.*/
      start (): void;
      /**Called every tick when this GoalSelector is running.*/
      tick (time: number): void;
   }
   export class nmsemmrRavagerMeta extends nmsemmrRaiderMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   /**Represents an element which can read from a BinaryReader.*/
   export interface nmsubReadable {
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
   }
   export class nmsrRecipe extends jlObject {
      constructor (recipeType: nmsrRRecipeType, recipeId: string);
      getRecipeId (): string;
      getRecipeType (): nmsrRRecipeType;
      shouldShow (player: nmsePlayer): boolean;
   }
   export class nmsrRRecipeType extends jlEnum<nmsrRRecipeType> {
      static BLASTING: nmsrRRecipeType;
      static CAMPFIRE_COOKING: nmsrRRecipeType;
      static SHAPED: nmsrRRecipeType;
      static SHAPELESS: nmsrRRecipeType;
      static SMELTING: nmsrRRecipeType;
      static SMITHING: nmsrRRecipeType;
      static SMOKING: nmsrRRecipeType;
      static STONECUTTING: nmsrRRecipeType;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsrRRecipeType;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsrRRecipeType[];
   }
   export class nmslRecipeListener extends jlObject {
      constructor ();
      static listener (packet: nmsnpcpClientCraftRecipeRequest, player: nmsePlayer): void;
   }
   export class nmsrRecipeManager extends jlObject {
      constructor ();
      addRecipe (recipe: nmsrRecipe): void;
      getDeclareRecipesPacket (): nmsnpspDeclareRecipesPacket;
      getRecipes (): juSet<nmsrRecipe>;
      removeRecipe (recipe: nmsrRecipe): void;
   }
   export class nmsibrvRedstonePlacementRule extends nmsibrBlockPlacementRule {
      constructor ();
      /**Called when the block is placed.*/
      blockPlace (instance: nmsiInstance, block: nmsibBlock, blockFace: nmsibBlockFace, blockPosition: nmsuBlockPosition, pl: nmsePlayer): number;
      /**Called when the block state id can be updated (for instance if a neighbour block changed).*/
      blockUpdate (instance: nmsiInstance, blockPosition: nmsuBlockPosition, currentId: number): number;
   }
   /**AUTOGENERATED*/
   export class nmsrRegistries extends jlObject {
      constructor ();
      /**Returns the corresponding Block matching the given id.*/
      static getBlock (id: string): nmsibBlock;
      /**Returns the corresponding Block matching the given key.*/
      static getBlock (key: net.kyori.adventure.key.Key): nmsibBlock;
      /**Returns the corresponding Block matching the given id.*/
      static getBlock (id: nmsuNamespaceID): nmsibBlock;
      /**Returns the corresponding Enchantment matching the given id.*/
      static getEnchantment (id: string): nmsiEnchantment;
      /**Returns the corresponding Enchantment matching the given key.*/
      static getEnchantment (key: net.kyori.adventure.key.Key): nmsiEnchantment;
      /**Returns the corresponding Enchantment matching the given id.*/
      static getEnchantment (id: nmsuNamespaceID): nmsiEnchantment;
      /**Returns the corresponding EntityType matching the given id.*/
      static getEntityType (id: string): nmseEntityType;
      /**Returns the corresponding EntityType matching the given key.*/
      static getEntityType (key: net.kyori.adventure.key.Key): nmseEntityType;
      /**Returns the corresponding EntityType matching the given id.*/
      static getEntityType (id: nmsuNamespaceID): nmseEntityType;
      /**Returns the corresponding Fluid matching the given id.*/
      static getFluid (id: string): nmsfFluid;
      /**Returns the corresponding Fluid matching the given key.*/
      static getFluid (key: net.kyori.adventure.key.Key): nmsfFluid;
      /**Returns the corresponding Fluid matching the given id.*/
      static getFluid (id: nmsuNamespaceID): nmsfFluid;
      /**Returns the corresponding Material matching the given id.*/
      static getMaterial (id: string): nmsiMaterial;
      /**Returns the corresponding Material matching the given key.*/
      static getMaterial (key: net.kyori.adventure.key.Key): nmsiMaterial;
      /**Returns the corresponding Material matching the given id.*/
      static getMaterial (id: nmsuNamespaceID): nmsiMaterial;
      /**Returns the corresponding Particle matching the given id.*/
      static getParticle (id: string): nmspParticle;
      /**Returns the corresponding Particle matching the given key.*/
      static getParticle (key: net.kyori.adventure.key.Key): nmspParticle;
      /**Returns the corresponding Particle matching the given id.*/
      static getParticle (id: nmsuNamespaceID): nmspParticle;
      /**Returns the corresponding PotionEffect matching the given id.*/
      static getPotionEffect (id: string): nmspPotionEffect;
      /**Returns the corresponding PotionEffect matching the given key.*/
      static getPotionEffect (key: net.kyori.adventure.key.Key): nmspPotionEffect;
      /**Returns the corresponding PotionEffect matching the given id.*/
      static getPotionEffect (id: nmsuNamespaceID): nmspPotionEffect;
      /**Returns the corresponding PotionType matching the given id.*/
      static getPotionType (id: string): nmspPotionType;
      /**Returns the corresponding PotionType matching the given key.*/
      static getPotionType (key: net.kyori.adventure.key.Key): nmspPotionType;
      /**Returns the corresponding PotionType matching the given id.*/
      static getPotionType (id: nmsuNamespaceID): nmspPotionType;
      /**Returns the corresponding SoundEvent matching the given id.*/
      static getSoundEvent (id: string): nmssSoundEvent;
      /**Returns the corresponding SoundEvent matching the given key.*/
      static getSoundEvent (key: net.kyori.adventure.key.Key): nmssSoundEvent;
      /**Returns the corresponding SoundEvent matching the given id.*/
      static getSoundEvent (id: nmsuNamespaceID): nmssSoundEvent;
      /**Returns the corresponding StatisticType matching the given id.*/
      static getStatisticType (id: string): nmssStatisticType;
      /**Returns the corresponding StatisticType matching the given key.*/
      static getStatisticType (key: net.kyori.adventure.key.Key): nmssStatisticType;
      /**Returns the corresponding StatisticType matching the given id.*/
      static getStatisticType (id: nmsuNamespaceID): nmssStatisticType;
   }
   /**A Batch which can be used when changes are required across chunk borders, and  are going to be reused in different places. If translation is not required, AbsoluteBlockBatch  should be used instead for efficiency purposes.    Coordinates are relative to (0, 0, 0) with some limitations. All coordinates must  fit within a 16 bit integer of the first coordinate (32,767 blocks). If blocks must  be spread out over a larger area, an AbsoluteBlockBatch should be used.    All inverses are AbsoluteBlockBatchs and represent the inverse of the application  at the position which it was applied.    If a batch will be used multiple times at the same coordinate, it is suggested  to convert it to an AbsoluteBlockBatch and cache the result. Application  of absolute batches (currently) is significantly faster than their relative counterpart.*/
   export class nmsibRelativeBlockBatch extends jlObject implements nmsibBatch<jlRunnable> {
      constructor ();
      constructor (options: nmsibBatchOption);
      /**Applies this batch to the given instance at the given position.*/
      apply (instance: nmsiInstance, x: number, y: number, z: number, callback: jlRunnable): nmsibAbsoluteBlockBatch;
      /**Applies this batch to the given instance at the given position, execute the callback depending on safeCallback.*/
      apply (instance: nmsiInstance, x: number, y: number, z: number, callback: jlRunnable, safeCallback: boolean): nmsibAbsoluteBlockBatch;
      /**Applies this batch to the given instance at the given block position.*/
      apply (instance: nmsiInstance, position: nmsuBlockPosition, callback: jlRunnable): nmsibAbsoluteBlockBatch;
      /**Applies this batch to the given instance at the origin (0, 0, 0) of the instance.*/
      apply (instance: nmsiInstance, callback: jlRunnable): nmsibAbsoluteBlockBatch;
      /**Applies this batch to the given instance at the given position, and execute the callback  immediately when the blocks have been applied, int an unknown thread.*/
      applyUnsafe (instance: nmsiInstance, x: number, y: number, z: number, callback: jlRunnable): nmsibAbsoluteBlockBatch;
      /**Removes all block data from this batch.*/
      clear (): void;
      /**Sets a CustomBlock at a position with a custom state id.*/
      setSeparateBlocks (x: number, y: number, z: number, blockStateId: number, customBlockId: number, data: nmsdData): void;
      /**Converts this batch to an absolute batch at the origin (0, 0, 0).*/
      toAbsoluteBatch (): nmsibAbsoluteBlockBatch;
      /**Converts this batch to an absolute batch at the given coordinates.*/
      toAbsoluteBatch (x: number, y: number, z: number): nmsibAbsoluteBlockBatch;
   }
   /**Represents a relative BlockPosition.*/
   export class nmsulRelativeBlockPosition extends nmsulRelativeLocation<nmsuBlockPosition> {
      constructor (location: nmsuBlockPosition, relativeX: boolean, relativeY: boolean, relativeZ: boolean);
      /**Gets the location based on the relative fields and position.*/
      from (position: nmsuPosition): nmsuBlockPosition;
   }
   /**Represents a location which can have fields relative to an Entity position.*/
   export class nmsulRelativeLocation<T> extends jlObject {
      constructor (location: T, relativeX: boolean, relativeY: boolean, relativeZ: boolean);
      /**Gets the location based on the relative fields and entity.*/
      from (entity: nmseEntity): T;
      /**Gets the location based on the relative fields and position.*/
      from (position: nmsuPosition): T;
      /**Gets if the 'x' field is relative.*/
      isRelativeX (): boolean;
      /**Gets if the 'y' field is relative.*/
      isRelativeY (): boolean;
      /**Gets if the 'z' field is relative.*/
      isRelativeZ (): boolean;
   }
   /**Represents a relative Vector.*/
   export class nmsulRelativeVec extends nmsulRelativeLocation<nmsuVector> {
      constructor (location: nmsuVector, relativeX: boolean, relativeY: boolean, relativeZ: boolean);
      /**Gets the location based on the relative fields and position.*/
      from (position: nmsuPosition): nmsuVector;
   }
   export class nmsnpspRemoveEntityEffectPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   /**Called by an Instance when an entity is removed from it.*/
   export class nmseiRemoveEntityFromInstanceEvent extends nmseInstanceEvent implements nmseCancellableEvent {
      constructor (instance: nmsiInstance, entity: nmseEntity);
      /**Gets the entity being removed.*/
      getEntity (): nmseEntity;
      /**Gets if the Event should be cancelled or not.*/
      isCancelled (): boolean;
      /**Marks the Event as cancelled or not.*/
      setCancelled (cancel: boolean): void;
   }
   export class nmsgtRequiredTag extends jlObject {
      constructor (type: nmsgtTBasicTypes, name: nmsuNamespaceID);
      getName (): nmsuNamespaceID;
      getType (): nmsgtTBasicTypes;
   }
   /**Responsible for making sure Minestom has the necessary files to run (notably registry files)*/
   export class nmsrResourceGatherer extends jlObject {
      constructor ();
      /**Checks if registry\/ folder is present  If it is not, download the minecraft server jar, run the data generator and extract the wanted files  If it is already present, directly return*/
      static ensureResourcesArePresent (version: string): void;
   }
   /**Represents a resource pack which can be sent with Player.setResourcePack(ResourcePack).*/
   export class nmsrResourcePack extends jlObject {
      constructor (url: string, hash: string);
      /**Gets the resource pack hash.*/
      getHash (): string;
      /**Gets the resource pack URL.*/
      getUrl (): string;
   }
   export class nmslResourcePackListener extends jlObject {
      constructor ();
      static listener (packet: nmsnpcpClientResourcePackStatusPacket, player: nmsePlayer): void;
   }
   export class nmsnpspResourcePackSendPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   /**Represents the result of Player.setResourcePack(ResourcePack) in  PlayerResourcePackStatusEvent.*/
   export class nmsrResourcePackStatus extends jlEnum<nmsrResourcePackStatus> {
      static ACCEPTED: nmsrResourcePackStatus;
      static DECLINED: nmsrResourcePackStatus;
      static FAILED_DOWNLOAD: nmsrResourcePackStatus;
      static SUCCESS: nmsrResourcePackStatus;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsrResourcePackStatus;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsrResourcePackStatus[];
   }
   export class nmsnpspRespawnPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   /**Represents the data sent to the player when responding to a ping event.*/
   export class nmspResponseData extends jlObject {
      constructor ();
      /**Adds a series of entries to the response data sample.*/
      addEntries (entries: juCollection<nmsuiNamedAndIdentified>): void;
      /**Adds a series of entries to the response data sample.*/
      addEntries (...entries: nmsuiNamedAndIdentified[]): void;
      /**Adds an entry to the response data sample.*/
      addEntry (entry: nmsuiNamedAndIdentified): void;
      /**Clears the entries.*/
      clearEntries (): void;
      /**Get the response description*/
      getDescription (): nkatComponent;
      /**Gets a modifiable collection of the current entries.*/
      getEntries (): juCollection<nmsuiNamedAndIdentified>;
      /**Get the response favicon.*/
      getFavicon (): string;
      /**Get the response maximum player count.*/
      getMaxPlayer (): number;
      /**Get the response online count.*/
      getOnline (): number;
      /**Get the response protocol version.*/
      getProtocol (): number;
      /**Get the version name for the response.*/
      getVersion (): string;
      /**Sets the response description.*/
      setDescription (description: nkatComponent): void;
      /**Sets the response favicon.*/
      setFavicon (favicon: string): void;
      /**Sets the response maximum player count.*/
      setMaxPlayer (maxPlayer: number): void;
      /**Sets the response online count.*/
      setOnline (online: number): void;
      /**Sets the response protocol version.*/
      setProtocol (protocol: number): void;
      /**Sets the version name for the response.*/
      setVersion (version: string): void;
   }
   export class nmsnpshResponsePacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsuRotation extends jlEnum<nmsuRotation> {
      /**Rotated clockwise by 90 degrees*/
      static CLOCKWISE: nmsuRotation;
      /**Rotated clockwise by 135 degrees*/
      static CLOCKWISE_135: nmsuRotation;
      /**Rotated clockwise by 45 degrees*/
      static CLOCKWISE_45: nmsuRotation;
      /**Rotated counter-clockwise by 90 degrees*/
      static COUNTER_CLOCKWISE: nmsuRotation;
      /**Rotated counter-clockwise by 45 degrees*/
      static COUNTER_CLOCKWISE_45: nmsuRotation;
      /**Flipped upside-down, a 180 degree rotation*/
      static FLIPPED: nmsuRotation;
      /**Flipped upside-down + 45 degree rotation*/
      static FLIPPED_45: nmsuRotation;
      /**No rotation*/
      static NONE: nmsuRotation;
      /**Rotate clockwise by 90 degrees.*/
      rotateClockwise (): nmsuRotation;
      /**Rotate counter-clockwise by 90 degrees.*/
      rotateCounterClockwise (): nmsuRotation;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsuRotation;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsuRotation[];
   }
   export class nmsemwfSalmonMeta extends nmsemwfAbstractFishMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   /**An object which manages all the Task's.    Task first need to be built with buildTask(Runnable), you can then specify a delay with as example  TaskBuilder.delay(long, net.minestom.server.utils.time.TimeUnit)  or TaskBuilder.repeat(long, net.minestom.server.utils.time.TimeUnit),  and to finally schedule: TaskBuilder.schedule().    Shutdown tasks are built with buildShutdownTask(Runnable) and are executed, as the name implies, when the server stops.*/
   export class nmstSchedulerManager extends jlObject implements nmseIExtensionObserver {
      constructor ();
      /**Initializes a new TaskBuilder for creating a shutdown Task.*/
      buildShutdownTask (runnable: jlRunnable): nmstTaskBuilder;
      /**Initializes a new TaskBuilder for creating a Task.*/
      buildTask (runnable: jlRunnable): nmstTaskBuilder;
      /**Gets the execution service for all the registered Task.*/
      getBatchesPool (): jucExecutorService;
      /**Increments the current counter value.*/
      getCounterIdentifier (): number;
      /**Increments the current shutdown counter value.*/
      getShutdownCounterIdentifier (): number;
      /**Returns the shutdown task associated with this task id*/
      getShutdownTask (id: number): nmstTask;
      /**Gets a Collection with all the registered shutdown Task.*/
      getShutdownTasks (): udfoObjectCollection<nmstTask>;
      /**Returns the task associated with this task id*/
      getTask (id: number): nmstTask;
      /**Gets a Collection with all the registered Task.*/
      getTasks (): udfoObjectCollection<nmstTask>;
      /**Gets the scheduled execution service for all the registered Task.*/
      getTimerExecutionService (): jucScheduledExecutorService;
      /**Called before unloading an extension (that is, right after Extension#terminate and right before Extension#unload)*/
      onExtensionUnload (extensionName: string): void;
      /**Unschedules all non-transient tasks (Task.isTransient()) from this scheduler.*/
      removeExtensionTasksOnUnload (extension: string): void;
      /**Removes\/Forces the end of a Task.*/
      removeTask (task: nmstTask): void;
      /**Shutdowns all normal tasks and call the registered shutdown tasks.*/
      shutdown (): void;
   }
   /**This interface represents all scoreboard of Minecraft.*/
   export interface nmssScoreboard extends nmsViewable, nmsaaPacketGroupingAudience {
      /**Creates a creation objective packet.*/
      getCreationObjectivePacket (value: nkatComponent, type: nmsnpspSType): nmsnpspScoreboardObjectivePacket;
      /**Creates the destruction objective packet.*/
      getDestructionObjectivePacket (): nmsnpspScoreboardObjectivePacket;
      /**Creates the DisplayScoreboardPacket.*/
      getDisplayScoreboardPacket (position: number): nmsnpspDisplayScoreboardPacket;
      /**Gets the objective name of the scoreboard.*/
      getObjectiveName (): string;
      /**Gets an iterable of the players this audience contains.*/
      getPlayers (): juCollection<nmsePlayer>;
      /**Updates the score of a Player.*/
      updateScore (player: nmsePlayer, score: number): void;
   }
   export class nmsnpspScoreboardObjectivePacket extends jlObject implements nmsnpsComponentHoldingServerPacket {
      constructor ();
      /**Gets the components held by this object.*/
      components (): juCollection<nkatComponent>;
      /**Returns a copy of this object.*/
      copyWithOperator (operator: jufUnaryOperator<nkatComponent>): nmsnpsServerPacket;
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   /**This enumeration represents all available types for the scoreboard objective*/
   export class nmsnpspSType extends jlEnum<nmsnpspSType> {
      static HEARTS: nmsnpspSType;
      static INTEGER: nmsnpspSType;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsnpspSType;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsnpspSType[];
   }
   export class nmsipSection extends jlObject implements nmsucPublicCloneable<nmsipSection> {
      constructor (bitsPerEntry: number, bitsIncrement: number);
      /**Loops through all the sections and blocks to find unused array (empty chunk section)*/
      clean (): void;
      clear (): void;
      /**Creates and returns a copy of this object.*/
      clone (): nmsipSection;
      getBitsPerEntry (): number;
      getBlockAt (x: number, y: number, z: number): number;
      /**Get the amount of non air blocks in this section.*/
      getBlockCount (): number;
      getBlockPaletteMap (): iudfnShort2ShortOpenHashMap;
      getBlocks (): number[];
      getPaletteBlockMap (): iudfnShort2ShortLinkedOpenHashMap;
      /**Gets the index of the block on the section array based on the block position.*/
      static getSectionIndex (x: number, y: number, z: number): number;
      /**Resizes the array.*/
      resize (newBitsPerEntry: number): void;
      setBlockAt (x: number, y: number, z: number, blockId: number): void;
   }
   export class nmsnpspSelectAdvancementTabPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsgleSequenceEntry extends nmsglLEntry {
      constructor (type: nmsgleSequenceType, children: juList<nmsglLEntry>, weight: number, quality: number, conditions: juList<nmsgCondition>);
      generate (output: juList<nmsiItemStack>, arguments: nmsdData): void;
   }
   /**minecraft:sequence*/
   export class nmsgleSequenceType extends jlObject implements nmsglLootTableEntryType {
      constructor ();
      create (lootTableManager: nmsglLootTableManager, name: string, conditions: juList<nmsgCondition>, children: juList<nmsglLEntry>, expand: boolean, functions: juList<nmsglLootTableFunction>, weight: number, quality: number): nmsglLEntry;
   }
   /**Represents a Data object which can be serialized and read back.    See SerializableDataImpl for the default implementation.*/
   export class nmsdSerializableData extends nmsdData {
      constructor ();
      /**Creates and returns a copy of this object.*/
      clone (): nmsdSerializableData;
      /**Serializes the data into an array of bytes.*/
      getIndexedSerializedData (): number[];
      /**Serializes the data into an array of bytes.*/
      getSerializedData (typeToIndexMap: it.unimi.dsi.fastutil.objects.Object2ShortMap<string>, indexed: boolean): number[];
      /**Reads a data index map (type name -> type index).*/
      static readDataIndexes (binaryReader: nmsubBinaryReader): udfoObject2ShortMap<string>;
      /**Reads the index map and the data of a serialized SerializableData.*/
      readIndexedSerializedData (reader: nmsubBinaryReader): void;
      /**Reads the data of a SerializableData when you already have the index map.*/
      readSerializedData (reader: nmsubBinaryReader, typeToIndexMap: it.unimi.dsi.fastutil.objects.Object2ShortMap<string>): void;
      /**Writes the index info (class name -> class index), used to write the header for indexed serialized data.*/
      static writeDataIndexHeader (indexWriter: nmsubBinaryWriter, typeToIndexMap: it.unimi.dsi.fastutil.objects.Object2ShortMap<string>): void;
   }
   export class nmsdtSerializableDataData extends nmsdDataType<nmsdSerializableData> {
      constructor ();
      /**Decodes the data type.*/
      decode (reader: nmsubBinaryReader): nmsdSerializableData;
      /**Encodes the data type.*/
      encode (writer: nmsubBinaryWriter, value: nmsdSerializableData): void;
   }
   /**SerializableData implementation based on DataImpl.*/
   export class nmsdSerializableDataImpl extends nmsdSerializableData {
      constructor ();
      /**Creates and returns a copy of this object.*/
      clone (): nmsdSerializableDataImpl;
      /**Retrieves a value based on its key.*/
      get<T> (key: string): T;
      /**Gets the list of data keys.*/
      getKeys (): juSet<string>;
      /**Retrieves a value based on its key, give a default value if not found.*/
      getOrDefault<T> (key: string, defaultValue: T): T;
      /**Serializes the data into an array of bytes.*/
      getSerializedData (typeToIndexMap: it.unimi.dsi.fastutil.objects.Object2ShortMap<string>, indexed: boolean): number[];
      /**Gets if the data has a key.*/
      hasKey (key: string): boolean;
      /**Gets if the data is empty or not.*/
      isEmpty (): boolean;
      /**Reads the data of a SerializableData when you already have the index map.*/
      readSerializedData (reader: nmsubBinaryReader, typeToIndexMap: it.unimi.dsi.fastutil.objects.Object2ShortMap<string>): void;
      /**Sets a value to a specific key.*/
      set<T> (key: string, value: T, type: jlClass<T>): void;
   }
   export class nmsuSerializerUtils extends jlObject {
      static longToBlockPosition (value: number): nmsuBlockPosition;
      static positionToLong (x: number, y: number, z: number): number;
   }
   export class nmsnpspServerDifficultyPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   /**Called when a PlayerConnection sends a status packet,  usually to display information on the server list.*/
   export class nmsesServerListPingEvent extends nmseEvent implements nmseCancellableEvent {
      constructor (type: nmspServerListPingType);
      constructor (connection: nmsnpPlayerConnection, type: nmspServerListPingType);
      /**PlayerConnection of received packet.*/
      getConnection (): nmsnpPlayerConnection;
      /**Gets the ping type that the client is pinging with.*/
      getPingType (): nmspServerListPingType;
      /**Gets the response data that is sent to the client.*/
      getResponseData (): nmspResponseData;
      /**Gets if the Event should be cancelled or not.*/
      isCancelled (): boolean;
      /**Cancelling this event will cause the server to appear offline in the vanilla server list.*/
      setCancelled (cancel: boolean): void;
      /**Sets the response data, overwriting the exiting data.*/
      setResponseData (responseData: nmspResponseData): void;
   }
   /**An enum containing the different types of server list ping responses.*/
   export class nmspServerListPingType extends jlEnum<nmspServerListPingType> {
      /**The client is on version 1.5 or lower and supports a description and the player count.*/
      static LEGACY_UNVERSIONED: nmspServerListPingType;
      /**The client is on version 1.6 and supports a description, the player count and the version information.*/
      static LEGACY_VERSIONED: nmspServerListPingType;
      /**The client is on version 1.16 or higher and supports full RGB with JSON text formatting.*/
      static MODERN_FULL_RGB: nmspServerListPingType;
      /**The client is on version 1.7 or higher and doesn't support full RGB but does support JSON text formatting.*/
      static MODERN_NAMED_COLORS: nmspServerListPingType;
      /**The ping that is sent when OpenToLAN is enabled and sending packets.*/
      static OPEN_TO_LAN: nmspServerListPingType;
      /**Gets the server list ping version from the protocol version.*/
      static fromModernProtocolVersion (version: number): nmspServerListPingType;
      /**Creates a legacy ping response for client versions below the Netty rewrite (1.6-).*/
      static getLegacyPingResponse (data: nmspResponseData, supportsVersions: boolean): string;
      /**Creates a modern ping response for client versions above the Netty rewrite (1.7+).*/
      static getModernPingResponse (data: nmspResponseData, supportsFullRgb: boolean): ggJsonObject;
      /**Creates a ping sent when the server is sending OpenToLAN packets.*/
      static getOpenToLANPing (data: nmspResponseData): string;
      /**Gets the ping response for this version.*/
      getPingResponse (responseData: nmspResponseData): string;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmspServerListPingType;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmspServerListPingType[];
   }
   /**Represents a packet which can be sent to a player using PlayerConnection.sendPacket(ServerPacket).*/
   export interface nmsnpsServerPacket extends nmsubReadable, nmsubWriteable {
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
   }
   /**Interface used to add a listener for outgoing packets with ConnectionManager.onPacketSend(ServerPacketConsumer).*/
   export interface nmslmServerPacketConsumer {
      /**Called when a packet is sent to a client.*/
      accept (players: juCollection<nmsePlayer>, packetController: nmslmPacketController, packet: nmsnpsServerPacket): void;
   }
   export class nmsnpsServerPacketIdentifier extends jlObject {
      constructor ();
   }
   /**Sender used in CommandManager.executeServerCommand(String).    Although this class implemented CommandSender and thus Audience, no  data can be sent to this sender because it's purpose is to process the data of  CommandContext.getReturnData().*/
   export class nmscServerSender extends jlObject implements nmscCommandSender {
      constructor ();
      /**Returns all permissions associated to this handler.*/
      getAllPermissions (): juSet<nmspPermission>;
   }
   export class nmsnpslSetCompressionPacket extends jlObject implements nmsnpsServerPacket {
      constructor (threshold: number);
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspSetCooldownPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspSetExperiencePacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspSetPassengersPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspSetSlotPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Returns a SetSlotPacket used to change a player cursor item.*/
      static createCursorPacket (cursorItem: nmsiItemStack): nmsnpspSetSlotPacket;
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmslSettingsListener extends jlObject {
      constructor ();
      static listener (packet: nmsnpcpClientSettingsPacket, player: nmsePlayer): void;
   }
   export class nmsrShapedRecipe extends nmsrRecipe {
      constructor (recipeId: string, width: number, height: number, group: string, ingredients: juList<nmsnpspDIngredient>, result: nmsiItemStack);
      addIngredient (ingredient: nmsnpspDIngredient): void;
      getGroup (): string;
      getHeight (): number;
      getIngredients (): juList<nmsnpspDIngredient>;
      getResult (): nmsiItemStack;
      getWidth (): number;
      setGroup (group: string): void;
      setResult (result: nmsiItemStack): void;
   }
   export class nmsrShapelessRecipe extends nmsrRecipe {
      constructor (recipeId: string, group: string, ingredients: juList<nmsnpspDIngredient>, result: nmsiItemStack);
      addIngredient (ingredient: nmsnpspDIngredient): void;
      getGroup (): string;
      getIngredients (): juList<nmsnpspDIngredient>;
      getResult (): nmsiItemStack;
      setGroup (group: string): void;
      setResult (result: nmsiItemStack): void;
   }
   /**The SharedInstance is an instance that shares the same chunks as its linked InstanceContainer,  entities are separated.*/
   export class nmsiSharedInstance extends nmsiInstance {
      constructor (uniqueId: juUUID, instanceContainer: nmsiInstanceContainer);
      /**Does call PlayerBlockBreakEvent  and send particle packets*/
      breakBlock (player: nmsePlayer, blockPosition: nmsuBlockPosition): boolean;
      /**Called to generated a new Chunk from scratch.*/
      createChunk (chunkX: number, chunkZ: number, callback: nmsucChunkCallback): void;
      /**When set to true, chunks will load automatically when requested.*/
      enableAutoChunkLoad (enable: boolean): void;
      /**Gets the loaded Chunk at a position.*/
      getChunk (chunkX: number, chunkZ: number): nmsiChunk;
      /**Gets the instance ChunkGenerator.*/
      getChunkGenerator (): nmsiChunkGenerator;
      /**Gets all the instance's loaded chunks.*/
      getChunks (): juCollection<nmsiChunk>;
      /**Gets the InstanceContainer from where this instance takes its chunks from.*/
      getInstanceContainer (): nmsiInstanceContainer;
      /**Gets the instance StorageLocation.*/
      getStorageLocation (): nmssStorageLocation;
      /**Gets if the instance should auto load chunks.*/
      hasEnabledAutoChunkLoad (): boolean;
      /**Determines whether a position in the void.*/
      isInVoid (position: nmsuPosition): boolean;
      /**Forces the generation of a Chunk, even if no file and ChunkGenerator are defined.*/
      loadChunk (chunkX: number, chunkZ: number, callback: nmsucChunkCallback): void;
      /**Loads the chunk if the chunk is already loaded or if  Instance.hasEnabledAutoChunkLoad() returns true.*/
      loadOptionalChunk (chunkX: number, chunkZ: number, callback: nmsucChunkCallback): void;
      /**Used to change the id of the block in a specific BlockPosition.*/
      refreshBlockStateId (blockPosition: nmsuBlockPosition, blockStateId: number): void;
      /**Used when a Chunk is not currently loaded in memory and need to be retrieved from somewhere else.*/
      retrieveChunk (chunkX: number, chunkZ: number, callback: nmsucChunkCallback): void;
      /**Saves multiple chunks to permanent storage.*/
      saveChunksToStorage (callback: jlRunnable): void;
      /**Saves a Chunk to permanent storage.*/
      saveChunkToStorage (chunk: nmsiChunk, callback: jlRunnable): void;
      /**Schedules a block update at a given BlockPosition.*/
      scheduleUpdate (time: number, unit: nmsutTimeUnit, position: nmsuBlockPosition): void;
      /**Sets a block at a position.*/
      setBlockStateId (x: number, y: number, z: number, blockStateId: number, data: nmsdData): void;
      /**Changes the instance ChunkGenerator.*/
      setChunkGenerator (chunkGenerator: nmsiChunkGenerator): void;
      /**Sets a CustomBlock at a position.*/
      setCustomBlock (x: number, y: number, z: number, customBlockId: number, data: nmsdData): void;
      /**Sets a CustomBlock at a position with a custom state id.*/
      setSeparateBlocks (x: number, y: number, z: number, blockStateId: number, customBlockId: number, data: nmsdData): void;
      /**Changes the instance StorageLocation.*/
      setStorageLocation (storageLocation: nmssStorageLocation): void;
      /**Schedules the removal of a Chunk, this method does not promise when it will be done.*/
      unloadChunk (chunk: nmsiChunk): void;
   }
   export class nmsemaSheepMeta extends nmsemaAnimalMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getColor (): number;
      isSheared (): boolean;
      setColor (color: number): void;
      setSheared (value: boolean): void;
   }
   export class nmsdtaShortArrayData extends nmsdDataType<short[]> {
      constructor ();
      /**Decodes the data type.*/
      decode (reader: nmsubBinaryReader): number[];
      /**Encodes the data type.*/
      encode (writer: nmsubBinaryWriter, value: number[]): void;
   }
   export class nmsdtShortData extends nmsdDataType<jlShort> {
      constructor ();
      /**Decodes the data type.*/
      decode (reader: nmsubBinaryReader): jlShort;
      /**Encodes the data type.*/
      encode (writer: nmsubBinaryWriter, value: jlShort): void;
   }
   export class nmsumShortRange extends nmsumRange<jlShort> {
      constructor (value: jlShort);
      constructor (minimum: jlShort, maximum: jlShort);
      /**Whether the given value is in range of the minimum and the maximum.*/
      isInRange (value: jlShort): boolean;
   }
   export class nmsemoShulkerBulletMeta extends nmsemEntityMeta implements nmsemObjectDataProvider {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getObjectData (): number;
      requiresVelocityPacketAtSpawn (): boolean;
   }
   export class nmsemgShulkerMeta extends nmsemgAbstractGolemMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getAttachFace (): nmsuDirection;
      getAttachmentPosition (): nmsuBlockPosition;
      getColor (): number;
      getShieldHeight (): number;
      setAttachFace (value: nmsuDirection): void;
      setAttachmentPosition (value: nmsuBlockPosition): void;
      setColor (value: number): void;
      setShieldHeight (value: number): void;
   }
   /**Represents a sidebar which can contain up to 16 Sidebar.ScoreboardLine.    In order to use it you need to create a new instance using the constructor Sidebar(String) and create new lines  with createLine(ScoreboardLine). You can then add a Player to the viewing list using addViewer(Player)  and remove him later with removeViewer(Player).    Lines can be modified using their respective identifier using  updateLineContent(String, Component) and updateLineScore(String, int).*/
   export class nmssSidebar extends jlObject implements nmssScoreboard {
      constructor (title: string);
      constructor (title: nkatComponent);
      /**Adds a viewer.*/
      addViewer (player: nmsePlayer): boolean;
      /**Creates a new Sidebar.ScoreboardLine.*/
      createLine (scoreboardLine: nmssSScoreboardLine): void;
      /**Gets a Sidebar.ScoreboardLine through the given identifier*/
      getLine (id: string): nmssSScoreboardLine;
      /**Gets a Set containing all the registered lines.*/
      getLines (): juSet<nmssSScoreboardLine>;
      /**Gets the objective name of the scoreboard.*/
      getObjectiveName (): string;
      /**Gets all the viewers of this viewable element.*/
      getViewers (): juSet<nmsePlayer>;
      /**Removes a Sidebar.ScoreboardLine through the given identifier*/
      removeLine (id: string): void;
      /**Removes a viewer.*/
      removeViewer (player: nmsePlayer): boolean;
      /**Changes the Sidebar title*/
      setTitle (title: nkatComponent): void;
      /**Updates a Sidebar.ScoreboardLine content through the given identifier.*/
      updateLineContent (id: string, content: nkatComponent): void;
      /**Updates the score of a Sidebar.ScoreboardLine through the given identifier*/
      updateLineScore (id: string, score: number): void;
   }
   /**This class is used to create a line for the sidebar.*/
   export class nmssSScoreboardLine extends jlObject {
      constructor (id: string, content: nkatComponent, line: number);
      constructor (id: string, content: nmscJsonMessage, line: number);
      /**Gets the content of the line*/
      getContent (): nkatComponent;
      /**Gets the identifier of the line*/
      getId (): string;
      /**Gets the position of the line*/
      getLine (): number;
   }
   export class nmsemmSilverfishMeta extends nmsemmMonsterMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   export class nmscbSimpleCommand extends nmscbCommand {
      constructor (name: string, ...aliases: string[]);
      /**Called to know if a player has access to the command.*/
      hasAccess (sender: nmscCommandSender, commandString: string): boolean;
      /**Called when the command is executed by a CommandSender.*/
      process (sender: nmscCommandSender, command: string, args: string[]): boolean;
   }
   /**Uses a single thread for all chunks.*/
   export class nmstSingleThreadProvider extends nmstThreadProvider {
      constructor ();
      /**Performs a server tick for all chunks based on their linked thread.*/
      findThread (chunk: nmsiChunk): number;
      /**Defines how often chunks thread should be updated.*/
      getChunkRefreshType (): nmstTRefreshType;
   }
   export class nmsemaSkeletonHorseMeta extends nmsemaAbstractHorseMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   export class nmsemmsSkeletonMeta extends nmsemmsAbstractSkeletonMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   export class nmsemoSlimeMeta extends nmsemMobMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getSize (): number;
      setSize (value: number): void;
   }
   export class nmsemiSmallFireballMeta extends nmsemEntityMeta implements nmsemObjectDataProvider, nmsemProjectileMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getItem (): nmsiItemStack;
      getObjectData (): number;
      getShooter (): nmseEntity;
      requiresVelocityPacketAtSpawn (): boolean;
      setItem (item: nmsiItemStack): void;
      setShooter (shooter: nmseEntity): void;
   }
   export class nmsrSmeltingRecipe extends nmsrRecipe {
      constructor (recipeId: string, group: string, result: nmsiItemStack, experience: number, cookingTime: number);
      getCookingTime (): number;
      getExperience (): number;
      getGroup (): string;
      getIngredient (): nmsnpspDIngredient;
      getResult (): nmsiItemStack;
      setCookingTime (cookingTime: number): void;
      setExperience (experience: number): void;
      setGroup (group: string): void;
      setIngredient (ingredient: nmsnpspDIngredient): void;
      setResult (result: nmsiItemStack): void;
   }
   export class nmsrSmithingRecipe extends nmsrRecipe {
      constructor (recipeId: string, baseIngredient: nmsnpspDIngredient, additionIngredient: nmsnpspDIngredient, result: nmsiItemStack);
      getAdditionIngredient (): nmsnpspDIngredient;
      getBaseIngredient (): nmsnpspDIngredient;
      getResult (): nmsiItemStack;
      setAdditionIngredient (additionIngredient: nmsnpspDIngredient): void;
      setBaseIngredient (baseIngredient: nmsnpspDIngredient): void;
      setResult (result: nmsiItemStack): void;
   }
   export class nmsrSmokingRecipe extends nmsrRecipe {
      constructor (recipeId: string, group: string, result: nmsiItemStack, experience: number, cookingTime: number);
      getCookingTime (): number;
      getExperience (): number;
      getGroup (): string;
      getIngredient (): nmsnpspDIngredient;
      getResult (): nmsiItemStack;
      setCookingTime (cookingTime: number): void;
      setExperience (experience: number): void;
      setGroup (group: string): void;
      setIngredient (ingredient: nmsnpspDIngredient): void;
      setResult (result: nmsiItemStack): void;
   }
   export class nmsemiSnowballMeta extends nmsemEntityMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getItem (): nmsiItemStack;
      setItem (item: nmsiItemStack): void;
   }
   export class nmsemgSnowGolemMeta extends nmsemgAbstractGolemMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      isHasPumpkinHat (): boolean;
      setHasPumpkinHat (value: boolean): void;
   }
   export class nmsnpspSoundEffectPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      static create (category: nkasSSource, sound: nmssSoundEvent, position: nmsuPosition, volume: number, pitch: number): nmsnpspSoundEffectPacket;
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   /**\/\/==============================  \/\/  AUTOGENERATED BY EnumGenerator  \/\/==============================*/
   export class nmssSoundEvent extends jlEnum<nmssSoundEvent> implements net.kyori.adventure.key.Keyed, nkasSType {
      static AMBIENT_BASALT_DELTAS_ADDITIONS: nmssSoundEvent;
      static AMBIENT_BASALT_DELTAS_LOOP: nmssSoundEvent;
      static AMBIENT_BASALT_DELTAS_MOOD: nmssSoundEvent;
      static AMBIENT_CAVE: nmssSoundEvent;
      static AMBIENT_CRIMSON_FOREST_ADDITIONS: nmssSoundEvent;
      static AMBIENT_CRIMSON_FOREST_LOOP: nmssSoundEvent;
      static AMBIENT_CRIMSON_FOREST_MOOD: nmssSoundEvent;
      static AMBIENT_NETHER_WASTES_ADDITIONS: nmssSoundEvent;
      static AMBIENT_NETHER_WASTES_LOOP: nmssSoundEvent;
      static AMBIENT_NETHER_WASTES_MOOD: nmssSoundEvent;
      static AMBIENT_SOUL_SAND_VALLEY_ADDITIONS: nmssSoundEvent;
      static AMBIENT_SOUL_SAND_VALLEY_LOOP: nmssSoundEvent;
      static AMBIENT_SOUL_SAND_VALLEY_MOOD: nmssSoundEvent;
      static AMBIENT_UNDERWATER_ENTER: nmssSoundEvent;
      static AMBIENT_UNDERWATER_EXIT: nmssSoundEvent;
      static AMBIENT_UNDERWATER_LOOP: nmssSoundEvent;
      static AMBIENT_UNDERWATER_LOOP_ADDITIONS: nmssSoundEvent;
      static AMBIENT_UNDERWATER_LOOP_ADDITIONS_RARE: nmssSoundEvent;
      static AMBIENT_UNDERWATER_LOOP_ADDITIONS_ULTRA_RARE: nmssSoundEvent;
      static AMBIENT_WARPED_FOREST_ADDITIONS: nmssSoundEvent;
      static AMBIENT_WARPED_FOREST_LOOP: nmssSoundEvent;
      static AMBIENT_WARPED_FOREST_MOOD: nmssSoundEvent;
      static BLOCK_ANCIENT_DEBRIS_BREAK: nmssSoundEvent;
      static BLOCK_ANCIENT_DEBRIS_FALL: nmssSoundEvent;
      static BLOCK_ANCIENT_DEBRIS_HIT: nmssSoundEvent;
      static BLOCK_ANCIENT_DEBRIS_PLACE: nmssSoundEvent;
      static BLOCK_ANCIENT_DEBRIS_STEP: nmssSoundEvent;
      static BLOCK_ANVIL_BREAK: nmssSoundEvent;
      static BLOCK_ANVIL_DESTROY: nmssSoundEvent;
      static BLOCK_ANVIL_FALL: nmssSoundEvent;
      static BLOCK_ANVIL_HIT: nmssSoundEvent;
      static BLOCK_ANVIL_LAND: nmssSoundEvent;
      static BLOCK_ANVIL_PLACE: nmssSoundEvent;
      static BLOCK_ANVIL_STEP: nmssSoundEvent;
      static BLOCK_ANVIL_USE: nmssSoundEvent;
      static BLOCK_BAMBOO_BREAK: nmssSoundEvent;
      static BLOCK_BAMBOO_FALL: nmssSoundEvent;
      static BLOCK_BAMBOO_HIT: nmssSoundEvent;
      static BLOCK_BAMBOO_PLACE: nmssSoundEvent;
      static BLOCK_BAMBOO_SAPLING_BREAK: nmssSoundEvent;
      static BLOCK_BAMBOO_SAPLING_HIT: nmssSoundEvent;
      static BLOCK_BAMBOO_SAPLING_PLACE: nmssSoundEvent;
      static BLOCK_BAMBOO_STEP: nmssSoundEvent;
      static BLOCK_BARREL_CLOSE: nmssSoundEvent;
      static BLOCK_BARREL_OPEN: nmssSoundEvent;
      static BLOCK_BASALT_BREAK: nmssSoundEvent;
      static BLOCK_BASALT_FALL: nmssSoundEvent;
      static BLOCK_BASALT_HIT: nmssSoundEvent;
      static BLOCK_BASALT_PLACE: nmssSoundEvent;
      static BLOCK_BASALT_STEP: nmssSoundEvent;
      static BLOCK_BEACON_ACTIVATE: nmssSoundEvent;
      static BLOCK_BEACON_AMBIENT: nmssSoundEvent;
      static BLOCK_BEACON_DEACTIVATE: nmssSoundEvent;
      static BLOCK_BEACON_POWER_SELECT: nmssSoundEvent;
      static BLOCK_BEEHIVE_DRIP: nmssSoundEvent;
      static BLOCK_BEEHIVE_ENTER: nmssSoundEvent;
      static BLOCK_BEEHIVE_EXIT: nmssSoundEvent;
      static BLOCK_BEEHIVE_SHEAR: nmssSoundEvent;
      static BLOCK_BEEHIVE_WORK: nmssSoundEvent;
      static BLOCK_BELL_RESONATE: nmssSoundEvent;
      static BLOCK_BELL_USE: nmssSoundEvent;
      static BLOCK_BLASTFURNACE_FIRE_CRACKLE: nmssSoundEvent;
      static BLOCK_BONE_BLOCK_BREAK: nmssSoundEvent;
      static BLOCK_BONE_BLOCK_FALL: nmssSoundEvent;
      static BLOCK_BONE_BLOCK_HIT: nmssSoundEvent;
      static BLOCK_BONE_BLOCK_PLACE: nmssSoundEvent;
      static BLOCK_BONE_BLOCK_STEP: nmssSoundEvent;
      static BLOCK_BREWING_STAND_BREW: nmssSoundEvent;
      static BLOCK_BUBBLE_COLUMN_BUBBLE_POP: nmssSoundEvent;
      static BLOCK_BUBBLE_COLUMN_UPWARDS_AMBIENT: nmssSoundEvent;
      static BLOCK_BUBBLE_COLUMN_UPWARDS_INSIDE: nmssSoundEvent;
      static BLOCK_BUBBLE_COLUMN_WHIRLPOOL_AMBIENT: nmssSoundEvent;
      static BLOCK_BUBBLE_COLUMN_WHIRLPOOL_INSIDE: nmssSoundEvent;
      static BLOCK_CAMPFIRE_CRACKLE: nmssSoundEvent;
      static BLOCK_CHAIN_BREAK: nmssSoundEvent;
      static BLOCK_CHAIN_FALL: nmssSoundEvent;
      static BLOCK_CHAIN_HIT: nmssSoundEvent;
      static BLOCK_CHAIN_PLACE: nmssSoundEvent;
      static BLOCK_CHAIN_STEP: nmssSoundEvent;
      static BLOCK_CHEST_CLOSE: nmssSoundEvent;
      static BLOCK_CHEST_LOCKED: nmssSoundEvent;
      static BLOCK_CHEST_OPEN: nmssSoundEvent;
      static BLOCK_CHORUS_FLOWER_DEATH: nmssSoundEvent;
      static BLOCK_CHORUS_FLOWER_GROW: nmssSoundEvent;
      static BLOCK_COMPARATOR_CLICK: nmssSoundEvent;
      static BLOCK_COMPOSTER_EMPTY: nmssSoundEvent;
      static BLOCK_COMPOSTER_FILL: nmssSoundEvent;
      static BLOCK_COMPOSTER_FILL_SUCCESS: nmssSoundEvent;
      static BLOCK_COMPOSTER_READY: nmssSoundEvent;
      static BLOCK_CONDUIT_ACTIVATE: nmssSoundEvent;
      static BLOCK_CONDUIT_AMBIENT: nmssSoundEvent;
      static BLOCK_CONDUIT_AMBIENT_SHORT: nmssSoundEvent;
      static BLOCK_CONDUIT_ATTACK_TARGET: nmssSoundEvent;
      static BLOCK_CONDUIT_DEACTIVATE: nmssSoundEvent;
      static BLOCK_CORAL_BLOCK_BREAK: nmssSoundEvent;
      static BLOCK_CORAL_BLOCK_FALL: nmssSoundEvent;
      static BLOCK_CORAL_BLOCK_HIT: nmssSoundEvent;
      static BLOCK_CORAL_BLOCK_PLACE: nmssSoundEvent;
      static BLOCK_CORAL_BLOCK_STEP: nmssSoundEvent;
      static BLOCK_CROP_BREAK: nmssSoundEvent;
      static BLOCK_DISPENSER_DISPENSE: nmssSoundEvent;
      static BLOCK_DISPENSER_FAIL: nmssSoundEvent;
      static BLOCK_DISPENSER_LAUNCH: nmssSoundEvent;
      static BLOCK_ENCHANTMENT_TABLE_USE: nmssSoundEvent;
      static BLOCK_END_GATEWAY_SPAWN: nmssSoundEvent;
      static BLOCK_END_PORTAL_FRAME_FILL: nmssSoundEvent;
      static BLOCK_END_PORTAL_SPAWN: nmssSoundEvent;
      static BLOCK_ENDER_CHEST_CLOSE: nmssSoundEvent;
      static BLOCK_ENDER_CHEST_OPEN: nmssSoundEvent;
      static BLOCK_FENCE_GATE_CLOSE: nmssSoundEvent;
      static BLOCK_FENCE_GATE_OPEN: nmssSoundEvent;
      static BLOCK_FIRE_AMBIENT: nmssSoundEvent;
      static BLOCK_FIRE_EXTINGUISH: nmssSoundEvent;
      static BLOCK_FUNGUS_BREAK: nmssSoundEvent;
      static BLOCK_FUNGUS_FALL: nmssSoundEvent;
      static BLOCK_FUNGUS_HIT: nmssSoundEvent;
      static BLOCK_FUNGUS_PLACE: nmssSoundEvent;
      static BLOCK_FUNGUS_STEP: nmssSoundEvent;
      static BLOCK_FURNACE_FIRE_CRACKLE: nmssSoundEvent;
      static BLOCK_GILDED_BLACKSTONE_BREAK: nmssSoundEvent;
      static BLOCK_GILDED_BLACKSTONE_FALL: nmssSoundEvent;
      static BLOCK_GILDED_BLACKSTONE_HIT: nmssSoundEvent;
      static BLOCK_GILDED_BLACKSTONE_PLACE: nmssSoundEvent;
      static BLOCK_GILDED_BLACKSTONE_STEP: nmssSoundEvent;
      static BLOCK_GLASS_BREAK: nmssSoundEvent;
      static BLOCK_GLASS_FALL: nmssSoundEvent;
      static BLOCK_GLASS_HIT: nmssSoundEvent;
      static BLOCK_GLASS_PLACE: nmssSoundEvent;
      static BLOCK_GLASS_STEP: nmssSoundEvent;
      static BLOCK_GRASS_BREAK: nmssSoundEvent;
      static BLOCK_GRASS_FALL: nmssSoundEvent;
      static BLOCK_GRASS_HIT: nmssSoundEvent;
      static BLOCK_GRASS_PLACE: nmssSoundEvent;
      static BLOCK_GRASS_STEP: nmssSoundEvent;
      static BLOCK_GRAVEL_BREAK: nmssSoundEvent;
      static BLOCK_GRAVEL_FALL: nmssSoundEvent;
      static BLOCK_GRAVEL_HIT: nmssSoundEvent;
      static BLOCK_GRAVEL_PLACE: nmssSoundEvent;
      static BLOCK_GRAVEL_STEP: nmssSoundEvent;
      static BLOCK_GRINDSTONE_USE: nmssSoundEvent;
      static BLOCK_HONEY_BLOCK_BREAK: nmssSoundEvent;
      static BLOCK_HONEY_BLOCK_FALL: nmssSoundEvent;
      static BLOCK_HONEY_BLOCK_HIT: nmssSoundEvent;
      static BLOCK_HONEY_BLOCK_PLACE: nmssSoundEvent;
      static BLOCK_HONEY_BLOCK_SLIDE: nmssSoundEvent;
      static BLOCK_HONEY_BLOCK_STEP: nmssSoundEvent;
      static BLOCK_IRON_DOOR_CLOSE: nmssSoundEvent;
      static BLOCK_IRON_DOOR_OPEN: nmssSoundEvent;
      static BLOCK_IRON_TRAPDOOR_CLOSE: nmssSoundEvent;
      static BLOCK_IRON_TRAPDOOR_OPEN: nmssSoundEvent;
      static BLOCK_LADDER_BREAK: nmssSoundEvent;
      static BLOCK_LADDER_FALL: nmssSoundEvent;
      static BLOCK_LADDER_HIT: nmssSoundEvent;
      static BLOCK_LADDER_PLACE: nmssSoundEvent;
      static BLOCK_LADDER_STEP: nmssSoundEvent;
      static BLOCK_LANTERN_BREAK: nmssSoundEvent;
      static BLOCK_LANTERN_FALL: nmssSoundEvent;
      static BLOCK_LANTERN_HIT: nmssSoundEvent;
      static BLOCK_LANTERN_PLACE: nmssSoundEvent;
      static BLOCK_LANTERN_STEP: nmssSoundEvent;
      static BLOCK_LAVA_AMBIENT: nmssSoundEvent;
      static BLOCK_LAVA_EXTINGUISH: nmssSoundEvent;
      static BLOCK_LAVA_POP: nmssSoundEvent;
      static BLOCK_LEVER_CLICK: nmssSoundEvent;
      static BLOCK_LILY_PAD_PLACE: nmssSoundEvent;
      static BLOCK_LODESTONE_BREAK: nmssSoundEvent;
      static BLOCK_LODESTONE_FALL: nmssSoundEvent;
      static BLOCK_LODESTONE_HIT: nmssSoundEvent;
      static BLOCK_LODESTONE_PLACE: nmssSoundEvent;
      static BLOCK_LODESTONE_STEP: nmssSoundEvent;
      static BLOCK_METAL_BREAK: nmssSoundEvent;
      static BLOCK_METAL_FALL: nmssSoundEvent;
      static BLOCK_METAL_HIT: nmssSoundEvent;
      static BLOCK_METAL_PLACE: nmssSoundEvent;
      static BLOCK_METAL_PRESSURE_PLATE_CLICK_OFF: nmssSoundEvent;
      static BLOCK_METAL_PRESSURE_PLATE_CLICK_ON: nmssSoundEvent;
      static BLOCK_METAL_STEP: nmssSoundEvent;
      static BLOCK_NETHER_BRICKS_BREAK: nmssSoundEvent;
      static BLOCK_NETHER_BRICKS_FALL: nmssSoundEvent;
      static BLOCK_NETHER_BRICKS_HIT: nmssSoundEvent;
      static BLOCK_NETHER_BRICKS_PLACE: nmssSoundEvent;
      static BLOCK_NETHER_BRICKS_STEP: nmssSoundEvent;
      static BLOCK_NETHER_GOLD_ORE_BREAK: nmssSoundEvent;
      static BLOCK_NETHER_GOLD_ORE_FALL: nmssSoundEvent;
      static BLOCK_NETHER_GOLD_ORE_HIT: nmssSoundEvent;
      static BLOCK_NETHER_GOLD_ORE_PLACE: nmssSoundEvent;
      static BLOCK_NETHER_GOLD_ORE_STEP: nmssSoundEvent;
      static BLOCK_NETHER_ORE_BREAK: nmssSoundEvent;
      static BLOCK_NETHER_ORE_FALL: nmssSoundEvent;
      static BLOCK_NETHER_ORE_HIT: nmssSoundEvent;
      static BLOCK_NETHER_ORE_PLACE: nmssSoundEvent;
      static BLOCK_NETHER_ORE_STEP: nmssSoundEvent;
      static BLOCK_NETHER_SPROUTS_BREAK: nmssSoundEvent;
      static BLOCK_NETHER_SPROUTS_FALL: nmssSoundEvent;
      static BLOCK_NETHER_SPROUTS_HIT: nmssSoundEvent;
      static BLOCK_NETHER_SPROUTS_PLACE: nmssSoundEvent;
      static BLOCK_NETHER_SPROUTS_STEP: nmssSoundEvent;
      static BLOCK_NETHER_WART_BREAK: nmssSoundEvent;
      static BLOCK_NETHERITE_BLOCK_BREAK: nmssSoundEvent;
      static BLOCK_NETHERITE_BLOCK_FALL: nmssSoundEvent;
      static BLOCK_NETHERITE_BLOCK_HIT: nmssSoundEvent;
      static BLOCK_NETHERITE_BLOCK_PLACE: nmssSoundEvent;
      static BLOCK_NETHERITE_BLOCK_STEP: nmssSoundEvent;
      static BLOCK_NETHERRACK_BREAK: nmssSoundEvent;
      static BLOCK_NETHERRACK_FALL: nmssSoundEvent;
      static BLOCK_NETHERRACK_HIT: nmssSoundEvent;
      static BLOCK_NETHERRACK_PLACE: nmssSoundEvent;
      static BLOCK_NETHERRACK_STEP: nmssSoundEvent;
      static BLOCK_NOTE_BLOCK_BANJO: nmssSoundEvent;
      static BLOCK_NOTE_BLOCK_BASEDRUM: nmssSoundEvent;
      static BLOCK_NOTE_BLOCK_BASS: nmssSoundEvent;
      static BLOCK_NOTE_BLOCK_BELL: nmssSoundEvent;
      static BLOCK_NOTE_BLOCK_BIT: nmssSoundEvent;
      static BLOCK_NOTE_BLOCK_CHIME: nmssSoundEvent;
      static BLOCK_NOTE_BLOCK_COW_BELL: nmssSoundEvent;
      static BLOCK_NOTE_BLOCK_DIDGERIDOO: nmssSoundEvent;
      static BLOCK_NOTE_BLOCK_FLUTE: nmssSoundEvent;
      static BLOCK_NOTE_BLOCK_GUITAR: nmssSoundEvent;
      static BLOCK_NOTE_BLOCK_HARP: nmssSoundEvent;
      static BLOCK_NOTE_BLOCK_HAT: nmssSoundEvent;
      static BLOCK_NOTE_BLOCK_IRON_XYLOPHONE: nmssSoundEvent;
      static BLOCK_NOTE_BLOCK_PLING: nmssSoundEvent;
      static BLOCK_NOTE_BLOCK_SNARE: nmssSoundEvent;
      static BLOCK_NOTE_BLOCK_XYLOPHONE: nmssSoundEvent;
      static BLOCK_NYLIUM_BREAK: nmssSoundEvent;
      static BLOCK_NYLIUM_FALL: nmssSoundEvent;
      static BLOCK_NYLIUM_HIT: nmssSoundEvent;
      static BLOCK_NYLIUM_PLACE: nmssSoundEvent;
      static BLOCK_NYLIUM_STEP: nmssSoundEvent;
      static BLOCK_PISTON_CONTRACT: nmssSoundEvent;
      static BLOCK_PISTON_EXTEND: nmssSoundEvent;
      static BLOCK_PORTAL_AMBIENT: nmssSoundEvent;
      static BLOCK_PORTAL_TRAVEL: nmssSoundEvent;
      static BLOCK_PORTAL_TRIGGER: nmssSoundEvent;
      static BLOCK_PUMPKIN_CARVE: nmssSoundEvent;
      static BLOCK_REDSTONE_TORCH_BURNOUT: nmssSoundEvent;
      static BLOCK_RESPAWN_ANCHOR_AMBIENT: nmssSoundEvent;
      static BLOCK_RESPAWN_ANCHOR_CHARGE: nmssSoundEvent;
      static BLOCK_RESPAWN_ANCHOR_DEPLETE: nmssSoundEvent;
      static BLOCK_RESPAWN_ANCHOR_SET_SPAWN: nmssSoundEvent;
      static BLOCK_ROOTS_BREAK: nmssSoundEvent;
      static BLOCK_ROOTS_FALL: nmssSoundEvent;
      static BLOCK_ROOTS_HIT: nmssSoundEvent;
      static BLOCK_ROOTS_PLACE: nmssSoundEvent;
      static BLOCK_ROOTS_STEP: nmssSoundEvent;
      static BLOCK_SAND_BREAK: nmssSoundEvent;
      static BLOCK_SAND_FALL: nmssSoundEvent;
      static BLOCK_SAND_HIT: nmssSoundEvent;
      static BLOCK_SAND_PLACE: nmssSoundEvent;
      static BLOCK_SAND_STEP: nmssSoundEvent;
      static BLOCK_SCAFFOLDING_BREAK: nmssSoundEvent;
      static BLOCK_SCAFFOLDING_FALL: nmssSoundEvent;
      static BLOCK_SCAFFOLDING_HIT: nmssSoundEvent;
      static BLOCK_SCAFFOLDING_PLACE: nmssSoundEvent;
      static BLOCK_SCAFFOLDING_STEP: nmssSoundEvent;
      static BLOCK_SHROOMLIGHT_BREAK: nmssSoundEvent;
      static BLOCK_SHROOMLIGHT_FALL: nmssSoundEvent;
      static BLOCK_SHROOMLIGHT_HIT: nmssSoundEvent;
      static BLOCK_SHROOMLIGHT_PLACE: nmssSoundEvent;
      static BLOCK_SHROOMLIGHT_STEP: nmssSoundEvent;
      static BLOCK_SHULKER_BOX_CLOSE: nmssSoundEvent;
      static BLOCK_SHULKER_BOX_OPEN: nmssSoundEvent;
      static BLOCK_SLIME_BLOCK_BREAK: nmssSoundEvent;
      static BLOCK_SLIME_BLOCK_FALL: nmssSoundEvent;
      static BLOCK_SLIME_BLOCK_HIT: nmssSoundEvent;
      static BLOCK_SLIME_BLOCK_PLACE: nmssSoundEvent;
      static BLOCK_SLIME_BLOCK_STEP: nmssSoundEvent;
      static BLOCK_SMITHING_TABLE_USE: nmssSoundEvent;
      static BLOCK_SMOKER_SMOKE: nmssSoundEvent;
      static BLOCK_SNOW_BREAK: nmssSoundEvent;
      static BLOCK_SNOW_FALL: nmssSoundEvent;
      static BLOCK_SNOW_HIT: nmssSoundEvent;
      static BLOCK_SNOW_PLACE: nmssSoundEvent;
      static BLOCK_SNOW_STEP: nmssSoundEvent;
      static BLOCK_SOUL_SAND_BREAK: nmssSoundEvent;
      static BLOCK_SOUL_SAND_FALL: nmssSoundEvent;
      static BLOCK_SOUL_SAND_HIT: nmssSoundEvent;
      static BLOCK_SOUL_SAND_PLACE: nmssSoundEvent;
      static BLOCK_SOUL_SAND_STEP: nmssSoundEvent;
      static BLOCK_SOUL_SOIL_BREAK: nmssSoundEvent;
      static BLOCK_SOUL_SOIL_FALL: nmssSoundEvent;
      static BLOCK_SOUL_SOIL_HIT: nmssSoundEvent;
      static BLOCK_SOUL_SOIL_PLACE: nmssSoundEvent;
      static BLOCK_SOUL_SOIL_STEP: nmssSoundEvent;
      static BLOCK_STEM_BREAK: nmssSoundEvent;
      static BLOCK_STEM_FALL: nmssSoundEvent;
      static BLOCK_STEM_HIT: nmssSoundEvent;
      static BLOCK_STEM_PLACE: nmssSoundEvent;
      static BLOCK_STEM_STEP: nmssSoundEvent;
      static BLOCK_STONE_BREAK: nmssSoundEvent;
      static BLOCK_STONE_BUTTON_CLICK_OFF: nmssSoundEvent;
      static BLOCK_STONE_BUTTON_CLICK_ON: nmssSoundEvent;
      static BLOCK_STONE_FALL: nmssSoundEvent;
      static BLOCK_STONE_HIT: nmssSoundEvent;
      static BLOCK_STONE_PLACE: nmssSoundEvent;
      static BLOCK_STONE_PRESSURE_PLATE_CLICK_OFF: nmssSoundEvent;
      static BLOCK_STONE_PRESSURE_PLATE_CLICK_ON: nmssSoundEvent;
      static BLOCK_STONE_STEP: nmssSoundEvent;
      static BLOCK_SWEET_BERRY_BUSH_BREAK: nmssSoundEvent;
      static BLOCK_SWEET_BERRY_BUSH_PLACE: nmssSoundEvent;
      static BLOCK_TRIPWIRE_ATTACH: nmssSoundEvent;
      static BLOCK_TRIPWIRE_CLICK_OFF: nmssSoundEvent;
      static BLOCK_TRIPWIRE_CLICK_ON: nmssSoundEvent;
      static BLOCK_TRIPWIRE_DETACH: nmssSoundEvent;
      static BLOCK_VINE_STEP: nmssSoundEvent;
      static BLOCK_WART_BLOCK_BREAK: nmssSoundEvent;
      static BLOCK_WART_BLOCK_FALL: nmssSoundEvent;
      static BLOCK_WART_BLOCK_HIT: nmssSoundEvent;
      static BLOCK_WART_BLOCK_PLACE: nmssSoundEvent;
      static BLOCK_WART_BLOCK_STEP: nmssSoundEvent;
      static BLOCK_WATER_AMBIENT: nmssSoundEvent;
      static BLOCK_WEEPING_VINES_BREAK: nmssSoundEvent;
      static BLOCK_WEEPING_VINES_FALL: nmssSoundEvent;
      static BLOCK_WEEPING_VINES_HIT: nmssSoundEvent;
      static BLOCK_WEEPING_VINES_PLACE: nmssSoundEvent;
      static BLOCK_WEEPING_VINES_STEP: nmssSoundEvent;
      static BLOCK_WET_GRASS_BREAK: nmssSoundEvent;
      static BLOCK_WET_GRASS_FALL: nmssSoundEvent;
      static BLOCK_WET_GRASS_HIT: nmssSoundEvent;
      static BLOCK_WET_GRASS_PLACE: nmssSoundEvent;
      static BLOCK_WET_GRASS_STEP: nmssSoundEvent;
      static BLOCK_WOOD_BREAK: nmssSoundEvent;
      static BLOCK_WOOD_FALL: nmssSoundEvent;
      static BLOCK_WOOD_HIT: nmssSoundEvent;
      static BLOCK_WOOD_PLACE: nmssSoundEvent;
      static BLOCK_WOOD_STEP: nmssSoundEvent;
      static BLOCK_WOODEN_BUTTON_CLICK_OFF: nmssSoundEvent;
      static BLOCK_WOODEN_BUTTON_CLICK_ON: nmssSoundEvent;
      static BLOCK_WOODEN_DOOR_CLOSE: nmssSoundEvent;
      static BLOCK_WOODEN_DOOR_OPEN: nmssSoundEvent;
      static BLOCK_WOODEN_PRESSURE_PLATE_CLICK_OFF: nmssSoundEvent;
      static BLOCK_WOODEN_PRESSURE_PLATE_CLICK_ON: nmssSoundEvent;
      static BLOCK_WOODEN_TRAPDOOR_CLOSE: nmssSoundEvent;
      static BLOCK_WOODEN_TRAPDOOR_OPEN: nmssSoundEvent;
      static BLOCK_WOOL_BREAK: nmssSoundEvent;
      static BLOCK_WOOL_FALL: nmssSoundEvent;
      static BLOCK_WOOL_HIT: nmssSoundEvent;
      static BLOCK_WOOL_PLACE: nmssSoundEvent;
      static BLOCK_WOOL_STEP: nmssSoundEvent;
      static ENCHANT_THORNS_HIT: nmssSoundEvent;
      static ENTITY_ARMOR_STAND_BREAK: nmssSoundEvent;
      static ENTITY_ARMOR_STAND_FALL: nmssSoundEvent;
      static ENTITY_ARMOR_STAND_HIT: nmssSoundEvent;
      static ENTITY_ARMOR_STAND_PLACE: nmssSoundEvent;
      static ENTITY_ARROW_HIT: nmssSoundEvent;
      static ENTITY_ARROW_HIT_PLAYER: nmssSoundEvent;
      static ENTITY_ARROW_SHOOT: nmssSoundEvent;
      static ENTITY_BAT_AMBIENT: nmssSoundEvent;
      static ENTITY_BAT_DEATH: nmssSoundEvent;
      static ENTITY_BAT_HURT: nmssSoundEvent;
      static ENTITY_BAT_LOOP: nmssSoundEvent;
      static ENTITY_BAT_TAKEOFF: nmssSoundEvent;
      static ENTITY_BEE_DEATH: nmssSoundEvent;
      static ENTITY_BEE_HURT: nmssSoundEvent;
      static ENTITY_BEE_LOOP: nmssSoundEvent;
      static ENTITY_BEE_LOOP_AGGRESSIVE: nmssSoundEvent;
      static ENTITY_BEE_POLLINATE: nmssSoundEvent;
      static ENTITY_BEE_STING: nmssSoundEvent;
      static ENTITY_BLAZE_AMBIENT: nmssSoundEvent;
      static ENTITY_BLAZE_BURN: nmssSoundEvent;
      static ENTITY_BLAZE_DEATH: nmssSoundEvent;
      static ENTITY_BLAZE_HURT: nmssSoundEvent;
      static ENTITY_BLAZE_SHOOT: nmssSoundEvent;
      static ENTITY_BOAT_PADDLE_LAND: nmssSoundEvent;
      static ENTITY_BOAT_PADDLE_WATER: nmssSoundEvent;
      static ENTITY_CAT_AMBIENT: nmssSoundEvent;
      static ENTITY_CAT_BEG_FOR_FOOD: nmssSoundEvent;
      static ENTITY_CAT_DEATH: nmssSoundEvent;
      static ENTITY_CAT_EAT: nmssSoundEvent;
      static ENTITY_CAT_HISS: nmssSoundEvent;
      static ENTITY_CAT_HURT: nmssSoundEvent;
      static ENTITY_CAT_PURR: nmssSoundEvent;
      static ENTITY_CAT_PURREOW: nmssSoundEvent;
      static ENTITY_CAT_STRAY_AMBIENT: nmssSoundEvent;
      static ENTITY_CHICKEN_AMBIENT: nmssSoundEvent;
      static ENTITY_CHICKEN_DEATH: nmssSoundEvent;
      static ENTITY_CHICKEN_EGG: nmssSoundEvent;
      static ENTITY_CHICKEN_HURT: nmssSoundEvent;
      static ENTITY_CHICKEN_STEP: nmssSoundEvent;
      static ENTITY_COD_AMBIENT: nmssSoundEvent;
      static ENTITY_COD_DEATH: nmssSoundEvent;
      static ENTITY_COD_FLOP: nmssSoundEvent;
      static ENTITY_COD_HURT: nmssSoundEvent;
      static ENTITY_COW_AMBIENT: nmssSoundEvent;
      static ENTITY_COW_DEATH: nmssSoundEvent;
      static ENTITY_COW_HURT: nmssSoundEvent;
      static ENTITY_COW_MILK: nmssSoundEvent;
      static ENTITY_COW_STEP: nmssSoundEvent;
      static ENTITY_CREEPER_DEATH: nmssSoundEvent;
      static ENTITY_CREEPER_HURT: nmssSoundEvent;
      static ENTITY_CREEPER_PRIMED: nmssSoundEvent;
      static ENTITY_DOLPHIN_AMBIENT: nmssSoundEvent;
      static ENTITY_DOLPHIN_AMBIENT_WATER: nmssSoundEvent;
      static ENTITY_DOLPHIN_ATTACK: nmssSoundEvent;
      static ENTITY_DOLPHIN_DEATH: nmssSoundEvent;
      static ENTITY_DOLPHIN_EAT: nmssSoundEvent;
      static ENTITY_DOLPHIN_HURT: nmssSoundEvent;
      static ENTITY_DOLPHIN_JUMP: nmssSoundEvent;
      static ENTITY_DOLPHIN_PLAY: nmssSoundEvent;
      static ENTITY_DOLPHIN_SPLASH: nmssSoundEvent;
      static ENTITY_DOLPHIN_SWIM: nmssSoundEvent;
      static ENTITY_DONKEY_AMBIENT: nmssSoundEvent;
      static ENTITY_DONKEY_ANGRY: nmssSoundEvent;
      static ENTITY_DONKEY_CHEST: nmssSoundEvent;
      static ENTITY_DONKEY_DEATH: nmssSoundEvent;
      static ENTITY_DONKEY_EAT: nmssSoundEvent;
      static ENTITY_DONKEY_HURT: nmssSoundEvent;
      static ENTITY_DRAGON_FIREBALL_EXPLODE: nmssSoundEvent;
      static ENTITY_DROWNED_AMBIENT: nmssSoundEvent;
      static ENTITY_DROWNED_AMBIENT_WATER: nmssSoundEvent;
      static ENTITY_DROWNED_DEATH: nmssSoundEvent;
      static ENTITY_DROWNED_DEATH_WATER: nmssSoundEvent;
      static ENTITY_DROWNED_HURT: nmssSoundEvent;
      static ENTITY_DROWNED_HURT_WATER: nmssSoundEvent;
      static ENTITY_DROWNED_SHOOT: nmssSoundEvent;
      static ENTITY_DROWNED_STEP: nmssSoundEvent;
      static ENTITY_DROWNED_SWIM: nmssSoundEvent;
      static ENTITY_EGG_THROW: nmssSoundEvent;
      static ENTITY_ELDER_GUARDIAN_AMBIENT: nmssSoundEvent;
      static ENTITY_ELDER_GUARDIAN_AMBIENT_LAND: nmssSoundEvent;
      static ENTITY_ELDER_GUARDIAN_CURSE: nmssSoundEvent;
      static ENTITY_ELDER_GUARDIAN_DEATH: nmssSoundEvent;
      static ENTITY_ELDER_GUARDIAN_DEATH_LAND: nmssSoundEvent;
      static ENTITY_ELDER_GUARDIAN_FLOP: nmssSoundEvent;
      static ENTITY_ELDER_GUARDIAN_HURT: nmssSoundEvent;
      static ENTITY_ELDER_GUARDIAN_HURT_LAND: nmssSoundEvent;
      static ENTITY_ENDER_DRAGON_AMBIENT: nmssSoundEvent;
      static ENTITY_ENDER_DRAGON_DEATH: nmssSoundEvent;
      static ENTITY_ENDER_DRAGON_FLAP: nmssSoundEvent;
      static ENTITY_ENDER_DRAGON_GROWL: nmssSoundEvent;
      static ENTITY_ENDER_DRAGON_HURT: nmssSoundEvent;
      static ENTITY_ENDER_DRAGON_SHOOT: nmssSoundEvent;
      static ENTITY_ENDER_EYE_DEATH: nmssSoundEvent;
      static ENTITY_ENDER_EYE_LAUNCH: nmssSoundEvent;
      static ENTITY_ENDER_PEARL_THROW: nmssSoundEvent;
      static ENTITY_ENDERMAN_AMBIENT: nmssSoundEvent;
      static ENTITY_ENDERMAN_DEATH: nmssSoundEvent;
      static ENTITY_ENDERMAN_HURT: nmssSoundEvent;
      static ENTITY_ENDERMAN_SCREAM: nmssSoundEvent;
      static ENTITY_ENDERMAN_STARE: nmssSoundEvent;
      static ENTITY_ENDERMAN_TELEPORT: nmssSoundEvent;
      static ENTITY_ENDERMITE_AMBIENT: nmssSoundEvent;
      static ENTITY_ENDERMITE_DEATH: nmssSoundEvent;
      static ENTITY_ENDERMITE_HURT: nmssSoundEvent;
      static ENTITY_ENDERMITE_STEP: nmssSoundEvent;
      static ENTITY_EVOKER_AMBIENT: nmssSoundEvent;
      static ENTITY_EVOKER_CAST_SPELL: nmssSoundEvent;
      static ENTITY_EVOKER_CELEBRATE: nmssSoundEvent;
      static ENTITY_EVOKER_DEATH: nmssSoundEvent;
      static ENTITY_EVOKER_FANGS_ATTACK: nmssSoundEvent;
      static ENTITY_EVOKER_HURT: nmssSoundEvent;
      static ENTITY_EVOKER_PREPARE_ATTACK: nmssSoundEvent;
      static ENTITY_EVOKER_PREPARE_SUMMON: nmssSoundEvent;
      static ENTITY_EVOKER_PREPARE_WOLOLO: nmssSoundEvent;
      static ENTITY_EXPERIENCE_BOTTLE_THROW: nmssSoundEvent;
      static ENTITY_EXPERIENCE_ORB_PICKUP: nmssSoundEvent;
      static ENTITY_FIREWORK_ROCKET_BLAST: nmssSoundEvent;
      static ENTITY_FIREWORK_ROCKET_BLAST_FAR: nmssSoundEvent;
      static ENTITY_FIREWORK_ROCKET_LARGE_BLAST: nmssSoundEvent;
      static ENTITY_FIREWORK_ROCKET_LARGE_BLAST_FAR: nmssSoundEvent;
      static ENTITY_FIREWORK_ROCKET_LAUNCH: nmssSoundEvent;
      static ENTITY_FIREWORK_ROCKET_SHOOT: nmssSoundEvent;
      static ENTITY_FIREWORK_ROCKET_TWINKLE: nmssSoundEvent;
      static ENTITY_FIREWORK_ROCKET_TWINKLE_FAR: nmssSoundEvent;
      static ENTITY_FISH_SWIM: nmssSoundEvent;
      static ENTITY_FISHING_BOBBER_RETRIEVE: nmssSoundEvent;
      static ENTITY_FISHING_BOBBER_SPLASH: nmssSoundEvent;
      static ENTITY_FISHING_BOBBER_THROW: nmssSoundEvent;
      static ENTITY_FOX_AGGRO: nmssSoundEvent;
      static ENTITY_FOX_AMBIENT: nmssSoundEvent;
      static ENTITY_FOX_BITE: nmssSoundEvent;
      static ENTITY_FOX_DEATH: nmssSoundEvent;
      static ENTITY_FOX_EAT: nmssSoundEvent;
      static ENTITY_FOX_HURT: nmssSoundEvent;
      static ENTITY_FOX_SCREECH: nmssSoundEvent;
      static ENTITY_FOX_SLEEP: nmssSoundEvent;
      static ENTITY_FOX_SNIFF: nmssSoundEvent;
      static ENTITY_FOX_SPIT: nmssSoundEvent;
      static ENTITY_FOX_TELEPORT: nmssSoundEvent;
      static ENTITY_GENERIC_BIG_FALL: nmssSoundEvent;
      static ENTITY_GENERIC_BURN: nmssSoundEvent;
      static ENTITY_GENERIC_DEATH: nmssSoundEvent;
      static ENTITY_GENERIC_DRINK: nmssSoundEvent;
      static ENTITY_GENERIC_EAT: nmssSoundEvent;
      static ENTITY_GENERIC_EXPLODE: nmssSoundEvent;
      static ENTITY_GENERIC_EXTINGUISH_FIRE: nmssSoundEvent;
      static ENTITY_GENERIC_HURT: nmssSoundEvent;
      static ENTITY_GENERIC_SMALL_FALL: nmssSoundEvent;
      static ENTITY_GENERIC_SPLASH: nmssSoundEvent;
      static ENTITY_GENERIC_SWIM: nmssSoundEvent;
      static ENTITY_GHAST_AMBIENT: nmssSoundEvent;
      static ENTITY_GHAST_DEATH: nmssSoundEvent;
      static ENTITY_GHAST_HURT: nmssSoundEvent;
      static ENTITY_GHAST_SCREAM: nmssSoundEvent;
      static ENTITY_GHAST_SHOOT: nmssSoundEvent;
      static ENTITY_GHAST_WARN: nmssSoundEvent;
      static ENTITY_GUARDIAN_AMBIENT: nmssSoundEvent;
      static ENTITY_GUARDIAN_AMBIENT_LAND: nmssSoundEvent;
      static ENTITY_GUARDIAN_ATTACK: nmssSoundEvent;
      static ENTITY_GUARDIAN_DEATH: nmssSoundEvent;
      static ENTITY_GUARDIAN_DEATH_LAND: nmssSoundEvent;
      static ENTITY_GUARDIAN_FLOP: nmssSoundEvent;
      static ENTITY_GUARDIAN_HURT: nmssSoundEvent;
      static ENTITY_GUARDIAN_HURT_LAND: nmssSoundEvent;
      static ENTITY_HOGLIN_AMBIENT: nmssSoundEvent;
      static ENTITY_HOGLIN_ANGRY: nmssSoundEvent;
      static ENTITY_HOGLIN_ATTACK: nmssSoundEvent;
      static ENTITY_HOGLIN_CONVERTED_TO_ZOMBIFIED: nmssSoundEvent;
      static ENTITY_HOGLIN_DEATH: nmssSoundEvent;
      static ENTITY_HOGLIN_HURT: nmssSoundEvent;
      static ENTITY_HOGLIN_RETREAT: nmssSoundEvent;
      static ENTITY_HOGLIN_STEP: nmssSoundEvent;
      static ENTITY_HORSE_AMBIENT: nmssSoundEvent;
      static ENTITY_HORSE_ANGRY: nmssSoundEvent;
      static ENTITY_HORSE_ARMOR: nmssSoundEvent;
      static ENTITY_HORSE_BREATHE: nmssSoundEvent;
      static ENTITY_HORSE_DEATH: nmssSoundEvent;
      static ENTITY_HORSE_EAT: nmssSoundEvent;
      static ENTITY_HORSE_GALLOP: nmssSoundEvent;
      static ENTITY_HORSE_HURT: nmssSoundEvent;
      static ENTITY_HORSE_JUMP: nmssSoundEvent;
      static ENTITY_HORSE_LAND: nmssSoundEvent;
      static ENTITY_HORSE_SADDLE: nmssSoundEvent;
      static ENTITY_HORSE_STEP: nmssSoundEvent;
      static ENTITY_HORSE_STEP_WOOD: nmssSoundEvent;
      static ENTITY_HOSTILE_BIG_FALL: nmssSoundEvent;
      static ENTITY_HOSTILE_DEATH: nmssSoundEvent;
      static ENTITY_HOSTILE_HURT: nmssSoundEvent;
      static ENTITY_HOSTILE_SMALL_FALL: nmssSoundEvent;
      static ENTITY_HOSTILE_SPLASH: nmssSoundEvent;
      static ENTITY_HOSTILE_SWIM: nmssSoundEvent;
      static ENTITY_HUSK_AMBIENT: nmssSoundEvent;
      static ENTITY_HUSK_CONVERTED_TO_ZOMBIE: nmssSoundEvent;
      static ENTITY_HUSK_DEATH: nmssSoundEvent;
      static ENTITY_HUSK_HURT: nmssSoundEvent;
      static ENTITY_HUSK_STEP: nmssSoundEvent;
      static ENTITY_ILLUSIONER_AMBIENT: nmssSoundEvent;
      static ENTITY_ILLUSIONER_CAST_SPELL: nmssSoundEvent;
      static ENTITY_ILLUSIONER_DEATH: nmssSoundEvent;
      static ENTITY_ILLUSIONER_HURT: nmssSoundEvent;
      static ENTITY_ILLUSIONER_MIRROR_MOVE: nmssSoundEvent;
      static ENTITY_ILLUSIONER_PREPARE_BLINDNESS: nmssSoundEvent;
      static ENTITY_ILLUSIONER_PREPARE_MIRROR: nmssSoundEvent;
      static ENTITY_IRON_GOLEM_ATTACK: nmssSoundEvent;
      static ENTITY_IRON_GOLEM_DAMAGE: nmssSoundEvent;
      static ENTITY_IRON_GOLEM_DEATH: nmssSoundEvent;
      static ENTITY_IRON_GOLEM_HURT: nmssSoundEvent;
      static ENTITY_IRON_GOLEM_REPAIR: nmssSoundEvent;
      static ENTITY_IRON_GOLEM_STEP: nmssSoundEvent;
      static ENTITY_ITEM_BREAK: nmssSoundEvent;
      static ENTITY_ITEM_FRAME_ADD_ITEM: nmssSoundEvent;
      static ENTITY_ITEM_FRAME_BREAK: nmssSoundEvent;
      static ENTITY_ITEM_FRAME_PLACE: nmssSoundEvent;
      static ENTITY_ITEM_FRAME_REMOVE_ITEM: nmssSoundEvent;
      static ENTITY_ITEM_FRAME_ROTATE_ITEM: nmssSoundEvent;
      static ENTITY_ITEM_PICKUP: nmssSoundEvent;
      static ENTITY_LEASH_KNOT_BREAK: nmssSoundEvent;
      static ENTITY_LEASH_KNOT_PLACE: nmssSoundEvent;
      static ENTITY_LIGHTNING_BOLT_IMPACT: nmssSoundEvent;
      static ENTITY_LIGHTNING_BOLT_THUNDER: nmssSoundEvent;
      static ENTITY_LINGERING_POTION_THROW: nmssSoundEvent;
      static ENTITY_LLAMA_AMBIENT: nmssSoundEvent;
      static ENTITY_LLAMA_ANGRY: nmssSoundEvent;
      static ENTITY_LLAMA_CHEST: nmssSoundEvent;
      static ENTITY_LLAMA_DEATH: nmssSoundEvent;
      static ENTITY_LLAMA_EAT: nmssSoundEvent;
      static ENTITY_LLAMA_HURT: nmssSoundEvent;
      static ENTITY_LLAMA_SPIT: nmssSoundEvent;
      static ENTITY_LLAMA_STEP: nmssSoundEvent;
      static ENTITY_LLAMA_SWAG: nmssSoundEvent;
      static ENTITY_MAGMA_CUBE_DEATH: nmssSoundEvent;
      static ENTITY_MAGMA_CUBE_DEATH_SMALL: nmssSoundEvent;
      static ENTITY_MAGMA_CUBE_HURT: nmssSoundEvent;
      static ENTITY_MAGMA_CUBE_HURT_SMALL: nmssSoundEvent;
      static ENTITY_MAGMA_CUBE_JUMP: nmssSoundEvent;
      static ENTITY_MAGMA_CUBE_SQUISH: nmssSoundEvent;
      static ENTITY_MAGMA_CUBE_SQUISH_SMALL: nmssSoundEvent;
      static ENTITY_MINECART_INSIDE: nmssSoundEvent;
      static ENTITY_MINECART_RIDING: nmssSoundEvent;
      static ENTITY_MOOSHROOM_CONVERT: nmssSoundEvent;
      static ENTITY_MOOSHROOM_EAT: nmssSoundEvent;
      static ENTITY_MOOSHROOM_MILK: nmssSoundEvent;
      static ENTITY_MOOSHROOM_SHEAR: nmssSoundEvent;
      static ENTITY_MOOSHROOM_SUSPICIOUS_MILK: nmssSoundEvent;
      static ENTITY_MULE_AMBIENT: nmssSoundEvent;
      static ENTITY_MULE_ANGRY: nmssSoundEvent;
      static ENTITY_MULE_CHEST: nmssSoundEvent;
      static ENTITY_MULE_DEATH: nmssSoundEvent;
      static ENTITY_MULE_EAT: nmssSoundEvent;
      static ENTITY_MULE_HURT: nmssSoundEvent;
      static ENTITY_OCELOT_AMBIENT: nmssSoundEvent;
      static ENTITY_OCELOT_DEATH: nmssSoundEvent;
      static ENTITY_OCELOT_HURT: nmssSoundEvent;
      static ENTITY_PAINTING_BREAK: nmssSoundEvent;
      static ENTITY_PAINTING_PLACE: nmssSoundEvent;
      static ENTITY_PANDA_AGGRESSIVE_AMBIENT: nmssSoundEvent;
      static ENTITY_PANDA_AMBIENT: nmssSoundEvent;
      static ENTITY_PANDA_BITE: nmssSoundEvent;
      static ENTITY_PANDA_CANT_BREED: nmssSoundEvent;
      static ENTITY_PANDA_DEATH: nmssSoundEvent;
      static ENTITY_PANDA_EAT: nmssSoundEvent;
      static ENTITY_PANDA_HURT: nmssSoundEvent;
      static ENTITY_PANDA_PRE_SNEEZE: nmssSoundEvent;
      static ENTITY_PANDA_SNEEZE: nmssSoundEvent;
      static ENTITY_PANDA_STEP: nmssSoundEvent;
      static ENTITY_PANDA_WORRIED_AMBIENT: nmssSoundEvent;
      static ENTITY_PARROT_AMBIENT: nmssSoundEvent;
      static ENTITY_PARROT_DEATH: nmssSoundEvent;
      static ENTITY_PARROT_EAT: nmssSoundEvent;
      static ENTITY_PARROT_FLY: nmssSoundEvent;
      static ENTITY_PARROT_HURT: nmssSoundEvent;
      static ENTITY_PARROT_IMITATE_BLAZE: nmssSoundEvent;
      static ENTITY_PARROT_IMITATE_CREEPER: nmssSoundEvent;
      static ENTITY_PARROT_IMITATE_DROWNED: nmssSoundEvent;
      static ENTITY_PARROT_IMITATE_ELDER_GUARDIAN: nmssSoundEvent;
      static ENTITY_PARROT_IMITATE_ENDER_DRAGON: nmssSoundEvent;
      static ENTITY_PARROT_IMITATE_ENDERMITE: nmssSoundEvent;
      static ENTITY_PARROT_IMITATE_EVOKER: nmssSoundEvent;
      static ENTITY_PARROT_IMITATE_GHAST: nmssSoundEvent;
      static ENTITY_PARROT_IMITATE_GUARDIAN: nmssSoundEvent;
      static ENTITY_PARROT_IMITATE_HOGLIN: nmssSoundEvent;
      static ENTITY_PARROT_IMITATE_HUSK: nmssSoundEvent;
      static ENTITY_PARROT_IMITATE_ILLUSIONER: nmssSoundEvent;
      static ENTITY_PARROT_IMITATE_MAGMA_CUBE: nmssSoundEvent;
      static ENTITY_PARROT_IMITATE_PHANTOM: nmssSoundEvent;
      static ENTITY_PARROT_IMITATE_PIGLIN: nmssSoundEvent;
      static ENTITY_PARROT_IMITATE_PIGLIN_BRUTE: nmssSoundEvent;
      static ENTITY_PARROT_IMITATE_PILLAGER: nmssSoundEvent;
      static ENTITY_PARROT_IMITATE_RAVAGER: nmssSoundEvent;
      static ENTITY_PARROT_IMITATE_SHULKER: nmssSoundEvent;
      static ENTITY_PARROT_IMITATE_SILVERFISH: nmssSoundEvent;
      static ENTITY_PARROT_IMITATE_SKELETON: nmssSoundEvent;
      static ENTITY_PARROT_IMITATE_SLIME: nmssSoundEvent;
      static ENTITY_PARROT_IMITATE_SPIDER: nmssSoundEvent;
      static ENTITY_PARROT_IMITATE_STRAY: nmssSoundEvent;
      static ENTITY_PARROT_IMITATE_VEX: nmssSoundEvent;
      static ENTITY_PARROT_IMITATE_VINDICATOR: nmssSoundEvent;
      static ENTITY_PARROT_IMITATE_WITCH: nmssSoundEvent;
      static ENTITY_PARROT_IMITATE_WITHER: nmssSoundEvent;
      static ENTITY_PARROT_IMITATE_WITHER_SKELETON: nmssSoundEvent;
      static ENTITY_PARROT_IMITATE_ZOGLIN: nmssSoundEvent;
      static ENTITY_PARROT_IMITATE_ZOMBIE: nmssSoundEvent;
      static ENTITY_PARROT_IMITATE_ZOMBIE_VILLAGER: nmssSoundEvent;
      static ENTITY_PARROT_STEP: nmssSoundEvent;
      static ENTITY_PHANTOM_AMBIENT: nmssSoundEvent;
      static ENTITY_PHANTOM_BITE: nmssSoundEvent;
      static ENTITY_PHANTOM_DEATH: nmssSoundEvent;
      static ENTITY_PHANTOM_FLAP: nmssSoundEvent;
      static ENTITY_PHANTOM_HURT: nmssSoundEvent;
      static ENTITY_PHANTOM_SWOOP: nmssSoundEvent;
      static ENTITY_PIG_AMBIENT: nmssSoundEvent;
      static ENTITY_PIG_DEATH: nmssSoundEvent;
      static ENTITY_PIG_HURT: nmssSoundEvent;
      static ENTITY_PIG_SADDLE: nmssSoundEvent;
      static ENTITY_PIG_STEP: nmssSoundEvent;
      static ENTITY_PIGLIN_ADMIRING_ITEM: nmssSoundEvent;
      static ENTITY_PIGLIN_AMBIENT: nmssSoundEvent;
      static ENTITY_PIGLIN_ANGRY: nmssSoundEvent;
      static ENTITY_PIGLIN_BRUTE_AMBIENT: nmssSoundEvent;
      static ENTITY_PIGLIN_BRUTE_ANGRY: nmssSoundEvent;
      static ENTITY_PIGLIN_BRUTE_CONVERTED_TO_ZOMBIFIED: nmssSoundEvent;
      static ENTITY_PIGLIN_BRUTE_DEATH: nmssSoundEvent;
      static ENTITY_PIGLIN_BRUTE_HURT: nmssSoundEvent;
      static ENTITY_PIGLIN_BRUTE_STEP: nmssSoundEvent;
      static ENTITY_PIGLIN_CELEBRATE: nmssSoundEvent;
      static ENTITY_PIGLIN_CONVERTED_TO_ZOMBIFIED: nmssSoundEvent;
      static ENTITY_PIGLIN_DEATH: nmssSoundEvent;
      static ENTITY_PIGLIN_HURT: nmssSoundEvent;
      static ENTITY_PIGLIN_JEALOUS: nmssSoundEvent;
      static ENTITY_PIGLIN_RETREAT: nmssSoundEvent;
      static ENTITY_PIGLIN_STEP: nmssSoundEvent;
      static ENTITY_PILLAGER_AMBIENT: nmssSoundEvent;
      static ENTITY_PILLAGER_CELEBRATE: nmssSoundEvent;
      static ENTITY_PILLAGER_DEATH: nmssSoundEvent;
      static ENTITY_PILLAGER_HURT: nmssSoundEvent;
      static ENTITY_PLAYER_ATTACK_CRIT: nmssSoundEvent;
      static ENTITY_PLAYER_ATTACK_KNOCKBACK: nmssSoundEvent;
      static ENTITY_PLAYER_ATTACK_NODAMAGE: nmssSoundEvent;
      static ENTITY_PLAYER_ATTACK_STRONG: nmssSoundEvent;
      static ENTITY_PLAYER_ATTACK_SWEEP: nmssSoundEvent;
      static ENTITY_PLAYER_ATTACK_WEAK: nmssSoundEvent;
      static ENTITY_PLAYER_BIG_FALL: nmssSoundEvent;
      static ENTITY_PLAYER_BREATH: nmssSoundEvent;
      static ENTITY_PLAYER_BURP: nmssSoundEvent;
      static ENTITY_PLAYER_DEATH: nmssSoundEvent;
      static ENTITY_PLAYER_HURT: nmssSoundEvent;
      static ENTITY_PLAYER_HURT_DROWN: nmssSoundEvent;
      static ENTITY_PLAYER_HURT_ON_FIRE: nmssSoundEvent;
      static ENTITY_PLAYER_HURT_SWEET_BERRY_BUSH: nmssSoundEvent;
      static ENTITY_PLAYER_LEVELUP: nmssSoundEvent;
      static ENTITY_PLAYER_SMALL_FALL: nmssSoundEvent;
      static ENTITY_PLAYER_SPLASH: nmssSoundEvent;
      static ENTITY_PLAYER_SPLASH_HIGH_SPEED: nmssSoundEvent;
      static ENTITY_PLAYER_SWIM: nmssSoundEvent;
      static ENTITY_POLAR_BEAR_AMBIENT: nmssSoundEvent;
      static ENTITY_POLAR_BEAR_AMBIENT_BABY: nmssSoundEvent;
      static ENTITY_POLAR_BEAR_DEATH: nmssSoundEvent;
      static ENTITY_POLAR_BEAR_HURT: nmssSoundEvent;
      static ENTITY_POLAR_BEAR_STEP: nmssSoundEvent;
      static ENTITY_POLAR_BEAR_WARNING: nmssSoundEvent;
      static ENTITY_PUFFER_FISH_AMBIENT: nmssSoundEvent;
      static ENTITY_PUFFER_FISH_BLOW_OUT: nmssSoundEvent;
      static ENTITY_PUFFER_FISH_BLOW_UP: nmssSoundEvent;
      static ENTITY_PUFFER_FISH_DEATH: nmssSoundEvent;
      static ENTITY_PUFFER_FISH_FLOP: nmssSoundEvent;
      static ENTITY_PUFFER_FISH_HURT: nmssSoundEvent;
      static ENTITY_PUFFER_FISH_STING: nmssSoundEvent;
      static ENTITY_RABBIT_AMBIENT: nmssSoundEvent;
      static ENTITY_RABBIT_ATTACK: nmssSoundEvent;
      static ENTITY_RABBIT_DEATH: nmssSoundEvent;
      static ENTITY_RABBIT_HURT: nmssSoundEvent;
      static ENTITY_RABBIT_JUMP: nmssSoundEvent;
      static ENTITY_RAVAGER_AMBIENT: nmssSoundEvent;
      static ENTITY_RAVAGER_ATTACK: nmssSoundEvent;
      static ENTITY_RAVAGER_CELEBRATE: nmssSoundEvent;
      static ENTITY_RAVAGER_DEATH: nmssSoundEvent;
      static ENTITY_RAVAGER_HURT: nmssSoundEvent;
      static ENTITY_RAVAGER_ROAR: nmssSoundEvent;
      static ENTITY_RAVAGER_STEP: nmssSoundEvent;
      static ENTITY_RAVAGER_STUNNED: nmssSoundEvent;
      static ENTITY_SALMON_AMBIENT: nmssSoundEvent;
      static ENTITY_SALMON_DEATH: nmssSoundEvent;
      static ENTITY_SALMON_FLOP: nmssSoundEvent;
      static ENTITY_SALMON_HURT: nmssSoundEvent;
      static ENTITY_SHEEP_AMBIENT: nmssSoundEvent;
      static ENTITY_SHEEP_DEATH: nmssSoundEvent;
      static ENTITY_SHEEP_HURT: nmssSoundEvent;
      static ENTITY_SHEEP_SHEAR: nmssSoundEvent;
      static ENTITY_SHEEP_STEP: nmssSoundEvent;
      static ENTITY_SHULKER_AMBIENT: nmssSoundEvent;
      static ENTITY_SHULKER_BULLET_HIT: nmssSoundEvent;
      static ENTITY_SHULKER_BULLET_HURT: nmssSoundEvent;
      static ENTITY_SHULKER_CLOSE: nmssSoundEvent;
      static ENTITY_SHULKER_DEATH: nmssSoundEvent;
      static ENTITY_SHULKER_HURT: nmssSoundEvent;
      static ENTITY_SHULKER_HURT_CLOSED: nmssSoundEvent;
      static ENTITY_SHULKER_OPEN: nmssSoundEvent;
      static ENTITY_SHULKER_SHOOT: nmssSoundEvent;
      static ENTITY_SHULKER_TELEPORT: nmssSoundEvent;
      static ENTITY_SILVERFISH_AMBIENT: nmssSoundEvent;
      static ENTITY_SILVERFISH_DEATH: nmssSoundEvent;
      static ENTITY_SILVERFISH_HURT: nmssSoundEvent;
      static ENTITY_SILVERFISH_STEP: nmssSoundEvent;
      static ENTITY_SKELETON_AMBIENT: nmssSoundEvent;
      static ENTITY_SKELETON_DEATH: nmssSoundEvent;
      static ENTITY_SKELETON_HORSE_AMBIENT: nmssSoundEvent;
      static ENTITY_SKELETON_HORSE_AMBIENT_WATER: nmssSoundEvent;
      static ENTITY_SKELETON_HORSE_DEATH: nmssSoundEvent;
      static ENTITY_SKELETON_HORSE_GALLOP_WATER: nmssSoundEvent;
      static ENTITY_SKELETON_HORSE_HURT: nmssSoundEvent;
      static ENTITY_SKELETON_HORSE_JUMP_WATER: nmssSoundEvent;
      static ENTITY_SKELETON_HORSE_STEP_WATER: nmssSoundEvent;
      static ENTITY_SKELETON_HORSE_SWIM: nmssSoundEvent;
      static ENTITY_SKELETON_HURT: nmssSoundEvent;
      static ENTITY_SKELETON_SHOOT: nmssSoundEvent;
      static ENTITY_SKELETON_STEP: nmssSoundEvent;
      static ENTITY_SLIME_ATTACK: nmssSoundEvent;
      static ENTITY_SLIME_DEATH: nmssSoundEvent;
      static ENTITY_SLIME_DEATH_SMALL: nmssSoundEvent;
      static ENTITY_SLIME_HURT: nmssSoundEvent;
      static ENTITY_SLIME_HURT_SMALL: nmssSoundEvent;
      static ENTITY_SLIME_JUMP: nmssSoundEvent;
      static ENTITY_SLIME_JUMP_SMALL: nmssSoundEvent;
      static ENTITY_SLIME_SQUISH: nmssSoundEvent;
      static ENTITY_SLIME_SQUISH_SMALL: nmssSoundEvent;
      static ENTITY_SNOW_GOLEM_AMBIENT: nmssSoundEvent;
      static ENTITY_SNOW_GOLEM_DEATH: nmssSoundEvent;
      static ENTITY_SNOW_GOLEM_HURT: nmssSoundEvent;
      static ENTITY_SNOW_GOLEM_SHEAR: nmssSoundEvent;
      static ENTITY_SNOW_GOLEM_SHOOT: nmssSoundEvent;
      static ENTITY_SNOWBALL_THROW: nmssSoundEvent;
      static ENTITY_SPIDER_AMBIENT: nmssSoundEvent;
      static ENTITY_SPIDER_DEATH: nmssSoundEvent;
      static ENTITY_SPIDER_HURT: nmssSoundEvent;
      static ENTITY_SPIDER_STEP: nmssSoundEvent;
      static ENTITY_SPLASH_POTION_BREAK: nmssSoundEvent;
      static ENTITY_SPLASH_POTION_THROW: nmssSoundEvent;
      static ENTITY_SQUID_AMBIENT: nmssSoundEvent;
      static ENTITY_SQUID_DEATH: nmssSoundEvent;
      static ENTITY_SQUID_HURT: nmssSoundEvent;
      static ENTITY_SQUID_SQUIRT: nmssSoundEvent;
      static ENTITY_STRAY_AMBIENT: nmssSoundEvent;
      static ENTITY_STRAY_DEATH: nmssSoundEvent;
      static ENTITY_STRAY_HURT: nmssSoundEvent;
      static ENTITY_STRAY_STEP: nmssSoundEvent;
      static ENTITY_STRIDER_AMBIENT: nmssSoundEvent;
      static ENTITY_STRIDER_DEATH: nmssSoundEvent;
      static ENTITY_STRIDER_EAT: nmssSoundEvent;
      static ENTITY_STRIDER_HAPPY: nmssSoundEvent;
      static ENTITY_STRIDER_HURT: nmssSoundEvent;
      static ENTITY_STRIDER_RETREAT: nmssSoundEvent;
      static ENTITY_STRIDER_SADDLE: nmssSoundEvent;
      static ENTITY_STRIDER_STEP: nmssSoundEvent;
      static ENTITY_STRIDER_STEP_LAVA: nmssSoundEvent;
      static ENTITY_TNT_PRIMED: nmssSoundEvent;
      static ENTITY_TROPICAL_FISH_AMBIENT: nmssSoundEvent;
      static ENTITY_TROPICAL_FISH_DEATH: nmssSoundEvent;
      static ENTITY_TROPICAL_FISH_FLOP: nmssSoundEvent;
      static ENTITY_TROPICAL_FISH_HURT: nmssSoundEvent;
      static ENTITY_TURTLE_AMBIENT_LAND: nmssSoundEvent;
      static ENTITY_TURTLE_DEATH: nmssSoundEvent;
      static ENTITY_TURTLE_DEATH_BABY: nmssSoundEvent;
      static ENTITY_TURTLE_EGG_BREAK: nmssSoundEvent;
      static ENTITY_TURTLE_EGG_CRACK: nmssSoundEvent;
      static ENTITY_TURTLE_EGG_HATCH: nmssSoundEvent;
      static ENTITY_TURTLE_HURT: nmssSoundEvent;
      static ENTITY_TURTLE_HURT_BABY: nmssSoundEvent;
      static ENTITY_TURTLE_LAY_EGG: nmssSoundEvent;
      static ENTITY_TURTLE_SHAMBLE: nmssSoundEvent;
      static ENTITY_TURTLE_SHAMBLE_BABY: nmssSoundEvent;
      static ENTITY_TURTLE_SWIM: nmssSoundEvent;
      static ENTITY_VEX_AMBIENT: nmssSoundEvent;
      static ENTITY_VEX_CHARGE: nmssSoundEvent;
      static ENTITY_VEX_DEATH: nmssSoundEvent;
      static ENTITY_VEX_HURT: nmssSoundEvent;
      static ENTITY_VILLAGER_AMBIENT: nmssSoundEvent;
      static ENTITY_VILLAGER_CELEBRATE: nmssSoundEvent;
      static ENTITY_VILLAGER_DEATH: nmssSoundEvent;
      static ENTITY_VILLAGER_HURT: nmssSoundEvent;
      static ENTITY_VILLAGER_NO: nmssSoundEvent;
      static ENTITY_VILLAGER_TRADE: nmssSoundEvent;
      static ENTITY_VILLAGER_WORK_ARMORER: nmssSoundEvent;
      static ENTITY_VILLAGER_WORK_BUTCHER: nmssSoundEvent;
      static ENTITY_VILLAGER_WORK_CARTOGRAPHER: nmssSoundEvent;
      static ENTITY_VILLAGER_WORK_CLERIC: nmssSoundEvent;
      static ENTITY_VILLAGER_WORK_FARMER: nmssSoundEvent;
      static ENTITY_VILLAGER_WORK_FISHERMAN: nmssSoundEvent;
      static ENTITY_VILLAGER_WORK_FLETCHER: nmssSoundEvent;
      static ENTITY_VILLAGER_WORK_LEATHERWORKER: nmssSoundEvent;
      static ENTITY_VILLAGER_WORK_LIBRARIAN: nmssSoundEvent;
      static ENTITY_VILLAGER_WORK_MASON: nmssSoundEvent;
      static ENTITY_VILLAGER_WORK_SHEPHERD: nmssSoundEvent;
      static ENTITY_VILLAGER_WORK_TOOLSMITH: nmssSoundEvent;
      static ENTITY_VILLAGER_WORK_WEAPONSMITH: nmssSoundEvent;
      static ENTITY_VILLAGER_YES: nmssSoundEvent;
      static ENTITY_VINDICATOR_AMBIENT: nmssSoundEvent;
      static ENTITY_VINDICATOR_CELEBRATE: nmssSoundEvent;
      static ENTITY_VINDICATOR_DEATH: nmssSoundEvent;
      static ENTITY_VINDICATOR_HURT: nmssSoundEvent;
      static ENTITY_WANDERING_TRADER_AMBIENT: nmssSoundEvent;
      static ENTITY_WANDERING_TRADER_DEATH: nmssSoundEvent;
      static ENTITY_WANDERING_TRADER_DISAPPEARED: nmssSoundEvent;
      static ENTITY_WANDERING_TRADER_DRINK_MILK: nmssSoundEvent;
      static ENTITY_WANDERING_TRADER_DRINK_POTION: nmssSoundEvent;
      static ENTITY_WANDERING_TRADER_HURT: nmssSoundEvent;
      static ENTITY_WANDERING_TRADER_NO: nmssSoundEvent;
      static ENTITY_WANDERING_TRADER_REAPPEARED: nmssSoundEvent;
      static ENTITY_WANDERING_TRADER_TRADE: nmssSoundEvent;
      static ENTITY_WANDERING_TRADER_YES: nmssSoundEvent;
      static ENTITY_WITCH_AMBIENT: nmssSoundEvent;
      static ENTITY_WITCH_CELEBRATE: nmssSoundEvent;
      static ENTITY_WITCH_DEATH: nmssSoundEvent;
      static ENTITY_WITCH_DRINK: nmssSoundEvent;
      static ENTITY_WITCH_HURT: nmssSoundEvent;
      static ENTITY_WITCH_THROW: nmssSoundEvent;
      static ENTITY_WITHER_AMBIENT: nmssSoundEvent;
      static ENTITY_WITHER_BREAK_BLOCK: nmssSoundEvent;
      static ENTITY_WITHER_DEATH: nmssSoundEvent;
      static ENTITY_WITHER_HURT: nmssSoundEvent;
      static ENTITY_WITHER_SHOOT: nmssSoundEvent;
      static ENTITY_WITHER_SKELETON_AMBIENT: nmssSoundEvent;
      static ENTITY_WITHER_SKELETON_DEATH: nmssSoundEvent;
      static ENTITY_WITHER_SKELETON_HURT: nmssSoundEvent;
      static ENTITY_WITHER_SKELETON_STEP: nmssSoundEvent;
      static ENTITY_WITHER_SPAWN: nmssSoundEvent;
      static ENTITY_WOLF_AMBIENT: nmssSoundEvent;
      static ENTITY_WOLF_DEATH: nmssSoundEvent;
      static ENTITY_WOLF_GROWL: nmssSoundEvent;
      static ENTITY_WOLF_HOWL: nmssSoundEvent;
      static ENTITY_WOLF_HURT: nmssSoundEvent;
      static ENTITY_WOLF_PANT: nmssSoundEvent;
      static ENTITY_WOLF_SHAKE: nmssSoundEvent;
      static ENTITY_WOLF_STEP: nmssSoundEvent;
      static ENTITY_WOLF_WHINE: nmssSoundEvent;
      static ENTITY_ZOGLIN_AMBIENT: nmssSoundEvent;
      static ENTITY_ZOGLIN_ANGRY: nmssSoundEvent;
      static ENTITY_ZOGLIN_ATTACK: nmssSoundEvent;
      static ENTITY_ZOGLIN_DEATH: nmssSoundEvent;
      static ENTITY_ZOGLIN_HURT: nmssSoundEvent;
      static ENTITY_ZOGLIN_STEP: nmssSoundEvent;
      static ENTITY_ZOMBIE_AMBIENT: nmssSoundEvent;
      static ENTITY_ZOMBIE_ATTACK_IRON_DOOR: nmssSoundEvent;
      static ENTITY_ZOMBIE_ATTACK_WOODEN_DOOR: nmssSoundEvent;
      static ENTITY_ZOMBIE_BREAK_WOODEN_DOOR: nmssSoundEvent;
      static ENTITY_ZOMBIE_CONVERTED_TO_DROWNED: nmssSoundEvent;
      static ENTITY_ZOMBIE_DEATH: nmssSoundEvent;
      static ENTITY_ZOMBIE_DESTROY_EGG: nmssSoundEvent;
      static ENTITY_ZOMBIE_HORSE_AMBIENT: nmssSoundEvent;
      static ENTITY_ZOMBIE_HORSE_DEATH: nmssSoundEvent;
      static ENTITY_ZOMBIE_HORSE_HURT: nmssSoundEvent;
      static ENTITY_ZOMBIE_HURT: nmssSoundEvent;
      static ENTITY_ZOMBIE_INFECT: nmssSoundEvent;
      static ENTITY_ZOMBIE_STEP: nmssSoundEvent;
      static ENTITY_ZOMBIE_VILLAGER_AMBIENT: nmssSoundEvent;
      static ENTITY_ZOMBIE_VILLAGER_CONVERTED: nmssSoundEvent;
      static ENTITY_ZOMBIE_VILLAGER_CURE: nmssSoundEvent;
      static ENTITY_ZOMBIE_VILLAGER_DEATH: nmssSoundEvent;
      static ENTITY_ZOMBIE_VILLAGER_HURT: nmssSoundEvent;
      static ENTITY_ZOMBIE_VILLAGER_STEP: nmssSoundEvent;
      static ENTITY_ZOMBIFIED_PIGLIN_AMBIENT: nmssSoundEvent;
      static ENTITY_ZOMBIFIED_PIGLIN_ANGRY: nmssSoundEvent;
      static ENTITY_ZOMBIFIED_PIGLIN_DEATH: nmssSoundEvent;
      static ENTITY_ZOMBIFIED_PIGLIN_HURT: nmssSoundEvent;
      static EVENT_RAID_HORN: nmssSoundEvent;
      static ITEM_ARMOR_EQUIP_CHAIN: nmssSoundEvent;
      static ITEM_ARMOR_EQUIP_DIAMOND: nmssSoundEvent;
      static ITEM_ARMOR_EQUIP_ELYTRA: nmssSoundEvent;
      static ITEM_ARMOR_EQUIP_GENERIC: nmssSoundEvent;
      static ITEM_ARMOR_EQUIP_GOLD: nmssSoundEvent;
      static ITEM_ARMOR_EQUIP_IRON: nmssSoundEvent;
      static ITEM_ARMOR_EQUIP_LEATHER: nmssSoundEvent;
      static ITEM_ARMOR_EQUIP_NETHERITE: nmssSoundEvent;
      static ITEM_ARMOR_EQUIP_TURTLE: nmssSoundEvent;
      static ITEM_AXE_STRIP: nmssSoundEvent;
      static ITEM_BOOK_PAGE_TURN: nmssSoundEvent;
      static ITEM_BOOK_PUT: nmssSoundEvent;
      static ITEM_BOTTLE_EMPTY: nmssSoundEvent;
      static ITEM_BOTTLE_FILL: nmssSoundEvent;
      static ITEM_BOTTLE_FILL_DRAGONBREATH: nmssSoundEvent;
      static ITEM_BUCKET_EMPTY: nmssSoundEvent;
      static ITEM_BUCKET_EMPTY_FISH: nmssSoundEvent;
      static ITEM_BUCKET_EMPTY_LAVA: nmssSoundEvent;
      static ITEM_BUCKET_FILL: nmssSoundEvent;
      static ITEM_BUCKET_FILL_FISH: nmssSoundEvent;
      static ITEM_BUCKET_FILL_LAVA: nmssSoundEvent;
      static ITEM_CHORUS_FRUIT_TELEPORT: nmssSoundEvent;
      static ITEM_CROP_PLANT: nmssSoundEvent;
      static ITEM_CROSSBOW_HIT: nmssSoundEvent;
      static ITEM_CROSSBOW_LOADING_END: nmssSoundEvent;
      static ITEM_CROSSBOW_LOADING_MIDDLE: nmssSoundEvent;
      static ITEM_CROSSBOW_LOADING_START: nmssSoundEvent;
      static ITEM_CROSSBOW_QUICK_CHARGE_1: nmssSoundEvent;
      static ITEM_CROSSBOW_QUICK_CHARGE_2: nmssSoundEvent;
      static ITEM_CROSSBOW_QUICK_CHARGE_3: nmssSoundEvent;
      static ITEM_CROSSBOW_SHOOT: nmssSoundEvent;
      static ITEM_ELYTRA_FLYING: nmssSoundEvent;
      static ITEM_FIRECHARGE_USE: nmssSoundEvent;
      static ITEM_FLINTANDSTEEL_USE: nmssSoundEvent;
      static ITEM_HOE_TILL: nmssSoundEvent;
      static ITEM_HONEY_BOTTLE_DRINK: nmssSoundEvent;
      static ITEM_LODESTONE_COMPASS_LOCK: nmssSoundEvent;
      static ITEM_NETHER_WART_PLANT: nmssSoundEvent;
      static ITEM_SHIELD_BLOCK: nmssSoundEvent;
      static ITEM_SHIELD_BREAK: nmssSoundEvent;
      static ITEM_SHOVEL_FLATTEN: nmssSoundEvent;
      static ITEM_SWEET_BERRIES_PICK_FROM_BUSH: nmssSoundEvent;
      static ITEM_TOTEM_USE: nmssSoundEvent;
      static ITEM_TRIDENT_HIT: nmssSoundEvent;
      static ITEM_TRIDENT_HIT_GROUND: nmssSoundEvent;
      static ITEM_TRIDENT_RETURN: nmssSoundEvent;
      static ITEM_TRIDENT_RIPTIDE_1: nmssSoundEvent;
      static ITEM_TRIDENT_RIPTIDE_2: nmssSoundEvent;
      static ITEM_TRIDENT_RIPTIDE_3: nmssSoundEvent;
      static ITEM_TRIDENT_THROW: nmssSoundEvent;
      static ITEM_TRIDENT_THUNDER: nmssSoundEvent;
      static MUSIC_CREATIVE: nmssSoundEvent;
      static MUSIC_CREDITS: nmssSoundEvent;
      static MUSIC_DISC_11: nmssSoundEvent;
      static MUSIC_DISC_13: nmssSoundEvent;
      static MUSIC_DISC_BLOCKS: nmssSoundEvent;
      static MUSIC_DISC_CAT: nmssSoundEvent;
      static MUSIC_DISC_CHIRP: nmssSoundEvent;
      static MUSIC_DISC_FAR: nmssSoundEvent;
      static MUSIC_DISC_MALL: nmssSoundEvent;
      static MUSIC_DISC_MELLOHI: nmssSoundEvent;
      static MUSIC_DISC_PIGSTEP: nmssSoundEvent;
      static MUSIC_DISC_STAL: nmssSoundEvent;
      static MUSIC_DISC_STRAD: nmssSoundEvent;
      static MUSIC_DISC_WAIT: nmssSoundEvent;
      static MUSIC_DISC_WARD: nmssSoundEvent;
      static MUSIC_DRAGON: nmssSoundEvent;
      static MUSIC_END: nmssSoundEvent;
      static MUSIC_GAME: nmssSoundEvent;
      static MUSIC_MENU: nmssSoundEvent;
      static MUSIC_NETHER_BASALT_DELTAS: nmssSoundEvent;
      static MUSIC_NETHER_CRIMSON_FOREST: nmssSoundEvent;
      static MUSIC_NETHER_NETHER_WASTES: nmssSoundEvent;
      static MUSIC_NETHER_SOUL_SAND_VALLEY: nmssSoundEvent;
      static MUSIC_NETHER_WARPED_FOREST: nmssSoundEvent;
      static MUSIC_UNDER_WATER: nmssSoundEvent;
      static PARTICLE_SOUL_ESCAPE: nmssSoundEvent;
      static UI_BUTTON_CLICK: nmssSoundEvent;
      static UI_CARTOGRAPHY_TABLE_TAKE_RESULT: nmssSoundEvent;
      static UI_LOOM_SELECT_PATTERN: nmssSoundEvent;
      static UI_LOOM_TAKE_RESULT: nmssSoundEvent;
      static UI_STONECUTTER_SELECT_RECIPE: nmssSoundEvent;
      static UI_STONECUTTER_TAKE_RESULT: nmssSoundEvent;
      static UI_TOAST_CHALLENGE_COMPLETE: nmssSoundEvent;
      static UI_TOAST_IN: nmssSoundEvent;
      static UI_TOAST_OUT: nmssSoundEvent;
      static WEATHER_RAIN: nmssSoundEvent;
      static WEATHER_RAIN_ABOVE: nmssSoundEvent;
      static fromId (id: number): nmssSoundEvent;
      getId (): number;
      getNamespaceID (): string;
      key (): nkakKey;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmssSoundEvent;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmssSoundEvent[];
   }
   export class nmsimSpawnEggMeta extends nmsiItemMeta implements nmsiIProvider<nmsimSBuilder> {
      constructor (metaBuilder: nmsiItemMetaBuilder, entityType: nmseEntityType);
      getEntityType (): nmseEntityType;
   }
   export class nmsimSBuilder extends nmsiItemMetaBuilder {
      constructor ();
      build (): nmsimSpawnEggMeta;
      entityType (entityType: nmseEntityType): nmsimSBuilder;
      getSupplier (): jufSupplier<nmsiItemMetaBuilder>;
      read (nbtCompound: org.jglrxavpok.hephaistos.nbt.NBTCompound): void;
   }
   export class nmsnpspSpawnEntityPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsemmSpawnerMinecartMeta extends nmsemmAbstractMinecartMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getObjectData (): number;
   }
   export class nmsnpspSpawnExperienceOrbPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspSpawnLivingEntityPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspSpawnPaintingPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspSpawnPlayerPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspSpawnPositionPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmslSpectateListener extends jlObject {
      constructor ();
      static listener (packet: nmsnpcpClientSpectatePacket, player: nmsePlayer): void;
   }
   export class nmsemaSpectralArrowMeta extends nmsemaAbstractArrowMeta implements nmsemObjectDataProvider, nmsemProjectileMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getObjectData (): number;
      getShooter (): nmseEntity;
      requiresVelocityPacketAtSpawn (): boolean;
      setShooter (shooter: nmseEntity): void;
   }
   export class nmsemmrSpellcasterIllagerMeta extends nmsemmrAbstractIllagerMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getSpell (): nmsemmrSSpell;
      setSpell (spell: nmsemmrSSpell): void;
   }
   export class nmsemmrSSpell extends jlEnum<nmsemmrSSpell> {
      static ATTACK: nmsemmrSSpell;
      static BLINDNESS: nmsemmrSSpell;
      static DISAPPEAR: nmsemmrSSpell;
      static NONE: nmsemmrSSpell;
      static SUMMON_VEX: nmsemmrSSpell;
      static WOLOLO: nmsemmrSSpell;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsemmrSSpell;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsemmrSSpell[];
   }
   export class nmsemmSpiderMeta extends nmsemmMonsterMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      isClimbing (): boolean;
      setClimbing (value: boolean): void;
   }
   export class nmsemwSquidMeta extends nmsemwWaterAnimalMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   /**Represents the stacking rule of an ItemStack.  This can be used to mimic the vanilla one (using the displayed item quantity)  or a complete new one which can be stored in lore, name, etc...*/
   export interface nmsiStackingRule {
      /**Changes the size of the ItemStack to newAmount.*/
      apply (item: nmsiItemStack, newAmount: number): nmsiItemStack;
      apply (item: nmsiItemStack, amountOperator: jufIntUnaryOperator): nmsiItemStack;
      /**Used to know if an ItemStack can have the size newAmount applied.*/
      canApply (item: nmsiItemStack, amount: number): boolean;
      /**Used to know if two ItemStack can be stacked together.*/
      canBeStacked (item1: nmsiItemStack, item2: nmsiItemStack): boolean;
      /**Used to determine the current stack size of an ItemStack.*/
      getAmount (itemStack: nmsiItemStack): number;
      /**Gets the max size of a stack.*/
      getMaxSize (itemStack: nmsiItemStack): number;
   }
   export class nmsibrvStairsPlacementRule extends nmsibrBlockPlacementRule {
      constructor (block: nmsibBlock);
      /**Called when the block is placed.*/
      blockPlace (instance: nmsiInstance, block: nmsibBlock, blockFace: nmsibBlockFace, blockPosition: nmsuBlockPosition, player: nmsePlayer): number;
      /**Called when the block state id can be updated (for instance if a neighbour block changed).*/
      blockUpdate (instance: nmsiInstance, blockPosition: nmsuBlockPosition, currentStateID: number): number;
   }
   export class nmssStatisticCategory extends jlEnum<nmssStatisticCategory> {
      static BROKEN: nmssStatisticCategory;
      static CRAFTED: nmssStatisticCategory;
      static CUSTOM: nmssStatisticCategory;
      static DROPPED: nmssStatisticCategory;
      static KILLED: nmssStatisticCategory;
      static KILLED_BY: nmssStatisticCategory;
      static MINED: nmssStatisticCategory;
      static PICKED_UP: nmssStatisticCategory;
      static USED: nmssStatisticCategory;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmssStatisticCategory;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmssStatisticCategory[];
   }
   export class nmsnpspStatisticsPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspSStatistic extends jlObject implements nmsubWriteable, nmsubReadable {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   /**\/\/==============================  \/\/  AUTOGENERATED BY EnumGenerator  \/\/==============================*/
   export class nmssStatisticType extends jlEnum<nmssStatisticType> implements net.kyori.adventure.key.Keyed {
      static ANIMALS_BRED: nmssStatisticType;
      static AVIATE_ONE_CM: nmssStatisticType;
      static BELL_RING: nmssStatisticType;
      static BOAT_ONE_CM: nmssStatisticType;
      static CLEAN_ARMOR: nmssStatisticType;
      static CLEAN_BANNER: nmssStatisticType;
      static CLEAN_SHULKER_BOX: nmssStatisticType;
      static CLIMB_ONE_CM: nmssStatisticType;
      static CROUCH_ONE_CM: nmssStatisticType;
      static DAMAGE_ABSORBED: nmssStatisticType;
      static DAMAGE_BLOCKED_BY_SHIELD: nmssStatisticType;
      static DAMAGE_DEALT: nmssStatisticType;
      static DAMAGE_DEALT_ABSORBED: nmssStatisticType;
      static DAMAGE_DEALT_RESISTED: nmssStatisticType;
      static DAMAGE_RESISTED: nmssStatisticType;
      static DAMAGE_TAKEN: nmssStatisticType;
      static DEATHS: nmssStatisticType;
      static DROP: nmssStatisticType;
      static EAT_CAKE_SLICE: nmssStatisticType;
      static ENCHANT_ITEM: nmssStatisticType;
      static FALL_ONE_CM: nmssStatisticType;
      static FILL_CAULDRON: nmssStatisticType;
      static FISH_CAUGHT: nmssStatisticType;
      static FLY_ONE_CM: nmssStatisticType;
      static HORSE_ONE_CM: nmssStatisticType;
      static INSPECT_DISPENSER: nmssStatisticType;
      static INSPECT_DROPPER: nmssStatisticType;
      static INSPECT_HOPPER: nmssStatisticType;
      static INTERACT_WITH_ANVIL: nmssStatisticType;
      static INTERACT_WITH_BEACON: nmssStatisticType;
      static INTERACT_WITH_BLAST_FURNACE: nmssStatisticType;
      static INTERACT_WITH_BREWINGSTAND: nmssStatisticType;
      static INTERACT_WITH_CAMPFIRE: nmssStatisticType;
      static INTERACT_WITH_CARTOGRAPHY_TABLE: nmssStatisticType;
      static INTERACT_WITH_CRAFTING_TABLE: nmssStatisticType;
      static INTERACT_WITH_FURNACE: nmssStatisticType;
      static INTERACT_WITH_GRINDSTONE: nmssStatisticType;
      static INTERACT_WITH_LECTERN: nmssStatisticType;
      static INTERACT_WITH_LOOM: nmssStatisticType;
      static INTERACT_WITH_SMITHING_TABLE: nmssStatisticType;
      static INTERACT_WITH_SMOKER: nmssStatisticType;
      static INTERACT_WITH_STONECUTTER: nmssStatisticType;
      static JUMP: nmssStatisticType;
      static LEAVE_GAME: nmssStatisticType;
      static MINECART_ONE_CM: nmssStatisticType;
      static MOB_KILLS: nmssStatisticType;
      static OPEN_BARREL: nmssStatisticType;
      static OPEN_CHEST: nmssStatisticType;
      static OPEN_ENDERCHEST: nmssStatisticType;
      static OPEN_SHULKER_BOX: nmssStatisticType;
      static PIG_ONE_CM: nmssStatisticType;
      static PLAY_NOTEBLOCK: nmssStatisticType;
      static PLAY_ONE_MINUTE: nmssStatisticType;
      static PLAY_RECORD: nmssStatisticType;
      static PLAYER_KILLS: nmssStatisticType;
      static POT_FLOWER: nmssStatisticType;
      static RAID_TRIGGER: nmssStatisticType;
      static RAID_WIN: nmssStatisticType;
      static SLEEP_IN_BED: nmssStatisticType;
      static SNEAK_TIME: nmssStatisticType;
      static SPRINT_ONE_CM: nmssStatisticType;
      static STRIDER_ONE_CM: nmssStatisticType;
      static SWIM_ONE_CM: nmssStatisticType;
      static TALKED_TO_VILLAGER: nmssStatisticType;
      static TARGET_HIT: nmssStatisticType;
      static TIME_SINCE_DEATH: nmssStatisticType;
      static TIME_SINCE_REST: nmssStatisticType;
      static TRADED_WITH_VILLAGER: nmssStatisticType;
      static TRIGGER_TRAPPED_CHEST: nmssStatisticType;
      static TUNE_NOTEBLOCK: nmssStatisticType;
      static USE_CAULDRON: nmssStatisticType;
      static WALK_ON_WATER_ONE_CM: nmssStatisticType;
      static WALK_ONE_CM: nmssStatisticType;
      static WALK_UNDER_WATER_ONE_CM: nmssStatisticType;
      static fromId (id: number): nmssStatisticType;
      getId (): number;
      getNamespaceID (): string;
      key (): nkakKey;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmssStatisticType;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmssStatisticType[];
   }
   export class nmslStatusListener extends jlObject {
      constructor ();
      static listener (packet: nmsnpcpClientStatusPacket, player: nmsePlayer): void;
   }
   export class nmsnpcsStatusRequestPacket extends jlObject implements nmsnpcClientPreplayPacket {
      constructor ();
      /**Called when the packet is received.*/
      process (connection: nmsnpPlayerConnection): void;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsrStonecutterRecipe extends nmsrRecipe {
      constructor (recipeId: string, group: string, ingredient: nmsnpspDIngredient, result: nmsiItemStack);
      getGroup (): string;
      getIngredient (): nmsnpspDIngredient;
      getResult (): nmsiItemStack;
      setGroup (group: string): void;
      setIngredient (ingredient: nmsnpspDIngredient): void;
      setResult (result: nmsiItemStack): void;
   }
   export class nmsnpspStopSoundPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   /**Represents an area which contain data.    Each StorageLocation has a StorageSystem associated to it  which is used to save and retrieve data from keys.*/
   export class nmssStorageLocation extends jlObject {
      constructor (storageSystem: nmssStorageSystem, location: string, storageOptions: nmssStorageOptions);
      /**Closes the StorageLocation using StorageSystem.close().*/
      close (): void;
      /**Deletes a key using the associated StorageSystem.*/
      delete (key: string): void;
      /**Gets the data associated with a key using StorageSystem.get(String).*/
      get (key: string): number[];
      /**Retrieves a serialized object associated to a key.*/
      get<T> (key: string, type: jlClass<T>): T;
      /**Gets a shared SerializableData if already in memory or retrieve it from the default StorageSystem and save it in cache  for further request.*/
      getAndCacheData (key: string, dataContainer: nmsdDataContainer): void;
      /**Gets an unique SerializableData  which is cloned if cached or retrieved with the default StorageSystem.*/
      getAndCloneData (key: string, dataContainer: nmsdDataContainer): void;
      /**Gets the location of this storage.*/
      getLocation (): string;
      getOrDefault<T> (key: string, type: jlClass<T>, defaultValue: T): T;
      /**Saves a specified cached SerializableData and remove it from memory.*/
      saveAndRemoveCachedData (key: string): void;
      /**Saves the all the cached SerializableData.*/
      saveCachedData (): void;
      /**Saves an unique cached SerializableData.*/
      saveCachedData (key: string): void;
      /**Sets a data associated to a key using StorageSystem.set(String, byte[]).*/
      set (key: string, data: number[]): void;
      /**Sets an object associated to a key.*/
      set<T> (key: string, object: T, type: jlClass<T>): void;
   }
   /**Manager used to retrieve StorageLocation with getLocation(String, StorageOptions, StorageSystem)  and define the default StorageSystem with defineDefaultStorageSystem(Supplier).*/
   export class nmssStorageManager extends jlObject {
      constructor ();
      /**Defines the default StorageSystem used for StorageLocation.*/
      defineDefaultStorageSystem (storageSystemSupplier: jufSupplier<nmssStorageSystem>): void;
      /**Gets all the StorageLocation which have been loaded by getLocation(String)  or getLocation(String, StorageOptions, StorageSystem).*/
      getLoadedLocations (): juCollection<nmssStorageLocation>;
      /**Used to get an access to the specified location.*/
      getLocation (location: string): nmssStorageLocation;
      /**Used to get an access to the specified location.*/
      getLocation (location: string, storageOptions: nmssStorageOptions): nmssStorageLocation;
      /**Used to get an access to the specified location.*/
      getLocation (location: string, storageOptions: nmssStorageOptions, storageSystem: nmssStorageSystem): nmssStorageLocation;
      /**Gets if the default StorageSystem is set.*/
      isDefaultStorageSystemDefined (): boolean;
      /**Calls locationExists(String, StorageSystem) with the default StorageSystem.*/
      locationExists (location: string): boolean;
      /**Used to know if the specified location already exist or not.*/
      locationExists (location: string, storageSystem: nmssStorageSystem): boolean;
   }
   export class nmssStorageOptions extends jlObject {
      constructor ();
      /**Gets if compression should be enabled.*/
      hasCompression (): boolean;
      /**Defines if the storage solution should use compression.*/
      setCompression (compression: boolean): nmssStorageOptions;
   }
   /**Represents a way of storing data by key\/value.  The location does not have to be a file or folder path. It is the 'identifier' of the data location.*/
   export interface nmssStorageSystem {
      /**Called when the location is closed, generally during server shutdown.*/
      close (): void;
      /**Deletes the specified key from the database.*/
      delete (key: string): void;
      /**Gets if the location exists.*/
      exists (location: string): boolean;
      /**Gets the data associated to a key.*/
      get (key: string): number[];
      /**Called when a StorageLocation is opened with this StorageSystem.*/
      open (location: string, storageOptions: nmssStorageOptions): void;
      /**Sets the specified data to the defined key.*/
      set (key: string, data: number[]): void;
   }
   export class nmsemmsStrayMeta extends nmsemmsAbstractSkeletonMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   export class nmsemaStriderMeta extends nmsemaAnimalMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getTimeToBoost (): number;
      isHasSaddle (): boolean;
      isShaking (): boolean;
      setHasSaddle (value: boolean): void;
      setShaking (value: boolean): void;
      setTimeToBoost (value: number): void;
   }
   export class nmsdtaStringArrayData extends nmsdDataType<jlString> {
      constructor ();
      /**Decodes the data type.*/
      decode (reader: nmsubBinaryReader): string[];
      /**Encodes the data type.*/
      encode (writer: nmsubBinaryWriter, value: string[]): void;
   }
   /**Interface used when a string array needs to be validated dynamically.*/
   export interface nmsucvStringArrayValidator extends nmsucvValidator<jlString> {}
   export class nmsdtStringData extends nmsdDataType<jlString> {
      constructor ();
      /**Decodes the data type.*/
      decode (reader: nmsubBinaryReader): string;
      /**Encodes the data type.*/
      encode (writer: nmsubBinaryWriter, value: string): void;
   }
   export class nmsuStringUtils extends jlObject {
      constructor ();
      static countMatches (str: jlCharSequence, ch: string): number;
      /**Applies the Jaro-Winkler distance algorithm to the given strings, providing information about the  similarity of them.*/
      static jaroWinklerScore (s1: string, s2: string): number;
      static unescapeJavaString (st: string): string;
   }
   /**Interface used when a string needs to be validated dynamically.*/
   export interface nmsucvStringValidator extends nmsucvValidator<jlString> {}
   export class nmscbsSuggestion extends jlObject {
      constructor (input: string, start: number, length: number);
      addEntry (entry: nmscbsSuggestionEntry): void;
      getEntries (): juList<nmscbsSuggestionEntry>;
      getInput (): string;
      getLength (): number;
      getStart (): number;
      setLength (length: number): void;
      setStart (start: number): void;
   }
   export interface nmscbsSuggestionCallback {
      apply (sender: nmscCommandSender, context: nmscbCommandContext, suggestion: nmscbsSuggestion): void;
   }
   export class nmscbsSuggestionEntry extends jlObject {
      constructor (entry: string);
      constructor (entry: string, tooltip: nkatComponent);
      constructor (entry: string, tooltip: nmscJsonMessage);
      getEntry (): string;
      getTooltip (): nkatComponent;
   }
   export class nmscbamSuggestionType extends jlEnum<nmscbamSuggestionType> {
      static ALL_RECIPES: nmscbamSuggestionType;
      static ASK_SERVER: nmscbamSuggestionType;
      static AVAILABLE_SOUNDS: nmscbamSuggestionType;
      static SUMMONABLE_ENTITIES: nmscbamSuggestionType;
      getIdentifier (): string;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmscbamSuggestionType;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmscbamSuggestionType[];
   }
   /**Requires 'explosionPower' double argument*/
   export class nmsgcSurvivesExplosionCondition extends jlObject implements nmsgCondition {
      constructor ();
      /**Tests this condition.*/
      test (data: nmsdData): boolean;
   }
   export class nmsgcSDeserializer extends jlObject implements com.google.gson.JsonDeserializer< nmsgcSurvivesExplosionCondition> {
      constructor ();
      deserialize (json: com.google.gson.JsonElement, typeOfT: jlrType, context: com.google.gson.JsonDeserializationContext): nmsgcSurvivesExplosionCondition;
   }
   export class nmslTabCompleteListener extends jlObject {
      constructor ();
      static listener (packet: nmsnpcpClientTabCompletePacket, player: nmsePlayer): void;
   }
   export class nmsnpspTabCompletePacket extends jlObject implements nmsnpsComponentHoldingServerPacket {
      constructor ();
      /**Gets the components held by this object.*/
      components (): juCollection<nkatComponent>;
      /**Returns a copy of this object.*/
      copyWithOperator (operator: jufUnaryOperator<nkatComponent>): nmsnpsServerPacket;
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspTMatch extends jlObject implements nmsaComponentHolder<nmsnpspTMatch> {
      constructor ();
      /**Gets the components held by this object.*/
      components (): juCollection<nkatComponent>;
      /**Returns a copy of this object.*/
      copyWithOperator (operator: jufUnaryOperator<nkatComponent>): nmsnpspTMatch;
   }
   /**Represents the Player tab list as a Scoreboard.*/
   export class nmssTabList extends jlObject implements nmssScoreboard {
      constructor (name: string, type: nmsnpspSType);
      /**Adds a viewer.*/
      addViewer (player: nmsePlayer): boolean;
      /**Gets the objective name of the scoreboard.*/
      getObjectiveName (): string;
      /**Gets the scoreboard objective type*/
      getType (): nmsnpspSType;
      /**Gets all the viewers of this viewable element.*/
      getViewers (): juSet<nmsePlayer>;
      /**Removes a viewer.*/
      removeViewer (player: nmsePlayer): boolean;
      /**Changes the scoreboard objective type*/
      setType (type: nmsnpspSType): void;
   }
   /**Represents a group of items, blocks, fluids, entity types or function.  Immutable by design*/
   export class nmsgtTag extends jlObject {
      constructor (manager: nmsgtTagManager, name: nmsuNamespaceID, type: string, lowerPriority: nmsgtTag, container: nmsgtTagContainer);
      constructor (name: nmsuNamespaceID);
      constructor (name: nmsuNamespaceID, values: juSet<nmsuNamespaceID>);
      /**Checks whether the given id in inside this tag*/
      contains (id: nmsuNamespaceID): boolean;
      /**Returns the name of this tag*/
      getName (): nmsuNamespaceID;
      /**Returns an immutable set of values present in this tag*/
      getValues (): juSet<nmsuNamespaceID>;
   }
   /**Represents a key to retrieve or change a value.    All tags are serializable.*/
   export class nmstTag<T> extends jlObject {
      constructor (key: string, readFunction: jufFunction<org.jglrxavpok.hephaistos.nbt.NBTCompound,T>, writeConsumer: jufBiConsumer<org.jglrxavpok.hephaistos.nbt.NBTCompound,T>);
      constructor (key: string, readFunction: jufFunction<org.jglrxavpok.hephaistos.nbt.NBTCompound,T>, writeConsumer: jufBiConsumer<org.jglrxavpok.hephaistos.nbt.NBTCompound,T>, defaultValue: jufSupplier<T>);
      static Byte (key: string): nmstTag<jlByte>;
      static ByteArray (key: string): nmstTag<number[]>;
      static Custom<T> (key: string, serializer: nmstTagSerializer<T>): nmstTag<T>;
      defaultValue (defaultValue: jufSupplier<T>): nmstTag<T>;
      defaultValue (defaultValue: T): nmstTag<T>;
      static Double (key: string): nmstTag<number>;
      static Float (key: string): nmstTag<jlFloat>;
      getKey (): string;
      static IntArray (key: string): nmstTag<number[]>;
      static Integer (key: string): nmstTag<jlInteger>;
      static Long (key: string): nmstTag<jlLong>;
      static LongArray (key: string): nmstTag<number[]>;
      map<R> (readMap: jufFunction<T,R>, writeMap: jufFunction<R,T>): nmstTag<R>;
      static NBT (key: string): jhnNBT;
      read (nbtCompound: org.jglrxavpok.hephaistos.nbt.NBTCompound): T;
      static Short (key: string): nmstTag<jlShort>;
      static String (key: string): nmstTag<string>;
      write (nbtCompound: org.jglrxavpok.hephaistos.nbt.NBTCompound, value: T): void;
   }
   export class nmsgtTBasicTypes extends jlEnum<nmsgtTBasicTypes> {
      static BLOCKS: nmsgtTBasicTypes;
      static ENTITY_TYPES: nmsgtTBasicTypes;
      static FLUIDS: nmsgtTBasicTypes;
      static ITEMS: nmsgtTBasicTypes;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsgtTBasicTypes;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsgtTBasicTypes[];
   }
   /**Meant only for parsing tag JSON*/
   export class nmsgtTagContainer extends jlObject {
      constructor ();
   }
   export class nmsgleTagEntry extends nmsglLEntry {
      generate (output: juList<nmsiItemStack>, arguments: nmsdData): void;
   }
   /**Represents an element which can read and write tags.*/
   export interface nmstTagHandler extends nmstTagReadable, nmstTagWritable {}
   /**Handles loading and caching of tags.*/
   export class nmsgtTagManager extends jlObject {
      constructor ();
      /**Adds a required tag to send to players when they connect*/
      addRequiredTag (type: nmsgtTBasicTypes, name: nmsuNamespaceID): void;
      /**Adds the required tags for the game to function correctly*/
      addRequiredTagsToPacket (tags: nmsnpspTagsPacket): void;
      /**Loads a tag with the given name.*/
      forceLoad (name: nmsuNamespaceID, tagType: string, readerSupplier: nmsgtTReaderSupplierWithFileNotFound): nmsgtTag;
      /**Loads a tag with the given name.*/
      load (name: nmsuNamespaceID, tagType: string): nmsgtTag;
      /**Loads a tag with the given name.*/
      load (name: nmsuNamespaceID, tagType: string, reader: jiReader): nmsgtTag;
      /**Loads a tag with the given name.*/
      load (name: nmsuNamespaceID, tagType: string, readerSupplier: nmsgtTReaderSupplierWithFileNotFound): nmsgtTag;
   }
   export interface nmsgtTReaderSupplierWithFileNotFound {
      get (): jiReader;
   }
   /**Represents an element which can read tags.*/
   export interface nmstTagReadable {
      /**Converts an nbt compound to a tag reader.*/
      static fromCompound (compound: org.jglrxavpok.hephaistos.nbt.NBTCompound): nmstTagReadable;
      /**Reads the specified tag.*/
      getTag<T> (tag: nmstTag<T>): T;
      /**Returns if a tag is present.*/
      hasTag (tag: nmstTag<any>): boolean;
   }
   /**Interface used to create custom types compatible with Tag.Custom(String, TagSerializer).*/
   export interface nmstTagSerializer<T> {
      /**Reads the custom tag from a TagReadable.*/
      read (reader: nmstTagReadable): T;
      /**Writes the custom tag to a TagWritable.*/
      write (writer: nmstTagWritable, value: T): void;
   }
   export class nmsnpspTagsPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Gets the TagsPacket sent to every Player  on login.*/
      static getRequiredTagsPacket (): nmsnpspTagsPacket;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      readTags (reader: nmsubBinaryReader, output: juList<nmsgtTag>, idSupplier: jufFunction<jlInteger,nmsuNamespaceID>): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   /**minecraft:tag*/
   export class nmsgleTagType extends jlObject implements nmsglLootTableEntryType {
      constructor ();
      create (lootTableManager: nmsglLootTableManager, name: string, conditions: juList<nmsgCondition>, children: juList<nmsglLEntry>, expand: boolean, functions: juList<nmsglLootTableFunction>, weight: number, quality: number): nmsglLEntry;
   }
   /**Represents an element which can write tags.*/
   export interface nmstTagWritable {
      /**Converts an nbt compound to a tag writer.*/
      static fromCompound (compound: org.jglrxavpok.hephaistos.nbt.NBTCompound): nmstTagWritable;
      /**Writes the specified type.*/
      setTag<T> (tag: nmstTag<T>, value: T): void;
   }
   export interface nmsetTameableAnimal extends nmsetAnimal {}
   export class nmsetTameableAnimalCreature extends nmsetAgeableCreature implements nmsetTameableAnimal {
      constructor (entityType: nmseEntityType, spawnPosition: nmsuPosition);
      constructor (entityType: nmseEntityType, spawnPosition: nmsuPosition, instance: nmsiInstance);
      getOwner (): juUUID;
      isSitting (): boolean;
      isTamed (): boolean;
      setOwner (value: juUUID): void;
      setSitting (value: boolean): void;
      setTamed (value: boolean): void;
   }
   export class nmsematTameableAnimalMeta extends nmsemaAnimalMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getOwner (): juUUID;
      isSitting (): boolean;
      isTamed (): boolean;
      setOwner (value: juUUID): void;
      setSitting (value: boolean): void;
      setTamed (value: boolean): void;
   }
   /**The target selector is called each time the entity receives an "attack" instruction  without having a target.*/
   export class nmseaTargetSelector extends jlObject {
      constructor (entityCreature: nmseEntityCreature);
      /**Finds the target.*/
      findTarget (): nmseEntity;
      /**Gets the entity linked to this target selector.*/
      getEntityCreature (): nmseEntityCreature;
   }
   /**An Object that represents a task that is scheduled for execution on the application.    Tasks are built in SchedulerManager and scheduled by a TaskBuilder.*/
   export class nmstTask extends jlObject implements jlRunnable {
      constructor (schedulerManager: nmstSchedulerManager, runnable: jlRunnable, shutdown: boolean, delay: number, repeat: number, isTransient: boolean, owningExtension: string);
      /**Cancels this task.*/
      cancel (): void;
      equals (object: jlObject): boolean;
      /**Gets the id of this task.*/
      getId (): number;
      /**Extension which owns this task, or null if none*/
      getOwningExtension (): string;
      /**Gets the current status of the task.*/
      getStatus (): nmstTaskStatus;
      hashCode (): number;
      /**If this task is owned by an extension, should it survive the unloading of said extensionany   May be useful for delay tasks, but it can prevent the extension classes from being unloaded, and preventing a full   reload of that extension.*/
      isTransient (): boolean;
      /**Executes the task.*/
      run (): void;
      /**Executes the internal runnable.*/
      runRunnable (): void;
      /**Sets up the task for correct execution.*/
      schedule (): void;
   }
   /**A builder which represents a fluent Object to schedule tasks.    You can specify a delay with delay(long, TimeUnit) or repeat(long, TimeUnit)  and then schedule the Task with schedule().*/
   export class nmstTaskBuilder extends jlObject {
      constructor (schedulerManager: nmstSchedulerManager, runnable: jlRunnable);
      constructor (schedulerManager: nmstSchedulerManager, runnable: jlRunnable, shutdown: boolean);
      /**Clears the delay interval of the Task.*/
      clearDelay (): nmstTaskBuilder;
      /**Clears the repeat interval of the Task.*/
      clearRepeat (): nmstTaskBuilder;
      /**Specifies that the Task should delay its execution by the specified amount of time.*/
      delay (time: number, unit: nmsutTimeUnit): nmstTaskBuilder;
      /**Specifies that the Task should delay its execution by the specified amount of time.*/
      delay (updateOption: nmsutUpdateOption): nmstTaskBuilder;
      /**If this task is owned by an extension, should it survive the unloading of said extensionany   May be useful for delay tasks, but it can prevent the extension classes from being unloaded, and preventing a full   reload of that extension.*/
      makeTransient (): nmstTaskBuilder;
      /**Specifies that the Task should continue to run after waiting for the specified value until it is terminated.*/
      repeat (time: number, unit: nmsutTimeUnit): nmstTaskBuilder;
      /**Specifies that the Task should continue to run after waiting for the specified value until it is terminated.*/
      repeat (updateOption: nmsutUpdateOption): nmstTaskBuilder;
      /**Schedules this Task for execution.*/
      schedule (): nmstTask;
   }
   /**An enumeration that representing all available statuses for a Task*/
   export class nmstTaskStatus extends jlEnum<nmstTaskStatus> {
      /**The task was cancelled with Task.cancel()*/
      static CANCELLED: nmstTaskStatus;
      /**The task has been completed.*/
      static FINISHED: nmstTaskStatus;
      /**The task is execution and is currently running*/
      static SCHEDULED: nmstTaskStatus;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmstTaskStatus;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmstTaskStatus[];
   }
   /**This object represents a team on a scoreboard that has a common display theme and other properties.*/
   export class nmssTeam extends jlObject implements nmsaaPacketGroupingAudience {
      constructor (teamName: string);
      /**Adds a member to the Team.*/
      addMember (member: string): void;
      /**Creates an destruction packet to remove the team.*/
      createTeamDestructionPacket (): nmsnpspTeamsPacket;
      /**Creates the creation packet to add a team.*/
      createTeamsCreationPacket (): nmsnpspTeamsPacket;
      /**Gets the collision rule of the team.*/
      getCollisionRule (): nmsnpspTCollisionRule;
      /**Gets the friendly flags of the team.*/
      getFriendlyFlags (): number;
      /**Obtains an unmodifiable Set of registered players who are on the team.*/
      getMembers (): juSet<string>;
      /**Gets the tag visibility of the team.*/
      getNameTagVisibility (): nmsnpspTNameTagVisibility;
      /**Gets an iterable of the players this audience contains.*/
      getPlayers (): juCollection<nmsePlayer>;
      /**Gets the prefix of the team.*/
      getPrefix (): nkatComponent;
      /**Gets the suffix of the team.*/
      getSuffix (): nkatComponent;
      /**Gets the color of the team.*/
      getTeamColor (): nkatfNamedTextColor;
      /**Gets the display name of the team.*/
      getTeamDisplayName (): nkatComponent;
      /**Gets the registry name of the team.*/
      getTeamName (): string;
      /**Removes a member from the Team.*/
      removeMember (member: string): void;
      /**Sends an TeamsPacket.Action.UPDATE_TEAM_INFO packet.*/
      sendUpdatePacket (): void;
      /**Changes the TeamsPacket.CollisionRule of the team.*/
      setCollisionRule (rule: nmsnpspTCollisionRule): void;
      /**Changes the friendly flags of the team.*/
      setFriendlyFlags (flag: number): void;
      /**Changes the TeamsPacket.NameTagVisibility of the team.*/
      setNameTagVisibility (visibility: nmsnpspTNameTagVisibility): void;
      /**Changes the prefix of the team.*/
      setPrefix (prefix: nkatComponent): void;
      /**Changes the suffix of the team.*/
      setSuffix (suffix: nkatComponent): void;
      /**Changes the color of the team.*/
      setTeamColor (color: nkatfNamedTextColor): void;
      /**Changes the display name of the team.*/
      setTeamDisplayName (teamDisplayName: nkatComponent): void;
      /**Changes the collision rule of the team and sends an update packet.*/
      updateCollisionRule (collisionRule: nmsnpspTCollisionRule): void;
      /**Changes the friendly flags of the team and sends an update packet.*/
      updateFriendlyFlags (flag: number): void;
      /**Changes the TeamsPacket.NameTagVisibility of the team and sends an update packet.*/
      updateNameTagVisibility (nameTagVisibility: nmsnpspTNameTagVisibility): void;
      /**Changes the prefix of the team and sends an update packet.*/
      updatePrefix (prefix: nkatComponent): void;
      /**Changes the suffix of the team and sends an update packet.*/
      updateSuffix (suffix: nkatComponent): void;
      /**Changes the color of the team and sends an update packet.*/
      updateTeamColor (color: nkatfNamedTextColor): void;
      /**Changes the display name of the team and sends an update packet.*/
      updateTeamDisplayName (teamDisplayName: nkatComponent): void;
   }
   /**A builder which represents a fluent Object to built teams.*/
   export class nmssTeamBuilder extends jlObject {
      constructor (name: string, teamManager: nmssTeamManager);
      /**Changes the friendly flags for allow friendly fire without an update packet.*/
      allowFriendlyFire (): nmssTeamBuilder;
      /**Built a team.*/
      build (): nmssTeam;
      /**Changes the TeamsPacket.CollisionRule of the Team without an update packet.*/
      collisionRule (rule: nmsnpspTCollisionRule): nmssTeamBuilder;
      /**Changes the friendly flags of the Team without an update packet.*/
      friendlyFlags (flag: number): nmssTeamBuilder;
      /**Changes the TeamsPacket.NameTagVisibility of the Team without an update packet.*/
      nameTagVisibility (visibility: nmsnpspTNameTagVisibility): nmssTeamBuilder;
      /**Changes the prefix of the Team without an update packet.*/
      prefix (prefix: nkatComponent): nmssTeamBuilder;
      /**Changes the friendly flags to sees invisible players of own team without an update packet.*/
      seeInvisiblePlayers (): nmssTeamBuilder;
      /**Changes the suffix of the Team without an update packet.*/
      suffix (suffix: nkatComponent): nmssTeamBuilder;
      /**Changes the color of the Team without an update packet.*/
      teamColor (color: nkatfNamedTextColor): nmssTeamBuilder;
      /**Changes the display name of the Team without an update packet.*/
      teamDisplayName (displayName: nkatComponent): nmssTeamBuilder;
      /**Updates the friendly flags for allow friendly fire.*/
      updateAllowFriendlyFire (): nmssTeamBuilder;
      /**Updates the TeamsPacket.CollisionRule of the Team.*/
      updateCollisionRule (rule: nmsnpspTCollisionRule): nmssTeamBuilder;
      /**Updates the friendly flags of the Team.*/
      updateFriendlyFlags (flag: number): nmssTeamBuilder;
      /**Updates the TeamsPacket.NameTagVisibility of the Team.*/
      updateNameTagVisibility (visibility: nmsnpspTNameTagVisibility): nmssTeamBuilder;
      /**Updates the prefix of the Team.*/
      updatePrefix (prefix: nkatComponent): nmssTeamBuilder;
      /**Updates the friendly flags to sees invisible players of own team.*/
      updateSeeInvisiblePlayers (): nmssTeamBuilder;
      /**Updates the suffix of the Team.*/
      updateSuffix (suffix: nkatComponent): nmssTeamBuilder;
      /**Updates the color of the Team.*/
      updateTeamColor (color: nkatfNamedTextColor): nmssTeamBuilder;
      /**Updates the display name of the Team.*/
      updateTeamDisplayName (displayName: nkatComponent): nmssTeamBuilder;
      /**Allows to send an update packet when the team is built.*/
      updateTeamPacket (): nmssTeamBuilder;
   }
   /**An object which manages all the Team's*/
   export class nmssTeamManager extends jlObject {
      constructor ();
      /**Initializes a new TeamBuilder for creating a team*/
      createBuilder (name: string): nmssTeamBuilder;
      /**Creates a Team with only the registry name*/
      createTeam (name: string): nmssTeam;
      /**Creates a Team with the registry name, display name, prefix, suffix and the team colro*/
      createTeam (name: string, displayName: nkatComponent, prefix: nkatComponent, teamColor: nkatfNamedTextColor, suffix: nkatComponent): nmssTeam;
      /**Creates a Team with the registry name, prefix, suffix and the team format*/
      createTeam (name: string, prefix: nkatComponent, teamColor: nkatfNamedTextColor, suffix: nkatComponent): nmssTeam;
      /**Deletes a Team*/
      deleteTeam (registryName: string): boolean;
      /**Deletes a Team*/
      deleteTeam (team: nmssTeam): boolean;
      /**Checks if the given name a registry name of a registered Team*/
      exists (teamName: string): boolean;
      /**Checks if the given Team registered*/
      exists (team: nmssTeam): boolean;
      /**Gets a List with all registered LivingEntity in the team    Note: The list exclude all players.*/
      getEntities (team: nmssTeam): juList<string>;
      /**Gets a List with all registered Player in the team    Note: The list exclude all entities.*/
      getPlayers (team: nmssTeam): juList<string>;
      /**Gets a Team with the given name*/
      getTeam (teamName: string): nmssTeam;
      /**Gets a Set with all registered Team's*/
      getTeams (): juSet<nmssTeam>;
      /**Registers a new Team*/
      registerNewTeam (team: nmssTeam): void;
   }
   /**The packet creates or updates teams*/
   export class nmsnpspTeamsPacket extends jlObject implements nmsnpsComponentHoldingServerPacket {
      constructor ();
      /**Gets the components held by this object.*/
      components (): juCollection<nkatComponent>;
      /**Returns a copy of this object.*/
      copyWithOperator (operator: jufUnaryOperator<nkatComponent>): nmsnpsServerPacket;
      /**Gets the identifier of the packet*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes data into the BinaryWriter*/
      write (writer: nmsubBinaryWriter): void;
   }
   /**An enumeration which representing all actions for the packet*/
   export class nmsnpspTAction extends jlEnum<nmsnpspTAction> {
      /**An action to add player to the team*/
      static ADD_PLAYERS_TEAM: nmsnpspTAction;
      /**An action to create a new team*/
      static CREATE_TEAM: nmsnpspTAction;
      /**An action to remove player from the team*/
      static REMOVE_PLAYERS_TEAM: nmsnpspTAction;
      /**An action to remove a team*/
      static REMOVE_TEAM: nmsnpspTAction;
      /**An action to update the team information*/
      static UPDATE_TEAM_INFO: nmsnpspTAction;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsnpspTAction;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsnpspTAction[];
   }
   /**An enumeration which representing all rules for the collision*/
   export class nmsnpspTCollisionRule extends jlEnum<nmsnpspTCollisionRule> {
      /**Can push all objects and can be pushed by all objects*/
      static ALWAYS: nmsnpspTCollisionRule;
      /**Cannot push an object, but neither can they be pushed*/
      static NEVER: nmsnpspTCollisionRule;
      /**Can push objects of other teams, but teammates cannot*/
      static PUSH_OTHER_TEAMS: nmsnpspTCollisionRule;
      /**Can only push objects of the same team*/
      static PUSH_OWN_TEAM: nmsnpspTCollisionRule;
      static fromIdentifier (identifier: string): nmsnpspTCollisionRule;
      /**Gets the identifier of the rule*/
      getIdentifier (): string;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsnpspTCollisionRule;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsnpspTCollisionRule[];
   }
   /**An enumeration which representing all visibility states for the name tags*/
   export class nmsnpspTNameTagVisibility extends jlEnum<nmsnpspTNameTagVisibility> {
      /**The name tag is visible*/
      static ALWAYS: nmsnpspTNameTagVisibility;
      /**Hides the name tag for other teams*/
      static HIDE_FOR_OTHER_TEAMS: nmsnpspTNameTagVisibility;
      /**Hides the name tag for the own team*/
      static HIDE_FOR_OWN_TEAM: nmsnpspTNameTagVisibility;
      /**The name tag is invisible*/
      static NEVER: nmsnpspTNameTagVisibility;
      static fromIdentifier (identifier: string): nmsnpspTNameTagVisibility;
      /**Gets the client identifier*/
      getIdentifier (): string;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsnpspTNameTagVisibility;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsnpspTNameTagVisibility[];
   }
   /**Cache objects with a timeout.*/
   export class nmsucTemporaryCache<T> extends jlObject {
      constructor (duration: number, timeUnit: jucTimeUnit, removalListener: com.google.common.cache.RemovalListener<juUUID,T>);
      /**Caches an object.*/
      cache (identifier: juUUID, value: T): void;
      invalidate (identifier: juUUID): void;
      /**Retrieves an object from cache.*/
      retrieve (identifier: juUUID): T;
   }
   export class nmsucTemporaryPacketCache extends nmsucTemporaryCache<nmsucTimedBuffer> {
      constructor (duration: number, timeUnit: jucTimeUnit);
   }
   /**Used to link chunks into multiple groups.  Then executed into a thread pool.*/
   export class nmstThreadProvider extends jlObject {
      constructor ();
      constructor (threadCount: number);
      addChunk (chunk: nmsiChunk): void;
      /**Performs a server tick for all chunks based on their linked thread.*/
      findThread (chunk: nmsiChunk): number;
      /**Defines how often chunks thread should be updated.*/
      getChunkRefreshType (): nmstTRefreshType;
      /**Maximum time used to refresh chunks and entities thread.*/
      getMaximumRefreshTime (): number;
      /**Minimum time used to refresh chunks and entities thread.*/
      getMinimumRefreshTime (): number;
      /**Represents the maximum percentage of tick time that can be spent refreshing chunks thread.*/
      getRefreshPercentage (): number;
      /**Finds the thread id associated to a Chunk.*/
      getThreadId (chunk: nmsiChunk): number;
      /**Gets all the tick threads.*/
      getThreads (): juList<nmstTickThread>;
      onChunkLoad (chunk: nmsiChunk): void;
      onChunkUnload (chunk: nmsiChunk): void;
      onInstanceCreate (instance: nmsiInstance): void;
      onInstanceDelete (instance: nmsiInstance): void;
      /**Called at the end of each tick to clear removed entities,  refresh the chunk linked to an entity, and chunk threads based on findThread(Chunk).*/
      refreshThreads (tickTime: number): void;
      removeChunk (chunk: nmsiChunk): void;
      /**Add an entity into the waiting list to get removed from its thread.*/
      removeEntity (entity: nmseEntity): void;
      setChunkThread (chunk: nmsiChunk, chunkEntrySupplier: jufFunction<nmstTickThread,nmstTChunkEntry>): nmstTChunkEntry;
      /**Shutdowns all the tick threads.*/
      shutdown (): void;
      switchChunk (chunk: nmsiChunk): void;
      /**Prepares the update by creating the TickThread tasks.*/
      update (time: number): jucCountDownLatch;
      /**Add an entity into the waiting list to get assigned in a thread.*/
      updateEntity (entity: nmseEntity): void;
   }
   export class nmstTChunkEntry extends jlObject {
      equals (o: jlObject): boolean;
      getChunk (): nmsiChunk;
      getEntities (): juList<nmseEntity>;
      getThread (): nmstTickThread;
      hashCode (): number;
   }
   /**Defines how often chunks thread should be refreshed.*/
   export class nmstTRefreshType extends jlEnum<nmstTRefreshType> {
      /**Chunk thread should be recomputed as often as possible.*/
      static CONSTANT: nmstTRefreshType;
      /**Chunk thread is constant after being defined.*/
      static NEVER: nmstTRefreshType;
      /**Chunk thread should be recomputed, but not continuously.*/
      static RARELY: nmstTRefreshType;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmstTRefreshType;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmstTRefreshType[];
   }
   export class nmsmThreadResult extends jlObject {
      constructor (cpuPercentage: number, userPercentage: number, waitedPercentage: number, blockedPercentage: number);
      getBlockedPercentage (): number;
      getCpuPercentage (): number;
      getUserPercentage (): number;
      getWaitedPercentage (): number;
   }
   export class nmsemiThrownEggMeta extends nmsemEntityMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getItem (): nmsiItemStack;
      setItem (item: nmsiItemStack): void;
   }
   export class nmsemiThrownEnderPearlMeta extends nmsemEntityMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getItem (): nmsiItemStack;
      setItem (item: nmsiItemStack): void;
   }
   export class nmsemiThrownExperienceBottleMeta extends nmsemEntityMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getItem (): nmsiItemStack;
      setItem (item: nmsiItemStack): void;
   }
   export class nmsemiThrownPotionMeta extends nmsemEntityMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getItem (): nmsiItemStack;
      setItem (item: nmsiItemStack): void;
   }
   export class nmsemaThrownTridentMeta extends nmsemaAbstractArrowMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getLoyaltyLevel (): number;
      isHasEnchantmentGlint (): boolean;
      setHasEnchantmentGlint (value: boolean): void;
      setLoyaltyLevel (value: number): void;
   }
   /**Represents an element which is ticked at a regular interval.*/
   export interface nmsTickable {
      /**Ticks this element.*/
      tick (time: number): void;
   }
   export class nmsmTickMonitor extends jlObject {
      constructor (tickTime: number, acquisitionTime: number);
      getAcquisitionTime (): number;
      getTickTime (): number;
   }
   /**Thread responsible for ticking chunks and entities.    Created in ThreadProvider, and awaken every tick with a task to execute.*/
   export class nmstTickThread extends jlThread {
      constructor (runnable: nmstTBatchRunnable, number: number);
      /**Gets the lock used to ensure the safety of entity acquisition.*/
      getLock (): juclReentrantLock;
      /**Shutdowns the thread.*/
      shutdown (): void;
   }
   export class nmstTBatchRunnable extends jlObject implements jlRunnable {
      constructor ();
      run (): void;
      startTick (countDownLatch: jucCountDownLatch, runnable: jlRunnable): void;
   }
   /**Tick related utilities.*/
   export class nmsuTickUtils extends jlObject {
      constructor ();
      /**Creates a number of ticks from a given duration, based on MinecraftServer.TICK_MS.*/
      static fromDuration (duration: jtDuration): number;
      /**Creates a number of ticks from a given duration.*/
      static fromDuration (duration: jtDuration, msPerTick: number): number;
   }
   /**Object containing a buffer and its timestamp.  Used for packet-caching to use the most recent.*/
   export class nmsucTimedBuffer extends jlObject {
      constructor (buffer: io.netty.buffer.ByteBuf, timestamp: number);
      getBuffer (): nbByteBuf;
      getTimestamp (): number;
   }
   export class nmspTimedPotion extends jlObject {
      constructor (potion: nmspPotion, startingTime: number);
      getPotion (): nmspPotion;
      getStartingTime (): number;
   }
   export class nmsutTimeUnit extends jlEnum<nmsutTimeUnit> {
      static DAY: nmsutTimeUnit;
      static HOUR: nmsutTimeUnit;
      static MILLISECOND: nmsutTimeUnit;
      static MINUTE: nmsutTimeUnit;
      static SECOND: nmsutTimeUnit;
      static TICK: nmsutTimeUnit;
      /**Converts a value and its unit to milliseconds.*/
      toMilliseconds (value: number): number;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsutTimeUnit;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsutTimeUnit[];
   }
   export class nmsnpspTimeUpdatePacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspTitlePacket extends jlObject implements nmsnpsComponentHoldingServerPacket {
      constructor ();
      constructor (fadeIn: number, stay: number, fadeOut: number);
      constructor (action: nmsnpspTAction);
      constructor (action: nmsnpspTAction, payload: nkatComponent);
      /**Gets the components held by this object.*/
      components (): juCollection<nkatComponent>;
      /**Returns a copy of this object.*/
      copyWithOperator (operator: jufUnaryOperator<nkatComponent>): nmsnpsServerPacket;
      /**Gets the id of this packet.*/
      getId (): number;
      /**Creates a collection of title packets from an Adventure title.*/
      static of (title: nkatTitle): juCollection<nmsnpspTitlePacket>;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspTAction extends jlEnum<nmsnpspTAction> {
      static HIDE: nmsnpspTAction;
      static RESET: nmsnpspTAction;
      static SET_ACTION_BAR: nmsnpspTAction;
      static SET_SUBTITLE: nmsnpspTAction;
      static SET_TIMES_AND_DISPLAY: nmsnpspTAction;
      static SET_TITLE: nmsnpspTAction;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsnpspTAction;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsnpspTAction[];
   }
   export class nmsemmTntMinecartMeta extends nmsemmAbstractMinecartMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getObjectData (): number;
   }
   export class nmsnpspTradeListPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspTTrade extends jlObject implements nmsubWriteable, nmsubReadable {
      constructor ();
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsemoTraderLlamaMeta extends nmsemEntityMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   export interface nmsiTransactionOption<T> {
      fill (inventory: nmsiAbstractInventory, result: nmsiItemStack, itemChangesMap: juMap<jlInteger,nmsiItemStack>): T;
      fill (type: nmsiTransactionType, inventory: nmsiAbstractInventory, itemStack: nmsiItemStack): T;
   }
   /**Represents a type of transaction that you can apply to an AbstractInventory.*/
   export interface nmsiTransactionType {
      process (inventory: nmsiAbstractInventory, itemStack: nmsiItemStack): udfPair<nmsiItemStack,juMap<jlInteger,nmsiItemStack>>;
      process (inventory: nmsiAbstractInventory, itemStack: nmsiItemStack, slotPredicate: nmsiTSlotPredicate): udfPair<nmsiItemStack,juMap<jlInteger,nmsiItemStack>>;
      process (inventory: nmsiAbstractInventory, itemStack: nmsiItemStack, slotPredicate: nmsiTSlotPredicate, start: number, end: number, step: number): udfPair<nmsiItemStack,juMap<jlInteger,nmsiItemStack>>;
   }
   export interface nmsiTSlotPredicate {
      test (slot: number, itemStack: nmsiItemStack): boolean;
   }
   export class nmsemwfTropicalFishMeta extends nmsemwfAbstractFishMeta implements nmsemObjectDataProvider {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getObjectData (): number;
      getVariant (): nmsemwfTVariant;
      static getVariantFromID (variantID: number): nmsemwfTVariant;
      static getVariantID (variant: nmsemwfTVariant): number;
      requiresVelocityPacketAtSpawn (): boolean;
      setVariant (variant: nmsemwfTVariant): void;
   }
   export class nmsemwfTPattern extends jlEnum<nmsemwfTPattern> {
      static BRINELY: nmsemwfTPattern;
      static DASHER: nmsemwfTPattern;
      static KOB: nmsemwfTPattern;
      static NONE: nmsemwfTPattern;
      static SNOOPER: nmsemwfTPattern;
      static SPOTTY: nmsemwfTPattern;
      static SUNSTREAK: nmsemwfTPattern;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsemwfTPattern;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsemwfTPattern[];
   }
   export class nmsemwfTType extends jlEnum<nmsemwfTType> {
      static INVISIBLE: nmsemwfTType;
      static LARGE: nmsemwfTType;
      static SMALL: nmsemwfTType;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsemwfTType;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsemwfTType[];
   }
   export class nmsemwfTVariant extends jlObject {
      constructor (type: nmsemwfTType, pattern: nmsemwfTPattern, bodyColor: number, patternColor: number);
      getBodyColor (): number;
      getPattern (): nmsemwfTPattern;
      getPatternColor (): number;
      getType (): nmsemwfTType;
      setBodyColor (bodyColor: number): void;
      setPattern (pattern: nmsemwfTPattern): void;
      setPatternColor (patternColor: number): void;
      setType (type: nmsemwfTType): void;
   }
   export class nmsemaTurtleMeta extends nmsemaAnimalMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getHomePosition (): nmsuBlockPosition;
      getTravelPosition (): nmsuBlockPosition;
      isGoingHome (): boolean;
      isHasEgg (): boolean;
      isLayingEgg (): boolean;
      isTravelling (): boolean;
      setBlockPosition (value: nmsuBlockPosition): void;
      setGoingHome (value: boolean): void;
      setHasEgg (value: boolean): void;
      setLayingEgg (value: boolean): void;
      setTravelling (value: boolean): void;
      setTravelPosition (value: nmsuBlockPosition): void;
   }
   /**An utilities class for UUID.*/
   export class nmsuUniqueIdUtils extends jlObject {
      constructor ();
      static createRandomUUID (random: juRandom): juUUID;
      /**Checks whether the input string is an UUID.*/
      static isUniqueId (input: string): boolean;
   }
   export class nmsnpspUnloadChunkPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspUnlockRecipesPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export interface nmsibUpdateConsumer {
      update (instance: nmsiInstance, blockPosition: nmsuBlockPosition, data: nmsdData): void;
   }
   export class nmsnpspUpdateHealthPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspUpdateLightPacket extends jlObject implements nmsnpsServerPacket, nmsucCacheablePacket {
      constructor ();
      constructor (identifier: juUUID, timestamp: number);
      /**Gets the cache linked to this packet.*/
      getCache (): nmsucTemporaryPacketCache;
      /**Gets the id of this packet.*/
      getId (): number;
      /**Gets the identifier of this packet.*/
      getIdentifier (): juUUID;
      /**Gets the last time this packet changed.*/
      getTimestamp (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   /**Manager responsible for the server ticks.    The ThreadProvider manages the multi-thread aspect of chunk ticks.*/
   export class nmsUpdateManager extends jlObject {
      constructor ();
      /**Adds a callback executed at the end of the next server tick.*/
      addTickEndCallback (callback: jufLongConsumer): void;
      addTickMonitor (consumer: jufConsumer<nmsmTickMonitor>): void;
      /**Adds a callback executed at the start of the next server tick.*/
      addTickStartCallback (callback: jufLongConsumer): void;
      /**Gets the current ThreadProvider.*/
      getThreadProvider (): nmstThreadProvider;
      /**Removes a tick end callback.*/
      removeTickEndCallback (callback: jufLongConsumer): void;
      removeTickMonitor (consumer: jufConsumer<nmsmTickMonitor>): void;
      /**Removes a tick start callback.*/
      removeTickStartCallback (callback: jufLongConsumer): void;
      /**Signals the ThreadProvider that a chunk has been loaded.*/
      signalChunkLoad (chunk: nmsiChunk): void;
      /**Signals the ThreadProvider that a chunk has been unloaded.*/
      signalChunkUnload (chunk: nmsiChunk): void;
      /**Signals the ThreadProvider that an instance has been created.*/
      signalInstanceCreate (instance: nmsiInstance): void;
      /**Signals the ThreadProvider that an instance has been deleted.*/
      signalInstanceDelete (instance: nmsiInstance): void;
      /**Starts the server loop in the update thread.*/
      start (): void;
      /**Stops the server loop.*/
      stop (): void;
   }
   export class nmsutUpdateOption extends jlObject {
      constructor (value: number, timeUnit: nmsutTimeUnit);
      equals (o: jlObject): boolean;
      getTimeUnit (): nmsutTimeUnit;
      getValue (): number;
      hashCode (): number;
      /**Converts this update option to milliseconds*/
      toMilliseconds (): number;
   }
   export class nmsnpspUpdateScorePacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsepUpdateTagListEvent extends nmseEvent {
      constructor (packet: nmsnpspTagsPacket);
      getTags (): nmsnpspTagsPacket;
   }
   export class nmsnpspUpdateViewDistancePacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspUpdateViewPositionPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsuuURLUtils extends jlObject {
      static getText (url: string): string;
   }
   export class nmslUseEntityListener extends jlObject {
      constructor ();
      static useEntityListener (packet: nmsnpcpClientInteractEntityPacket, player: nmsePlayer): void;
   }
   export class nmslUseItemListener extends jlObject {
      constructor ();
      static useItemListener (packet: nmsnpcpClientUseItemPacket, player: nmsePlayer): void;
   }
   export class nmsuUtils extends jlObject {
      static encodeBlocks (blocks: number[], bitsPerEntry: number): number[];
      static getVarIntSize (input: number): number;
      static intArrayToUuid (array: number[]): juUUID;
      static readVarInt (buf: io.netty.buffer.ByteBuf): number;
      static readVarLong (buffer: io.netty.buffer.ByteBuf): number;
      static uuidToIntArray (uuid: juUUID): number[];
      static write3BytesVarInt (buffer: io.netty.buffer.ByteBuf, startIndex: number, value: number): void;
      static writeEmpty3BytesVarInt (buffer: io.netty.buffer.ByteBuf): number;
      static writeSectionBlocks (buffer: io.netty.buffer.ByteBuf, section: nmsipSection): void;
      static writeVarInt (buf: io.netty.buffer.ByteBuf, value: number): void;
      static writeVarLong (writer: nmsubBinaryWriter, value: number): void;
   }
   /**Used when you want to provide your own UUID object for players instead of using the default one.    Sets with ConnectionManager.setUuidProvider(UuidProvider).*/
   export interface nmsnUuidProvider {
      /**Called when a new UUID is requested.*/
      provide (playerConnection: nmsnpPlayerConnection, username: string): juUUID;
   }
   export class nmsdtUuidType extends nmsdDataType<juUUID> {
      constructor ();
      /**Decodes the data type.*/
      decode (reader: nmsubBinaryReader): juUUID;
      /**Encodes the data type.*/
      encode (writer: nmsubBinaryWriter, value: juUUID): void;
   }
   /**Interface used when a value needs to be validated dynamically.*/
   export interface nmsucvValidator<T> extends jufPredicate<T> {
      /**Gets if a value is valid based on a condition.*/
      isValid (value: T): boolean;
      test (t: T): boolean;
   }
   /**Holds the data of a validated syntax.*/
   export class nmscbpValidSyntaxHolder extends jlObject {
      constructor ();
   }
   export class nmsirVanillaStackingRule extends jlObject implements nmsiStackingRule {
      constructor ();
      /**Changes the size of the ItemStack to newAmount.*/
      apply (item: nmsiItemStack, amount: number): nmsiItemStack;
      /**Used to know if an ItemStack can have the size newAmount applied.*/
      canApply (item: nmsiItemStack, newAmount: number): boolean;
      /**Used to know if two ItemStack can be stacked together.*/
      canBeStacked (item1: nmsiItemStack, item2: nmsiItemStack): boolean;
      /**Used to determine the current stack size of an ItemStack.*/
      getAmount (itemStack: nmsiItemStack): number;
      /**Gets the max size of a stack.*/
      getMaxSize (itemStack: nmsiItemStack): number;
   }
   export class nmsuVector extends jlObject implements nmsucPublicCloneable<nmsuVector> {
      constructor ();
      constructor (x: number, y: number, z: number);
      add (x: number, y: number, z: number): nmsuVector;
      add (vec: nmsuVector): nmsuVector;
      /**Gets the angle between this vector and another in radians.*/
      angle (other: nmsuVector): number;
      /**Creates and returns a copy of this object.*/
      clone (): nmsuVector;
      /**Copies another vector*/
      copy (vec: nmsuVector): nmsuVector;
      /**Sets the x\/y\/z fields of this vector to the value of vector.*/
      copyCoordinates (vector: nmsuVector): void;
      /**Calculates the cross product of this vector with another.*/
      crossProduct (o: nmsuVector): nmsuVector;
      /**Gets the distance between this vector and another.*/
      distance (o: nmsuVector): number;
      /**Gets the squared distance between this vector and another.*/
      distanceSquared (o: nmsuVector): number;
      /**Divides the vector by another.*/
      divide (vec: nmsuVector): nmsuVector;
      /**Calculates the dot product of this vector with another.*/
      dot (other: nmsuVector): number;
      equals (obj: jlObject): boolean;
      /**Calculates the cross product of this vector with another without mutating  the original.*/
      getCrossProduct (o: nmsuVector): nmsuVector;
      /**Get the threshold used for equals().*/
      static getEpsilon (): number;
      getX (): number;
      getY (): number;
      getZ (): number;
      /**Returns a hash code for this vector*/
      hashCode (): number;
      /**Returns if a vector is normalized*/
      isNormalized (): boolean;
      isZero (): boolean;
      /**Gets the magnitude of the vector, defined as sqrt(x^2+y^2+z^2).*/
      length (): number;
      /**Gets the magnitude of the vector squared.*/
      lengthSquared (): number;
      /**Performs scalar multiplication, multiplying all components with a  scalar.*/
      multiply (m: number): nmsuVector;
      /**Performs scalar multiplication, multiplying all components with a  scalar.*/
      multiply (m: number): nmsuVector;
      /**Performs scalar multiplication, multiplying all components with a  scalar.*/
      multiply (m: number): nmsuVector;
      /**Multiplies the vector by another.*/
      multiply (vec: nmsuVector): nmsuVector;
      /**Converts this vector to a unit vector (a vector with length of 1).*/
      normalize (): nmsuVector;
      /**Rotates the vector around a given arbitrary axis in 3 dimensional space.*/
      rotateAroundAxis (axis: nmsuVector, angle: number): nmsuVector;
      /**Rotates the vector around a given arbitrary axis in 3 dimensional space.*/
      rotateAroundNonUnitAxis (axis: nmsuVector, angle: number): nmsuVector;
      /**Rotates the vector around the x axis.*/
      rotateAroundX (angle: number): nmsuVector;
      /**Rotates the vector around the y axis.*/
      rotateAroundY (angle: number): nmsuVector;
      /**Rotates the vector around the z axis*/
      rotateAroundZ (angle: number): nmsuVector;
      setX (x: number): void;
      setY (y: number): void;
      setZ (z: number): void;
      subtract (x: number, y: number, z: number): nmsuVector;
      /**Subtracts a vector from this one.*/
      subtract (vec: nmsuVector): nmsuVector;
      /**Gets a new Position from this vector.*/
      toPosition (): nmsuPosition;
      toString (): string;
      /**Zero this vector's components.*/
      zero (): nmsuVector;
   }
   export interface nmsetVehicle {}
   export class nmsnpspVehicleMovePacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   /**Support for Velocity modern forwarding.    Can be enabled by simply calling enable(String).*/
   export class nmsevVelocityProxy extends jlObject {
      constructor ();
      static checkIntegrity (reader: nmsubBinaryReader): boolean;
      /**Enables velocity modern forwarding.*/
      static enable (secret: string): void;
      /**Gets if velocity modern forwarding is enabled.*/
      static isEnabled (): boolean;
      static readAddress (reader: nmsubBinaryReader): jnInetAddress;
      static readSkin (reader: nmsubBinaryReader): nmsePlayerSkin;
   }
   export class nmsemmVexMeta extends nmsemmMonsterMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      isAttacking (): boolean;
      setAttacking (value: boolean): void;
   }
   /**Represents something which can be displayed or hidden to players.*/
   export interface nmsViewable {
      /**Adds a viewer.*/
      addViewer (player: nmsePlayer): boolean;
      /**Gets all the viewers of this viewable element.*/
      getViewers (): juSet<nmsePlayer>;
      /**Gets the result of getViewers() as an Adventure Audience.*/
      getViewersAsAudience (): nkaaAudience;
      /**Gets the result of getViewers() as an Iterable of Adventure  Audiences.*/
      getViewersAsAudiences (): jlIterable<nkaaAudience>;
      /**Gets if a player is seeing this viewable object.*/
      isViewer (player: nmsePlayer): boolean;
      /**Removes a viewer.*/
      removeViewer (player: nmsePlayer): boolean;
      /**Sends multiple packets to all viewers.*/
      sendPacketsToViewers (...packets: nmsnpsServerPacket[]): void;
      /**Sends a packet to all viewers.*/
      sendPacketToViewers (packet: nmsnpsServerPacket): void;
      /**Sends a packet to all viewers and the viewable element if it is a player.*/
      sendPacketToViewersAndSelf (packet: nmsnpsServerPacket): void;
   }
   export class nmsitVillagerInventory extends nmsiInventory {
      constructor (title: string);
      addTrade (trade: nmsnpspTTrade): void;
      /**This will not open the inventory for player, use Player.openInventory(Inventory).*/
      addViewer (player: nmsePlayer): boolean;
      canRestock (): boolean;
      getExperience (): number;
      getTrades (): nmsnpspTTrade[];
      getVillagerLevel (): number;
      isRegularVillager (): boolean;
      removeTrade (index: number): void;
      setCanRestock (canRestock: boolean): void;
      setExperience (experience: number): void;
      setRegularVillager (regularVillager: boolean): void;
      setVillagerLevel (level: number): void;
      /**Refreshes the inventory for all viewers.*/
      update (): void;
   }
   export class nmsemvVillagerMeta extends nmsemvAbstractVillagerMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getVillagerData (): nmsemvVVillagerData;
      setVillagerData (data: nmsemvVVillagerData): void;
   }
   export class nmsemvVLevel extends jlEnum<nmsemvVLevel> {
      static APPRENTICE: nmsemvVLevel;
      static EXPERT: nmsemvVLevel;
      static JOURNEYMAN: nmsemvVLevel;
      static MASTER: nmsemvVLevel;
      static NOVICE: nmsemvVLevel;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsemvVLevel;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsemvVLevel[];
   }
   export class nmsemvVProfession extends jlEnum<nmsemvVProfession> {
      static ARMORER: nmsemvVProfession;
      static BUTCHER: nmsemvVProfession;
      static CARTOGRAPHER: nmsemvVProfession;
      static CLERIC: nmsemvVProfession;
      static FARMER: nmsemvVProfession;
      static FISHERMAN: nmsemvVProfession;
      static FLETCHER: nmsemvVProfession;
      static LEATHERWORKER: nmsemvVProfession;
      static LIBRARIAN: nmsemvVProfession;
      static MASON: nmsemvVProfession;
      static NITWIT: nmsemvVProfession;
      static NONE: nmsemvVProfession;
      static SHEPHERD: nmsemvVProfession;
      static TOOLSMITH: nmsemvVProfession;
      static UNEMPLOYED: nmsemvVProfession;
      static WEAPONSMITH: nmsemvVProfession;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsemvVProfession;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsemvVProfession[];
   }
   export class nmsemvVType extends jlEnum<nmsemvVType> {
      static DESERT: nmsemvVType;
      static JUNGLE: nmsemvVType;
      static PLAINS: nmsemvVType;
      static SAVANNA: nmsemvVType;
      static SNOW: nmsemvVType;
      static SWAMP: nmsemvVType;
      static TAIGA: nmsemvVType;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsemvVType;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsemvVType[];
   }
   export class nmsemvVVillagerData extends jlObject {
      constructor (type: nmsemvVType, profession: nmsemvVProfession, level: nmsemvVLevel);
      getLevel (): nmsemvVLevel;
      getProfession (): nmsemvVProfession;
      getType (): nmsemvVType;
      setLevel (level: nmsemvVLevel): void;
      setProfession (profession: nmsemvVProfession): void;
      setType (type: nmsemvVType): void;
   }
   export class nmsemmrVindicatorMeta extends nmsemmrAbstractIllagerMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   export class nmsibrvWallPlacementRule extends nmsibrBlockPlacementRule {
      constructor (block: nmsibBlock);
      /**Called when the block is placed.*/
      blockPlace (instance: nmsiInstance, block: nmsibBlock, blockFace: nmsibBlockFace, blockPosition: nmsuBlockPosition, pl: nmsePlayer): number;
      /**Called when the block state id can be updated (for instance if a neighbour block changed).*/
      blockUpdate (instance: nmsiInstance, blockPosition: nmsuBlockPosition, currentId: number): number;
   }
   export class nmsemvWanderingTraderMeta extends nmsemvVillagerMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   export class nmsemwWaterAnimalMeta extends nmsemPathfinderMobMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   /**Produces a random element from a given set, with weights applied.*/
   export class nmsuWeightedRandom<E extends WeightedRandomItem> extends jlObject {
      constructor (items: juCollection<E>);
      /**Gets a random element from this set.*/
      get (rng: juRandom): E;
   }
   export interface nmsuWeightedRandomItem {
      getWeight (): number;
   }
   export class nmsnpspWindowConfirmationPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspWindowItemsPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmslWindowListener extends jlObject {
      constructor ();
      static clickWindowListener (packet: nmsnpcpClientClickWindowPacket, player: nmsePlayer): void;
      static closeWindowListener (packet: nmsnpcpClientCloseWindowPacket, player: nmsePlayer): void;
      static windowConfirmationListener (packet: nmsnpcpClientWindowConfirmationPacket, player: nmsePlayer): void;
   }
   export class nmsnpspWindowPropertyPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsemmrWitchMeta extends nmsemmrRaiderMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      isDrinkingPotion (): boolean;
      setDrinkingPotion (value: boolean): void;
   }
   export class nmsemmWitherMeta extends nmsemmMonsterMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getCenterHead (): nmseEntity;
      getInvulnerableTime (): number;
      getLeftHead (): nmseEntity;
      getRightHead (): nmseEntity;
      setCenterHead (value: nmseEntity): void;
      setInvulnerableTime (value: number): void;
      setLeftHead (value: nmseEntity): void;
      setRightHead (value: nmseEntity): void;
   }
   export class nmsemmsWitherSkeletonMeta extends nmsemmsAbstractSkeletonMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   export class nmsemoWitherSkullMeta extends nmsemEntityMeta implements nmsemObjectDataProvider, nmsemProjectileMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getObjectData (): number;
      getShooter (): nmseEntity;
      isInvulnerable (): boolean;
      requiresVelocityPacketAtSpawn (): boolean;
      setInvulnerable (value: boolean): void;
      setShooter (shooter: nmseEntity): void;
   }
   export class nmsematWolfMeta extends nmsematTameableAnimalMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getAngerTime (): number;
      getCollarColor (): number;
      isBegging (): boolean;
      setAngerTime (value: number): void;
      setBegging (value: boolean): void;
      setCollarColor (value: number): void;
   }
   /**Represents the world border of an Instance,  can be retrieved with Instance.getWorldBorder().*/
   export class nmsiWorldBorder extends jlObject {
      constructor (instance: nmsiInstance);
      /**Gets the center X of the world border.*/
      getCenterX (): number;
      /**Gets the center Z of the world border.*/
      getCenterZ (): number;
      /**Used to check at which axis does the position collides with the world border.*/
      getCollisionAxis (position: nmsuPosition): nmsiWCollisionAxis;
      /**Gets the diameter of the world border.*/
      getDiameter (): number;
      /**Gets the Instance linked to this world border.*/
      getInstance (): nmsiInstance;
      getWarningBlocks (): number;
      getWarningTime (): number;
      /**Sends the world border init packet to a player.*/
      init (player: nmsePlayer): void;
      /**Used to know if an entity is located inside the world border or not.*/
      isInside (entity: nmseEntity): boolean;
      /**Used to know if a position is located inside the world border or not.*/
      isInside (position: nmsuPosition): boolean;
      /**Changes the X and Z position of the center.*/
      setCenter (centerX: number, centerZ: number): void;
      /**Changes the center X of the world border.*/
      setCenterX (centerX: number): void;
      /**Changes the center Z of the world border.*/
      setCenterZ (centerZ: number): void;
      /**Changes the diameter of the world border.*/
      setDiameter (diameter: number): void;
      /**Changes the diameter to diameter in speed milliseconds (interpolation).*/
      setDiameter (diameter: number, speed: number): void;
      setWarningBlocks (warningBlocks: number): void;
      setWarningTime (warningTime: number): void;
      /**Used to update in real-time the current diameter time.*/
      update (): void;
   }
   export class nmsiWCollisionAxis extends jlEnum<nmsiWCollisionAxis> {
      static BOTH: nmsiWCollisionAxis;
      static NONE: nmsiWCollisionAxis;
      static X: nmsiWCollisionAxis;
      static Z: nmsiWCollisionAxis;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsiWCollisionAxis;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsiWCollisionAxis[];
   }
   export class nmsnpspWorldBorderPacket extends jlObject implements nmsnpsServerPacket {
      constructor ();
      /**Gets the id of this packet.*/
      getId (): number;
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspWAction extends jlEnum<nmsnpspWAction> {
      static INITIALIZE: nmsnpspWAction;
      static LERP_SIZE: nmsnpspWAction;
      static SET_CENTER: nmsnpspWAction;
      static SET_SIZE: nmsnpspWAction;
      static SET_WARNING_BLOCKS: nmsnpspWAction;
      static SET_WARNING_TIME: nmsnpspWAction;
      generateNewInstance (): nmsnpspWWBAction;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsnpspWAction;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsnpspWAction[];
   }
   export class nmsnpspWWBAction extends jlObject implements nmsubWriteable, nmsubReadable {
      constructor ();
   }
   export class nmsnpspWWBInitialize extends nmsnpspWWBAction {
      constructor (x: number, z: number, oldDiameter: number, newDiameter: number, speed: number, portalTeleportBoundary: number, warningTime: number, warningBlocks: number);
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspWWBLerpSize extends nmsnpspWWBAction {
      constructor (oldDiameter: number, newDiameter: number, speed: number);
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspWWBSetCenter extends nmsnpspWWBAction {
      constructor (x: number, z: number);
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspWWBSetSize extends nmsnpspWWBAction {
      constructor (diameter: number);
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspWWBSetWarningBlocks extends nmsnpspWWBAction {
      constructor (warningBlocks: number);
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsnpspWWBSetWarningTime extends nmsnpspWWBAction {
      constructor (warningTime: number);
      /**Reads from a BinaryReader.*/
      read (reader: nmsubBinaryReader): void;
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsimWritableBookMeta extends nmsiItemMeta implements nmsiIProvider<nmsimWBuilder> {
      constructor (metaBuilder: nmsiItemMetaBuilder, author: string, title: string, pages: juList<nkatComponent>);
      getAuthor (): string;
      getPages (): juList<nkatComponent>;
      getTitle (): string;
   }
   export class nmsimWBuilder extends nmsiItemMetaBuilder {
      constructor ();
      author (author: string): nmsimWBuilder;
      build (): nmsimWritableBookMeta;
      getSupplier (): jufSupplier<nmsiItemMetaBuilder>;
      pages (pages: juList<nkatComponent>): nmsimWBuilder;
      read (nbtCompound: org.jglrxavpok.hephaistos.nbt.NBTCompound): void;
      title (title: string): nmsimWBuilder;
   }
   /**Represents an element which can write to a BinaryWriter.*/
   export interface nmsubWriteable {
      /**Writes into a BinaryWriter.*/
      write (writer: nmsubBinaryWriter): void;
   }
   export class nmsimWrittenBookMeta extends nmsiItemMeta implements nmsiIProvider<nmsimWBuilder> {
      constructor (metaBuilder: nmsiItemMetaBuilder, resolved: boolean, generation: nmsimWWrittenBookGeneration, author: string, title: string, pages: juList<nkatComponent>);
      /**Creates a written book meta from an Adventure book.*/
      static fromAdventure (book: nkaiBook, localizable: nmsaLocalizable): nmsimWrittenBookMeta;
      getAuthor (): string;
      getGeneration (): nmsimWWrittenBookGeneration;
      getPages (): juList<nkatComponent>;
      getTitle (): string;
      isResolved (): boolean;
   }
   export class nmsimWBuilder extends nmsiItemMetaBuilder {
      constructor ();
      author (author: string): nmsimWBuilder;
      build (): nmsimWrittenBookMeta;
      generation (generation: nmsimWWrittenBookGeneration): nmsimWBuilder;
      getSupplier (): jufSupplier<nmsiItemMetaBuilder>;
      pages (pages: juList<nkatComponent>): nmsimWBuilder;
      pages (...pages: nkatComponent[]): nmsimWBuilder;
      read (nbtCompound: org.jglrxavpok.hephaistos.nbt.NBTCompound): void;
      resolved (resolved: boolean): nmsimWBuilder;
      title (title: string): nmsimWBuilder;
   }
   export class nmsimWWrittenBookGeneration extends jlEnum<nmsimWWrittenBookGeneration> {
      static COPY_OF_COPY: nmsimWWrittenBookGeneration;
      static COPY_OF_ORIGINAL: nmsimWWrittenBookGeneration;
      static ORIGINAL: nmsimWWrittenBookGeneration;
      static TATTERED: nmsimWWrittenBookGeneration;
      /**Returns the enum constant of this type with the specified name.*/
      static valueOf (name: string): nmsimWWrittenBookGeneration;
      /**Returns an array containing the constants of this enum type, in the order they are declared.*/
      static values (): nmsimWWrittenBookGeneration[];
   }
   export class nmsemmZoglinMeta extends nmsemmMonsterMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      isBaby (): boolean;
      setBaby (value: boolean): void;
   }
   export class nmsemaZombieHorseMeta extends nmsemaAbstractHorseMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   export class nmsemmzZombieMeta extends nmsemmMonsterMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      isBaby (): boolean;
      isBecomingDrowned (): boolean;
      setBaby (value: boolean): void;
      setBecomingDrowned (value: boolean): void;
   }
   export class nmsemmzZombieVillagerMeta extends nmsemmzZombieMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
      getVillagerData (): nmsemvVVillagerData;
      isConverting (): boolean;
      setConverting (value: boolean): void;
      setVillagerData (data: nmsemvVVillagerData): void;
   }
   export class nmsemmzZombifiedPiglinMeta extends nmsemmzZombieMeta {
      constructor (entity: nmseEntity, metadata: nmseMetadata);
   }
   
}