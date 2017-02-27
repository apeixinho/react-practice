import $ from 'jquery';
import axios from 'axios';
import { browserHistory } from 'react-router';

const ROOT_URL = 'http://localhost:3090';

export const clickTab = index => ({
	type: 'CLICKED_TAB',
	index
});

export const subscribeNewsletter = email => ({
	type: 'SUBSCRIBE_NEWSLETTER',
	email
});

export const sendFeedback = (name, email, message) => ({
	type: 'SEND_FEEDBACK',
	name,
	email,
	message
});

export const loadImages = (dispatch, state) => {
    dispatch({type: 'IMAGES_LOADING'});
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $.getJSON(flickerAPI, {
        tags: "mount rainier",
        tagmode: "any",
        format: "json"
    }).done(data => dispatch({ 
        type: 'IMAGES', 
        data: data.items
    })).fail(err => {
        console.log(err);
    });
};

export const loadSearch = (dispatch, state) => { // Not in use across the application yet.
    dispatch({type: 'SEARCH_LOADING'});
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $.getJSON(flickerAPI, {
        tags: "mount rainier",
        tagmode: "any",
        format: "json"
    }).done(data => dispatch({ 
        type: 'SEARCH_COMPLETE', 
        data: data.items
    })).fail(err => {
        console.log(err);
    });
};

export function signinUser ({email, password}) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signin`, {email, password})
        .then(response => {
            dispatch({type: 'AUTH_USER'});
            localStorage.setItem('token', response.data.token);
            browserHistory.push('/about-us');
        })
        .catch(() => {
            dispatch(authError('Bad login info!'));
        });
    }
}

export function authError(error) {
    return {
        type: 'AUTH_ERROR',
        payload: error
    };
}

export function signoutUser() {
    localStorage.removeItem('token');
    return {
        type: 'UNAUTH_USER'
    };
}

export function signupUser ({email, password}) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signup`, {email, password})
        .then(response => {
            dispatch({type: 'AUTH_USER'});
            localStorage.setItem('token', response.data.token);
            browserHistory.push('/services');
        })
        .catch(error => dispatch(authError('Something went wrong... Please try after sometine.')));
    }
}

export function fetchMessage() {
    return function(dispatch) {
        axios.get(ROOT_URL, {
            headers: {authorization: localStorage.getItem('token')}
        })
        .then(response => {
            dispatch({
                type: 'FETCH_MESSAGE',
                payload: response.data.message
            });
        });
    }
}