import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import css from './styles/style.styl';
import Main from './containers/Main';
import PhotoSingle from './components/PhotoSingle';
import PhotoGrid from './components/PhotoGrid';
import store, { history } from './redux/store/store';

import Raven from 'raven-js';
import { sentry_url } from './data/config';

Raven.config(sentry_url).install();

const router = (
    <Provider store={store}>
	    <Router history={history}>
		    <Route path="/" component={Main}>
		        <IndexRoute component={PhotoGrid}></IndexRoute>
		        <Route path="/view/:postId" component={PhotoSingle}></Route>
		    </Route>
	    </Router>
    </Provider>
);

render(
	router,
	document.getElementById('root')
);