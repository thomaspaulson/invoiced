import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import axios from 'axios';

class Listmodel extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      list: null,
      error: null,
    };

    this.setResultList = this.setResultList.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {

    axios.get('/ajax/model')
      .then(result => this.setResultList(result.data))
      .catch(error => this.setState({ error }));

  }

  setResultList(list) {
    //console.log(list);
    this.setState({ list });
  }


  // handle delete
  handleDelete(id) {
    let confirm = window.confirm('Are you sure to delete this record?');
    if (confirm) {
      // remove from local state    
      const isNotId = list => list.id !== id;
      const updatedList = this.state.list.filter(isNotId);
      this.setState({ list: updatedList });
      // make delete request to the backend
      axios.delete(`/ajax/model/${id}`)
        .then(result => this.setSuccess(result))
        .catch(error => this.setState({ error }));
    }
  }

  setSuccess(result){
    console.log(result);
  }

  setError(error){
    console.log(error.response);
    //console.log(q);
  }
  
  render() {

    let models;

    if (this.state.list !== null) {
      models = this.state.list.map(model => (
        <tr key={model.id}>
          <td>{model.id}</td>
          <td>{model.title}</td>
          <td>{model.category_title}</td>
          <td>
            <Link className="btn btn-sm btn-success" to={`/model/${model.id}/edit`}>edit</Link>
            &nbsp;
            <button
              onClick={() => this.handleDelete(model.id)}
              className="btn btn-sm btn-warning "
            >
              Delete
            </button>
          </td>
        </tr>
      ));
    }

    return (
      <div>
        {/* dummy div*/}


        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Model</h1>
          <Link className="nav-link" to="/model/add">
            <i className="fas fa-fw fa-clone"></i>
            <span>Add Model</span>
          </Link>

        </div>



        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">List</h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>model</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {models}
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



export default Listmodel;
