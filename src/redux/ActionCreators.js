import * as ActionTypes from './ActionTypes';

//create an action for adding a comment

export const addComment = (campsiteId, rating, author, text) => ({
        type: ActionTypes.ADD_COMMENT ,
        payload: {
            campsiteId : campsiteId,
            rating: rating,
            author: author,
            text: text
        
    }
})