import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Sidebar from './Sidebar';
import Content from './Content';
  
function App() {
    return (
        <Router>
            <div id="wrapper">
                <Sidebar />
                <Content />
            </div>
        </Router>
      
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
