import React from 'react';
import { 
  BrowserRouter as Router,
  Switch, 
  Route 
 } from 'react-router-dom';

import HeaderNav from './HeaderNav';
import Dashboard from './Dashboard';
import Category from './Category';
import Model from './Model';

function Content() {

    return (

      
        <div id="content-wrapper" className="d-flex flex-column">

        
        <div id="content">
        {/* Main Content */}

          <HeaderNav/>

          
          <div className="container-fluid">  
          {/* Begin Page Content - .container-fluid */}          

            <Switch>
                <Route path="/category" component={Category} />                    
                <Route path="/model" component={Model} />                    
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
