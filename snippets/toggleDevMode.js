function toggleDevMode() {
    const cache = () => {
        let webp = window.webpackChunkdiscord_app.push([
            [Symbol()], {},
            _ => _.c
        ]);
        window.webpackChunkdiscord_app.pop();
        return webp;
    }
    let isDeveloper = () => {
        for (const m of Object.keys(cache())
                .map((x) => cache()[x].exports)
                .filter((x) => x)) {
            if (m.default && m.default.isDeveloper !== undefined) {
                return m.default.isDeveloper;
            }
        }
    }
    if (isDeveloper()) {
        let m = [];
        for (let c in cache()) {
            m.push(cache()[c]);
        };
        Object.defineProperty(
            m.find((m) => m?.exports?.default?.isDeveloper !== void 0)
            .exports.default,
            "isDeveloper", {
                get: () => false,
                configurable: true,
            }
        );
    }
    else {
      let m = [];
        for (let c in cache()) {
            m.push(cache()[c]);
        };
        Object.defineProperty(
            m.find((m) => m?.exports?.default?.isDeveloper !== void 0)
            .exports.default,
            "isDeveloper", {
                get: () => true,
                configurable: true,
            }
        );
    }
  return isDeveloper();
}
