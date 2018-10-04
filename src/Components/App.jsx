import React, { Component } from 'react';
import {connect} from 'react-redux';

import Search from './Search/Search';
import Content from './Main/Main';
import ItemPost from './MainSinglePost/MainSinglePost';

import {fetchRequest} from './redux/actions/fetchRequestAction';

import {history} from './redux/store/store';
import {ConnectedRouter} from 'connected-react-router';
import {Switch, Route} from 'react-router-dom';

import './App.css';
import './styles/reset.css';
import './styles/var.css';


class App extends Component {

    componentDidMount(){

                this.props.fetchRequest();

    }
    
    
    render() {
        return (

            <div className='wrapper'>

            <ConnectedRouter history={history}>

                <div className='container'>
                    <div className='main'>

                          <Search/>

                            <Switch>
                                <Route exact path='/' component={Content}/>
                                <Route path='/card' component={ItemPost}/>
                            </Switch>

                    </div>

                </div>
            </ConnectedRouter>

            </div>
        );
    }
}


function MSTP(store){
    return {
        getPostReducer: store.getPostReducer,
        getReducerComments: store.getReducerComments,
        getReducerUsers: store.getReducerUsers,
    }
}

function MDTP(dispatch){
    return {
        fetchRequest: function () {
            dispatch(fetchRequest())
        }
        
    }
}

export default connect(MSTP, MDTP)(App);