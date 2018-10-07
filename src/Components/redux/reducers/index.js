import {combineReducers} from 'redux';
import inputSearchReducer from './inputSearchReducer';
import getPostReducer from './getPostsReducer';
import getReducerComments from './getCommentsReducer';
import getReducerUsers from './getUsersReducer';
import moreInfoReducer from './moreInfoPostsReducer';
import getCommentInputReducer from './getCommentInputReducer';

const rootReducer = combineReducers({
    inputSearchReducer,
    getPostReducer,
    getReducerComments,
    getReducerUsers,
    moreInfoReducer,
    getCommentInputReducer,
});

export default rootReducer;