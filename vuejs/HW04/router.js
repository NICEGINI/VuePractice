import List from './component/List.js';
import Add from './component/Add.js';
import Detail from './component/Detail.js';
import Index from './component/Index.js';

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
            path: '/add',
            name: 'add',
            component: Add,
        },
        {
            path: '/detail',
            name: 'detail',
            component: Detail,
        },
    ],
});
