import React, { Component } from 'react';

export default class Examples02 extends Component {
  render() {
    return (
      <div>
        <h1>Reactifying Myself 02</h1>
        <p>Hello {this.props.params.name || 'world 02'}!!!</p>
      </div>
    );
  }
}