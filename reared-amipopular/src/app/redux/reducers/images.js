const images = (state = {data: [], loading: 'Load more images'}, action) => {
    switch(action.type){
        case 'IMAGES':
            return {...state, data: action.data, loading: 'loaded'};
        case 'IMAGES_LOADING':
            return {...state, loading: 'loading...'};
        default:
            return state;
    }
}

export default images;