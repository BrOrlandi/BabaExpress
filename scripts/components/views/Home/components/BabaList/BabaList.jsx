import React from 'react';
import firebase from 'firebase';
import reactMixin from 'react-mixin';
import ReactFireMixin from 'reactfire';
import moment from 'moment';

import noImageSrc from './images/no-image.svg';

const List = (props) => {
    return (
        <div>
            {props.children}
        </div>
    );
};

const ListItem = ({baba}) => {
    const {foto, nome, endereco, cv, nascimento} = baba;
    const idade = moment().year() - moment(nascimento, "YYYY-MM-DD").year();
    return (
        <div className="row baba-item">
            <div className="col s2">
                <img className="baba-profile-pic" src={foto || noImageSrc} />
            </div>
            <div className="col s10">
                <h5 className="baba-name">{nome}, {idade} anos</h5>
                <p className="baba-address"><b>Endereço:</b> {endereco}</p>
                <p className="baba-cv"><b>Recomendações:</b> {cv}</p>
            </div>
        </div>
    );
};

export default class BabaList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            babas: []
        };
    }
    componentWillMount() {
        const ref = firebase.database().ref("babas");
        this.bindAsArray(ref, "babas");
    }
    render() {
        const items = this.state.babas.map((baba, index) => {
            return <ListItem key={index} baba={baba} />;
        });
        return (
            <div>
                <h5>Nossas Encontradas</h5>
                <List>
                    {items}
                </List>
            </div>
        );
    }
}

reactMixin(BabaList.prototype, ReactFireMixin);