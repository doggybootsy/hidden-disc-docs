async function createFriendInvite() {
    var mod;
    window.webpackChunkdiscord_app.push([
        [Math.random()], {}, (e) => {
            mod = mod || Object.values(e.c).find(m => m?.exports?.default && m.exports.default["createFriendInvite"])
        }
    ]);
    window.webpackChunkdiscord_app.pop();
    return await await mod.exports.default.createFriendInvite();
}
