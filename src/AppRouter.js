import React from 'react';

import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Users } from './components/Users';

import { 
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom';

export const AppRouter = () => {

    return (
        <Router>
            <Navbar />
            <div>
            <Switch>
                <Route exact path="/about"><About /> </Route>
                <Route exact path="/users"><Users /></Route>
            </Switch>
            </div>
      </Router>
    )
}
