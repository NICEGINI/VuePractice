import Main from './components/Main.js';
import Board from './components/Board.js';
import Qna from './components/Qna.js';
import Gallery from './components/Gallery.js';

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Main,
    },
    {
      path: '/board',
      component: Board,
    },
    {
      path: '/qna',
      component: Qna,
    },
    {
      path: '/gallery',
      component: Gallery,
    },
  ],
});
new Vue({
  el: '#app',
  router,
});
