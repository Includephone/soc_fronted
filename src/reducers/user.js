const initialState={
    searchList:[],
    profile: {
        info: {},
        friendStatus: null,
        from: null
    },
    friendList: []
}

export default (state=initialState, action)=>{
    switch(action.type){
        case 'USER_SEARCH_RESULT':
            console.log(state.searchList);
            return{
                ...state,
                searchList: action.payload
            };
        case 'PROFILE_INFO':
            //console.log('User-page-data');
            return {
                ...state,
                profile: {
                    ...state.profile,
                    info: action.payload
                }
            };
        case 'USER_FRIEND_STATUS':
                //console.log('friend status reducer');
            return{
                ...state,
                profile: {
                    ...state.profile,
                    friendStatus: action.payload.status,
                    from: action.payload.from
                }
            };
        case 'ADD_TO_FRIEND':
            return{
                ...state,
                profile: {
                    ...state.profile,
                    friendStatus: action.payload.status,
                    from: action.payload.from
                }
            };
        case 'UPDATE_FRIEND_STATUS':
            return{
                ...state,
                profile: {
                    ...state.profile,
                    friendStatus: action.payload.status
                }
            };
        case 'GET_FRIEND_LIST':
            return{
                ...state,
                friendList: action.payload
            };
        default:
            return state;
    }
}