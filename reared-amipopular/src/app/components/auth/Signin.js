import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../redux/actions';

class Signin extends Component {
	handleFormSubmit({ email, password }) {
		this.props.clickTab(1);
		this.props.signinUser({email, password});
	}

	renderSubmitError() {
		if (this.props.errorMessage) {
			return (
				<div style={{color: '#ff0000'}}>
					<strong>Oops! </strong>{this.props.errorMessage}
				</div>
			);
		}
	}

	render() {
		const { handleSubmit, fields: { email, password } } = this.props;
		return (
			<section id="signin">
				<div className="container">
					<h3>Sign In</h3>
					<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
						<div>
							<label htmlFor="email">Email</label><br/>
							<Field name="email" component="input" type="email" {...email} placeholder="Enter email..."/>
						</div>
						<div>
							<label htmlFor="password">Password</label><br/>
							<Field name="password" component="input" type="password" {...password} placeholder="Enter password..."/>
						</div>
						{this.renderSubmitError()}
						<button type="submit" className="button_1">Sign In</button>
					</form>
				</div>
			</section>
		);
	}
}

const SigninForm = reduxForm({
	form: 'signin',
	fields: ['email', 'password']
})(Signin);

export default connect(
	(state, ownProps) => ({
		errorMessage: state.auth.error
	}), 
	actions
)(SigninForm);