import firebase from 'firebase';
import React, { Component, PropTypes } from 'react';
import logoSrc from './images/logo.png';

import {Link} from 'react-router';

var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/plus.login');

import { hashHistory } from 'react-router';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };

    }
    
    loginGoogle(){
        firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user);
        }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        });
    }

    componentWillMount() {

    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) =>{
            if (user) {
                // User is signed in.
                this.setState({user});
                var ref = firebase.database().ref("babas").child(user.uid);
                ref.once("value",(snapshot) => {
                    if(snapshot.val() == null){
                        hashHistory.push('/cadastro');
                    }
                })
            } else {
                // No user is signed in.
                this.setState({user: null});
            }
        });
    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    logout(){
        firebase.auth().signOut().then(()=>{
        // Sign-out successful.
        this.setState({user: null});
        }, function(error) {
        // An error happened.
        });
    }

    render() {
        var user = this.state.user;
        var username = user != null ? <li><a href="#">{user.displayName}</a></li> : null;

        var authButton = user != null ? <li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li> :  <li><a href="#" onClick={this.loginGoogle.bind(this)}>Login</a></li>;
        return (
        <nav className="white" role="navigation">
            <div className="nav-wrapper container">
                <a className="logo-container brand-logo" href="#">
                    <img src={logoSrc} />
                </a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="#">Já sou Baba</a></li>
                    {username}
                    {authButton}
                </ul>
                <ul id="nav-mobile" className="side-nav">
                    <li><a href="#">Já sou Baba</a></li>
                    {username}
                    {authButton}
                </ul>
                <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
            </div>
        </nav>
    );
    }
}

Navbar.propTypes = {

};

export default Navbar;