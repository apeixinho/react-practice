import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './redux/store/store';
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css';
import '!style-loader!css-loader!bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import '!style-loader!css-loader!bootstrap-material-design/dist/css/ripples.min.css';
import 'bootstrap-material-design/dist/js/material.min.js';
import 'bootstrap-material-design/dist/js/ripples.min.js';
import $ from 'jquery';
import './stylesheets/app.css';
import App from './components/App';
import Home from './components/Home';
import About from './components/About';

$.material.init();

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path={'/'} component={App}>
                <IndexRoute component={Home}/>
                <Route path={'/about'} component={About}/>
            </Route>
        </Router>
    </Provider>
);

render(
    router,
    document.getElementById('root')
);
