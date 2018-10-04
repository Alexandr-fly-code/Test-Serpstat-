import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import {createBrowserHistory} from 'history';
import {connectRouter} from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../redux-saga/sagas';

const DevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(connectRouter(history)(rootReducer), DevTools, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;