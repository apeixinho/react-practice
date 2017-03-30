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
                    onLeftIconButtonTouchTap={this.props.handleDrawerToggle}
                    iconElementRight={
                        this.props.logged?<UserInfoTray/>:<FlatButton onTouchTap={this.props.handleOpen} label="Signin / Signup"/>
                    }
                />
                <LeftDrawer 
                    open={this.props.open}
                    toggleDrawer={this.props.handleDrawerToggle}
                />
                <SigninSignupDialog 
                    currentTab={this.props.currentTab}
                    handleChange={this.props.handleChange}
                    openDialog={this.props.openDialog}
                    handleClose={this.props.handleClose}
                    handleFormSubmit={this.props.handleFormSubmit}
                />
            </div>
        );
    }
}

export default Header;