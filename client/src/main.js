import { createApp, markRaw } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// importing bootstap css
import "bootstrap/dist/css/bootstrap.css"

// init app
const app = createApp(App)
const pinia = createPinia()

pinia.use(({ store }) => {
    store.router = markRaw(router)
})

// app inclusions
app.use(router)
app.use(pinia)

// mounting app
app.mount('#app')

// importing bootstap js
import "bootstrap/dist/js/bootstrap.js"