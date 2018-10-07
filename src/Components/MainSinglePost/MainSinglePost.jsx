import React from 'react';
import './MainSinglePost.css';
import {connect} from 'react-redux';
import MainSinglePostList from './MainSinglePostList/MainSinglePostList';


const MainSinglePost = (props) => {

    const {moreInfoReducer} = props;

    return ( 
        <div>
                <MainSinglePostList
                   title={moreInfoReducer.title} 
                   comment={moreInfoReducer.comments}
                   body={moreInfoReducer.body}
                   name={moreInfoReducer.name}
                   id={moreInfoReducer.id}
                   key={moreInfoReducer.name}
                   userId={moreInfoReducer.userId}
                />
            </div>
      );
};

function MSTP(store){
    return {
        moreInfoReducer: store.moreInfoReducer,
    }
}

export default connect(MSTP)(MainSinglePost);