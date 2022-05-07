function toggleExperiment(NAME, t=1) {
    var EXPobj; var isExperimentOn;
    window.webpackChunkdiscord_app.push([
        [Math.random()], {}, (e) => {EXPobj = EXPobj || Object.values(e.c).filter(m => m?.exports?.default?.definition?.id?.includes(NAME))[0]}]);
    isExperimentOn = EXPobj?.exports?.default?.getCurrentConfig()?.enabled;
    window.webpackChunkdiscord_app.pop();
    if (isExperimentOn == false) {
        window.webpackChunkdiscord_app.push([
            [Math.random()], {},
            function({c: e}) {
                for (let c in e) {
                    let exps = e[c]?.exports;
                    if (exps && typeof exps.overrideBucket === "function" && exps.ExperimentStore) {
                        for (var i = 0; i < 2; i += 1) {
                            setTimeout(() => {
                                exps.overrideBucket(EXPobj?.exports?.default?.definition?.id, t);
                            }, 100);
                        }
                    }
                }
            }
        ]);
        window.webpackChunkdiscord_app.pop();
        console.log(`Enabled experiment ${EXPobj?.exports?.default?.definition?.label} (${EXPobj?.exports?.default?.definition?.id}) with treatment ${t}!`);
    } else if (isExperimentOn == true) {
        window.webpackChunkdiscord_app.push([
            [Math.random()], {},
            function({
                c: e
            }) {
                for (let c in e) {
                    let exps = e[c]?.exports;
                    if (exps && typeof exps.overrideBucket === "function" && exps.ExperimentStore) {
                        exps.overrideBucket(EXPobj?.exports?.default?.definition?.id, null);
                    }
                }
            }
        ]);
        window.webpackChunkdiscord_app.pop();
        console.log(`Disabled experiment ${EXPobj?.exports?.default?.definition?.label} (${EXPobj?.exports?.default?.definition?.id})!`);
    }
}
