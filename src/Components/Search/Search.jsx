import React from 'react';
import './Search.css';
import {connect} from 'react-redux';
import {getSearchValueInput} from '../redux/actions/inputSearchAction';
import {search} from '../redux/actions/getPostsAction';

const Search = (props) => {

    function submitForm (e){
        e.preventDefault();
        if (e.target.value !== ''){
            props.search(props.inputSearchReducer)
        }else {
            alert('Enter the word');
        }
    }
    return ( 
        <div className='search'>

                <form className="search__form" onSubmit={submitForm}>
                    <input type="text" className="search__input" placeholder="Search" onChange={props.getSearchValueInput}/>
                    <input type="submit" className="search__btn" />
                </form>

        </div>
      );
};

function MSTP (store){
    return{
        inputSearchReducer: store.inputSearchReducer,
        addPostReducer: store.addPostReducer,
    }
}
function MDTP (dispatch){
    return {
        getSearchValueInput: function(e){
            dispatch(getSearchValueInput(e))
        },
        search: function (value){
            dispatch(search(value))
        }
    }
}

export default connect(MSTP, MDTP)(Search);