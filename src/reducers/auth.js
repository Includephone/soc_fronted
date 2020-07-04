const initialState={
    isAuth: false,
    user: {}
};

export default (state=initialState, action)=>{
    switch(action.type){
        case 'SET_CURRENT_USER':
            //console.log('Reducer login');
        if(action.payload){
            return {
                ...state,
                isAuth:true,
                user: action.payload
            }
        }else{
            return{
                ...state,
                isAuth: false,
                user:action.payload
            }
        }
        
        default:
            return state;
    };
};