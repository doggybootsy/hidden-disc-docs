async function createPromptModal(title, defaultValue = "") {
    const cache = () => {
        let webp = window.webpackChunkdiscord_app.push([
            [Symbol()], {},
            _ => _.c
        ]);
        window.webpackChunkdiscord_app.pop();
        return webp;
    }
    const TextInput = () => {
        let m = [];
        ((n) => {
            m.push(
                ...Object.values(cache()).filter(
                    (m) =>
                    m?.exports &&
                    ((m?.exports?.default &&
                            Object.keys(m.exports.default).some((k) =>
                                k.toLowerCase().includes(n),
                            )) ||
                        (m.exports?.default?.prototype &&
                            Object.keys(
                                m.exports.default.prototype,
                            ).some((k) =>
                                k.toLowerCase().includes(n),
                            )) ||
                        Object.keys(m.exports).some((k) =>
                            k.toLowerCase().includes(n),
                        )),
                ),
            );
        })("textinput");
        m.forEach((f) =>
            m.push(
                typeof f?.exports?.default === "undefined" ?
                f?.exports :
                f?.exports?.default,
            ),
        );
        for (var i = 0; i < m.length; i++) {
            m.forEach((f, i) =>
                typeof f?.id === "undefined" ? (m = m) : m.splice(i, 1),
            );
        }
        return [...m][3];
    };
    let ConfirmationModal = () => {
        let m = [];
        ((n) => {
            m.push(
                ...Object.values(cache()).filter(
                    (m) =>
                    m?.exports &&
                    ((m?.exports?.default &&
                            Object.keys(m.exports.default).some((k) =>
                                k.toLowerCase().includes(n),
                            )) ||
                        (m.exports?.default?.prototype &&
                            Object.keys(
                                m.exports.default.prototype,
                            ).some((k) =>
                                k.toLowerCase().includes(n),
                            )) ||
                        Object.keys(m.exports).some((k) =>
                            k.toLowerCase().includes(n),
                        )),
                ),
            );
        })("confirmmodal");
        m.forEach((f) =>
            m.push(
                typeof f?.exports?.default === "undefined" ?
                f?.exports :
                f?.exports?.default,
            ),
        );
        for (var i = 0; i < m.length; i++) {
            m.forEach((f, i) =>
                typeof f?.id === "undefined" ? (m = m) : m.splice(i, 1),
            );
        }
        return [...m][0];
    };
    let Button = () => {
        for (const m of Object.keys(cache())
                .map((x) => cache()[x].exports)
                .filter((x) => x)) {
            if (m.default && m.default["ButtonColors"] !== undefined) {
                return m.default;
            }
        }
    }
    let Messages = () => {
        for (const m of Object.keys(cache())
                .map((x) => cache()[x].exports)
                .filter((x) => x)) {
            if (m && m["COMMANDS"] !== undefined) return m;
        }
    }
    let openModal = () => {
        for (const m of Object.keys(cache())
                .map((x) => cache()[x].exports)
                .filter((x) => x)) {
            if (m && m["openModal", "closeModal"] !== undefined) return m.openModal;
        }
    }
    let React = () => {
        for (const m of Object.keys(cache())
                .map((x) => cache()[x].exports)
                .filter((x) => x)) {
            if (m && m["createElement"] !== undefined) return m;
        }
    }
    let toReturn = "";

    return new Promise((resolve) => {
        openModal()(props => {
            if (props.transitionState === 3) resolve(null)
            return React().createElement(ConfirmationModal(), Object.assign({
                header: title,
                confirmButtonColor: Button().ButtonColors.BRAND,
                confirmText: Messages().OKAY,
                cancelText: Messages().CANCEL,
                onConfirm: () => resolve(toReturn),
                onCancel: () => resolve(null),
                children: React().createElement(React().memo(() => {
                    const [value, setValue] = React().useState(defaultValue)
                    return React().createElement(TextInput(), {
                        value: value,
                        onInput: ({
                            target
                        }) => {
                            setValue(target.value)
                            toReturn = target.value
                        }
                    })
                }))
            }, props))
        })
    })
}
