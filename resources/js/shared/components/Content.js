import React from 'react';
import {   
  Switch, 
  Route 
 } from 'react-router-dom';

import Sidebar from './Sidebar';


const Content = (props)  => {

	const { children } = props;

    return (      
		<div className="container-fluid">
			<div className="row">
				<Sidebar />
				<main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
				{children}
				</main>
			</div>
  		</div>
    
    );
}

export default Content;