import React, { useEffect } from 'react';

// firebase config
import { firebaseApp } from './firebaseConfig';

import { AppRouter } from './AppRouter';

function App() {
  
  useEffect(() => {
    
    // firebaseApp.analytics();
    const analytics = firebaseApp.analytics();

    analytics.logEvent('page_view', { 
      page_location: window.location.pathname + window.location.search,
      page_path: 'Path de prueba'
    });

    // ReactGA.initialize('G-6FJGH23T5N');
    // track page view
    // ReactGA.pageview('/users')
    // ReactGA.pageview(window.location.pathname + window.location.search);

  }, []);

  

  return (
    <div>

      <AppRouter />
      
    </div>
  );
}

export default App;
