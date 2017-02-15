import firebase from 'firebase';
import React, { Component, PropTypes } from 'react';
import React from 'react';
import logoSrc from './images/logo.png';

import {Link} from 'react-router';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };

    }

    componentWillMount() {

    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) =>{
            if (user) {
                // User is signed in.
                this.setState({user});
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
        console.log("AAAAAAA");
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

        var authButton = user != null ? <li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li> :  <li><Link to="/login">Login</Link></li>;
        return (
        <nav className="white" role="navigation">
            <div className="nav-wrapper container">
                <a id="logo-container" style={{height: '100%'}} href="#" className="brand-logo">
                    <img style={{height: '100%'}} src={logoSrc} />
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