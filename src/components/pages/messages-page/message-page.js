import React from 'react';
import DialogList from './dialog-list';
import MessageList from './message-list';
import './message-page.css';

const MessagePage=({dialogList, id, messageList, getMessagesList, newMessage})=>{
    return(
        <div className="row">
            <DialogList dialogList={dialogList} id={id} getMessagesList={getMessagesList}/>
            <MessageList messageList={messageList} id={id} newMessage={newMessage}/>
        </div>
    )
}

export default MessagePage;