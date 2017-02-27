export const increment = index => ({
    type: 'INCREMENT_LIKES',
    index
});

export const addComment = (postId, author, comment) => ({
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
});

export const removeComment = (postId, i) => ({
    type: 'REMOVE_COMMENT',
    i,
    postId
});