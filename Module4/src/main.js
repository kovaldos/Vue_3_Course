import {createApp, defineAsyncComponent} from 'vue'
import App from './App.vue'
import router from './router'
import uiComponents from '@/components/UI'
import './assets/main.css'
import AppHeader from "@/components/AppHeader.vue";

const app = createApp(App)

app.component('app-header', AppHeader);
app.component('app-async-component', defineAsyncComponent(() => {
    return import('@/components/AppAsyncComponent.vue')
}))
uiComponents.forEach((uiComponent) => {
    app.component(uiComponent.name, uiComponent)
})



app.use(router)

app.mount('#app')
