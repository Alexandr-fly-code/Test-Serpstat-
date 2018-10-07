export default function getSearchValue (state = '', action){
    switch (action.type){
        case 'GET_VALUE':
                return action.value;
        default: return state;
    }
}