import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import ListBillingUnit from './BillingUnit/ListBillingUnit';
import AddBillingUnit from './BillingUnit/AddBillingUnit';
import EditBillingUnit from './BillingUnit/EditBillingUnit';

function BillingUnit() {        

    return (           
            <div>

                <Route exact path="/billingunit/add">
                    <AddBillingUnit />
                </Route>
                <Route exact path="/billingunit/:id/edit" component={EditBillingUnit} />                
                <Route exact path="/billingunit">
                    <ListBillingUnit />
                </Route>
            

            </div>             
    );
}

export default BillingUnit;
