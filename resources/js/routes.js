
import Dashboard from './components/Dashboard.vue';
import ProductAdd from './components/Product/ProductAdd.vue';
import ProductEdit from './components/Product/ProductEdit.vue';
import ProductList from './components/Product/ProductList.vue';
import TaxAdd from './components/Tax/TaxAdd.vue';
import TaxEdit from './components/Tax/TaxEdit.vue';
import TaxList from './components/Tax/TaxList.vue';

export const routes = [
    { path: '/', component: Dashboard, name: 'Dashboard' },
    { path: '/products/add', component: ProductAdd, name: 'ProductAdd' },
    { path: '/products/edit/:id', component: ProductEdit, name: 'ProductEdit' },
    { path: '/products', component: ProductList, name: 'ProductList' },
    { path: '/taxes/add', component: TaxAdd, name: 'TaxAdd' },
    { path: '/taxes/edit/:id', component: TaxEdit, name: 'TaxEdit' },
    { path: '/taxes', component: TaxList, name: 'TaxList' }
];
