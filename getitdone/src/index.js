import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './redux/store/store';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import './stylesheets/index.css';

injectTapEventPlugin();

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path={'/'} component={App}>
        <IndexRoute component={Home}/>
        <Route path={'/about'} component={About}/>
        <Route path={'/services'} component={Services}/>
        <Route path={'/contact'} component={Contact}/>
      </Route>
    </Router>
  </Provider>
);

render(
  router,
  document.getElementById('root')
);
