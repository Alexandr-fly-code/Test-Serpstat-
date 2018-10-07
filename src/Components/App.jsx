import React, { Component } from 'react';
import {connect} from 'react-redux';

import Search from './Search/Search';

import {fetchRequest} from './redux/actions/fetchRequestAction';
import asyncCodeSplitting from './asyncCodeSplitting/asyncCodeSplitting';


import {history} from './redux/store/store';
import {ConnectedRouter} from 'connected-react-router';
import {Switch, Route} from 'react-router-dom';

import './App.css';
import './styles/reset.css';
import './styles/var.css';
import PacmanLoader from 'react-spinners/PacmanLoader';

const AsyncSinglePost = asyncCodeSplitting({
   loader: () => import('./MainSinglePost/MainSinglePost'),
    loading: null,
});
const AsyncMain = asyncCodeSplitting({
    loader: () => import('./Main/Main'),
    loading: null,
});

class App extends Component {

    componentDidMount(){

                this.props.fetchRequest();

    }
    
    
    render() {
        return (

            <div className='wrapper'>
                {/*<AsyncMain/>*/}

            <ConnectedRouter history={history}>

                <div className='container'>
                    <div className='mainApp'>

                          <Search/>
                        {this.props.getPostReducer.length === 0 ?

                        <div className='override'>
                            <PacmanLoader
                                sizeUnit={"px"}
                                size={100}
                            />
                        </div>
                            :

                            <Switch>
                            <Route exact path='/' component={AsyncMain}/>
                            <Route path='/card' component={AsyncSinglePost}/>
                        </Switch> }


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
        },
    }
}

export default connect(MSTP, MDTP)(App);