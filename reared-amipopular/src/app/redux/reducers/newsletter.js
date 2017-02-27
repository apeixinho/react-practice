const newsletter = (state = {emails: []}, action) => {
	return {...state, emails: subscribedEmails(state.emails, action)};
}

const subscribedEmails = (state = [], action) => {
	switch(action.type){
        case 'SUBSCRIBE_NEWSLETTER':
			return [...state, action.email];
        default:
            return state;
    }
    return state;
}

export default newsletter;