import React from 'react';
import {Router} from "@reach/router";
import Home from './home';
import Career from './career';


function Index(){
  return (
    <Router>
      <Home path="/" />
      <Career path='/career' />
    </Router>
  )
}

export default Index;
