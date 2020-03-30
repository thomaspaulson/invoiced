// Dependencies
import React from 'react';
import { Route , Switch} from 'react-router-dom';
// Components
import App from './components/App';
import Dashboard from './components/Dashboard';

import ProductList from './components/Product/ProductList';
import ProductAdd from './components/Product/ProductAdd';
import ProductEdit from './components/Product/ProductEdit';

import CustomerList from './components/Customer/CustomerList';
import CustomerAdd from './components/Customer/CustomerAdd';
import CustomerEdit from './components/Customer/CustomerEdit';

const AppRoutes = () => (
    <App>
        <Switch>
            <Route exact path="/" component={Dashboard} />

            <Route path="/products" component={ProductList} />
            <Route path="/products/add" component={ProductAdd} />
            <Route path="/products/edit/" component={ProductEdit} />

            <Route path="/customers" component={CustomerList} />
            <Route path="/customers/add" component={CustomerAdd} />
            <Route path="/customers/edit/" component={CustomerEdit} />                       

        </Switch>

    </App>
);
export default AppRoutes;