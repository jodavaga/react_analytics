import React, { useEffect } from 'react';
// import ReactGA
import ReactGA from 'react-ga';

import { AppRouter } from './AppRouter';

function App() {
  
  useEffect(() => {
    
    ReactGA.initialize('G-VCGEEDWXZ3');
    
    // track page view
    // ReactGA.pageview('/users')
    ReactGA.pageview(window.location.pathname + window.location.search);

  }, []);

  

  return (
    <div className="container">

      <AppRouter />
      
    </div>
  );
}

export default App;
