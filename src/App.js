import React, { Component } from 'react';
import './App.css';

import {
  Link,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'

import Dashboard from './views/Dashboard'
import Login from './views/Login'


class App extends Component {
  render(){
    return(
      <Router>
      <div>
        <Route exact path="/" component={Dashboard} />
      </div>
      </Router>
    );
  }
}

export default App;
