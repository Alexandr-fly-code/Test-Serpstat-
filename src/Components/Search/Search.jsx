import React from 'react';
import './Search.css';
import {connect} from 'react-redux';
import {getValueInput} from '../redux/actions/inputChangeAction';
import {search} from '../redux/actions/getPostsAction';

const Search = (props) => {

    function submitForm (e){
        e.preventDefault();
        props.search(props.inputChange)
    }
    return ( 
        <div className='search'>

                <form className="search__form" onSubmit={submitForm}>
                    <input type="text" className="search__input" placeholder="Search" onChange={props.getValueInput}/>
                    <input type="submit" className="search__btn" />
                </form>

        </div>
      );
};

function MSTP (store){
    return{
        inputChange: store.inputChange,
        addPostReducer: store.addPostReducer,
    }
}
function MDTP (dispatch){
    return {
        getValueInput: function(e){
            dispatch(getValueInput(e))
        },
        search: function (value){
            dispatch(search(value))
        }
    }
}

export default connect(MSTP, MDTP)(Search);