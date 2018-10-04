import {FETCH_USERS_SUCCESS} from '../constans';

export const addUsers = (data) => ({
    type: FETCH_USERS_SUCCESS,
    data,
});
