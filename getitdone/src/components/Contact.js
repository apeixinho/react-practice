import React, { Component } from 'react';
import logo from '../images/logo.svg';

class Contact extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Contact</h2>
                </div>
                <p className="App-intro">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit saepe nesciunt ipsum nisi, aspernatur maxime ratione eos, dignissimos quibusdam cum atque cumque repudiandae itaque temporibus voluptate. Fugiat atque iusto odio.
                </p>
            </div>
        );
    }
}

export default Contact;
