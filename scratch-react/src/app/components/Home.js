import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <h1>Home Component</h1>
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <h2>Input - floating labels <small>form-group sizing</small></h2>
                            <div className="form-group form-group-sm label-floating">
                                <label htmlFor="i4" className="control-label">Email address form-group-sm</label>
                                <input type="email" className="form-control" id="i4"/>
                                <span className="help-block">Please enter a valid email address</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <h2>Hints</h2>
                            <div className="form-group label-floating">
                                <label htmlFor="555" className="control-label">label</label>
                                <input type="text" className="form-control" id="555"/>
                                <p className="help-block">Some helpful hint</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
