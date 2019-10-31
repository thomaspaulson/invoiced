import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import ListModel from './Model/ListModel';
import AddModel from './Model/AddModel';
import EditModel from './Model/EditModel';

function Model() {        
    return (           
            <div>
                <Route exact path="/model/add" component={AddModel} />
                <Route exact path="/model/:id/edit" component={EditModel} />                
                <Route exact path="/model" component={ListModel} />
            </div>             
    );
}

export default Model;
