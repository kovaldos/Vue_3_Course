import { createApp } from 'vue'
import App from './App.vue'
import uiComponents from './components/UI'

import './scss/style.scss'
import './theme.css'

const app7 = createApp(App);

uiComponents.forEach((component) => {
    app7.component(component.name, component)
})

app7.mount('#app')
