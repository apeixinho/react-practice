import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Divider from 'material-ui/Divider';
import Person from 'material-ui/svg-icons/social/person';
import Settings from 'material-ui/svg-icons/action/settings';
import PowerSettingsNew from 'material-ui/svg-icons/action/power-settings-new';

class UserInfoTray extends Component {
    render() {
        return (
            <IconMenu 
                iconButtonElement={<IconButton><MoreVertIcon/></IconButton>}
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                iconStyle={{fill: 'rgb(255, 255, 255)'}}>
                <MenuItem primaryText="Monjit Nunisa" leftIcon={<Person/>}/>
                <MenuItem primaryText="Settings" leftIcon={<Settings/>}/>
                <Divider/>
                <MenuItem primaryText="Sign Out" leftIcon={<PowerSettingsNew/>} onClick={this.props.toggleLogin}/>
            </IconMenu>
        );
    }
}

import { connect } from 'react-redux';
import { toggleLogin } from '../redux/actions/index';

export default connect(
	(state, ownProps) => ({
		isLogged: state.isLogged
	}),
	{
		toggleLogin: toggleLogin
	}
)(UserInfoTray);
