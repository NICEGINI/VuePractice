import NavHeader from './component/NavHeader.js';
import router from './router.js';

new Vue({
  el: '#app',
  router,
  components: {
    NavHeader,
  },
});
