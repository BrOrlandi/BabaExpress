import firebase from 'firebase';
//import reactMixin from 'react-mixin';
//import ReactFireMixin from 'reactfire';

import React, { Component } from 'react';
import { hashHistory } from 'react-router';

// docs
// https://github.com/firebase/reactfire/blob/master/docs/quickstart.md

export default class BabaForm extends React.Component {
    
    componentWillMount() {
        this.babasDb = firebase.database().ref("babas");
    }

    handleSubmit(e){
        e.preventDefault();
        this.babasDb.push({
            nome: e.target.nome.value,
            email: e.target.email.value
        });

        hashHistory.push('/home');
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

                    <label htmlFor="sexo">Sexo:</label>
                    <br/>
                    <input name="sexo" type="radio" id="sexo" />
                    <label for="sexo">Masculino</label>

                    <input name="sexo" type="radio" id="sexo" />
                    <label for="sexo">Feminino</label>

                    <br/>

                    <label htmlFor="senha">Senha:</label>
                    <input id="senha" type="password" />
                    <br/>

                    <label htmlFor="telefone">Telefone:</label>
                    <input id="telefone" type="text" />
                    <br/>   

                    <label htmlFor="cpf">CPF:</label>
                    <input id="cpf" type="text" />
                    <br/>     

                    <label htmlFor="nascimento">Data de nascimento:</label>
                    <input id="nascimento" type="date" />
                    <br/>

                    <label htmlFor="endereco">Endereço:</label>
                    <input id="endereco" type="text" />
                    <br/>

                    <label htmlFor="escolaridade">Escolaridade:</label>
                    <input id="escolaridade" type="text" />
                    <br/>

                    <label htmlFor="cv">Mini-Currículo:</label>
                    <textarea id="cv"/>
                    <br/>

                    <label htmlFor="foto">Foto:</label>
                    <br/>
                    <br/>
                    <br/>

                    <button type="submit">Efetuar cadastro!</button>
                </form>
            </div>
        );
    }
}

//reactMixin(FirebaseTest.prototype, ReactFireMixin);