import React from 'react';

import HeaderNav from './HeaderNav';
import Dashboard from './Dashboard';
import Category from './Category';

import { 
  BrowserRouter as Router,
  Switch, 
  Route 
 } from 'react-router-dom';
// in your app.


function Content() {

    return (

      
        <div id="content-wrapper" className="d-flex flex-column">

        
        <div id="content">
        {/* Main Content */}

          <HeaderNav />

          
          <div className="container-fluid">  
          {/* Begin Page Content - .container-fluid */}          

            <Switch>
                <Route path="/category">                    
                      <Category />                    
                </Route>
                <Route path="/main">
                    <Dashboard />
                </Route>
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
