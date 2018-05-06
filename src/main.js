// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
let v = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store: store
})


// This should be the only new line ***
v.$store.dispatch('getTodos')

