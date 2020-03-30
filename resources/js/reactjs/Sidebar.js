import React from 'react';
import { Link  } from 'react-router-dom';

function Sidebar() {
    return (

		<nav className="col-md-2 d-none d-md-block bg-light sidebar">
			<div className="sidebar-sticky">
				<ul className="nav flex-column">
				<li className="nav-item">					
					<Link to="/"  className="nav-link active" >					
					<span data-feather="home"></span>					
					Dashboard <span className="sr-only">(current)</span>
					</Link>					
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
					<span data-feather="file"></span>
					Orders
					</a>
				</li>
				<li className="nav-item">					
					<Link to="/products"  className="nav-link" >
					<span data-feather="shopping-cart"></span>
					Products
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/customers"  className="nav-link" >
					<span data-feather="users"></span>
					Customers
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/about"  className="nav-link" >
					<span data-feather="users"></span>
					About
					</Link>
				</li>				
				<li className="nav-item">
					<a className="nav-link" href="#">
					<span data-feather="bar-chart-2"></span>
					Reports
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
					<span data-feather="layers"></span>
					Integrations
					</a>
				</li>
				</ul>

				<h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
				<span>Saved reports</span>
				<a className="d-flex align-items-center text-muted" href="#">
					<span data-feather="plus-circle"></span>
				</a>
				</h6>
				<ul className="nav flex-column mb-2">
				<li className="nav-item">
					<a className="nav-link" href="#">
					<span data-feather="file-text"></span>
					Current month
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
					<span data-feather="file-text"></span>
					Last quarter
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
					<span data-feather="file-text"></span>
					Social engagement
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
					<span data-feather="file-text"></span>
					Year-end sale
					</a>
				</li>
				</ul>
			</div>
		</nav>        
    
    );
}

export default Sidebar;
