import React from 'react';
import { 
  BrowserRouter as Router,
  Switch, 
  Route 
 } from 'react-router-dom';

import HeaderNav from './HeaderNav';
import Dashboard from './Dashboard';
//import Category from './Category';
//import Model from './Model';
import ListCategory from './Category/ListCategory';
import AddCategory from './Category/AddCategory';
import EditCategory from './Category/EditCategory';
import ListModel from './Model/ListModel';
import AddModel from './Model/AddModel';
import EditModel from './Model/EditModel';

function Content() {

    return (
      
        <div id="content-wrapper" className="d-flex flex-column">
        
        <div id="content">
        {/* Main Content */}

          <HeaderNav/>
          
          <div className="container-fluid">  
          {/* Begin Page Content - .container-fluid */}          

            <Switch>
                <Route path="/category/add"  component={AddCategory} /> 
                <Route path="/category/:id/edit" component={EditCategory} />              
                <Route path="/category" component={ListCategory} />                    
                <Route path="/model/add"  component={AddModel} /> 
                <Route path="/model/:id/edit" component={EditModel} />                              
                <Route path="/model" component={ListModel} />                    
                <Route path="/main" component={Dashboard} />
            </Switch>
          
          {/* End Page Content - .container-fluid */}          
          </div>
  
        {/* End of Main Content */}
        </div>        
  
        {/* Footer */}
        <footer className="sticky-footer bg-white">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <span>Copyright &copy; Your Website 2019</span>
            </div>
          </div>
        </footer>
        {/* End of Footer */}
  
      </div>
    
    );
}

export default Content;
