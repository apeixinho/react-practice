import React, { Component } from 'react';
import Header from './Header';

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="col-xs-12">
                    <Header/>
                    {React.cloneElement(this.props.children, {...this.props})}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: React.PropTypes.element.isRequired
};

export default App;
