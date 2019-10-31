import React from 'react';
import { Link  } from 'react-router-dom';

function Sidebar() {
    return (

        
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    
          {/* Sidebar - Brand */}          
          <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/"> 
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">Rubco <sup></sup></div>          
          </Link>
  
          <hr className="sidebar-divider my-0" />

          {/* Nav Item - Dashboard */}
          <li className="nav-item">
            <Link className="nav-link" to="/main">            
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </Link>            
          </li>

          {/* Divider */}
          <hr className="sidebar-divider" />    

          {/* Heading */}
          <div className="sidebar-heading">
            Master
          </div>
    
          {/* Nav Item - Pages Collapse Menu */}
          <li className="nav-item active">
            <a className="nav-link" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
              <i className="fas fa-fw fa-cog"></i>
              <span>Settings</span>
            </a>
            <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Items</h6>
                <Link className="collapse-item" to="/category">Category</Link>
                <Link className="collapse-item" to="/model">Model</Link>
              </div>
            </div>
          </li>

    

          <li className="nav-item">
            <Link className="nav-link" to="/main">            
              <i className="fas fa-fw fa-chart-area"></i>
              <span>Dashboard</span>
            </Link>            
          </li>


          {/* Nav Item - Tables */}
          <li className="nav-item">
            <a className="nav-link" href="tables.html">
              <i className="fas fa-fw fa-table"></i>
              <span>Tables</span></a>
          </li>

          
        
    
          {/* Divider */}
          <hr className="sidebar-divider d-none d-md-block" />
    
          {/* Sidebar Toggler (Sidebar) */}
          <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle"></button>
          </div>
    
        </ul>
        
    
    );
}

export default Sidebar;
