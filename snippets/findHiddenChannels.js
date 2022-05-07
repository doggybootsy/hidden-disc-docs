function findHiddenChannels(guildID) { // guildID should be type "string", btw
    let mod;
    let visibleChannels = [];
    let hiddenChannels = [];
    window.webpackChunkdiscord_app.push([
        [Math.random()], {}, (e) => {
            mod = mod || Object.values(e.c).find(m => m?.exports?.default && m.exports.default["getMutableGuildChannelsForGuild"])
        }
    ]);
    let allChannels = Object.keys(mod.exports.default.getMutableGuildChannelsForGuild(guildID));
    mod = undefined;
    window.webpackChunkdiscord_app.push([
        [Math.random()], {}, (e) => {
            mod = mod || Object.values(e.c).find(m => m?.exports?.default && m.exports.default["getChannels"])
        }
    ]);
    mod.exports.default.getChannels(guildID)["SELECTABLE"].forEach(o => visibleChannels.push(o.channel.id));
    mod = undefined;
    window.webpackChunkdiscord_app.push([
        [Math.random()], {}, (e) => {
            mod = mod || Object.values(e.c).find(m => m?.exports?.default && m.exports.default["hasChannel"])
        }
    ]);
    allChannels.filter(hiddenChannel => visibleChannels.every(visibleChannel => visibleChannel != hiddenChannel)).forEach(channelId => hiddenChannels.push(mod.exports.default.getChannel(channelId))); // takes visible channels away from all channels, leaving us with non-visible ("hidden") channels
    mod = undefined;
    return hiddenChannels.filter(channelObj => channelObj.isCategory() == false); // makes sure no categories are falsely flagged as hidden channels
}
