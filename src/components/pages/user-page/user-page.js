import React, { useState } from 'react';

const UserPage=({profile, friendStatus, newMessage, yourId})=>{
    const [newMessageText, changeNewMessage] = useState('');
    const sendMessage=(e)=>{
        /*messageList[0].dialog.user1 === id? (
            newMessage(id, messageList[0].dialog.user2, newMessageText)
        ) : (
            newMessage(id, messageList[0].dialog.user1, newMessageText)
        )*/
        e.preventDefault();
        changeNewMessage('');
    }
    return(
        <div>
            <h2>{profile.info.name}</h2>
            {friendStatus}
            <form className="form-inline justify-content-start mt-2" onSubmit={sendMessage}>
                <input className="form-control w-75" type="text" name="search" value={newMessageText} onChange={(e)=>changeNewMessage(e.target.value)}/>
                <button className="btn btn-primary ml-2" onClick={()=>newMessage(yourId, profile.info.id, newMessageText, false)}>Send message</button>
            </form>
        </div>
    )
}

export default UserPage;