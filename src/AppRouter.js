import React from 'react';

import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Users } from './components/Users';
import { Login } from './components/Login';
import { PrivateRoute } from './helpers/PrivateRoute';

import { 
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom';

export const AppRouter = () => {

    return (
        <Router>
            <Navbar />
            <div className="container">
            <Switch>
                <Route exact path="/" component={ Login }></Route>
                <Route exact path="/about"><About /> </Route>
                <PrivateRoute exact path="/users" component={ Users } />
            </Switch>
            </div>
      </Router>
    )
}
