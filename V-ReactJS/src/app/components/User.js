import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default class User extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-xs-12">
					<h3 className="text-muted">Here is our {this.props.params.user || "user"} bhai!</h3>
					<button className="btn btn-default btn-sm" onClick={() => browserHistory.push('/home')}>Home</button>
				</div>
			</div>
		);
	}
}
