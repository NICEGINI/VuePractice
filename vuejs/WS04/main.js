import router from './router.js';
import NavHeader from './components/NavHeader.js';
new Vue({
  el: '#app',
  router,
  components: {
    NavHeader,
  },
});
