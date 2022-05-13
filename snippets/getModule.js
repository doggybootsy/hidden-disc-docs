function getModule(n, f = true) { // 'f' is whether to return the first module found if it goes by display name
    const cache = () => {
        let webp = window.webpackChunkdiscord_app.push([
            [Symbol()], {},
            _ => _.c
        ]);
        window.webpackChunkdiscord_app.pop();
        return webp;
    };
    let findAllModules = (filter = (m) => m) => {
        let modules = [];
        for (let item in cache()) {
            if (Object.hasOwnProperty.call(cache(), item)) {
                let element = cache()[item].exports;
                if (!element) {
                    continue
                }
                if (filter(element)) {
                    modules.push(element)
                }
            }
        }
        return modules
    };
    let x = false;
    let mod;
    window.webpackChunkdiscord_app.push([
        [Math.random()], {}, (e) => {
            mod = mod || Object.values(e.c).find(m => m?.exports?.default?.[n]);
        }
    ]);
    window.webpackChunkdiscord_app.pop();
    if (typeof mod === "undefined") {
        window.webpackChunkdiscord_app.push([
            [Math.random()], {}, (e) => {
                mod = mod || Object.values(e.c).find(m => m?.exports?.[n]);
            }
        ]);
        window.webpackChunkdiscord_app.pop();
    }
    if (typeof mod === "undefined") {
        x = true;
        if (f == true) {
            mod = mod || (typeof findAllModules(m => m?.default?.displayName === n) !== "undefined") ? findAllModules(m => m?.default?.displayName === n)?.[0] : findAllModules(m => m?.displayName === n)?.[0];
        } else {
            mod = mod || (typeof findAllModules(m => m?.default?.displayName === n) !== "undefined") ? findAllModules(m => m?.default?.displayName === n) : findAllModules(m => m?.displayName === n);
        }
    }

    if (x == false) {
        return (typeof mod?.exports?.default !== "undefined") ? mod?.exports?.default : mod?.exports;
    } else if (x == true) {
        return (typeof mod?.default !== "undefined") ? mod?.default : mod;
    }
    return undefined;
}
