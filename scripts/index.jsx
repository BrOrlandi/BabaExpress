import ReactDOM from 'react-dom';
import React from 'react';

import 'jquery';
import 'materialize-css/dist/js/materialize';

import Navbar from './components/base/Navbar/Navbar';
import Home from './components/views/Home/Home';

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
