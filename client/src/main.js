import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// importing bootstap css
import "bootstrap/dist/css/bootstrap.css"

// init app
const app = createApp(App)

// app inclusions
app.use(router)
app.use(createPinia())
app.use(cors())

// mounting app
app.mount('#app')

// importing bootstap js
import "bootstrap/dist/js/bootstrap.js"