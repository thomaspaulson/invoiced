import React from 'react';
import { Link  } from 'react-router-dom';

function Sidebar() {
    return (

        
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    
          {/* Sidebar - Brand */}
          <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">Rubco <sup></sup></div>
          </a>
    
          {/* Divider */}
          <hr className="sidebar-divider my-0" />
    
    
          {/* Nav Item - Charts */}
          <li className="nav-item">
            <Link className="nav-link" to="/category">            
              <i className="fas fa-fw fa-chart-area"></i>
              <span>Category</span>
            </Link>            
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
