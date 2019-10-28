import React from 'react';
import { Switch, Route , Link } from 'react-router-dom';

import axios from 'axios';

class ListCategory extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      list: null,
      error: null,
    };

    this.setResultList = this.setResultList.bind(this);
  }

  componentDidMount() {

    axios.get('/ajax/category')         
      .then(result => this.setResultList(result.data))
      .catch(error => this.setState({ error }));

  }

  setResultList(list){
    //console.log(list);
    this.setState({ list });
  }

  render() {

    let categories;

    if (this.state.list !== null) {
      categories = this.state.list.map(category => (
        <tr key={category.id}>
          <td>{category.id}</td>
          <td>{category.title}</td>
          <td><Link className="nav-link" to={'/category/'+ category.id +'/edit'}>edit</Link> | delete </td>
        </tr>
      ));
    }

    return (
      <div>
      {/* dummy div*/}


      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Category</h1>
        <Link className="nav-link" to="/category/add">            
          <i className="fas fa-fw fa-clone"></i>
          <span>Add Category</span>
        </Link>            

      </div>



      <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th></th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th></th>
              </tr>
            </tfoot>
            <tbody>
              {categories}
            </tbody>
          </table>
        </div>
      </div>
    </div>


      {/* dummy div*/}
      </div> 

    );
  }
}



export default ListCategory;
