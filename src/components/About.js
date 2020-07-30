import React, { useRef, useEffect } from 'react';
import ReactGA from 'react-ga';

import { useAuth0 } from '@auth0/auth0-react';

export const About = () => {

    const headingRef = useRef(null);

    // Auth0 data
    const { user, logout } = useAuth0();

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
                    ReactGA.event({
                        category: 'Scroll',
                        action: 'Scrolled to heading 4',
                        value: entry.intersectionRatio
                    })

                }
             })
          }

          const observerScroll = new IntersectionObserver(callback, opts);

          observerScroll.observe( headingRef.current );


    }, [ ]);

    return (
        <>
            <h1>About Analytics</h1>
            <hr />
            <div className="row">
                <div className="col">
                    { user 
                        ? <h2><small>Hola: </small>{user.name}</h2>
                        : <h2>Hola mundo! - <small>please log in</small></h2>
                    
                    }
                </div>
                <div className="col text-right">
                    { user && (
                        <button
                            className="btn btn-danger"
                            onClick={ () => logout() }
                        >
                            Logout
                        </button>
                    )}
                </div>
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
