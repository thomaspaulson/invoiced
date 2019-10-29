import React from 'react';
import { Switch, Route , Link } from 'react-router-dom';
import axios from 'axios';

class AddCategory extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      error: null,
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    const target = event.target;
    //const value = target.type === 'checkbox' ? target.checked : target.value;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    this.setState({
      message: ''
    });

  }

  handleSubmit(event){
    
    event.preventDefault();    

    const data = new FormData(event.target);
    
    console.log( data );
    axios.post('/ajax/category', data)         
      .then(result => this.setSuccess(result))
      .catch(error => this.setError({ error }));
  }

  setSuccess(result){

    //console.log(result);
    const message = result.data.message;
    this.setState({
      title: '',
      description: '',
      error: null,
      message: message
    });

  }

  setError(error){
    console.log(error.response);
    //console.log(q);
  }


  render() {

    let message;

    if(this.state.message){
      message =`<div className="alert alert-success" role="alert">
      ${this.state.message}        
      </div>`;
    }

    return (
      <div>
      
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Add Category</h1>
        <Link className="nav-link" to="/category">            
          <i className="fas fa-fw fa-angle-left"></i>
          <span>Go back</span>
        </Link>            
      </div>


      <div className="row">        
        <div className="col-xl-12 col-md-12 mb-4">		
        {this.state.error}        
        {message}
        <form onSubmit={this.handleSubmit} >
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input 
              type="text" className="form-control" 
              id="title" name="title" placeholder="title" 
              value={ this.state.title } required 
              maxLength="150" onChange={this.handleChange} />          
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input 
              type="text" className="form-control" id="description" 
              name="description" placeholder="description" 
              value={ this.state.description }  maxLength="150" 
              onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        
        </div>
      </div>

      </div> 

    );
  }
}



export default AddCategory;
