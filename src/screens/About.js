import React, { useRef, useEffect } from 'react';

import { firebaseApp } from '../firebaseConfig';

import { useAuth0 } from '@auth0/auth0-react';

export const About = () => {

    const headingRef = useRef(null);

    // Auth0 data
    const { user, logout, isAuthenticated } = useAuth0();

    useEffect(() => {
        // Scroll analytics events
        const opts = {
            root: null,
            rootMargin: '0px',
            threshold: 1
        }

        const callback = list => {

            list.forEach(entry => {
                if(entry.isIntersecting) {
                    console.log('heading visible', entry)
                    // event
                    
                    firebaseApp.analytics().logEvent('personalized scroll', { category: 'Scroll', item: headingRef.current.id });

                }
            })
        }

          const observerScroll = new IntersectionObserver(callback, opts);

          observerScroll.observe( headingRef.current );

          return (() => {
              observerScroll.disconnect();
              console.warn('Scroll tracker disconnected');

          })


    }, [ ]);

    return (
        <>
            <h1>About Analytics</h1>
            <hr />
            {
                isAuthenticated && (
                    <div className="row">
                        <div className="col">
                            <h2><small>Hola: </small>{user.name}</h2>
                            <img src={user.picture} alt={user.name} />
                        </div>
                        <div className="col text-right">
                            <button
                                className="btn btn-danger"
                                onClick={ () => logout() }
                            >
                                Logout
                            </button>
                        </div>
                        <br />
                    </div>
                )
            }
            {
                !isAuthenticated && (
                <div className="alert alert-warning" role="alert">
                    Please log in
                </div>
                )
            }
            
            <br />
            <div>
                .
                .
                <br />
                .
                <br />
            </div>
            <br />
            <div>
                .
                .
                <br />
                .
                <br />
            </div>
            <br />
            <div>
                .
                .
                .
                <br />
            </div>
            <br />
            <div>
                .
                .
                <br />
                .
                <br />
            </div>
            <br />
            <div>
                .
                .
                <br />
                .
                <br />
            </div>
            <br />
            <div>
                .
                .
                <br />
                .
                <br />
            </div>
            <br />
            <div>
                .
                .
                <br />
                .
                <br />
            </div>
            <br />
            <div>
                .
                .
                <br />
                .
                <br />
            </div>
            <br />
            <div>
                .
                .
                <br />
                .
                <br />
            </div>
            <br />
            <div>
                .
                .
                <br />
                .
                <br />
            </div>
            <br />
            <div>
                .
                .
                <br />
                .
                <br />
            </div>
            <br />
            <div>
                .
                .
                <br />
                .
                <br />
            </div>
            <br />

            <h4
                id="scrollHeading"
                ref={ headingRef }
            >
                Texto de referencia para scroll</h4>

            


        </>
    )
}
