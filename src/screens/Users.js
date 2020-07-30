import React from 'react';

import { firebaseApp } from '../firebaseConfig';

export const Users = () => {
    
    const handleClick = () => {

        firebaseApp.analytics().logEvent('click', { item_name: 'users_button', content_type: 'button'});
        firebaseApp.analytics().logEvent('select_content', { content_id: 'click', content_type: 'users_button'});
        
        console.log('data sent to google analytics');
    }
    

    return (
        <div>
            <h1>Users</h1>
            
            <button className="btn btn-primary" onClick={ handleClick }> Click Me</button>
        </div>
    )
}
