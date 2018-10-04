export default function getValue (state = '', action){
    switch (action.type){
        case 'GET_VALUE':
        return action.value;
        default: return state;
    }
}