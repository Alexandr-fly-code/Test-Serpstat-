import {FETCH_USERS_SUCCESS} from '../constans';

export default function addReducerUsers (state = [], action){
    switch(action.type){
        case FETCH_USERS_SUCCESS:
        return [...action.data];
        default: return state;
    }
}