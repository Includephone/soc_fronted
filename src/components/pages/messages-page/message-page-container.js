/* eslint-disable */
import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import useInterval from 'react-useinterval';
import {getDialogs, getMessagesList, newMessage} from '../../../actions';
import MessagePage from './message-page';

const MessagePageContainer=({dialogList, id, messageList, getDialogs, getMessagesList, newMessage})=>{
    const [loading, changeLoading] = useState(true);
    useEffect(()=>{
        dialogList.length>0? changeLoading(false) : getDialogs(id)
    }, [dialogList]);
    useInterval(()=>{
        getDialogs(id);
        messageList.length>0? (getMessagesList(messageList[0].dialog._id, id), console.log('getNewMessages')) : null;
    }, 3000);
    return (
    loading? (<h2>Message Loading</h2>) : (<MessagePage dialogList={dialogList} id={id} messageList={messageList} getMessagesList={getMessagesList} newMessage={newMessage}/>)
    );
}

const mapStateToProps=(state)=>{
    return{
        id: state.auth.user.id,
        dialogList: state.message.dialogList,
        messageList: state.message.messageList
    }
}

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({
        getDialogs,
        getMessagesList,
        newMessage
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagePageContainer);