import React from 'react';

import HeaderNav from './HeaderNav';  
import Sidebar from './Sidebar';  

function App(props) {
    //console.log('add');
    return (
            <>
                <HeaderNav />                
                <div className="container-fluid">
                    <div className="row">
                            <Sidebar />
                            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                            {props.children}
                            </main>
                    </div>
                </div>
            </>
    );
}

export default App;

