import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import LeftDrawer from './Leftdrawer';
import AppBarTitleCustom from './AppBarTitleCustom';
import UserInfoTray from './UserInfoTray';
import SigninSignupDialog from './SigninSignupDialog';

class Header extends Component {
    render() {
        return (
            <div>
                <AppBar
                    title={<AppBarTitleCustom/>}
                    onLeftIconButtonTouchTap={this.props.toggleDrawer}
                    iconElementRight={this.props.isLogged?<UserInfoTray/>:<FlatButton onTouchTap={this.props.openDialog} label="Signin / Signup"/>}/>
                <LeftDrawer/>
                <SigninSignupDialog/>
            </div>
        );
    }
}

import { connect } from 'react-redux';
import { toggleDrawer, openDialog } from '../redux/actions/index';

export default connect(
	(state, ownProps) => ({
		isLogged: state.isLogged
	}),
	{
		toggleDrawer: toggleDrawer,
        openDialog: openDialog
	}
)(Header);
