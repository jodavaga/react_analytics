import React from 'react';
import ReactGA from 'react-ga';

export const Users = () => {

    const handleClick = () => {

        ReactGA.event({
            category: 'Button',
            action: 'Click button on users page'
        });

        console.log('data sent to google analytics');
    }

    return (
        <div>
            <h1>Users</h1>
            
            <button className="btn btn-primary" onClick={ handleClick }> Click Me</button>
        </div>
    )
}
