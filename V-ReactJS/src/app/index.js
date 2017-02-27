import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Root from './components/Root';
import Home from './components/Home';
import User from './components/User';

class App extends Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path={'/'} component={Root}>
					<IndexRoute component={Home} />
					<Route path={'home'} component={Home} />
					<Route path={'user'} component={User} />
					<Route path={'user/:user'} component={User} />
				</Route>
			</Router>
		);
	}
}

render(<App/>, document.getElementById('app'));