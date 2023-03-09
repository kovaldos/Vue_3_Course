import { createApp } from 'vue'
import App from './App.vue'
import UIcomponents from '@/components/UI'

import './scss/style.scss'
import './theme.css'

const app2 = createApp(App);

UIcomponents.forEach((component) => {
    app2.component(component.name, component)
})

app2.mount('#app')
