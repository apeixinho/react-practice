const tabs = (state = {currentTab: 0}, action) => {
    switch(action.type){
        case 'CLICKED_TAB':
            return {...state, currentTab: action.index};
        default:
            return state;
    }
}

export default tabs;