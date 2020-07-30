import React, { useEffect } from 'react';
// import ReactGA
import ReactGA from 'react-ga';
// firebase config
import { firebaseApp } from './firebaseConfig';

import { AppRouter } from './AppRouter';

function App() {
  
  useEffect(() => {
    
    // firebaseApp.analytics();
    firebaseApp();

    // ReactGA.initialize('G-6FJGH23T5N');
    // track page view
    // ReactGA.pageview('/users')
    ReactGA.pageview(window.location.pathname + window.location.search);

  }, []);

  

  return (
    <div>

      <AppRouter />
      
    </div>
  );
}

export default App;
