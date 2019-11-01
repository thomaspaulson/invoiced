import React from 'react';
import { Switch, Route , Link } from 'react-router-dom';
import { Input, Alert  } from 'reactstrap';

//import {alertMessage} from '../../helpers/message-helpers';

class EditCategory extends React.Component {

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
      this.setResult = this.setResult.bind(this);
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
    data.append('_method', 'PUT');
    //console.log(data);
    axios.post(`/ajax/category/${this.props.match.params.id}`, data)         
      .then(result => this.setSuccess(result))
      .catch(error=> this.setError(error));
  }  


  setSuccess(result){
    //console.log(result);
    const message = result.data.message;
    this.setState({
      //title: '',
      //description: '',
      error: null,
      message: message
    });

  }

  setError(error){
    console.log(error.response);
    //console.log(q);
  }

  componentDidMount() {
    //console.log(this.props.match);
    const { match: { params } } = this.props;
    //console.log(params);
    axios.get(`/ajax/category/${params.id}`)         
      .then(result => this.setResult(result.data))
      .catch(error => this.setState({ error }));

  }

  setResult(data){
    //console.log(list);
    const { title, description } = data;
    this.setState({ title,  description });
  }


  render() {

    let message;

    if(this.state.message){      
      message = <Alert color="success">{this.state.message}</Alert>;
    }

    return (
      <div>
      {/* dummy div*/}


      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Edit Category</h1>
        <Link className="nav-link" to="/category">            
          <i className="fas fa-fw fa-chart-area"></i>
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




      {/* dummy div*/}
      </div> 

    );
  }
}



export default EditCategory;
