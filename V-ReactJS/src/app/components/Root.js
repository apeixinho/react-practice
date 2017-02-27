import React, { Component } from 'react';
import { Header } from './Header';

export default class Root extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<Header />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}
