import * as ActionTypes from './ActionTypes';
import { CAMPSITES } from '../shared/campsites';

//create an action for adding a comment

export const addComment = (campsiteId, rating, author, text) => ({
        type: ActionTypes.ADD_COMMENT ,
        payload: {
            campsiteId : campsiteId,
            rating: rating,
            author: author,
            text: text
        
    }
});
// action using Redux-thunk 
export const fetchCampsites = () => dispatch => {
    dispatch(campsitesLoading());

    setTimeout(() => {
        dispatch(addCampsites(CAMPSITES));
    }, 2000)
};
// Other actions
export const campsitesLoading = () => ({
    type: ActionTypes.CAMPSITES_LOADING
});

export const campsitesFailed = errMess => ({
    type: ActionTypes.CAMPSITES_FAILED,
    payload: errMess
});

export const addCampsites = campsites => ({
    type: ActionTypes.ADD_CAMPSITES,
    payload: campsites
});