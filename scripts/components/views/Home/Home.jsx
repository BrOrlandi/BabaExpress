import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router';
import BabaList from './components/BabaList/BabaList';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        //$('.parallax').parallax();
    }
    render() {
        return (
            <div>
                <div id="index-banner" className="hero-container">
                    <div className="section no-pad-bot">
                        <div className="container">
                            <br/><br/>
                            <h1 className="header center text-lighten-2">Fique tranquilo!</h1>
                            <div className="row center">
                                <h5 className="header col s12 light">Nós estaremos ao lado dos seus filhos quando você não puder.</h5>
                            </div>
                            <div className="row center">
                                <a href="http://materializecss.com/getting-started.html" id="download-button" className="btn-large waves-effect waves-light">Seja uma Babá</a>
                            </div>
                            <br/><br/>
                        </div>
                    </div>
                    {/*
                    <div className="parallax">
                        <img src={background1} alt="Unsplashed background img 1"/>
                    </div>
                     */}
                </div>
                {/*
                <div className="container">
                    <div className="section">
                        <div className="row">
                            <div className="col s12 center">
                                <h5>Para quando eu preciso de uma babá?</h5>
                                <div className="search-ops-buttons">
                                    <a className="waves-effect waves-light btn grey-background">Para já!</a>
                                    <a className="waves-effect waves-light btn grey-background">Para essa semana</a>
                                    <a className="waves-effect waves-light btn grey-background">Ver Todas</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 */}
                <div className="container">
                    <div className="section">
                        <div className="row">
                            <div className="col s12">
                                <BabaList />
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="page-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col l6 s12">
                                <h5 className="white-text">Ali com você, quando e onde precisar.</h5>
                                <p className="grey-text text-lighten-4">BabaExpress é o nome da maior rede de Babás do mundo. Nós conectamos pessoas atenciosas, com energia e paciência para cuidar de quem você ama.</p>
                            </div>
                            <div className="col l3 s12">
                                <h5 className="white-text">Navegar</h5>
                                <ul>
                                    <li><Link className="white-text" to="home">Home</Link></li>
                                    <li><Link className="white-text" to="list">Busca</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}