import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import './registerServiceWorker'
import feather from 'vue-icon'
import 'leaflet/dist/leaflet.css'; 
Vue.use(feather, 'v-icon')
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

export const EventBus = new Vue();

Vue.config.productionTip = false

new Vue({
  router,
  created(){},
  render: h => h(App)
}).$mount('#app')
