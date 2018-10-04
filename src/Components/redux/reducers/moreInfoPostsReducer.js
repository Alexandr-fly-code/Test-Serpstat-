export default function moreInfoReducer (state = {}, action) {
    switch(action.type){
        case 'INFO_POST':
        const findUsers = action.dataUsers.find(el => el.id === action.userId);
        // console.log(findUsers)
        const findComments = action.dataComments.filter(el => el.postId === action.userId)
        .map(el => el.body);
        // console.log(findComments)
        const dataPosts = action.dataPosts.find(el => el.id === action.id);
        // console.log(dataPosts)

        const moreInfoCard = {
            title: dataPosts.title,
            body: dataPosts.body,
            name: findUsers.username,
            comments: findComments,
        }

        return moreInfoCard;
        default: return state;
    }
}