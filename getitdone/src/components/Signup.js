import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';

const styles = {
    textField: {
        width: "100%",
    }
};

class Signup extends Component {
	render() {
		const { handleSubmit } = this.props;
		return (
			<div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name="email"
                            component={TextField}
                            hintText="Enter email..."
                            floatingLabelText="Email"
                            validate={[isRequired, isEmail]}
                            style={styles.textField}/>
                    </div>
                    <div>
                        <Field name="password"
                            component={TextField}
                            hintText="Enter password..."
                            floatingLabelText="Password"
                            validate={[isRequired]}
                            style={styles.textField}/>
                    </div>
                    <div>
                        <Field name="passwordConfirm"
                            component={TextField}
                            hintText="Enter password..."
                            floatingLabelText="Confirm Password"
                            validate={[isRequired]}
                            style={styles.textField}/>
                    </div>
                </form>
            </div>
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

export default reduxForm({
	form: 'signup',
	fields: ['email', 'password', 'passwordConfirm'],
	validate
})(Signup);