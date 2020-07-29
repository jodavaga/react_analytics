import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

import { useHistory } from 'react-router-dom';

export const Users = () => {

    const history = useHistory();
    
    const handleClick = () => {

        ReactGA.event({
            category: 'Button',
            action: 'Click button on users page'
        });

        console.log('data sent to google analytics');
    }

    useEffect(() => {
        history.listen((location) => {
            
            ReactGA.set({ page: location.pathname });
            ReactGA.pageview( location.pathname );
        })
        
    }, [ history ]);
    

    return (
        <div>
            <h1>Users</h1>
            
            <button className="btn btn-primary" onClick={ handleClick }> Click Me</button>
        </div>
    )
}
