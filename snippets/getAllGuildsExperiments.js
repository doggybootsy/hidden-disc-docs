async function getAllGuildsExperiments() {
    let guildsWithExperiments = {};

    const cache = () => {
        let webp = window.webpackChunkdiscord_app.push([
            [Symbol()], {},
            _ => _.c
        ]);
        window.webpackChunkdiscord_app.pop();
        return webp;
    }

    let guildExperiments = Object.entries((() => {
        for (const m of Object.keys(cache())
                .map((x) => cache()[x].exports)
                .filter((x) => x)) {
            if (m.default && m.default["isEligibleForExperiment"] !== undefined) {
                return m.default;
            }
        }
    })().getRegisteredExperiments()).reduce((prev, cur) => {
        if (cur[1].type === "guild") prev.push(cur[0]);
        return prev
    }, []);
    let getGuildExperiments = (id) => guildExperiments.reduce((prev, cur) => {
        let val = (() => {
            for (const m of Object.keys(cache())
                    .map((x) => cache()[x].exports)
                    .filter((x) => x)) {
                if (m.default && m.default["isEligibleForExperiment"] !== undefined) {
                    return m.default;
                }
            }
        })().getGuildExperimentDescriptor(cur, id);
        if (val) prev[cur] = val;
        return prev
    }, {});
    Object.values((() => {
        for (const m of Object.keys(cache())
                .map((x) => cache()[x].exports)
                .filter((x) => x)) {
            if (m.default && m.default["getGuild"] !== undefined) {
                return m.default;
            }
        }
    })().getGuilds()).reduce((prev, cur) => {
        guildsWithExperiments[`${cur.name} (${cur.id})`] = getGuildExperiments(cur.id);
    }, {});
    return guildsWithExperiments;
}
