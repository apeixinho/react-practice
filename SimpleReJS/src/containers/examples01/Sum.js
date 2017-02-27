import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSum } from '../../redux/actions/index';

class Sum extends Component {
  constructor(props){
    super(props);
    this.state = {a: 1, b: 2};
  }
  render() {
    const {state: {a, b}, props: {sum, onSum}} = this;
    return (
      <p>
        <input value={a} onChange={e => this.setState({a: e.target.value})}/> + <input value={b} onChange={e => this.setState({b: e.target.value})}/>
        &nbsp;= <span>{sum}&nbsp;</span>
        <button onClick={() => onSum(a, b)}>Sum</button>
      </p>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    sum: state.examples.sum
  }),
  {
    onSum: getSum
  }
)(Sum);