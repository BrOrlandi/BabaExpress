import firebase from 'firebase';
//import reactMixin from 'react-mixin';
//import ReactFireMixin from 'reactfire';

import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import ImageUploader from 'react-firebase-image-uploader';

// docs
// https://github.com/firebase/reactfire/blob/master/docs/quickstart.md

export default class BabaForm extends React.Component {
    


    componentWillMount() {
        this.babasDb = firebase.database().ref("babas");
        this.babasPics = firebase.storage().ref();

        this.setState({avatarURL: ''});
    }

    componentDidMount() {
        $(this.refs.escolaridade).material_select();
    }

    handleUploadSuccess = (filename) => {       

        firebase.storage().ref('fotos').child(filename).getDownloadURL().then(url =>
            this.setState({avatarURL: url}));
    };

    handleSubmit(e){
        e.preventDefault();

        var fotoUrl = this.state.avatarURL;
        
        //this.babasPics.child(e.target.cpf.value).
        //put(e.target.foto.value);

        this.babasDb.push({
            nome: e.target.nome.value,
            email: e.target.email.value,
            sexo: e.target.sexo.value,
            senha: e.target.senha.value,
            telefone: e.target.telefone.value,
            cpf: e.target.cpf.value,
            nascimento: e.target.nascimento.value,
            endereco: e.target.endereco.value,
            escolaridade: e.target.escolaridade.value,
            cv: e.target.cv.value,
            foto: fotoUrl   
        }); 

        hashHistory.push('/home');
    }

    render() {

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit.bind(this)}>

                    <label htmlFor="nome">Nome:</label>
                    <input id="nome" type="text" />
                    <br/>

                    <label htmlFor="email">Email:</label>
                    <input id="email" type="email" />
                    <br/>

                    <label htmlFor="sexo">Sexo:</label>
                    <br/>
                    <input name="sexo" type="radio" id="m" value="m"/>
                    <label htmlFor="m">Masculino</label>

                    <br/>

                    <input name="sexo" type="radio" id="f" value="f"/>
                    <label htmlFor="f">Feminino</label>

                    <br/><br/>

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
                    <div className="input-field">
                        <select ref="escolaridade" id="escolaridade">
                            <option value="Fundamental">Fundamental</option>
                            <option value="Médio">Médio</option>
                            <option value="Superior">Superior</option>
                        </select>
                    </div>

                    <br/>

                    <label htmlFor="cv">Mini-Currículo:</label>
                    <textarea id="cv"/>
                    <br/>

                    <label htmlFor="foto">Foto:</label>
                    <br/>

                    <ImageUploader
                        name="foto"
                        storageRef={firebase.storage().ref('fotos')} 
                        onUploadSuccess={this.handleUploadSuccess} />

                    <br/>

                    <img src={this.state.avatarURL} />

                    <br/><br/>

                    <button type="submit">Efetuar cadastro!</button>
                </form>
            </div>
        );
    }
}

//reactMixin(FirebaseTest.prototype, ReactFireMixin);