import firebase from 'firebase';

import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import ImageUploader from 'react-firebase-image-uploader';

import BabaUtils from '../../../utils/BabaUtils';

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

        const baba = BabaUtils.createBaba(e.target, fotoUrl);

        BabaUtils.validateBaba(baba);

        this.babasDb.push(baba);

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

                 <br/><br/>
 
                <label htmlFor="cv">Disponibilidade:</label>
                   <table className="availability striped">
                             <thead>
                                 <tr>
                                     <th class="time"></th>
                                     <th class="day">Seg</th>
                                     <th class="day">Ter</th>
                                     <th class="day">Qua</th>
                                     <th class="day">Quin</th>
                                     <th class="day">Sex</th>
                                     <th class="day">Sab</th>
                                     <th class="day">Dom</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 <tr>
                                     <th class="time">Manhã</th>
                                     <td class="positive"><span class="accessibility">não</span></td>
                                     <td class="positive"><span class="accessibility">não</span></td>
                                     <td class="positive"><span class="accessibility">sim</span></td>
                                     <td class="positive"><span class="accessibility">sim</span></td>
                                     <td class="positive"><span class="accessibility">não</span></td>
                                     <td><span class="accessibility">no</span></td>
                                     <td><span class="accessibility">no</span></td>
                                 </tr>
                                 <tr>
                                     <th class="time">Tarde</th>
                                     <td class="positive"><span class="accessibility">não</span></td>
                                     <td class="positive"><span class="accessibility">sim</span></td>
                                     <td class="positive"><span class="accessibility">sim</span></td>
                                     <td class="positive"><span class="accessibility">não</span></td>
                                     <td class="positive"><span class="accessibility">não</span></td>
                                     <td class="positive"><span class="accessibility">sim</span></td>
                                     <td class="positive"><span class="accessibility">sim</span></td>
                                 </tr>
                                 <tr>
                                     <th class="time">Noite</th>
                                     <td class="positive"><span class="accessibility">sim</span></td>
                                     <td class="positive"><span class="accessibility">sim</span></td>
                                     <td class="positive"><span class="accessibility">não</span></td>
                                     <td class="positive"><span class="accessibility">não</span></td>
                                     <td class="positive"><span class="accessibility">não</span></td>
                                     <td class="positive"><span class="accessibility">sim</span></td>
                                    <td class="positive"><span class="accessibility">não</span></td>
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

                    <img src={this.state.avatarURL} />

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