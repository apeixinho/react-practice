const isSignInUp = (state = 'signin', action) => {
    switch (action.type) {
        case 'CHANGED_TAB':
            return action.currentActiveTab;
        default:
            return state;
    }
};

export default isSignInUp;
