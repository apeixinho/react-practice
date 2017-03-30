import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import openDrawer from './openDrawer';
import isSignInUp from './isSignInUp';
import isLogged from './isLogged';
import isDialogOpen from './isDialogOpen';

export default combineReducers({
    openDrawer,
    isSignInUp,
    isLogged,
    isDialogOpen,
	form,
	routing: routerReducer
});
