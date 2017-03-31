import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from './Header';
// import Carousel from './Carousel';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div>
                    <Header/>
                    {/*<Carousel/>*/}
                    {React.cloneElement(this.props.children, this.props)}
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
