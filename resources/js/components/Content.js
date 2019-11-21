import React from 'react';
import {   
  Switch, 
  Route 
 } from 'react-router-dom';

import Sidebar from './Sidebar';
import Dashboard from './Dashboard';

import ProductList from './Product/ProductList';
import ProductAdd from './Product/ProductAdd';
import ProductEdit from './Product/ProductEdit';

import CustomerList from './Customer/CustomerList';
import CustomerAdd from './Customer/CustomerAdd';
import CustomerEdit from './Customer/CustomerEdit';


function Content() {

    return (
      
		<div className="container-fluid">
			<div className="row">
					<Sidebar />
					<main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
						<Switch>
							<Route path="/" component={Dashboard} />

							<Route path="/products" component={ProductList} />
							<Route path="/products/add" component={ProductAdd} />
							<Route path="/products/edit/" component={ProductEdit} />

							<Route path="/customers" component={CustomerList} />
							<Route path="/customers/add" component={CustomerAdd} />
							<Route path="/customers/edit/" component={CustomerEdit} />

						</Switch>
				</main>
			</div>
  		</div>
    
    );
}

export default Content;


  function About() {
	return <h2>About</h2>;
  }
  
  function Users() {
	return <h2>Users</h2>;
  }
  
  