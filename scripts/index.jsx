import firebase from 'firebase';

import ReactDOM from 'react-dom';
import React from 'react';

// defined global
firebase.initializeApp({
        "apiKey": "AIzaSyD-dhe2wvATPu66bZ4y5LPVnqWQnrQKfzQ",
        "authDomain": "babaexpress-4ee5c.firebaseapp.com",
        "databaseURL": "https://babaexpress-4ee5c.firebaseio.com",
        "storageBucket": "babaexpress-4ee5c.appspot.com",
        "messagingSenderId": "1095245679046"
});

import FirebaseTest from 'components/FirebaseTest';

class App extends React.Component {
    render(){
        return (
            <div>
                <h1>Hello React App!</h1>
                <FirebaseTest />
            </div>
        );
    }
};
ReactDOM.render(<App/>, document.getElementById('react-body'));
