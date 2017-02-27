import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as form } from 'redux-form';

import tabs from './tabs';
import newsletter from './newsletter';
import services from './services';
import images from './images';
import search from './search';
import auth from './auth';

export default combineReducers({
	tabs,
	newsletter,
	services,
	images,
	search,
	form,
	auth,
	routing: routerReducer
});