let axios = require('axios');
import backend from './constant';
    
//console.log(backend);

const http = axios.create({
  baseURL: `${backend.url}`,
  /* other custom settings */
  headers: {'Accept': 'application/json'}
});


export default http