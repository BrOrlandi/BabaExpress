
import firebase from 'firebase';
import reactMixin from 'react-mixin';
import ReactFireMixin from 'reactfire';

import React, { Component } from 'react';

// docs
// https://github.com/firebase/reactfire/blob/master/docs/quickstart.md

class FirebaseTest extends Component {
    
    componentWillMount() {
        var ref = firebase.database().ref("messages");
        this.bindAsArray(ref, "messages");
    }

    handleSubmit(e){
        e.preventDefault();
        this.firebaseRefs.messages.push({
            name: e.target.name.value,
            message: e.target.message.value
        });
        e.target.message.value="";
    }

    render() {
        console.log(this.state.messages);
        var messages = this.state.messages.map((m) => {
            return <li key={m['.key']}><b>{ m.name } : </b> { m.message }</li>;
        });

        return (
            <div>
                <ul>
                    {messages}
                </ul>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label htmlFor="name">Name:</label><input id="name" type="text" /><br/>
                    <label htmlFor="message">Message:</label><input id="message" type="text" /><br/>
                    <button type="submit">Send</button>
                </form>
            </div>
        );
    }
}

reactMixin(FirebaseTest.prototype, ReactFireMixin);

export default FirebaseTest;