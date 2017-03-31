import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import isDrawerOpen from './toggleLeftDrawer';
import isSignInUp from './toggleSignInUpForm';
import isLogged from './toggleLoggedIn';
import isDialogOpen from './toggleSignInUpDialog';

export default combineReducers({
    isDrawerOpen,
    isSignInUp,
    isLogged,
    isDialogOpen,
	form,
	routing: routerReducer
});
