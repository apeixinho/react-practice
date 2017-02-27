const comments = (state = [], action) => {
    if(typeof action.postId !== 'undefined'){
        return {
            ...state, // take the current state
            [action.postId]: postComments(state[action.postId], action) // overwrite this post with a new one
        }
    }
    return state;
}

function postComments(state = [], action){
    switch(action.type){
        case 'ADD_COMMENT':
            // return the new state with the new comment
            return [...state, {
                user: action.author,
                text: action.comment
            }];
        case 'REMOVE_COMMENT':
            // we need to return the new state without the deleted comment
            return [
                ...state.slice(0, action.i),
                ...state.slice(action.i + 1)
            ];
        default:
            return state;
    }
    return state;
}


export default comments;