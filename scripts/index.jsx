import ReactDOM from 'react-dom';
import React from 'react';
import firebase from 'firebase';
//import { Router, Route, Link, hashHistory } from 'react-router'

import 'materialize-css/dist/js/materialize';

import Navbar from './components/base/Navbar/Navbar';
import Home from './components/views/Home/Home';

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
                <Navbar/>
                <Home/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('react-body'));
