import React, { useRef, useEffect } from 'react';
import ReactGA from 'react-ga';

export const About = () => {

    const headingRef = useRef(null);

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
            <div>
                some text
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
