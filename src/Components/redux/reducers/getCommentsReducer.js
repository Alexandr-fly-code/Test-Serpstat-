import {
    FETCH_COMMENTS_SUCCESS,
} from '../constans';


export default function addReducerComments (state = [], action){
    switch(action.type){
        case FETCH_COMMENTS_SUCCESS:
        return [...action.data];
        default: return state;
    }
}