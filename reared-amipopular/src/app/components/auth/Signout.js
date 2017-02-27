import React, { Component } from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

class Signout extends Component {
	componentWillMount() {
		this.props.signoutUser();
	}

	render() {
		return(
			<div>
				<section id="boxes">
					<div className="container">
						<article id="main-col">
							<h1 className="page-title">Logged out successfully!</h1>
							<button onClick={() => {this.props.clickTab(3); browserHistory.push('/signin')}} className="button_1">Sign In</button>
						</article>
					</div>
				</section>
			</div>
		);
	}
}

export default connect(
	(state, ownProps) => ({
		currentTab: state.tabs.currentTab
	}),
	actions
)(Signout);