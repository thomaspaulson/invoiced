import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
  } from "react-router-dom";

import HeaderNav from './HeaderNav';  
import Content from './Content';
  
function App() {
    return (
        <Router>            
                <HeaderNav />                
                <Content />            
        </Router>      
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
