
import Dashboard from './components/Dashboard.vue';
import ProductList from './components/Product/ProductList.vue';
import ProductAdd from './components/Product/ProductAdd.vue';
import ProductEdit from './components/Product/ProductEdit.vue';

export const routes = [
    { path: '/', component: Dashboard, name: 'Dashboard' },
    { path: '/products/add', component: ProductAdd, name: 'ProductAdd' },
    { path: '/products/add', component: ProductEdit, name: 'ProductEdit' },
    { path: '/products', component: ProductList, name: 'ProductList' }
];
