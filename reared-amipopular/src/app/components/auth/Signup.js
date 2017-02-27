import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../redux/actions';

class Signup extends Component {
	handleFormSubmit({ email, password }) {
		this.props.clickTab(1);
		this.props.signupUser({email, password});
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
		const { handleSubmit, fields: { email, password, passwordConfirm } } = this.props;
		return (
			<section id="signin">
				<div className="container">
					<h3>Sign Up</h3>
					<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
						<Field name="email" component={renderField} type="email" label="Email" validate={[isRequired, isEmail]}/>
						<Field name="password" component={renderField} type="password" label="Password" validate={[isRequired]}/>
						<Field name="passwordConfirm" component={renderField} type="password" label="Confirm Password" validate={[isRequired]}/>
						{this.renderSubmitError()}
						<button type="submit" className="button_1">Sign Up</button>
					</form>
				</div>
			</section>
		);
	}
}

// FORM VALIDATION STARTS
function isRequired(value) {
	return value ? undefined : 'Required';
}
function isEmail(value) {
	return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;
}

function renderField({ input, label, type, meta: { touched, error } }) {
	return (
		<div>
			<label htmlFor={name}>{label}</label><br/>
			<input {...input} placeholder={label} type={type}/>
			{touched && ((error && <span style={{color: '#ff0000'}}>{error}</span>))}
		</div>
	)
}

function validate(values) {
	const errors = {};

	if (!values.email) {
		errors.email = 'Please enter email';
	}

	if (!values.password) {
		errors.password = 'Please enter password';
	}

	if (!values.passwordConfirm) {
		errors.passwordConfirm = 'Please enter password confirmation';
	}

	if (values.password !== values.passwordConfirm) {
		errors.password = 'Password must match';
	}

	return errors;
}
// FORM VALIDATION ENDS

const SignupForm = reduxForm({
	form: 'signup',
	fields: ['email', 'password', 'passwordConfirm'],
	validate
})(Signup);

export default connect(
	(state, ownProps) => ({
		errorMessage: state.auth.error
	}), 
	actions
)(SignupForm);