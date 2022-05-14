import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// importing bootstap css
import "bootstrap/dist/css/bootstrap.css"

// init app
const app = createApp(App)

// app inclusions
app.use(router)

// mounting app
app.mount('#app')

// importing bootstap js
import "bootstrap/dist/js/bootstrap.js"