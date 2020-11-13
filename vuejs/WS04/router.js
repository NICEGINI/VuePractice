import Index from './components/Index.js';
import List from './components/List.js';
import Create from './components/Create.js';
import Read from './components/Read.js';
import Update from './components/Update.js';
import Delete from './components/Delete.js';

Vue.use(VueRouter);
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/list',
      name: 'list',
      component: List,
    },
    {
      path: '/create',
      name: 'create',
      component: Create,
    },
    {
      path: '/read',
      name: 'read',
      component: Read,
    },
    {
      path: '/update',
      name: 'update',
      component: Update,
    },
    {
      path: '/delete',
      name: 'delete',
      component: Delete,
    },
  ],
});
