import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import css from './css/style.css';
import Root from './components/Root';
import Home from './containers/Home';
import About from './components/About';
import Services from './containers/Services';
import store, { history } from './redux/store/store';
import Signin from './components/auth/Signin';
import Signout from './components/auth/Signout';
import Signup from './components/auth/Signup';
import RequireAuth from './components/auth/require_auth';

const token = localStorage.getItem('token');

if (token) {
	store.dispatch({type: 'AUTH_USER'});
}

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path={'/'} component={Root}>
				<IndexRoute component={Home}/>
				<Route path={'about-us'} component={RequireAuth(About)}/>
				<Route path={'services'} component={Services}/>
				<Route path={'signin'} component={Signin}/>
				<Route path={'signout'} component={Signout}/>
				<Route path={'signup'} component={Signup}/>
			</Route>
		</Router>
	</Provider>
)

render(router, document.getElementById('app'));