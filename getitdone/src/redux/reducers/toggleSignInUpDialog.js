const isDialogOpen = (state = false, action) => {
    switch (action.type) {
        case 'OPENED_DIALOG':
            return true;
        case 'CLOSED_DIALOG':
            return false;
        default:
            return state;
    }
};

export default isDialogOpen;
