// Dependencies
import React from 'react';
import { Route ,  Switch } from 'react-router-dom';
// Components
import App from './components/App';
import Home from './pages/Home';
import Products from './pages/Products';
import Taxes from './pages/Taxes';
import EditTax from './pages/Taxes/edit';
import AddTax from './pages/Taxes/edit';

const AppRoutes = () => (
    <App>        
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/products" component={Products} exact />
            <Route path="/taxes" component={Taxes} exact />
            <Route path="/taxes/add" component={AddTax} exact />
            <Route path="/taxes/edit/" component={EditTax} exact />


        </Switch>
    </App>

);
export default AppRoutes;