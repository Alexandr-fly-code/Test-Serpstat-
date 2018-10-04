import {
    FETCH_POSTS_SUCCESS,
} from '../constans';


export default function addPostReducer (state = [], action){
    switch(action.type){
        case FETCH_POSTS_SUCCESS:
        return [...action.data];

        case 'SEARCH':
        return state.filter(el => el.title.includes(action.value) || el.body.includes(action.value));
        default: return state;
    }
}