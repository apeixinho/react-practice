import React, { Component } from 'react';
import { connect } from 'react-redux';
import { decrease } from '../../redux/actions/index';

class Counter extends Component {
  render() {
    const {count: {result}, onDecrement} = this.props;
    return (
      <p>
        Clicked: <span>{result}</span> times&nbsp;
        <button onClick={onDecrement}>Decrease</button>
      </p>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    count: state.examples.count
  }),
  {
    onDecrement: decrease
  }
)(Counter);