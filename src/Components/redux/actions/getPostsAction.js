import {
    FETCH_POSTS_SUCCESS,
} from '../constans';

export const addPost = (data) => ({
    type: FETCH_POSTS_SUCCESS,
    data,
});

export const search = (value) => ({
    type: 'SEARCH',
    value,
});
