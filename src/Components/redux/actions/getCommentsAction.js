import {
    FETCH_COMMENTS_SUCCESS,
} from '../constans';

export const addComments = (data) => ({
    type: FETCH_COMMENTS_SUCCESS,
    data,
});
