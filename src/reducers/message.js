const initialState={
    dialogList: [],
    messageList: []
}

const updateMessageStatus=(dialogList, dialogId, userId)=>{
    const dialog = dialogList.findIndex((dialog)=>dialog._id===dialogId);
    if(dialogList[dialog].sender._id != userId){
        const newDialogList = dialogList;
        newDialogList[dialog] = {
            ...newDialogList[dialog],
            read: true
        }
        return newDialogList;
    }
    return false
}

export default (state=initialState, action)=>{
    switch(action.type){
        case 'GET_DIALOG_LIST':
            return {
                ...state,
                dialogList: action.payload
            }
        case 'GET_DIALOG_MESSAGES':
            const updatedDialogList = updateMessageStatus(state.dialogList, action.dialogId, action.userId);
            if(updatedDialogList){
                return {
                    ...state,
                    messageList: action.payload,
                    dialogList: updatedDialogList
                }
            }
            return{
                ...state,
                messageList: action.payload
            }
        default:
            return state;
    }
}