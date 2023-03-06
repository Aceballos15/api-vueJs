
import { createApp } from 'vue'
import VueAxios from 'vue-axios'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import router from './router'
import store from './store'
import axios from 'axios'


axios.defaults.baseURL = 'https://rickandmortyapi.com/api'

createApp(App).use(store).use(VueAxios, axios).use(router).mount('#app')
