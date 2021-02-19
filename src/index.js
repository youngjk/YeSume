import React from 'react';
import ReactDOM from 'react-dom'
import {HashRouter as Router, Route} from "react-router-dom";
import Home from './pages/home';
import Career from './pages/career';


ReactDOM.render(
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/career" component={Career} />
    </Router>,
    document.getElementById('root')
);
