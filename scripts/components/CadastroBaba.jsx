
import firebase from 'firebase';
//import reactMixin from 'react-mixin';
//import ReactFireMixin from 'reactfire';

import React, { Component } from 'react';

// docs
// https://github.com/firebase/reactfire/blob/master/docs/quickstart.md

class CadastroBaba extends Component {
    
    componentWillMount() {
        this.babasDb = firebase.database().ref("babas");
    }

    handleSubmit(e){
        e.preventDefault();
        this.babasDb.push({
            nome: e.target.nome.value,
            email: e.target.email.value
        });

        // redirect
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label htmlFor="nome">Nome:</label>
                    <input id="nome" type="text" />
                    <br/>

                    <label htmlFor="email">Email:</label>
                    <input id="email" type="email" />
                    <br/>

                    <button type="submit">Cadastrar!</button>
                </form>
            </div>
        );
    }
}

//reactMixin(FirebaseTest.prototype, ReactFireMixin);

export default CadastroBaba;