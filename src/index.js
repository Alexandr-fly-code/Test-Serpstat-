import React from 'react';
import ReactDOM from 'react-dom';
import store, {history} from './Components/redux/store/store';
import {ConnectedRouter} from 'connected-react-router';
import {Provider} from 'react-redux';

import './index.css';
import App from './Components/App';

ReactDOM.render(
<Provider store={store}>
<ConnectedRouter history={history}>
<App />
</ConnectedRouter>
</Provider>

, document.getElementById('root'));
