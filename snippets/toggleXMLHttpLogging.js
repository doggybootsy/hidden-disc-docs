function toggleXMLHttpLogging() {
    if (!window._send) {
        window._send = {};
        window._send.default = window.XMLHttpRequest.prototype.send;
    }
    window._send.enabled = typeof window._send.enabled !== "undefined" ? window._send.enabled : false;

    if (window._send.enabled == false) {
        window.XMLHttpRequest.prototype.send = function() {
            ((d) => {
                let es = 'no_event_type';
                let p = {
                    events: []
                };
                try {
                    p = JSON.parse(d)
                } catch (e) {
                    p = p
                };
                if (p != null) {
                    if (p.events == undefined) {
                        return
                    }
                    es = es.replace("no_event_type", "");
                    p.events.forEach(e => es += `${e.type }, `)
                }
                console.log(es == 'no_event_type' ? 'no_event_type' : es.slice(0, -2), p)
            }).apply(this, [...arguments]);
            return window._send.default.apply(this, [...arguments])
        };
        window._send.enabled = true;
        return;
    } else {
        window.XMLHttpRequest.prototype.send = window._send.default;
        window._send.enabled = false;
        return;
    };
}
