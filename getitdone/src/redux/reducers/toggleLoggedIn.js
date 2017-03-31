const isLogged = (state = true, action) => {
    switch (action.type) {
        case 'CHANGED_LOGIN':
            return !state;
        default:
            return state;
    }
};

export default isLogged;
