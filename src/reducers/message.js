const initialState={
    conservationList: [],
    messageList: []
}

export default (state=initialState, action)=>{
    switch(action.type){
        case 'GET_CONSERVATION_LIST':
            console.log('conserv');
            return {
                ...state,
                conservationList: action.payload
            }
        default:
            return state;
    }
}