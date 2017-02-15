import firebase from 'firebase';

import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import ImageUploader from 'react-firebase-image-uploader';

import BabaUtils from '../../../utils/BabaUtils';

// docs
// https://github.com/firebase/reactfire/blob/master/docs/quickstart.md

export default class BabaForm extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {
            user: null,
            avatarURL:''
        }
    }

    componentWillMount() {
        this.babasPics = firebase.storage().ref();
    }

    componentDidMount() {
        $(this.refs.escolaridade).material_select();
        
        var user = firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.refs.nome.value = user.displayName;
                this.refs.email.value = user.email;
                this.setState({user, avatarURL:user.photoURL});
                
                var ref = firebase.database().ref("babas/"+user.uid);
                ref.once("value",(snapshot) => {
                    if(snapshot.val() == null){
                        console.log("NÃO FOI CADASTRADO");
                    }else{
                        console.log("JA FOI CADASTRADO");
                    }
                });
            }
        });
    }

    handleUploadSuccess = (filename) => {       

        firebase.storage().ref('fotos').child(filename).getDownloadURL().then(url =>
            this.setState({avatarURL: url}));
    };

    handleSubmit(e){
        e.preventDefault();

        var fotoUrl = this.state.avatarURL;

        const baba = BabaUtils.createBaba(e.target, fotoUrl);

        // BabaUtils.validateBaba(baba);

        firebase.database().ref("babas/"+this.state.user.uid).set(baba);

        hashHistory.push('/home');
    }

    render() {

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit.bind(this)}>

                    <label htmlFor="nome">Nome:</label>
                    <input ref="nome" id="nome" type="text" />
                    <br/>

                    <label htmlFor="email">Email:</label>
                    <input ref="email" id="email" type="email" />
                    <br/>

                    <label htmlFor="sexo">Sexo:</label>
                    <br/>
                    <input name="sexo" type="radio" id="m" value="m"/>
                    <label htmlFor="m">Masculino</label>

                    <br/>

                    <input name="sexo" type="radio" id="f" value="f"/>
                    <label htmlFor="f">Feminino</label>

                    <br/><br/>

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

                 <br/><br/>
 
                <label htmlFor="cv">Disponibilidade:</label>
                   <table className="availability striped">
                             <thead>
                                 <tr>
                                     <th className="time"></th>
                                     <th className="day">Seg</th>
                                     <th className="day">Ter</th>
                                     <th className="day">Qua</th>
                                     <th className="day">Quin</th>
                                     <th className="day">Sex</th>
                                     <th className="day">Sab</th>
                                     <th className="day">Dom</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 <tr>
                                     <th className="time">Manhã</th>
                                     <td className="positive"><span className="accessibility">não</span></td>
                                     <td className="positive"><span className="accessibility">não</span></td>
                                     <td className="positive"><span className="accessibility">sim</span></td>
                                     <td className="positive"><span className="accessibility">sim</span></td>
                                     <td className="positive"><span className="accessibility">não</span></td>
                                     <td><span className="accessibility">no</span></td>
                                     <td><span className="accessibility">no</span></td>
                                 </tr>
                                 <tr>
                                     <th className="time">Tarde</th>
                                     <td className="positive"><span className="accessibility">não</span></td>
                                     <td className="positive"><span className="accessibility">sim</span></td>
                                     <td className="positive"><span className="accessibility">sim</span></td>
                                     <td className="positive"><span className="accessibility">não</span></td>
                                     <td className="positive"><span className="accessibility">não</span></td>
                                     <td className="positive"><span className="accessibility">sim</span></td>
                                     <td className="positive"><span className="accessibility">sim</span></td>
                                 </tr>
                                 <tr>
                                     <th className="time">Noite</th>
                                     <td className="positive"><span className="accessibility">sim</span></td>
                                     <td className="positive"><span className="accessibility">sim</span></td>
                                     <td className="positive"><span className="accessibility">não</span></td>
                                     <td className="positive"><span className="accessibility">não</span></td>
                                     <td className="positive"><span className="accessibility">não</span></td>
                                     <td className="positive"><span className="accessibility">sim</span></td>
                                    <td className="positive"><span className="accessibility">não</span></td>
                                 </tr>
                                
                             </tbody>
                            <tfoot>
                                 <tr>
                                     
                                 </tr>
                             </tfoot>
                         </table>
 
                     <br/><br/>

                    <label htmlFor="foto">Foto:</label>
                    <br/>

                    <ImageUploader
                        name="foto"
                        storageRef={firebase.storage().ref('fotos')} 
                        onUploadSuccess={this.handleUploadSuccess} />

                    <br/>

                    <img src={this.state.avatarURL}  style={{maxWidth: '300px'}}/>

                    <br/>

                    <button className="btn-large" type="submit">Efetuar cadastro!</button>
                    <br/>
                    <br/>
                    <br/>
                </form>
            </div>
        );
    }
}