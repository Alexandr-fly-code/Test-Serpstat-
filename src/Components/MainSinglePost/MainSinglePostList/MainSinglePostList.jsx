import React from 'react';

import './MainSinglePostList.css';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCommentInput} from '../../redux/actions/getCommentInputAction';
import {addNewCommet} from '../../redux/actions/getCommentsAction';
import {moreInfoPost} from '../../redux/actions/moreInfoPostAction';


const MainSinglePostList = (props) => {

        const {comment} = props;
        let resultData = [];

        function submitSingleForm (e) {
         e.preventDefault();

         localStorage.setItem('comment', JSON.stringify(props.getReducerComments));
         const getItemStorage = JSON.parse(localStorage.getItem('comment'));
         const filterItem = getItemStorage.filter(el => el.id === props.userId).map(el => el.body)
         resultData = [...comment, ...filterItem];

         props.moreInfoPost(
             props.getReducerComments,
             props.getReducerUsers,
             props.getPostReducer,
             props.userId,
             props.id,
             filterItem,
         );
     }

     function addComment(){

        props.addNewComment(props.getCommentInputReducer, props.userId, props.id);


    }

    return (


        <div className='MainSinglePostList'>

            <div className="single-card" >
                <figure>
                     <figcaption>
                        <p className="single-card__name "><span className='single-color'>UserName :</span> {props.name}</p>
                        <p className="single-card__name "><span className='single-color'>Title : </span>{props.title}</p>
                        <p className="single-card__number-albums "><span className='single-color'>Text : </span>{props.body}</p>
                         <p className="single-card__number-albums comment-center">
                             <span className='single-color'>Comments :</span> {comment.map(el =>
                             <p className="single-card__name color-comments">{el}</p>)}
                         </p>
                         <form onSubmit={submitSingleForm} className='add-new-comment'>
                             <input type="text" placeholder='your comment' onChange={props.getCommentInput} className='single-card__input'/>
                             <input type="submit" placeholder='add comment' onClick={addComment} className='single-card__btn'/>
                         </form>
                     </figcaption>
                </figure>

            </div>

        </div>
    );
};


MainSinglePostList.propTypes = {
    comment: PropTypes.array,
    body: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};
MainSinglePostList.defaultProps = {
    comment: ['lorem'],
    body: 'text',
    title: 'lorem',
    name: 'Alexandr'
};

function MSTP(store) {
    return {
        getCommentInputReducer: store.getCommentInputReducer,
        getReducerComments: store.getReducerComments,
        getReducerUsers: store.getReducerUsers,
        getPostReducer: store.getPostReducer,
    }
}

function MDTP(dispatch) {
    return {
        getCommentInput: function (e) {
            dispatch(getCommentInput(e.target.value))
        },
        addNewComment: function (value, id) {
            dispatch(addNewCommet(value, id))
        },
        moreInfoPost: function (dataComments, dataUsers, dataPosts, userId, id, newMass) {
            dispatch(moreInfoPost(dataComments, dataUsers, dataPosts, userId, id, newMass))
        },
    }
}

export default connect(MSTP, MDTP)(MainSinglePostList);
