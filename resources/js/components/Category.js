import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import ListCategory from './Category/ListCategory';
import AddCategory from './Category/AddCategory';
import EditCategory from './Category/EditCategory';

function Category() {        

    return (           
            <div>
            
                <Route exact path="/category/add">
                    <AddCategory />
                </Route>
                <Route exact path="/category/:id/edit">
                    <EditCategory />
                </Route>
                <Route exact path="/category">
                    <ListCategory />
                </Route>
            

            </div>             
    );
}

export default Category;
