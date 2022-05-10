function toggleTracking() {
    if (!window._track) {
        window._track = {};
        window._track.default = {};
        window._track.default.p1 = ((webpackChunkdiscord_app.push([
            [''], {},
            e => {
                m = [];
                for (let c in e.c) m.push(e.c[c])
            }
        ]), m).find(m => m?.exports?.default?.track).exports.default.track);
        window.webpackChunkdiscord_app.pop();
        window._track.default.p2 = window.onerror;
    }
    window._track.enabled = typeof window._track.enabled !== "undefined" ? window._track.enabled : false;

    if (window._track.enabled == false) {
        ((webpackChunkdiscord_app.push([
            [''], {},
            e => {
                m = [];
                for (let c in e.c) m.push(e.c[c])
            }
        ]), m).find(m => m?.exports?.default?.track).exports.default.track) = function() {
            return;
        };
        window.webpackChunkdiscord_app.pop();
        window.onerror = function() {
            return;
        };
        window._track.enabled = true;
        return false;
    } else {
        ((webpackChunkdiscord_app.push([
            [''], {},
            e => {
                m = [];
                for (let c in e.c) m.push(e.c[c])
            }
        ]), m).find(m => m?.exports?.default?.track).exports.default.track) = window._track.default.p1;
        window.webpackChunkdiscord_app.pop();
        window.onerror = window._track.default.p2;
        window._track.enabled = false;
        return true;
    };
}
