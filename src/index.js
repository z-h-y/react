import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './stores'
import 'normalize.css';
import './style/base.less';
import './style/common.less';
import './config/rem'

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
  , 
  document.getElementById('root')
);