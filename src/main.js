// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(Vuetify) //middleware for Vuetify plugin

new Vue({
  el: '#app',
  router,
  render: h => h(App) //h comes from hyperscript used in virtual dom implementations
})
