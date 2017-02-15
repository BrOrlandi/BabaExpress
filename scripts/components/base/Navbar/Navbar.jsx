import React from 'react';
import logoSrc from './images/logo.png';

export default () => {
    return (
        <nav className="white" role="navigation">
            <div className="nav-wrapper container">
                <a id="logo-container" style={{height: '100%'}} href="#" className="brand-logo">
                    <img style={{height: '100%'}} src={logoSrc} />
                </a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="#">Já sou Baba</a></li>
                </ul>
                <ul id="nav-mobile" className="side-nav">
                    <li><a href="#">Já sou Baba</a></li>
                </ul>
                <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
            </div>
        </nav>
    );
};