export default function getCommentInputReducer (state = '', action){
    switch(action.type){
        case 'GET_COMMENT_VALUE':
            return action.value;
        default: return state;
    }
}