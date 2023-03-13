import { createApp } from 'vue'
import App from './App.vue'
import uiComponents from './components/UI'

import './scss/style.scss'
import './theme.css'
import directives from "@/directives";

const app7 = createApp(App);

uiComponents.forEach((component) => {
    app7.component(component.name, component)
})

directives.forEach((directive) => {
    app7.directive(directive.name, directive)
})

app7.mount('#app')
