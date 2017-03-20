import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from './Header';
// import Carousel from './Carousel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      logged: true,
      openDialog: false,
      currentTab: 'signin'
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleDrawerToggle = () => this.setState({open: !this.state.open});

  handleLoginToggle = () => this.setState({logged: !this.state.logged});

  handleOpen = () => this.setState({openDialog: true});

  handleClose = () => this.setState({openDialog: false});

  handleChange = value => this.setState({currentTab: value});
  
  handleFormSubmit({ email, password }) {
    if(this.state.currentTab === 'signup') {
		  console.info('Signup Form submitted');
    } else {
		  console.info('Signin Form submitted');
    }
	}

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
          <Header 
            open={this.state.open} 
            logged={this.state.logged} 
            openDialog={this.state.openDialog} 
            currentTab={this.state.currentTab} 
            handleOpen={this.handleOpen} 
            handleClose={this.handleClose} 
            handleChange={this.handleChange} 
            handleDrawerToggle={this.handleDrawerToggle}
            handleFormSubmit={this.handleFormSubmit}
          />
          {/*<Carousel/>*/}
          {React.cloneElement(this.props.children, {...this.props, handleLoginToggle: this.handleLoginToggle})}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
