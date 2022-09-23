import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/style.css'
import * as jQuery from 'jquery'

window.$ = window.jQuery = jQuery

createApp(App).use(store).use(router).mount('#app')
