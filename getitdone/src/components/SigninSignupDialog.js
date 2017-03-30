import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import { Tabs, Tab } from 'material-ui/Tabs';
import Signin from './Signin';
import Signup from './Signup';

const styles = {
    tabs: {
        borderBottom: "none",
        color: "rgba(0, 0, 0, 0.87)",
        fontSize: 22,
        fontWeight: 400,
        lineHeight: "32px",
        margin: 0,
        marginBottom: 0,
        muiPrepared: false,
        padding: "24px 24px 20px 24px"
    }
};

class SigninSignupDialog extends Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit({ email, password }) {
        if(this.props.isSignInUp === 'signup') {
            console.info('Signup Form submitted');
        } else {
            console.info('Signin Form submitted');
        }
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.props.closeDialog}/>,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleFormSubmit}/>
        ];

        return (
            <Dialog
                title={<DialogTitleCustom isSignInUp={this.props.isSignInUp} toggleSignInUp={this.props.toggleSignInUp}/>}
                actions={actions}
                modal={false}
                open={this.props.isDialogOpen}
                onRequestClose={this.props.closeDialog}/>
        );
    }
}

function DialogTitleCustom(props) {
    return (
        <Tabs
            style={styles.tabs}
            value={props.isSignInUp}
            onChange={props.toggleSignInUp}>
            <Tab label="Signin" value="signin" >
                <Signin/>
            </Tab>
            <Tab label="Signup" value="signup">
                <Signup/>
            </Tab>
        </Tabs>
    );
}

import { connect } from 'react-redux';
import { toggleSignInUp, closeDialog } from '../redux/actions/index';

export default connect(
	(state, ownProps) => ({
		isSignInUp: state.isSignInUp,
        isDialogOpen: state.isDialogOpen
	}),
	{
		toggleSignInUp: toggleSignInUp,
        closeDialog: closeDialog
	}
)(SigninSignupDialog);
