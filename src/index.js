import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages'
import { HashRouter } from 'react-router-dom'
import 'normalize.css';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>
  , 
  document.getElementById('root')
);