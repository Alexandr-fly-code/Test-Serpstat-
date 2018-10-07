import {
    FETCH_COMMENTS_SUCCESS,
} from '../constans';

export const addComments = (data) => ({
    type: FETCH_COMMENTS_SUCCESS,
    data,
});


export const addNewCommet = (value, userId, idNew) => ({
    type: 'ADD_NEW_COMMENT',
    value,
    userId,
    idNew,
});
