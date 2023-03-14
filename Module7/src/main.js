import { createApp } from 'vue'
import App from './App.vue'
import uiComponents from './components/UI'

import './scss/style.scss'
import './theme.css'
import directives from "@/directives";
import translatePlugin from "@/plugins/translatePlugin";

const app7 = createApp(App);

const RU = {
    app: {
        title: "Как работают плагины во Vue?"
    }
}
const EN = {
    app: {
        title: "How do plugins work in Vue?"
    }
}

uiComponents.forEach((component) => {
    app7.component(component.name, component)
})

directives.forEach((directive) => {
    app7.directive(directive.name, directive)
})

app7.use(translatePlugin, {RU, EN})

app7.mount('#app')
