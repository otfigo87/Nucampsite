import * as ActionTypes from './ActionTypes';

//Reducer for comments
export const Comments = (state = {errMess: null, comment:[]}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};
        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess:action.payload};   
        case ActionTypes.ADD_COMMENT:
            const comment = action.payload;
            return {...state, comments:state.comments.concat(comment)} ;
        default: return state;
    }
}