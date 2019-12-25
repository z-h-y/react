import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Hello from './components/Hello';
import Say from './components/Say';
// import routeConfig from './router';
import { HashRouter, Route, IndexRoute  } from 'react-router-dom'

ReactDOM.render(
  <HashRouter>
    <div>
        {/* exact 精准匹配 */}
        <Route exact path="/" component={App}></Route>
        <Route path="/hello" component={Hello}/>
        <Route path="/say" component={Say}/>
    </div>  
  </HashRouter>
  , 
  document.getElementById('root')
);