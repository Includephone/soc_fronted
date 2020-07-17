/* eslint-disable */
import axios from 'axios';

const getDialogs=(userId)=>(dispatch)=>{
    axios.post('http://localhost:5000/api/messages/list', {
        user:userId
    })
    .then((res)=>{
        dispatch({
            type: 'GET_DIALOG_LIST',
            payload: res.data.messages
        });
    })
    .catch(err=>console.log(err));
}

const getMessagesList=(dialogId, userId)=>(dispatch)=>{
    axios.get(`http://localhost:5000/api/messages/getmesages/${dialogId}/${userId}`)
    .then((res)=>{
        dispatch({
            type: 'GET_DIALOG_MESSAGES',
            payload: res.data.messages,
            dialogId,
            userId
        })
    })
    .catch((err)=>console.log(err));
}

const newMessage=(fromId, toId, text, messageList)=>(dispatch)=>{
    axios.post('http://localhost:5000/api/messages/newmessage', {
        user1: fromId,
        user2: toId,
        text
    })
    .then((res)=>{
        messageList? dispatch(getMessagesList(res.data.result.dialog, fromId)) : null;
    })
    .catch((err)=>console.log(err));
}

export {
    getDialogs,
    getMessagesList,
    newMessage
}