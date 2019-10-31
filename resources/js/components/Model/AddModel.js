import React from 'react';
import { Switch, Route , Link } from 'react-router-dom';
import axios from 'axios';
import {alertMessage} from '../../helpers/message-helpers';
import SelectBox from '../../forms/SelectBox';
import { Input } from 'reactstrap';


class AddModel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      model: {},
      //title: '',
      //model_id: '',
      error: null,
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event ){
    const target = event.target;
    //const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.value;
    const value = target.name;

    const { model } = this.state;

    this.setState({ model: { ...model, [name]: value } });

    console.log(name, name);
    // this.setState({
    //   [name]: value
    // });

    this.setState({
      message: ''
    });

  }

  handleSubmit(event){
    
    event.preventDefault();    
    const data = new FormData(event.target);    
    //console.log( data );
    axios.post('/ajax/model', data)         
      .then(result => this.setSuccess(result))
      .catch(error => this.setError({ error }));
  }

  setSuccess(result){
    //console.log(result);
    const message = result.data.message;
    this.setState({ 
      model: {},
      error: null,
      message: message
    });    

  }

  setError(error){
    console.log(error.response);
    //console.log(q);
  }


  render() {
    const { model: { title, category_id } } = this.state;

    let message;

    if(this.state.message){      
      message = alertMessage(this.state.message);
    }

    return (
      <div>
      
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Add Model</h1>
        <Link className="nav-link" to="/model">            
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
            <Input type="email" name="title" id="title" placeholder="with a placeholder" 
               value={ this.state.title } required 
            maxLength="150" onChange={this.handleChange} />

            <input 
              type="text" className="form-control" 
              id="title" name="title" placeholder="title" 
              value={ this.state.title } required 
              maxLength="150" onChange={this.handleChange} />          
          </div>
          <div className="form-group">
            <label htmlFor="model">Category</label>
            <SelectBox />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        
        </div>
      </div>

      </div> 

    );
  }
}



export default AddModel;
