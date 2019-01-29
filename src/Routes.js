import React from 'react';
import { Route } from 'react-router-dom';
import Home from './container/Home';
import Login from './container/Login';

const Routes = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
  </div>
);

export default Routes;
