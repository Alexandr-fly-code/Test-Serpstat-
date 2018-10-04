import React from 'react';
import './MainList.css';
import {connect} from 'react-redux';
import {moreInfoPost} from '../../redux/actions/moreInfoPostAction';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


const MainList = (props) => {
    
    function routeCard (){

        props.moreInfoPost(
            props.getReducerComments,
            props.getReducerUsers,
            props.getPostReducer,
            props.userId, 
            props.id
        );
    }
    const {title, body, id} = props;

    return ( 
        <div className='content'>

            <NavLink to={`/card/${id}`}>

                    <div className="artist-card" onClick={routeCard}>
                        <figure>
                             <figcaption>
                               <p className="artist-card__name">Title : {title} </p>
                              <p className="artist-card__number-albums">Text : {body}</p>
                              </figcaption>
                         </figure>
                     </div>

            </NavLink>

        </div>
      );
};

MainList.propTypes = {
    id: PropTypes.number.isRequired,
    body: PropTypes.string,
    title: PropTypes.string,
};
MainList.defaultProps = {
    id: 1,
    body: 'text',
    title: 'lorem',
};

function MSTP(store){
    return {
        getReducerComments: store.getReducerComments,
        getReducerUsers: store.getReducerUsers,
        getPostReducer: store.getPostReducer,
    }
}

function MDTP (dispatch){
    return {
        moreInfoPost: function (dataComments, dataUsers, dataPosts, userId, id){
            dispatch(moreInfoPost(dataComments, dataUsers, dataPosts, userId, id))
        },
    }
}

export default connect(MSTP, MDTP)(MainList);