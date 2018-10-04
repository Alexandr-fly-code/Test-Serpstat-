import {combineReducers} from 'redux';
import inputChange from './inputChangeReducer';
import getPostReducer from './getPostsReducer';
import getReducerComments from './getCommentsReducer';
import getReducerUsers from './getUsersReducer';
import moreInfoReducer from './moreInfoPostsReducer';


const rootReducer = combineReducers({
    inputChange,
    getPostReducer,
    getReducerComments,
    getReducerUsers,
    moreInfoReducer,
});

export default rootReducer;