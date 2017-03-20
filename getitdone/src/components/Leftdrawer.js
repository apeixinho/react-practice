import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class LeftDrawer extends Component {
    render() {
        return (
            <Drawer open={this.props.open}>
                <AppBar title="GETITDONE" onLeftIconButtonTouchTap={this.props.toggleDrawer}/>
                <MenuItem onTouchTap={this.props.toggleDrawer}>Item One</MenuItem>
                <MenuItem onTouchTap={this.props.toggleDrawer}>Item Two</MenuItem>
            </Drawer>
        );
    }
}

export default LeftDrawer;