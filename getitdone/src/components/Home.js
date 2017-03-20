import React, { Component } from 'react';
import Toggle from 'material-ui/Toggle';
import logo from '../images/logo.svg';
import '../stylesheets/App.css';

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
          defaultToggled={true}
          onToggle={this.props.handleLoginToggle}
          labelPosition="right"
        />
      </div>
    );
  }
}

export default Home;
