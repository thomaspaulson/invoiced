import React from 'react';
import { Switch, Route , Link } from 'react-router-dom';
import axios from 'axios';
//import {alertMessage} from '../../helpers/message-helpers';
import { Input, Alert  } from 'reactstrap';


class AddModel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      model: {title: '', category: ''},
      categoryList: null, 
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
    const name = target.name;
    const value = target.value;

    const { model } = this.state;
    this.setState({ 
        model: { ...model, [name]: value } ,
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
      model: {title: '', category: ''},
      error: null,
      message: message
    });    

  }

  setError(error){
    console.log(error.response);
    //console.log(q);
  }


  componentDidMount() {    
    //console.log(params);
    axios.get(`/ajax/category`)         
      .then(result => this.setCategoryList(result.data))
      .catch(error => this.setState({ error }));

  }

  setCategoryList(list){
    this.setState({ categoryList: list });
  }

  render() {
    const { model: { title, category_id } , categoryList} = this.state;

    console.log(title);

    let message, options;

    if(this.state.message){      
      message = <Alert color="success">{this.state.message}</Alert>;
    }

    if(categoryList){
      options = categoryList.map((item, index) => {
        //const key = `${this.props.name}-${item.value || `empty${index}`}`;
        const key = `empty${index}`;
        return (
          <option key={key} value={item.id}>
            {item.title}
          </option>
        );
      }) 
    
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
            <Input type="text" name="title" 
                id="title" placeholder="with a placeholder" 
                value={title} required  
                maxLength="150" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="model">Category</label>            
            <Input type="select" name="category_id" id="category_id" onChange={this.handleChange} >
            {options}
            </Input>            
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
