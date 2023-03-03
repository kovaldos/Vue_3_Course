import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import uiComponents from '@/components/UI'
import './assets/main.css'
import VHeader from "@/components/VHeader.vue";

const app = createApp(App)

app.component('v-header', VHeader);
uiComponents.forEach((uiComponent) => {
    app.component(uiComponent.name, uiComponent)
})

app.use(router)

app.mount('#app')
