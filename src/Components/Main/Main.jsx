import React from 'react';
import './Main.css';
import MainList from './MainList/MainList';
import {connect} from 'react-redux';


const Main = (props) => {

    const {getPostReducer} = props;

    return ( 
       <div className='mainList'>

        {getPostReducer.map(el =>
              <MainList

                title={el.title} 
                body={el.body} 
                key={el.id} 
                id={el.id} 
                userId={el.userId}

            />)
        }  
           
       </div>
      );
};

function MSTP(store){
    return {
        getPostReducer: store.getPostReducer,
    }
}

export default connect(MSTP)(Main);