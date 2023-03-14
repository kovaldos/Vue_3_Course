export default {
    install(app, options) {
        let current = "RU"

        const changeLanguage = (lang) => {
            current = lang;
        };

        app.config.globalProperties.$i18n = key => {
            return key.split(".").reduce((acc, i) => {
                return acc[i] || "=== UNKNOWN WORD ==="
            }, options[current])
        };

        app.provide("translate", changeLanguage)
    }
}