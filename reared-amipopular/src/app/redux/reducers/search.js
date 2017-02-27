const search = (state = {data: [], loading: 'Search...'}, action) => {
    switch(action.type){
        case 'SEARCH_COMPLETE':
            return {...state, data: action.data, loading: 'loaded'};
        case 'SEARCH_LOADING':
            return {...state, loading: 'loading...'};
        default:
            return state;
    }
}

export default search;