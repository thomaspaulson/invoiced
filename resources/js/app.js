/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';

require('./bootstrap');

require('./dashboard');

ReactDOM.render(    
    <Router>
      <AppRoutes />
    </Router>,
  document.getElementById('app')
);
  