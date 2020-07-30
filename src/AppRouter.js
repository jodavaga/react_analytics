import React from 'react';

import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Users } from './components/Users';
import { Login } from './components/Login';

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
                <Route exact path="/users"><Users /></Route>
            </Switch>
            </div>
      </Router>
    )
}
