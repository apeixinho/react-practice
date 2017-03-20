import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';

const styles = {
    textField: {
        width: "100%",
    }
};

class Signin extends Component {
    componentDidMount() {
        this.refs.name          // the Field
        .getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
        .getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
        .focus()                // on TextField
    }

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
                            validate={isRequired}
                            ref="name" withRef
                            style={styles.textField}/>
                    </div>
                </form>
            </div>
        )
    }
}

// FORM VALIDATION STARTS
function isRequired(value) {
	return value ? undefined : 'Required';
}
function isEmail(value) {
	return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;
}
// FORM VALIDATION ENDS

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(Signin);