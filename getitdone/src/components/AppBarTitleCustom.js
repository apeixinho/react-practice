import React, { Component } from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import Search from 'material-ui/svg-icons/action/search';

const styles = {
    toolBar: {
        backgroundColor: 'rgb(0, 188, 212)',
    },
    toolBarGroup: {
        display: 'block',
        width: '20%'
    },
    toolBarGroupSearchBox: {
        display: 'block',
        width: '100%'
    },
    toolBarGroupSearchIcon: {
        float: 'right',
        height: '28px',
        color: '#ccc'
    },
    toolBarTitle: {
        color: 'rgb(255, 255, 255)'
    }
};

class AppBarTitleCustom extends Component {
    render() {
        return (
            <Toolbar style={styles.toolBar}>
                <ToolbarGroup firstChild={true} style={styles.toolBarGroup}>
                    <ToolbarTitle text="GETITDONE" style={styles.toolBarTitle} className="xs-title-hidden"/>
                </ToolbarGroup>
                <ToolbarGroup style={styles.toolBarGroupSearchBox}>
                    <div className="sw">
                        <form>
                            <input type="text" className="search" placeholder="Search..." />
                            <button type="button" className="go"><Search style={styles.toolBarGroupSearchIcon}/></button>
                        </form>
                    </div>
                </ToolbarGroup>
                <ToolbarGroup style={styles.toolBarGroup}/>
            </Toolbar>
        );
    }
}

export default AppBarTitleCustom;