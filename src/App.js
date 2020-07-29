import React, { useEffect } from 'react';
// import ReactGA
import ReactGA from 'react-ga';

import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Users } from './components/Users';

import { 
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom';




function App() {

  useEffect(() => {

    ReactGA.initialize('G-VCGEEDWXZ3');

    // track page view
    // ReactGA.pageview('/users')
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="container">

      <Router>
        <Navbar />
        <div>
          <Switch>
              <Route exact path="/about"><About /> </Route>
              <Route exact path="/users"><Users /></Route>
          </Switch>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
