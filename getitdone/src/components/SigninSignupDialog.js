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
    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.props.handleClose}/>,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.props.handleFormSubmit}/>
        ];

        return (
            <Dialog
                title={<CustomTabs currentTab={this.props.currentTab} handleChange={this.props.handleChange}/>}
                actions={actions}
                modal={false}
                open={this.props.openDialog}
                onRequestClose={this.props.handleClose}/>
        );
    }
}

function CustomTabs(props) {
    return (
        <Tabs
            style={styles.tabs}
            value={props.currentTab}
            onChange={props.handleChange}>
            <Tab label="Signin" value="signin" >
                <Signin/>
            </Tab>
            <Tab label="Signup" value="signup">
                <Signup/>
            </Tab>
        </Tabs>
    );
}

export default SigninSignupDialog;