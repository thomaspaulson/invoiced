
import Dashboard from './Pages/Dashboard.vue';
import ProductAdd from './Pages/Product/ProductAdd.vue';
import ProductEdit from './Pages/Product/ProductEdit.vue';
import ProductList from './Pages/Product/ProductList.vue';
import TaxAdd from './Pages/Tax/TaxAdd.vue';
import TaxEdit from './Pages/Tax/TaxEdit.vue';
import TaxList from './Pages/Tax/TaxList.vue';

export const routes = [
    { path: '/', component: Dashboard, name: 'Dashboard' },
    { path: '/products/add', component: ProductAdd, name: 'ProductAdd' },
    { path: '/products/edit/:id', component: ProductEdit, name: 'ProductEdit' },
    { path: '/products', component: ProductList, name: 'ProductList' },
    { path: '/taxes/add', component: TaxAdd, name: 'TaxAdd' },
    { path: '/taxes/edit/:id', component: TaxEdit, name: 'TaxEdit' },
    { path: '/taxes', component: TaxList, name: 'TaxList' }
];
