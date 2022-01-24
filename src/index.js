import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home';
import Career from './pages/career';
import Finance from './pages/finance';
import CareerMobile from './pages/career_mobile';
ReactDOM.render(
  <Router>
    <Route exact path='/' component={Home} />
    <Route exact path='/career' component={Career} />
    <Route exact path='/investment' component={Finance} />
    <Route exact path='/test' component={CareerMobile} />
  </Router>,
  document.getElementById('root')
);
