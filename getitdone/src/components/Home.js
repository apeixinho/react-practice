import React, { Component } from 'react';
import Toggle from 'material-ui/Toggle';
import logo from '../images/logo.svg';

class Home extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to GETITDONE</h2>
                </div>
                <p className="App-intro">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id natus, quas dicta modi vel, maxime eveniet quis aliquid eligendi, tempore consequuntur vero. Debitis, quia provident exercitationem illo magni maiores pariatur.
                </p>
                <Toggle
                    label="Logged"
                    defaultToggled={this.props.isLogged}
                    onToggle={this.props.toggleLogin}
                    labelPosition="right"/>
            </div>
        );
    }
}

import { connect } from 'react-redux';
import { toggleLogin } from '../redux/actions/index';

export default connect(
	(state, ownProps) => ({
        isLogged: state.isLogged
    }),
	{
		toggleLogin: toggleLogin
	}
)(Home);
