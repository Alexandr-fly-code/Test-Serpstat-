import {
    FETCH_COMMENTS_SUCCESS,
} from '../constans';


export default function addReducerComments (state = [], action){
    switch(action.type){
        case FETCH_COMMENTS_SUCCESS:
        return [...action.data];


        case 'ADD_NEW_COMMENT':



            const obj = {
               postId: action.userId,
               id: action.idNew,
               name: '',
               email: '',
               body: action.value,
            };



            // localStorage.setItem('obj', JSON.stringify(obj.body));


            return [...state, obj];

        default: return state;
    }
}