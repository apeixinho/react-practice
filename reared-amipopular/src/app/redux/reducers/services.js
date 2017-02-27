const services = (state = {feedbacks: []}, action) => {
	return {...state, feedbacks: feedbackDetails(state.feedbacks, action)};
}

const feedbackDetails = (state = [], action) => {
	switch(action.type){
        case 'SEND_FEEDBACK':
			return [...state, {
				name: action.name,
				email: action.email,
				message: action.message
			}];
        default:
            return state;
    }
    return state;
}

export default services;