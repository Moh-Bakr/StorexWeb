import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './assets/main.css'

axios.defaults.baseURL = 'https://storexweb.herokuapp.com/api/'

// create axios instance
const instance = axios.create({
   baseURL: 'https://storexweb.herokuapp.com/api/',
   headers: {
      'Authorization': localStorage.getItem('token'),
   }
});   
      
const app = createApp(App)

app.use(router)

app.mount('#app')
