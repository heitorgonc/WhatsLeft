import Vue from 'vue'
import App from './App.vue'
import './style.css'
import './plugins/axios'
import vuetify from './plugins/vuetify'
import router from './router/index'
import store from './store/store'

Vue.filter('dollarsign', value => {
  return '$ '+ value.toLocaleString()
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')