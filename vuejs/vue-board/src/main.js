import Vue from 'vue';
import { router } from './routes/index.js';
import App from './App.vue';
import store from './store'

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  router
}).$mount('#app');
