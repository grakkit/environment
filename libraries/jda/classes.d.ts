import * as types from './types';

export interface classes {
   'net.dv8tion.jda.api.entities.AbstractChannel': new (...args: any[]) => types.ndjaeAbstractChannel;
   'net.dv8tion.jda.api.managers.AccountManager': new (...args: any[]) => types.ndjamAccountManager;
   'net.dv8tion.jda.api.AccountType': typeof types.ndjaAccountType;
   'net.dv8tion.jda.api.exceptions.AccountTypeException': typeof types.ndjaeAccountTypeException;
   'net.dv8tion.jda.api.interactions.components.ActionRow': typeof types.ndjaicActionRow;
   'net.dv8tion.jda.api.audit.ActionType': typeof types.ndjaaActionType;
   'net.dv8tion.jda.api.entities.Activity': new (...args: any[]) => types.ndjaeActivity;
   'net.dv8tion.jda.api.entities.Activity.ActivityType': typeof types.ndjaeAActivityType;
   'net.dv8tion.jda.api.entities.Activity.Emoji': typeof types.ndjaeAEmoji;
   'net.dv8tion.jda.api.entities.Activity.Timestamps': typeof types.ndjaeATimestamps;
   'net.dv8tion.jda.api.entities.ActivityFlag': typeof types.ndjaeActivityFlag;
   'net.dv8tion.jda.api.utils.AllowedMentions': new (...args: any[]) => types.ndjauAllowedMentions;
   'net.dv8tion.jda.api.hooks.AnnotatedEventManager': typeof types.ndjahAnnotatedEventManager;
   'net.dv8tion.jda.api.events.application.ApplicationCommandCreateEvent': typeof types.ndjaeaApplicationCommandCreateEvent;
   'net.dv8tion.jda.api.events.application.ApplicationCommandDeleteEvent': typeof types.ndjaeaApplicationCommandDeleteEvent;
   'net.dv8tion.jda.api.events.application.ApplicationCommandUpdateEvent': typeof types.ndjaeaApplicationCommandUpdateEvent;
   'net.dv8tion.jda.api.entities.ApplicationInfo': new (...args: any[]) => types.ndjaeApplicationInfo;
   'net.dv8tion.jda.api.entities.ApplicationTeam': new (...args: any[]) => types.ndjaeApplicationTeam;
   'net.dv8tion.jda.api.utils.AttachmentOption': typeof types.ndjauAttachmentOption;
   'net.dv8tion.jda.api.managers.AudioManager': new (...args: any[]) => types.ndjamAudioManager;
   'net.dv8tion.jda.api.audio.AudioNatives': typeof types.ndjaaAudioNatives;
   'net.dv8tion.jda.api.audio.AudioReceiveHandler': new (...args: any[]) => types.ndjaaAudioReceiveHandler;
   'net.dv8tion.jda.api.audio.AudioSendHandler': new (...args: any[]) => types.ndjaaAudioSendHandler;
   'net.dv8tion.jda.api.requests.restaction.AuditableRestAction': new (
      ...args: any[]
   ) => types.ndjarrAuditableRestAction;
   'net.dv8tion.jda.api.audit.AuditLogChange': typeof types.ndjaaAuditLogChange;
   'net.dv8tion.jda.api.audit.AuditLogEntry': typeof types.ndjaaAuditLogEntry;
   'net.dv8tion.jda.api.audit.AuditLogKey': typeof types.ndjaaAuditLogKey;
   'net.dv8tion.jda.api.audit.AuditLogOption': typeof types.ndjaaAuditLogOption;
   'net.dv8tion.jda.api.requests.restaction.pagination.AuditLogPaginationAction': new (
      ...args: any[]
   ) => types.ndjarrpAuditLogPaginationAction;
   'net.dv8tion.jda.api.interactions.commands.build.BaseCommand': typeof types.ndjaicbBaseCommand;
   'net.dv8tion.jda.api.interactions.components.Button': new (...args: any[]) => types.ndjaicButton;
   'net.dv8tion.jda.api.events.interaction.ButtonClickEvent': typeof types.ndjaeiButtonClickEvent;
   'net.dv8tion.jda.api.interactions.components.ButtonInteraction': new (
      ...args: any[]
   ) => types.ndjaicButtonInteraction;
   'net.dv8tion.jda.api.interactions.components.ButtonStyle': typeof types.ndjaicButtonStyle;
   'net.dv8tion.jda.api.utils.cache.CacheFlag': typeof types.ndjaucCacheFlag;
   'net.dv8tion.jda.api.utils.cache.CacheView': new (...args: any[]) => types.ndjaucCacheView;
   'net.dv8tion.jda.api.utils.cache.CacheView.SimpleCacheView': typeof types.ndjaucCSimpleCacheView;
   'net.dv8tion.jda.api.entities.Category': new (...args: any[]) => types.ndjaeCategory;
   'net.dv8tion.jda.api.events.channel.category.CategoryCreateEvent': typeof types.ndjaeccCategoryCreateEvent;
   'net.dv8tion.jda.api.events.channel.category.CategoryDeleteEvent': typeof types.ndjaeccCategoryDeleteEvent;
   'net.dv8tion.jda.api.requests.restaction.order.CategoryOrderAction': new (
      ...args: any[]
   ) => types.ndjarroCategoryOrderAction;
   'net.dv8tion.jda.api.events.channel.category.update.CategoryUpdateNameEvent': typeof types.ndjaeccuCategoryUpdateNameEvent;
   'net.dv8tion.jda.api.events.channel.category.update.CategoryUpdatePositionEvent': typeof types.ndjaeccuCategoryUpdatePositionEvent;
   'net.dv8tion.jda.api.requests.restaction.ChannelAction': new (...args: any[]) => types.ndjarrChannelAction;
   'net.dv8tion.jda.api.managers.ChannelManager': new (...args: any[]) => types.ndjamChannelManager;
   'net.dv8tion.jda.api.requests.restaction.order.ChannelOrderAction': new (
      ...args: any[]
   ) => types.ndjarroChannelOrderAction;
   'net.dv8tion.jda.api.entities.ChannelType': typeof types.ndjaeChannelType;
   'net.dv8tion.jda.api.utils.ChunkingFilter': new (...args: any[]) => types.ndjauChunkingFilter;
   'net.dv8tion.jda.api.entities.ClientType': typeof types.ndjaeClientType;
   'net.dv8tion.jda.api.utils.ClosableIterator': new (...args: any[]) => types.ndjauClosableIterator;
   'net.dv8tion.jda.api.requests.CloseCode': typeof types.ndjarCloseCode;
   'net.dv8tion.jda.api.audio.CombinedAudio': typeof types.ndjaaCombinedAudio;
   'net.dv8tion.jda.api.interactions.commands.Command': typeof types.ndjaicCommand;
   'net.dv8tion.jda.api.interactions.commands.Command.Choice': typeof types.ndjaicCChoice;
   'net.dv8tion.jda.api.interactions.commands.Command.Option': typeof types.ndjaicCOption;
   'net.dv8tion.jda.api.interactions.commands.Command.Subcommand': typeof types.ndjaicCSubcommand;
   'net.dv8tion.jda.api.interactions.commands.Command.SubcommandGroup': typeof types.ndjaicCSubcommandGroup;
   'net.dv8tion.jda.api.requests.restaction.CommandCreateAction': new (
      ...args: any[]
   ) => types.ndjarrCommandCreateAction;
   'net.dv8tion.jda.api.interactions.commands.build.CommandData': typeof types.ndjaicbCommandData;
   'net.dv8tion.jda.api.requests.restaction.CommandEditAction': new (...args: any[]) => types.ndjarrCommandEditAction;
   'net.dv8tion.jda.api.interactions.commands.CommandInteraction': new (
      ...args: any[]
   ) => types.ndjaicCommandInteraction;
   'net.dv8tion.jda.api.requests.restaction.CommandListUpdateAction': new (
      ...args: any[]
   ) => types.ndjarrCommandListUpdateAction;
   'net.dv8tion.jda.api.interactions.commands.privileges.CommandPrivilege': typeof types.ndjaicpCommandPrivilege;
   'net.dv8tion.jda.api.interactions.commands.privileges.CommandPrivilege.Type': typeof types.ndjaicpCType;
   'net.dv8tion.jda.api.interactions.components.Component': new (...args: any[]) => types.ndjaicComponent;
   'net.dv8tion.jda.api.interactions.components.Component.Type': typeof types.ndjaicCType;
   'net.dv8tion.jda.api.interactions.components.ComponentInteraction': new (
      ...args: any[]
   ) => types.ndjaicComponentInteraction;
   'net.dv8tion.jda.api.interactions.components.ComponentLayout': new (...args: any[]) => types.ndjaicComponentLayout;
   'net.dv8tion.jda.api.interactions.components.ComponentLayout.Type': typeof types.ndjaicCType;
   'net.dv8tion.jda.api.utils.Compression': typeof types.ndjauCompression;
   'net.dv8tion.jda.api.utils.ConcurrentSessionController': typeof types.ndjauConcurrentSessionController;
   'net.dv8tion.jda.api.audio.hooks.ConnectionListener': new (...args: any[]) => types.ndjaahConnectionListener;
   'net.dv8tion.jda.api.audio.hooks.ConnectionStatus': typeof types.ndjaahConnectionStatus;
   'net.dv8tion.jda.api.exceptions.ContextException': typeof types.ndjaeContextException;
   'net.dv8tion.jda.api.exceptions.ContextException.ContextConsumer': typeof types.ndjaeCContextConsumer;
   'net.dv8tion.jda.api.utils.data.DataArray': typeof types.ndjaudDataArray;
   'net.dv8tion.jda.api.utils.data.DataObject': typeof types.ndjaudDataObject;
   'net.dv8tion.jda.api.utils.data.DataType': typeof types.ndjaudDataType;
   'net.dv8tion.jda.api.audio.factory.DefaultSendFactory': typeof types.ndjaafDefaultSendFactory;
   'net.dv8tion.jda.api.audio.factory.DefaultSendSystem': typeof types.ndjaafDefaultSendSystem;
   'net.dv8tion.jda.api.sharding.DefaultShardManager': typeof types.ndjasDefaultShardManager;
   'net.dv8tion.jda.api.sharding.DefaultShardManagerBuilder': typeof types.ndjasDefaultShardManagerBuilder;
   'net.dv8tion.jda.api.utils.concurrent.DelayedCompletableFuture': typeof types.ndjaucDelayedCompletableFuture;
   'net.dv8tion.jda.api.managers.DirectAudioController': new (...args: any[]) => types.ndjamDirectAudioController;
   'net.dv8tion.jda.api.events.DisconnectEvent': typeof types.ndjaeDisconnectEvent;
   'net.dv8tion.jda.api.EmbedBuilder': typeof types.ndjaEmbedBuilder;
   'net.dv8tion.jda.api.entities.EmbedType': typeof types.ndjaeEmbedType;
   'net.dv8tion.jda.api.entities.Emoji': typeof types.ndjaeEmoji;
   'net.dv8tion.jda.api.entities.Emote': new (...args: any[]) => types.ndjaeEmote;
   'net.dv8tion.jda.api.events.emote.EmoteAddedEvent': typeof types.ndjaeeEmoteAddedEvent;
   'net.dv8tion.jda.api.managers.EmoteManager': new (...args: any[]) => types.ndjamEmoteManager;
   'net.dv8tion.jda.api.events.emote.EmoteRemovedEvent': typeof types.ndjaeeEmoteRemovedEvent;
   'net.dv8tion.jda.api.events.emote.update.EmoteUpdateNameEvent': typeof types.ndjaeeuEmoteUpdateNameEvent;
   'net.dv8tion.jda.api.events.emote.update.EmoteUpdateRolesEvent': typeof types.ndjaeeuEmoteUpdateRolesEvent;
   'net.dv8tion.jda.api.exceptions.ErrorHandler': typeof types.ndjaeErrorHandler;
   'net.dv8tion.jda.api.requests.ErrorResponse': typeof types.ndjarErrorResponse;
   'net.dv8tion.jda.api.exceptions.ErrorResponseException': typeof types.ndjaeErrorResponseException;
   'net.dv8tion.jda.api.exceptions.ErrorResponseException.ErrorCode': typeof types.ndjaeEErrorCode;
   'net.dv8tion.jda.api.exceptions.ErrorResponseException.SchemaError': typeof types.ndjaeESchemaError;
   'net.dv8tion.jda.api.events.Event': typeof types.ndjaeEvent;
   'net.dv8tion.jda.api.hooks.EventListener': new (...args: any[]) => types.ndjahEventListener;
   'net.dv8tion.jda.api.events.ExceptionEvent': typeof types.ndjaeExceptionEvent;
   'net.dv8tion.jda.api.utils.data.etf.ExTermDecoder': typeof types.ndjaudeExTermDecoder;
   'net.dv8tion.jda.api.utils.data.etf.ExTermEncoder': typeof types.ndjaudeExTermEncoder;
   'net.dv8tion.jda.api.utils.data.etf.ExTermTag': typeof types.ndjaudeExTermTag;
   'net.dv8tion.jda.api.GatewayEncoding': typeof types.ndjaGatewayEncoding;
   'net.dv8tion.jda.api.requests.GatewayIntent': typeof types.ndjarGatewayIntent;
   'net.dv8tion.jda.api.events.GatewayPingEvent': typeof types.ndjaeGatewayPingEvent;
   'net.dv8tion.jda.api.events.application.GenericApplicationCommandEvent': typeof types.ndjaeaGenericApplicationCommandEvent;
   'net.dv8tion.jda.api.events.channel.category.GenericCategoryEvent': typeof types.ndjaeccGenericCategoryEvent;
   'net.dv8tion.jda.api.events.channel.category.update.GenericCategoryUpdateEvent': typeof types.ndjaeccuGenericCategoryUpdateEvent;
   'net.dv8tion.jda.api.events.interaction.GenericComponentInteractionCreateEvent': typeof types.ndjaeiGenericComponentInteractionCreateEvent;
   'net.dv8tion.jda.api.events.emote.GenericEmoteEvent': typeof types.ndjaeeGenericEmoteEvent;
   'net.dv8tion.jda.api.events.emote.update.GenericEmoteUpdateEvent': typeof types.ndjaeeuGenericEmoteUpdateEvent;
   'net.dv8tion.jda.api.events.GenericEvent': new (...args: any[]) => types.ndjaeGenericEvent;
   'net.dv8tion.jda.api.events.guild.GenericGuildEvent': typeof types.ndjaegGenericGuildEvent;
   'net.dv8tion.jda.api.events.guild.invite.GenericGuildInviteEvent': typeof types.ndjaegiGenericGuildInviteEvent;
   'net.dv8tion.jda.api.events.guild.member.GenericGuildMemberEvent': typeof types.ndjaegmGenericGuildMemberEvent;
   'net.dv8tion.jda.api.events.guild.member.update.GenericGuildMemberUpdateEvent': typeof types.ndjaegmuGenericGuildMemberUpdateEvent;
   'net.dv8tion.jda.api.events.message.guild.GenericGuildMessageEvent': typeof types.ndjaemgGenericGuildMessageEvent;
   'net.dv8tion.jda.api.events.message.guild.react.GenericGuildMessageReactionEvent': typeof types.ndjaemgrGenericGuildMessageReactionEvent;
   'net.dv8tion.jda.api.events.guild.update.GenericGuildUpdateEvent': typeof types.ndjaeguGenericGuildUpdateEvent;
   'net.dv8tion.jda.api.events.guild.voice.GenericGuildVoiceEvent': typeof types.ndjaegvGenericGuildVoiceEvent;
   'net.dv8tion.jda.api.events.guild.voice.GenericGuildVoiceUpdateEvent': typeof types.ndjaegvGenericGuildVoiceUpdateEvent;
   'net.dv8tion.jda.api.events.interaction.GenericInteractionCreateEvent': typeof types.ndjaeiGenericInteractionCreateEvent;
   'net.dv8tion.jda.api.events.message.GenericMessageEvent': typeof types.ndjaemGenericMessageEvent;
   'net.dv8tion.jda.api.events.message.react.GenericMessageReactionEvent': typeof types.ndjaemrGenericMessageReactionEvent;
   'net.dv8tion.jda.api.events.guild.override.GenericPermissionOverrideEvent': typeof types.ndjaegoGenericPermissionOverrideEvent;
   'net.dv8tion.jda.api.events.message.priv.GenericPrivateMessageEvent': typeof types.ndjaempGenericPrivateMessageEvent;
   'net.dv8tion.jda.api.events.message.priv.react.GenericPrivateMessageReactionEvent': typeof types.ndjaemprGenericPrivateMessageReactionEvent;
   'net.dv8tion.jda.api.events.role.GenericRoleEvent': typeof types.ndjaerGenericRoleEvent;
   'net.dv8tion.jda.api.events.role.update.GenericRoleUpdateEvent': typeof types.ndjaeruGenericRoleUpdateEvent;
   'net.dv8tion.jda.api.events.self.GenericSelfUpdateEvent': typeof types.ndjaesGenericSelfUpdateEvent;
   'net.dv8tion.jda.api.events.stage.GenericStageInstanceEvent': typeof types.ndjaesGenericStageInstanceEvent;
   'net.dv8tion.jda.api.events.stage.update.GenericStageInstanceUpdateEvent': typeof types.ndjaesuGenericStageInstanceUpdateEvent;
   'net.dv8tion.jda.api.events.channel.store.GenericStoreChannelEvent': typeof types.ndjaecsGenericStoreChannelEvent;
   'net.dv8tion.jda.api.events.channel.store.update.GenericStoreChannelUpdateEvent': typeof types.ndjaecsuGenericStoreChannelUpdateEvent;
   'net.dv8tion.jda.api.events.channel.text.GenericTextChannelEvent': typeof types.ndjaectGenericTextChannelEvent;
   'net.dv8tion.jda.api.events.channel.text.update.GenericTextChannelUpdateEvent': typeof types.ndjaectuGenericTextChannelUpdateEvent;
   'net.dv8tion.jda.api.events.user.GenericUserEvent': typeof types.ndjaeuGenericUserEvent;
   'net.dv8tion.jda.api.events.user.update.GenericUserPresenceEvent': new (
      ...args: any[]
   ) => types.ndjaeuuGenericUserPresenceEvent;
   'net.dv8tion.jda.api.events.user.update.GenericUserUpdateEvent': typeof types.ndjaeuuGenericUserUpdateEvent;
   'net.dv8tion.jda.api.events.channel.voice.GenericVoiceChannelEvent': typeof types.ndjaecvGenericVoiceChannelEvent;
   'net.dv8tion.jda.api.events.channel.voice.update.GenericVoiceChannelUpdateEvent': typeof types.ndjaecvuGenericVoiceChannelUpdateEvent;
   'net.dv8tion.jda.api.entities.Guild': new (...args: any[]) => types.ndjaeGuild;
   'net.dv8tion.jda.api.entities.Guild.Ban': typeof types.ndjaeGBan;
   'net.dv8tion.jda.api.entities.Guild.BoostTier': typeof types.ndjaeGBoostTier;
   'net.dv8tion.jda.api.entities.Guild.ExplicitContentLevel': typeof types.ndjaeGExplicitContentLevel;
   'net.dv8tion.jda.api.entities.Guild.MetaData': typeof types.ndjaeGMetaData;
   'net.dv8tion.jda.api.entities.Guild.MFALevel': typeof types.ndjaeGMFALevel;
   'net.dv8tion.jda.api.entities.Guild.NotificationLevel': typeof types.ndjaeGNotificationLevel;
   'net.dv8tion.jda.api.entities.Guild.Timeout': typeof types.ndjaeGTimeout;
   'net.dv8tion.jda.api.entities.Guild.VerificationLevel': typeof types.ndjaeGVerificationLevel;
   'net.dv8tion.jda.api.requests.restaction.GuildAction': new (...args: any[]) => types.ndjarrGuildAction;
   'net.dv8tion.jda.api.requests.restaction.GuildAction.ChannelData': typeof types.ndjarrGChannelData;
   'net.dv8tion.jda.api.requests.restaction.GuildAction.RoleData': typeof types.ndjarrGRoleData;
   'net.dv8tion.jda.api.events.guild.GuildAvailableEvent': typeof types.ndjaegGuildAvailableEvent;
   'net.dv8tion.jda.api.events.guild.GuildBanEvent': typeof types.ndjaegGuildBanEvent;
   'net.dv8tion.jda.api.entities.GuildChannel': new (...args: any[]) => types.ndjaeGuildChannel;
   'net.dv8tion.jda.api.events.guild.invite.GuildInviteCreateEvent': typeof types.ndjaegiGuildInviteCreateEvent;
   'net.dv8tion.jda.api.events.guild.invite.GuildInviteDeleteEvent': typeof types.ndjaegiGuildInviteDeleteEvent;
   'net.dv8tion.jda.api.events.guild.GuildJoinEvent': typeof types.ndjaegGuildJoinEvent;
   'net.dv8tion.jda.api.events.guild.GuildLeaveEvent': typeof types.ndjaegGuildLeaveEvent;
   'net.dv8tion.jda.api.managers.GuildManager': new (...args: any[]) => types.ndjamGuildManager;
   'net.dv8tion.jda.api.events.guild.member.GuildMemberJoinEvent': typeof types.ndjaegmGuildMemberJoinEvent;
   'net.dv8tion.jda.api.events.guild.member.GuildMemberRemoveEvent': typeof types.ndjaegmGuildMemberRemoveEvent;
   'net.dv8tion.jda.api.events.guild.member.GuildMemberRoleAddEvent': typeof types.ndjaegmGuildMemberRoleAddEvent;
   'net.dv8tion.jda.api.events.guild.member.GuildMemberRoleRemoveEvent': typeof types.ndjaegmGuildMemberRoleRemoveEvent;
   'net.dv8tion.jda.api.events.guild.member.update.GuildMemberUpdateBoostTimeEvent': typeof types.ndjaegmuGuildMemberUpdateBoostTimeEvent;
   'net.dv8tion.jda.api.events.guild.member.GuildMemberUpdateEvent': typeof types.ndjaegmGuildMemberUpdateEvent;
   'net.dv8tion.jda.api.events.guild.member.update.GuildMemberUpdateNicknameEvent': typeof types.ndjaegmuGuildMemberUpdateNicknameEvent;
   'net.dv8tion.jda.api.events.guild.member.update.GuildMemberUpdatePendingEvent': typeof types.ndjaegmuGuildMemberUpdatePendingEvent;
   'net.dv8tion.jda.api.events.message.guild.GuildMessageDeleteEvent': typeof types.ndjaemgGuildMessageDeleteEvent;
   'net.dv8tion.jda.api.events.message.guild.GuildMessageEmbedEvent': typeof types.ndjaemgGuildMessageEmbedEvent;
   'net.dv8tion.jda.api.events.message.guild.react.GuildMessageReactionAddEvent': typeof types.ndjaemgrGuildMessageReactionAddEvent;
   'net.dv8tion.jda.api.events.message.guild.react.GuildMessageReactionRemoveAllEvent': typeof types.ndjaemgrGuildMessageReactionRemoveAllEvent;
   'net.dv8tion.jda.api.events.message.guild.react.GuildMessageReactionRemoveEmoteEvent': typeof types.ndjaemgrGuildMessageReactionRemoveEmoteEvent;
   'net.dv8tion.jda.api.events.message.guild.react.GuildMessageReactionRemoveEvent': typeof types.ndjaemgrGuildMessageReactionRemoveEvent;
   'net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent': typeof types.ndjaemgGuildMessageReceivedEvent;
   'net.dv8tion.jda.api.events.message.guild.GuildMessageUpdateEvent': typeof types.ndjaemgGuildMessageUpdateEvent;
   'net.dv8tion.jda.api.events.guild.GuildReadyEvent': typeof types.ndjaegGuildReadyEvent;
   'net.dv8tion.jda.api.events.guild.GuildTimeoutEvent': typeof types.ndjaegGuildTimeoutEvent;
   'net.dv8tion.jda.api.events.guild.GuildUnavailableEvent': typeof types.ndjaegGuildUnavailableEvent;
   'net.dv8tion.jda.api.events.guild.GuildUnbanEvent': typeof types.ndjaegGuildUnbanEvent;
   'net.dv8tion.jda.api.events.guild.update.GuildUpdateAfkChannelEvent': typeof types.ndjaeguGuildUpdateAfkChannelEvent;
   'net.dv8tion.jda.api.events.guild.update.GuildUpdateAfkTimeoutEvent': typeof types.ndjaeguGuildUpdateAfkTimeoutEvent;
   'net.dv8tion.jda.api.events.guild.update.GuildUpdateBannerEvent': typeof types.ndjaeguGuildUpdateBannerEvent;
   'net.dv8tion.jda.api.events.guild.update.GuildUpdateBoostCountEvent': typeof types.ndjaeguGuildUpdateBoostCountEvent;
   'net.dv8tion.jda.api.events.guild.update.GuildUpdateBoostTierEvent': typeof types.ndjaeguGuildUpdateBoostTierEvent;
   'net.dv8tion.jda.api.events.guild.update.GuildUpdateCommunityUpdatesChannelEvent': typeof types.ndjaeguGuildUpdateCommunityUpdatesChannelEvent;
   'net.dv8tion.jda.api.events.guild.update.GuildUpdateDescriptionEvent': typeof types.ndjaeguGuildUpdateDescriptionEvent;
   'net.dv8tion.jda.api.events.guild.update.GuildUpdateExplicitContentLevelEvent': typeof types.ndjaeguGuildUpdateExplicitContentLevelEvent;
   'net.dv8tion.jda.api.events.guild.update.GuildUpdateFeaturesEvent': typeof types.ndjaeguGuildUpdateFeaturesEvent;
   'net.dv8tion.jda.api.events.guild.update.GuildUpdateIconEvent': typeof types.ndjaeguGuildUpdateIconEvent;
   'net.dv8tion.jda.api.events.guild.update.GuildUpdateLocaleEvent': typeof types.ndjaeguGuildUpdateLocaleEvent;
   'net.dv8tion.jda.api.events.guild.update.GuildUpdateMaxMembersEvent': typeof types.ndjaeguGuildUpdateMaxMembersEvent;
   'net.dv8tion.jda.api.events.guild.update.GuildUpdateMaxPresencesEvent': typeof types.ndjaeguGuildUpdateMaxPresencesEvent;
   'net.dv8tion.jda.api.events.guild.update.GuildUpdateMFALevelEvent': typeof types.ndjaeguGuildUpdateMFALevelEvent;
   'net.dv8tion.jda.api.events.guild.update.GuildUpdateNameEvent': typeof types.ndjaeguGuildUpdateNameEvent;
   'net.dv8tion.jda.api.events.guild.update.GuildUpdateNotificationLevelEvent': typeof types.ndjaeguGuildUpdateNotificationLevelEvent;
   'net.dv8tion.jda.api.events.guild.update.GuildUpdateOwnerEvent': typeof types.ndjaeguGuildUpdateOwnerEvent;
   'net.dv8tion.jda.api.events.guild.update.GuildUpdateRulesChannelEvent': typeof types.ndjaeguGuildUpdateRulesChannelEvent;
   'net.dv8tion.jda.api.events.guild.update.GuildUpdateSplashEvent': typeof types.ndjaeguGuildUpdateSplashEvent;
   'net.dv8tion.jda.api.events.guild.update.GuildUpdateSystemChannelEvent': typeof types.ndjaeguGuildUpdateSystemChannelEvent;
   'net.dv8tion.jda.api.events.guild.update.GuildUpdateVanityCodeEvent': typeof types.ndjaeguGuildUpdateVanityCodeEvent;
   'net.dv8tion.jda.api.events.guild.update.GuildUpdateVerificationLevelEvent': typeof types.ndjaeguGuildUpdateVerificationLevelEvent;
   'net.dv8tion.jda.api.events.guild.voice.GuildVoiceDeafenEvent': typeof types.ndjaegvGuildVoiceDeafenEvent;
   'net.dv8tion.jda.api.events.guild.voice.GuildVoiceGuildDeafenEvent': typeof types.ndjaegvGuildVoiceGuildDeafenEvent;
   'net.dv8tion.jda.api.events.guild.voice.GuildVoiceGuildMuteEvent': typeof types.ndjaegvGuildVoiceGuildMuteEvent;
   'net.dv8tion.jda.api.events.guild.voice.GuildVoiceJoinEvent': typeof types.ndjaegvGuildVoiceJoinEvent;
   'net.dv8tion.jda.api.events.guild.voice.GuildVoiceLeaveEvent': typeof types.ndjaegvGuildVoiceLeaveEvent;
   'net.dv8tion.jda.api.events.guild.voice.GuildVoiceMoveEvent': typeof types.ndjaegvGuildVoiceMoveEvent;
   'net.dv8tion.jda.api.events.guild.voice.GuildVoiceMuteEvent': typeof types.ndjaegvGuildVoiceMuteEvent;
   'net.dv8tion.jda.api.events.guild.voice.GuildVoiceRequestToSpeakEvent': typeof types.ndjaegvGuildVoiceRequestToSpeakEvent;
   'net.dv8tion.jda.api.events.guild.voice.GuildVoiceSelfDeafenEvent': typeof types.ndjaegvGuildVoiceSelfDeafenEvent;
   'net.dv8tion.jda.api.events.guild.voice.GuildVoiceSelfMuteEvent': typeof types.ndjaegvGuildVoiceSelfMuteEvent;
   'net.dv8tion.jda.api.entities.GuildVoiceState': new (...args: any[]) => types.ndjaeGuildVoiceState;
   'net.dv8tion.jda.api.events.guild.voice.GuildVoiceStreamEvent': typeof types.ndjaegvGuildVoiceStreamEvent;
   'net.dv8tion.jda.api.events.guild.voice.GuildVoiceSuppressEvent': typeof types.ndjaegvGuildVoiceSuppressEvent;
   'net.dv8tion.jda.api.events.guild.voice.GuildVoiceUpdateEvent': new (
      ...args: any[]
   ) => types.ndjaegvGuildVoiceUpdateEvent;
   'net.dv8tion.jda.api.exceptions.HierarchyException': typeof types.ndjaeHierarchyException;
   'net.dv8tion.jda.api.exceptions.HttpException': typeof types.ndjaeHttpException;
   'net.dv8tion.jda.api.events.http.HttpRequestEvent': typeof types.ndjaehHttpRequestEvent;
   'net.dv8tion.jda.api.audio.factory.IAudioSendFactory': new (...args: any[]) => types.ndjaafIAudioSendFactory;
   'net.dv8tion.jda.api.audio.factory.IAudioSendSystem': new (...args: any[]) => types.ndjaafIAudioSendSystem;
   'net.dv8tion.jda.api.entities.Icon': typeof types.ndjaeIcon;
   'net.dv8tion.jda.api.entities.Icon.IconType': typeof types.ndjaeIIconType;
   'net.dv8tion.jda.api.hooks.IEventManager': new (...args: any[]) => types.ndjahIEventManager;
   'net.dv8tion.jda.api.entities.IMentionable': new (...args: any[]) => types.ndjaeIMentionable;
   'net.dv8tion.jda.api.exceptions.InsufficientPermissionException': typeof types.ndjaeInsufficientPermissionException;
   'net.dv8tion.jda.api.interactions.Interaction': new (...args: any[]) => types.ndjaiInteraction;
   'net.dv8tion.jda.api.requests.restaction.interactions.InteractionCallbackAction': new (
      ...args: any[]
   ) => types.ndjarriInteractionCallbackAction;
   'net.dv8tion.jda.api.requests.restaction.interactions.InteractionCallbackAction.ResponseType': typeof types.ndjarriIResponseType;
   'net.dv8tion.jda.api.exceptions.InteractionFailureException': typeof types.ndjaeInteractionFailureException;
   'net.dv8tion.jda.api.interactions.InteractionHook': new (...args: any[]) => types.ndjaiInteractionHook;
   'net.dv8tion.jda.api.interactions.InteractionType': typeof types.ndjaiInteractionType;
   'net.dv8tion.jda.api.hooks.InterfacedEventManager': typeof types.ndjahInterfacedEventManager;
   'net.dv8tion.jda.api.entities.Invite': new (...args: any[]) => types.ndjaeInvite;
   'net.dv8tion.jda.api.entities.Invite.Channel': new (...args: any[]) => types.ndjaeIChannel;
   'net.dv8tion.jda.api.entities.Invite.Group': new (...args: any[]) => types.ndjaeIGroup;
   'net.dv8tion.jda.api.entities.Invite.Guild': new (...args: any[]) => types.ndjaeIGuild;
   'net.dv8tion.jda.api.entities.Invite.InviteType': typeof types.ndjaeIInviteType;
   'net.dv8tion.jda.api.requests.restaction.InviteAction': new (...args: any[]) => types.ndjarrInviteAction;
   'net.dv8tion.jda.api.utils.IOBiConsumer': new (...args: any[]) => types.ndjauIOBiConsumer;
   'net.dv8tion.jda.api.utils.IOConsumer': new (...args: any[]) => types.ndjauIOConsumer;
   'net.dv8tion.jda.api.utils.IOFunction': new (...args: any[]) => types.ndjauIOFunction;
   'net.dv8tion.jda.api.audio.factory.IPacketProvider': new (...args: any[]) => types.ndjaafIPacketProvider;
   'net.dv8tion.jda.api.entities.IPermissionHolder': new (...args: any[]) => types.ndjaeIPermissionHolder;
   'net.dv8tion.jda.api.entities.ISnowflake': new (...args: any[]) => types.ndjaeISnowflake;
   'net.dv8tion.jda.api.JDA': new (...args: any[]) => types.ndjaJDA;
   'net.dv8tion.jda.api.JDA.ShardInfo': typeof types.ndjaJShardInfo;
   'net.dv8tion.jda.api.JDA.Status': typeof types.ndjaJStatus;
   'net.dv8tion.jda.api.JDABuilder': typeof types.ndjaJDABuilder;
   'net.dv8tion.jda.api.JDAInfo': typeof types.ndjaJDAInfo;
   'net.dv8tion.jda.api.entities.ListedEmote': new (...args: any[]) => types.ndjaeListedEmote;
   'net.dv8tion.jda.api.hooks.ListenerAdapter': typeof types.ndjahListenerAdapter;
   'net.dv8tion.jda.api.audio.hooks.ListenerProxy': typeof types.ndjaahListenerProxy;
   'net.dv8tion.jda.api.utils.LockIterator': typeof types.ndjauLockIterator;
   'net.dv8tion.jda.api.managers.Manager': new (...args: any[]) => types.ndjamManager;
   'net.dv8tion.jda.api.utils.MarkdownSanitizer': typeof types.ndjauMarkdownSanitizer;
   'net.dv8tion.jda.api.utils.MarkdownSanitizer.SanitizationStrategy': typeof types.ndjauMSanitizationStrategy;
   'net.dv8tion.jda.api.utils.MarkdownUtil': typeof types.ndjauMarkdownUtil;
   'net.dv8tion.jda.api.entities.Member': new (...args: any[]) => types.ndjaeMember;
   'net.dv8tion.jda.api.requests.restaction.MemberAction': new (...args: any[]) => types.ndjarrMemberAction;
   'net.dv8tion.jda.api.utils.MemberCachePolicy': new (...args: any[]) => types.ndjauMemberCachePolicy;
   'net.dv8tion.jda.api.utils.cache.MemberCacheView': new (...args: any[]) => types.ndjaucMemberCacheView;
   'net.dv8tion.jda.api.entities.Message': new (...args: any[]) => types.ndjaeMessage;
   'net.dv8tion.jda.api.entities.Message.Attachment': typeof types.ndjaeMAttachment;
   'net.dv8tion.jda.api.entities.Message.MentionType': typeof types.ndjaeMMentionType;
   'net.dv8tion.jda.api.entities.Message.MessageFlag': typeof types.ndjaeMMessageFlag;
   'net.dv8tion.jda.api.requests.restaction.MessageAction': new (...args: any[]) => types.ndjarrMessageAction;
   'net.dv8tion.jda.api.entities.MessageActivity': typeof types.ndjaeMessageActivity;
   'net.dv8tion.jda.api.entities.MessageActivity.ActivityType': typeof types.ndjaeMActivityType;
   'net.dv8tion.jda.api.entities.MessageActivity.Application': typeof types.ndjaeMApplication;
   'net.dv8tion.jda.api.MessageBuilder': typeof types.ndjaMessageBuilder;
   'net.dv8tion.jda.api.MessageBuilder.Formatting': typeof types.ndjaMFormatting;
   'net.dv8tion.jda.api.MessageBuilder.SplitPolicy': new (...args: any[]) => types.ndjaMSplitPolicy;
   'net.dv8tion.jda.api.MessageBuilder.SplitPolicy.CharSequenceSplitPolicy': typeof types.ndjaMSCharSequenceSplitPolicy;
   'net.dv8tion.jda.api.events.message.MessageBulkDeleteEvent': typeof types.ndjaemMessageBulkDeleteEvent;
   'net.dv8tion.jda.api.entities.MessageChannel': new (...args: any[]) => types.ndjaeMessageChannel;
   'net.dv8tion.jda.api.events.message.MessageDeleteEvent': typeof types.ndjaemMessageDeleteEvent;
   'net.dv8tion.jda.api.entities.MessageEmbed': typeof types.ndjaeMessageEmbed;
   'net.dv8tion.jda.api.entities.MessageEmbed.AuthorInfo': typeof types.ndjaeMAuthorInfo;
   'net.dv8tion.jda.api.entities.MessageEmbed.Field': typeof types.ndjaeMField;
   'net.dv8tion.jda.api.entities.MessageEmbed.Footer': typeof types.ndjaeMFooter;
   'net.dv8tion.jda.api.entities.MessageEmbed.ImageInfo': typeof types.ndjaeMImageInfo;
   'net.dv8tion.jda.api.entities.MessageEmbed.Provider': typeof types.ndjaeMProvider;
   'net.dv8tion.jda.api.entities.MessageEmbed.Thumbnail': typeof types.ndjaeMThumbnail;
   'net.dv8tion.jda.api.entities.MessageEmbed.VideoInfo': typeof types.ndjaeMVideoInfo;
   'net.dv8tion.jda.api.events.message.MessageEmbedEvent': typeof types.ndjaemMessageEmbedEvent;
   'net.dv8tion.jda.api.entities.MessageHistory': typeof types.ndjaeMessageHistory;
   'net.dv8tion.jda.api.entities.MessageHistory.MessageRetrieveAction': typeof types.ndjaeMMessageRetrieveAction;
   'net.dv8tion.jda.api.requests.restaction.pagination.MessagePaginationAction': new (
      ...args: any[]
   ) => types.ndjarrpMessagePaginationAction;
   'net.dv8tion.jda.api.entities.MessageReaction': typeof types.ndjaeMessageReaction;
   'net.dv8tion.jda.api.entities.MessageReaction.ReactionEmote': typeof types.ndjaeMReactionEmote;
   'net.dv8tion.jda.api.events.message.react.MessageReactionAddEvent': typeof types.ndjaemrMessageReactionAddEvent;
   'net.dv8tion.jda.api.events.message.react.MessageReactionRemoveAllEvent': typeof types.ndjaemrMessageReactionRemoveAllEvent;
   'net.dv8tion.jda.api.events.message.react.MessageReactionRemoveEmoteEvent': typeof types.ndjaemrMessageReactionRemoveEmoteEvent;
   'net.dv8tion.jda.api.events.message.react.MessageReactionRemoveEvent': typeof types.ndjaemrMessageReactionRemoveEvent;
   'net.dv8tion.jda.api.events.message.MessageReceivedEvent': typeof types.ndjaemMessageReceivedEvent;
   'net.dv8tion.jda.api.entities.MessageSticker': typeof types.ndjaeMessageSticker;
   'net.dv8tion.jda.api.entities.MessageSticker.StickerFormat': typeof types.ndjaeMStickerFormat;
   'net.dv8tion.jda.api.entities.MessageType': typeof types.ndjaeMessageType;
   'net.dv8tion.jda.api.events.message.MessageUpdateEvent': typeof types.ndjaemMessageUpdateEvent;
   'net.dv8tion.jda.api.utils.MiscUtil': typeof types.ndjauMiscUtil;
   'net.dv8tion.jda.api.exceptions.MissingAccessException': typeof types.ndjaeMissingAccessException;
   'net.dv8tion.jda.api.OnlineStatus': typeof types.ndjaOnlineStatus;
   'net.dv8tion.jda.api.interactions.commands.build.OptionData': typeof types.ndjaicbOptionData;
   'net.dv8tion.jda.api.interactions.commands.OptionMapping': typeof types.ndjaicOptionMapping;
   'net.dv8tion.jda.api.interactions.commands.OptionType': typeof types.ndjaicOptionType;
   'net.dv8tion.jda.api.audio.OpusPacket': typeof types.ndjaaOpusPacket;
   'net.dv8tion.jda.api.requests.restaction.order.OrderAction': new (...args: any[]) => types.ndjarroOrderAction;
   'net.dv8tion.jda.api.requests.restaction.pagination.PaginationAction': new (
      ...args: any[]
   ) => types.ndjarrpPaginationAction;
   'net.dv8tion.jda.api.requests.restaction.pagination.PaginationAction.PaginationIterator': typeof types.ndjarrpPPaginationIterator;
   'net.dv8tion.jda.api.exceptions.ParsingException': typeof types.ndjaeParsingException;
   'net.dv8tion.jda.api.Permission': typeof types.ndjaPermission;
   'net.dv8tion.jda.api.exceptions.PermissionException': typeof types.ndjaePermissionException;
   'net.dv8tion.jda.api.entities.PermissionOverride': new (...args: any[]) => types.ndjaePermissionOverride;
   'net.dv8tion.jda.api.requests.restaction.PermissionOverrideAction': new (
      ...args: any[]
   ) => types.ndjarrPermissionOverrideAction;
   'net.dv8tion.jda.api.events.guild.override.PermissionOverrideCreateEvent': typeof types.ndjaegoPermissionOverrideCreateEvent;
   'net.dv8tion.jda.api.events.guild.override.PermissionOverrideDeleteEvent': typeof types.ndjaegoPermissionOverrideDeleteEvent;
   'net.dv8tion.jda.api.events.guild.override.PermissionOverrideUpdateEvent': typeof types.ndjaegoPermissionOverrideUpdateEvent;
   'net.dv8tion.jda.api.managers.PermOverrideManager': new (...args: any[]) => types.ndjamPermOverrideManager;
   'net.dv8tion.jda.api.managers.Presence': new (...args: any[]) => types.ndjamPresence;
   'net.dv8tion.jda.api.entities.PrivateChannel': new (...args: any[]) => types.ndjaePrivateChannel;
   'net.dv8tion.jda.api.events.message.priv.PrivateMessageDeleteEvent': typeof types.ndjaempPrivateMessageDeleteEvent;
   'net.dv8tion.jda.api.events.message.priv.PrivateMessageEmbedEvent': typeof types.ndjaempPrivateMessageEmbedEvent;
   'net.dv8tion.jda.api.events.message.priv.react.PrivateMessageReactionAddEvent': typeof types.ndjaemprPrivateMessageReactionAddEvent;
   'net.dv8tion.jda.api.events.message.priv.react.PrivateMessageReactionRemoveEvent': typeof types.ndjaemprPrivateMessageReactionRemoveEvent;
   'net.dv8tion.jda.api.events.message.priv.PrivateMessageReceivedEvent': typeof types.ndjaempPrivateMessageReceivedEvent;
   'net.dv8tion.jda.api.events.message.priv.PrivateMessageUpdateEvent': typeof types.ndjaempPrivateMessageUpdateEvent;
   'net.dv8tion.jda.api.utils.Procedure': new (...args: any[]) => types.ndjauProcedure;
   'net.dv8tion.jda.api.exceptions.RateLimitedException': typeof types.ndjaeRateLimitedException;
   'net.dv8tion.jda.api.events.RawGatewayEvent': typeof types.ndjaeRawGatewayEvent;
   'net.dv8tion.jda.api.requests.restaction.pagination.ReactionPaginationAction': new (
      ...args: any[]
   ) => types.ndjarrpReactionPaginationAction;
   'net.dv8tion.jda.api.events.ReadyEvent': typeof types.ndjaeReadyEvent;
   'net.dv8tion.jda.api.events.ReconnectedEvent': typeof types.ndjaeReconnectedEvent;
   'net.dv8tion.jda.api.Region': typeof types.ndjaRegion;
   'net.dv8tion.jda.api.requests.restaction.interactions.ReplyAction': new (...args: any[]) => types.ndjarriReplyAction;
   'net.dv8tion.jda.api.requests.Request': typeof types.ndjarRequest;
   'net.dv8tion.jda.api.requests.Response': typeof types.ndjarResponse;
   'net.dv8tion.jda.api.requests.RestAction': new (...args: any[]) => types.ndjarRestAction;
   'net.dv8tion.jda.api.requests.RestFuture': typeof types.ndjarRestFuture;
   'net.dv8tion.jda.api.utils.Result': typeof types.ndjauResult;
   'net.dv8tion.jda.api.events.ResumedEvent': typeof types.ndjaeResumedEvent;
   'net.dv8tion.jda.api.entities.RichPresence': new (...args: any[]) => types.ndjaeRichPresence;
   'net.dv8tion.jda.api.entities.RichPresence.Image': typeof types.ndjaeRImage;
   'net.dv8tion.jda.api.entities.RichPresence.Party': typeof types.ndjaeRParty;
   'net.dv8tion.jda.api.entities.Role': new (...args: any[]) => types.ndjaeRole;
   'net.dv8tion.jda.api.entities.Role.RoleTags': new (...args: any[]) => types.ndjaeRRoleTags;
   'net.dv8tion.jda.api.requests.restaction.RoleAction': new (...args: any[]) => types.ndjarrRoleAction;
   'net.dv8tion.jda.api.events.role.RoleCreateEvent': typeof types.ndjaerRoleCreateEvent;
   'net.dv8tion.jda.api.events.role.RoleDeleteEvent': typeof types.ndjaerRoleDeleteEvent;
   'net.dv8tion.jda.api.managers.RoleManager': new (...args: any[]) => types.ndjamRoleManager;
   'net.dv8tion.jda.api.requests.restaction.order.RoleOrderAction': new (
      ...args: any[]
   ) => types.ndjarroRoleOrderAction;
   'net.dv8tion.jda.api.events.role.update.RoleUpdateColorEvent': typeof types.ndjaeruRoleUpdateColorEvent;
   'net.dv8tion.jda.api.events.role.update.RoleUpdateHoistedEvent': typeof types.ndjaeruRoleUpdateHoistedEvent;
   'net.dv8tion.jda.api.events.role.update.RoleUpdateMentionableEvent': typeof types.ndjaeruRoleUpdateMentionableEvent;
   'net.dv8tion.jda.api.events.role.update.RoleUpdateNameEvent': typeof types.ndjaeruRoleUpdateNameEvent;
   'net.dv8tion.jda.api.events.role.update.RoleUpdatePermissionsEvent': typeof types.ndjaeruRoleUpdatePermissionsEvent;
   'net.dv8tion.jda.api.events.role.update.RoleUpdatePositionEvent': typeof types.ndjaeruRoleUpdatePositionEvent;
   'net.dv8tion.jda.api.interactions.components.selections.SelectionMenu': new (
      ...args: any[]
   ) => types.ndjaicsSelectionMenu;
   'net.dv8tion.jda.api.interactions.components.selections.SelectionMenu.Builder': typeof types.ndjaicsSBuilder;
   'net.dv8tion.jda.api.events.interaction.SelectionMenuEvent': typeof types.ndjaeiSelectionMenuEvent;
   'net.dv8tion.jda.api.interactions.components.selections.SelectionMenuInteraction': new (
      ...args: any[]
   ) => types.ndjaicsSelectionMenuInteraction;
   'net.dv8tion.jda.api.interactions.components.selections.SelectOption': typeof types.ndjaicsSelectOption;
   'net.dv8tion.jda.api.events.self.SelfUpdateAvatarEvent': typeof types.ndjaesSelfUpdateAvatarEvent;
   'net.dv8tion.jda.api.events.self.SelfUpdateDiscriminatorEvent': typeof types.ndjaesSelfUpdateDiscriminatorEvent;
   'net.dv8tion.jda.api.events.self.SelfUpdateMFAEvent': typeof types.ndjaesSelfUpdateMFAEvent;
   'net.dv8tion.jda.api.events.self.SelfUpdateNameEvent': typeof types.ndjaesSelfUpdateNameEvent;
   'net.dv8tion.jda.api.events.self.SelfUpdateVerifiedEvent': typeof types.ndjaesSelfUpdateVerifiedEvent;
   'net.dv8tion.jda.api.entities.SelfUser': new (...args: any[]) => types.ndjaeSelfUser;
   'net.dv8tion.jda.api.utils.data.SerializableArray': new (...args: any[]) => types.ndjaudSerializableArray;
   'net.dv8tion.jda.api.utils.data.SerializableData': new (...args: any[]) => types.ndjaudSerializableData;
   'net.dv8tion.jda.api.utils.SessionController': new (...args: any[]) => types.ndjauSessionController;
   'net.dv8tion.jda.api.utils.SessionController.SessionConnectNode': new (
      ...args: any[]
   ) => types.ndjauSSessionConnectNode;
   'net.dv8tion.jda.api.utils.SessionController.ShardedGateway': typeof types.ndjauSShardedGateway;
   'net.dv8tion.jda.api.utils.SessionControllerAdapter': typeof types.ndjauSessionControllerAdapter;
   'net.dv8tion.jda.api.utils.cache.ShardCacheView': new (...args: any[]) => types.ndjaucShardCacheView;
   'net.dv8tion.jda.api.sharding.ShardManager': new (...args: any[]) => types.ndjasShardManager;
   'net.dv8tion.jda.api.events.ShutdownEvent': typeof types.ndjaeShutdownEvent;
   'net.dv8tion.jda.api.events.interaction.SlashCommandEvent': typeof types.ndjaeiSlashCommandEvent;
   'net.dv8tion.jda.api.utils.cache.SnowflakeCacheView': new (...args: any[]) => types.ndjaucSnowflakeCacheView;
   'net.dv8tion.jda.api.utils.cache.SortedSnowflakeCacheView': new (
      ...args: any[]
   ) => types.ndjaucSortedSnowflakeCacheView;
   'net.dv8tion.jda.api.audio.SpeakingMode': typeof types.ndjaaSpeakingMode;
   'net.dv8tion.jda.api.entities.StageChannel': new (...args: any[]) => types.ndjaeStageChannel;
   'net.dv8tion.jda.api.entities.StageInstance': new (...args: any[]) => types.ndjaeStageInstance;
   'net.dv8tion.jda.api.entities.StageInstance.PrivacyLevel': typeof types.ndjaeSPrivacyLevel;
   'net.dv8tion.jda.api.requests.restaction.StageInstanceAction': new (
      ...args: any[]
   ) => types.ndjarrStageInstanceAction;
   'net.dv8tion.jda.api.events.stage.StageInstanceCreateEvent': typeof types.ndjaesStageInstanceCreateEvent;
   'net.dv8tion.jda.api.events.stage.StageInstanceDeleteEvent': typeof types.ndjaesStageInstanceDeleteEvent;
   'net.dv8tion.jda.api.managers.StageInstanceManager': new (...args: any[]) => types.ndjamStageInstanceManager;
   'net.dv8tion.jda.api.events.stage.update.StageInstanceUpdatePrivacyLevelEvent': typeof types.ndjaesuStageInstanceUpdatePrivacyLevelEvent;
   'net.dv8tion.jda.api.events.stage.update.StageInstanceUpdateTopicEvent': typeof types.ndjaesuStageInstanceUpdateTopicEvent;
   'net.dv8tion.jda.api.events.StatusChangeEvent': typeof types.ndjaeStatusChangeEvent;
   'net.dv8tion.jda.api.entities.StoreChannel': new (...args: any[]) => types.ndjaeStoreChannel;
   'net.dv8tion.jda.api.events.channel.store.StoreChannelCreateEvent': typeof types.ndjaecsStoreChannelCreateEvent;
   'net.dv8tion.jda.api.events.channel.store.StoreChannelDeleteEvent': typeof types.ndjaecsStoreChannelDeleteEvent;
   'net.dv8tion.jda.api.events.channel.store.update.StoreChannelUpdateNameEvent': typeof types.ndjaecsuStoreChannelUpdateNameEvent;
   'net.dv8tion.jda.api.events.channel.store.update.StoreChannelUpdatePositionEvent': typeof types.ndjaecsuStoreChannelUpdatePositionEvent;
   'net.dv8tion.jda.api.interactions.commands.build.SubcommandData': typeof types.ndjaicbSubcommandData;
   'net.dv8tion.jda.api.interactions.commands.build.SubcommandGroupData': typeof types.ndjaicbSubcommandGroupData;
   'net.dv8tion.jda.api.audit.TargetType': typeof types.ndjaaTargetType;
   'net.dv8tion.jda.api.utils.concurrent.Task': new (...args: any[]) => types.ndjaucTask;
   'net.dv8tion.jda.api.entities.TeamMember': new (...args: any[]) => types.ndjaeTeamMember;
   'net.dv8tion.jda.api.entities.TeamMember.MembershipState': typeof types.ndjaeTMembershipState;
   'net.dv8tion.jda.api.entities.templates.Template': typeof types.ndjaetTemplate;
   'net.dv8tion.jda.api.entities.templates.TemplateChannel': typeof types.ndjaetTemplateChannel;
   'net.dv8tion.jda.api.entities.templates.TemplateChannel.PermissionOverride': typeof types.ndjaetTPermissionOverride;
   'net.dv8tion.jda.api.entities.templates.TemplateGuild': typeof types.ndjaetTemplateGuild;
   'net.dv8tion.jda.api.managers.TemplateManager': new (...args: any[]) => types.ndjamTemplateManager;
   'net.dv8tion.jda.api.entities.templates.TemplateRole': typeof types.ndjaetTemplateRole;
   'net.dv8tion.jda.api.entities.TextChannel': new (...args: any[]) => types.ndjaeTextChannel;
   'net.dv8tion.jda.api.events.channel.text.TextChannelCreateEvent': typeof types.ndjaectTextChannelCreateEvent;
   'net.dv8tion.jda.api.events.channel.text.TextChannelDeleteEvent': typeof types.ndjaectTextChannelDeleteEvent;
   'net.dv8tion.jda.api.events.channel.text.update.TextChannelUpdateNameEvent': typeof types.ndjaectuTextChannelUpdateNameEvent;
   'net.dv8tion.jda.api.events.channel.text.update.TextChannelUpdateNewsEvent': typeof types.ndjaectuTextChannelUpdateNewsEvent;
   'net.dv8tion.jda.api.events.channel.text.update.TextChannelUpdateNSFWEvent': typeof types.ndjaectuTextChannelUpdateNSFWEvent;
   'net.dv8tion.jda.api.events.channel.text.update.TextChannelUpdateParentEvent': typeof types.ndjaectuTextChannelUpdateParentEvent;
   'net.dv8tion.jda.api.events.channel.text.update.TextChannelUpdatePositionEvent': typeof types.ndjaectuTextChannelUpdatePositionEvent;
   'net.dv8tion.jda.api.events.channel.text.update.TextChannelUpdateSlowmodeEvent': typeof types.ndjaectuTextChannelUpdateSlowmodeEvent;
   'net.dv8tion.jda.api.events.channel.text.update.TextChannelUpdateTopicEvent': typeof types.ndjaectuTextChannelUpdateTopicEvent;
   'net.dv8tion.jda.api.audit.ThreadLocalReason': typeof types.ndjaaThreadLocalReason;
   'net.dv8tion.jda.api.audit.ThreadLocalReason.Closable': typeof types.ndjaaTClosable;
   'net.dv8tion.jda.api.sharding.ThreadPoolProvider': new (...args: any[]) => types.ndjasThreadPoolProvider;
   'net.dv8tion.jda.api.utils.TimeFormat': typeof types.ndjauTimeFormat;
   'net.dv8tion.jda.api.utils.Timestamp': typeof types.ndjauTimestamp;
   'net.dv8tion.jda.api.utils.TimeUtil': typeof types.ndjauTimeUtil;
   'net.dv8tion.jda.api.events.guild.UnavailableGuildJoinedEvent': typeof types.ndjaegUnavailableGuildJoinedEvent;
   'net.dv8tion.jda.api.events.guild.UnavailableGuildLeaveEvent': typeof types.ndjaegUnavailableGuildLeaveEvent;
   'net.dv8tion.jda.api.utils.cache.UnifiedMemberCacheView': new (...args: any[]) => types.ndjaucUnifiedMemberCacheView;
   'net.dv8tion.jda.api.events.UpdateEvent': new (...args: any[]) => types.ndjaeUpdateEvent;
   'net.dv8tion.jda.api.requests.restaction.interactions.UpdateInteractionAction': new (
      ...args: any[]
   ) => types.ndjarriUpdateInteractionAction;
   'net.dv8tion.jda.api.entities.User': new (...args: any[]) => types.ndjaeUser;
   'net.dv8tion.jda.api.entities.User.UserFlag': typeof types.ndjaeUUserFlag;
   'net.dv8tion.jda.api.events.user.UserActivityEndEvent': typeof types.ndjaeuUserActivityEndEvent;
   'net.dv8tion.jda.api.events.user.UserActivityStartEvent': typeof types.ndjaeuUserActivityStartEvent;
   'net.dv8tion.jda.api.audio.UserAudio': typeof types.ndjaaUserAudio;
   'net.dv8tion.jda.api.events.user.UserTypingEvent': typeof types.ndjaeuUserTypingEvent;
   'net.dv8tion.jda.api.events.user.update.UserUpdateActivitiesEvent': typeof types.ndjaeuuUserUpdateActivitiesEvent;
   'net.dv8tion.jda.api.events.user.update.UserUpdateActivityOrderEvent': typeof types.ndjaeuuUserUpdateActivityOrderEvent;
   'net.dv8tion.jda.api.events.user.update.UserUpdateAvatarEvent': typeof types.ndjaeuuUserUpdateAvatarEvent;
   'net.dv8tion.jda.api.events.user.update.UserUpdateDiscriminatorEvent': typeof types.ndjaeuuUserUpdateDiscriminatorEvent;
   'net.dv8tion.jda.api.events.user.update.UserUpdateFlagsEvent': typeof types.ndjaeuuUserUpdateFlagsEvent;
   'net.dv8tion.jda.api.events.user.update.UserUpdateNameEvent': typeof types.ndjaeuuUserUpdateNameEvent;
   'net.dv8tion.jda.api.events.user.update.UserUpdateOnlineStatusEvent': typeof types.ndjaeuuUserUpdateOnlineStatusEvent;
   'net.dv8tion.jda.api.entities.VanityInvite': typeof types.ndjaeVanityInvite;
   'net.dv8tion.jda.api.entities.VoiceChannel': new (...args: any[]) => types.ndjaeVoiceChannel;
   'net.dv8tion.jda.api.events.channel.voice.VoiceChannelCreateEvent': typeof types.ndjaecvVoiceChannelCreateEvent;
   'net.dv8tion.jda.api.events.channel.voice.VoiceChannelDeleteEvent': typeof types.ndjaecvVoiceChannelDeleteEvent;
   'net.dv8tion.jda.api.events.channel.voice.update.VoiceChannelUpdateBitrateEvent': typeof types.ndjaecvuVoiceChannelUpdateBitrateEvent;
   'net.dv8tion.jda.api.events.channel.voice.update.VoiceChannelUpdateNameEvent': typeof types.ndjaecvuVoiceChannelUpdateNameEvent;
   'net.dv8tion.jda.api.events.channel.voice.update.VoiceChannelUpdateParentEvent': typeof types.ndjaecvuVoiceChannelUpdateParentEvent;
   'net.dv8tion.jda.api.events.channel.voice.update.VoiceChannelUpdatePositionEvent': typeof types.ndjaecvuVoiceChannelUpdatePositionEvent;
   'net.dv8tion.jda.api.events.channel.voice.update.VoiceChannelUpdateRegionEvent': typeof types.ndjaecvuVoiceChannelUpdateRegionEvent;
   'net.dv8tion.jda.api.events.channel.voice.update.VoiceChannelUpdateUserLimitEvent': typeof types.ndjaecvuVoiceChannelUpdateUserLimitEvent;
   'net.dv8tion.jda.api.hooks.VoiceDispatchInterceptor': new (...args: any[]) => types.ndjahVoiceDispatchInterceptor;
   'net.dv8tion.jda.api.hooks.VoiceDispatchInterceptor.VoiceServerUpdate': typeof types.ndjahVVoiceServerUpdate;
   'net.dv8tion.jda.api.hooks.VoiceDispatchInterceptor.VoiceStateUpdate': typeof types.ndjahVVoiceStateUpdate;
   'net.dv8tion.jda.api.hooks.VoiceDispatchInterceptor.VoiceUpdate': new (...args: any[]) => types.ndjahVVoiceUpdate;
   'net.dv8tion.jda.api.entities.Webhook': new (...args: any[]) => types.ndjaeWebhook;
   'net.dv8tion.jda.api.entities.Webhook.ChannelReference': typeof types.ndjaeWChannelReference;
   'net.dv8tion.jda.api.entities.Webhook.GuildReference': typeof types.ndjaeWGuildReference;
   'net.dv8tion.jda.api.entities.Webhook.WebhookReference': typeof types.ndjaeWWebhookReference;
   'net.dv8tion.jda.api.requests.restaction.WebhookAction': new (...args: any[]) => types.ndjarrWebhookAction;
   'net.dv8tion.jda.api.entities.WebhookClient': new (...args: any[]) => types.ndjaeWebhookClient;
   'net.dv8tion.jda.api.managers.WebhookManager': new (...args: any[]) => types.ndjamWebhookManager;
   'net.dv8tion.jda.api.requests.restaction.WebhookMessageAction': new (
      ...args: any[]
   ) => types.ndjarrWebhookMessageAction;
   'net.dv8tion.jda.api.requests.restaction.WebhookMessageUpdateAction': new (
      ...args: any[]
   ) => types.ndjarrWebhookMessageUpdateAction;
   'net.dv8tion.jda.api.entities.WebhookType': typeof types.ndjaeWebhookType;
   'net.dv8tion.jda.api.utils.WidgetUtil': typeof types.ndjauWidgetUtil;
   'net.dv8tion.jda.api.utils.WidgetUtil.BannerType': typeof types.ndjauWBannerType;
   'net.dv8tion.jda.api.utils.WidgetUtil.Widget': typeof types.ndjauWWidget;
   'net.dv8tion.jda.api.utils.WidgetUtil.Widget.Member': typeof types.ndjauWWMember;
   'net.dv8tion.jda.api.utils.WidgetUtil.Widget.VoiceChannel': typeof types.ndjauWWVoiceChannel;
   'net.dv8tion.jda.api.utils.WidgetUtil.Widget.VoiceState': typeof types.ndjauWWVoiceState;
   'net.dv8tion.jda.api.utils.WidgetUtil.WidgetTheme': typeof types.ndjauWWidgetTheme;
}
