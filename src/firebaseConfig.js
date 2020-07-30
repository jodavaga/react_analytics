import * as firebase from 'firebase/app';

// analytics
import 'firebase/analytics';
// auth
import 'firebase/auth';

const firebaseApp = () => {
    firebase.initializeApp({
        apiKey: "AIzaSyC5h6bAb80kQFlccfKi4rzmUweCe4fXCyw",
        authDomain: "analytics-first-approach.firebaseapp.com",
        databaseURL: "https://analytics-first-approach.firebaseio.com",
        projectId: "analytics-first-approach",
        storageBucket: "analytics-first-approach.appspot.com",
        messagingSenderId: "384613628337",
        appId: "1:384613628337:web:2bf6a7356e120d42dde590",
        measurementId: "G-6FJGH23T5N"
    });   
}

// google authentication method
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { firebaseApp, googleProvider }