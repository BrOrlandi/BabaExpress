import ReactDOM from 'react-dom';
import React from 'react';
import firebase from 'firebase';
import { Router, Route, Link, hashHistory, IndexRedirect } from 'react-router'
import FirebaseTest from 'components/FirebaseTest';

import 'materialize-css/dist/js/materialize';

import Navbar from './components/base/Navbar/Navbar';
import Login from './components/base/Login/Login';
import Home from './components/views/Home/Home';
import BabaForm from './components/views/BabaForm/BabaForm';
import BabaList from './components/views/BabaList/BabaList';


window.firebase = firebase;

firebase.initializeApp({
        "apiKey": "AIzaSyD-dhe2wvATPu66bZ4y5LPVnqWQnrQKfzQ",
        "authDomain": "babaexpress-4ee5c.firebaseapp.com",
        "databaseURL": "https://babaexpress-4ee5c.firebaseio.com",
        "storageBucket": "babaexpress-4ee5c.appspot.com",
        "messagingSenderId": "1095245679046"
});

class App extends React.Component {
    render(){
        return (
            <div>
                <Navbar/>
                {this.props.children}
            </div>
        );
    }
}

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/login" component={Login} />
        <Route path="/" component={App}>
            <Route path="home" component={Home}/>
            <Route path="list" component={BabaList}/>
            <Route path="form" component={BabaForm}/>
            <Route path="*" component={Home}/>
            <IndexRedirect to="home" />
        </Route>
    </Router>
    , document.getElementById('react-body'));
