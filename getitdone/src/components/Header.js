import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Person from 'material-ui/svg-icons/social/person';
import Settings from 'material-ui/svg-icons/action/settings';
import PowerSettingsNew from 'material-ui/svg-icons/action/power-settings-new';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import Dialog from 'material-ui/Dialog';
import { Tabs, Tab } from 'material-ui/Tabs';
import LeftDrawer from './Leftdrawer';
import AppBarTitleCustom from './AppBarTitleCustom';
import Signin from './Signin';
import Signup from './Signup';

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
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

class Header extends Component {
    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.props.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.props.handleFormSubmit}
            />,
        ];

        return (
            <div>
                <AppBar
                    title={<AppBarTitleCustom/>}
                    onLeftIconButtonTouchTap={this.props.handleDrawerToggle}
                    iconElementRight={this.props.logged?<Logged/>:<Login handleOpen={this.props.handleOpen}/>}
                />
                <LeftDrawer 
                    open={this.props.open} 
                    toggleDrawer={this.props.handleDrawerToggle}
                />
                <Dialog
                    title={<CustomTabs currentTab={this.props.currentTab} handleChange={this.props.handleChange}/>}
                    actions={actions}
                    modal={false}
                    open={this.props.openDialog}
                    onRequestClose={this.props.handleClose}
                />
            </div>
        );
    }
}

Logged.muiName = 'IconMenu';
Login.muiName = 'FlatButton';
CustomTabs.muiName = 'Tabs';

function Logged(props) {
    return (
        <IconMenu 
            {...props} 
            iconButtonElement={<IconButton><MoreVertIcon/></IconButton>}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
            <MenuItem primaryText="Monjit Nunisa" leftIcon={<Person/>}/>
            <MenuItem primaryText="Settings" leftIcon={<Settings/>}/>
            <Divider/>
            <MenuItem primaryText="Sign Out" leftIcon={<PowerSettingsNew/>}/>
        </IconMenu>
    );
}

function Login(props) {
    const { style, handleOpen } = props;
    return (<FlatButton style={style} onTouchTap={handleOpen} label="Signin / Signup"/>);
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

export default Header;