import Vue from 'vue'
import App from './App.vue'
import './style.css'
import vuetify from './plugins/vuetify'
import router from './router/index'
import store from './store/store'

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')