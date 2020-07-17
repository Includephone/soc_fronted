/* eslint-disable */
import React, {useState} from 'react';

const MessageList=({id, newMessage, messageList = []})=>{
    let className1;
    let className2;
    const [newMessageText, changeNewMessage] = useState('');
    const sendMessage=()=>{
        messageList[0].dialog.user1 === id? (
            newMessage(id, messageList[0].dialog.user2, newMessageText, true)
        ) : (
            newMessage(id, messageList[0].dialog.user1, newMessageText, true)
        )
    }
    return(
        <div className="col-8">
            {messageList.map((message)=>{
                message.sender._id === id? (
                    className1='d-flex justify-content-start mb-1',
                    className2='msg-from'
                ) : (
                    className1='d-flex justify-content-end mb-1',
                    className2='msg-to'
                )
                return(
                    <div className={className1} key={message._id}>
                        <div className={className2}>
                        {message.sender.name}: &nbsp; {message.message}
                        </div>
                    </div>
                )
            })}
            {messageList.length>0? (<form className="form-inline justify-content-center" onSubmit={(e)=>e.preventDefault()}>
                <input className="form-control w-75" type="text" name="search" value={newMessageText} onChange={(e)=>changeNewMessage(e.target.value)}/>
                <button className="btn btn-primary ml-2" onClick={sendMessage}>Send</button>
            </form>): (null)}
        </div>
    )
}

export default MessageList;