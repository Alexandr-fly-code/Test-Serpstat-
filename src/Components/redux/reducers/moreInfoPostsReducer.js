export default function moreInfoReducer (state = {}, action) {
    switch(action.type){
        case 'INFO_POST':
        const findUsers = action.dataUsers.find(el => el.id === action.userId);

        let findComments = action.dataComments.filter(el => el.postId === action.userId)
        .map(el => el.body);

            const dataPosts = action.dataPosts.find(el => el.id === action.id);

            const moreInfoCard = {
            title: dataPosts.title,
            body: dataPosts.body,
            name: findUsers.username,
            comments: findComments,
            id: action.id,
            userId: dataPosts.userId,
        };

        return moreInfoCard;


        default: return state;
    }
}