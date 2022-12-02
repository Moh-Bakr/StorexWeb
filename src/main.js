import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './assets/main.css'

axios.defaults.baseURL = 'https://test-api.storexweb.com/api/'
const app = createApp(App)

app.use(router)

app.mount('#app')
