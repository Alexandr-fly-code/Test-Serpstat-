import { call, put, all,takeEvery, } from 'redux-saga/effects';
import axios from "axios";
import {addPost} from '../actions/getPostsAction';
import {addComments} from '../actions/getCommentsAction';
import {addUsers} from '../actions/getUsersAction';

import {
    FETCH_REQUEST,
} from '../constans';


const urlPosts = 'https://jsonplaceholder.typicode.com/posts';
const urlUsers = 'https://jsonplaceholder.typicode.com/users';
const urlComments = 'https://jsonplaceholder.typicode.com/comments';

export function* fetchData() {
    try {

       const [posts, users, comments] = yield all([
           call(() => {
               return axios.get(urlPosts)
                   .then(data => data.status === 200 ? data.data : [])

           }),
           call(() => {
               return axios.get(urlUsers)
                   .then(data => data.status === 200 ? data.data : [])

           }),
           call(() => {
               return axios.get(urlComments)
                   .then(data => data.status === 200 ? data.data : [])

           }),
       ]);
        yield put(addPost(posts));
        yield put(addUsers(users));
        yield put(addComments(comments));

    }catch (error) {
        yield put(() => {console.log('Getting data from server error: ' + error)})
    }
}


export default function* watchFetch() {
    yield takeEvery(FETCH_REQUEST, fetchData);
}

// function* fetchPostsAsync() {
//     try {
//         const data = yield call(() => {
//             return axios.get(`https://jsonplaceholder.typicode.com/posts`)
//                 .then(data => data.status === 200 ? data.data : [])
//                 // .catch(error => console.log('Getting data from server error: ' + error));
//             }
//         );
//         yield put(addPost(data));
//     } catch (error) {
//         yield put(error => console.log(error));
//     }
// }

// console.log(fetchPostsAsync());

// export default function* rootSaga() {
//     yield [
//         watchFetch(),
//     ]
// }