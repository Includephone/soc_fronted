/* eslint-disable */
import React from 'react';
import {Link} from 'react-router-dom';
import './message-page.css';

const MessagePage=({conservationList, id})=>{
    let name;
    let link;
    return(
        <ul>
            {conservationList.map((conservation)=>{
                conservation.conservation.user1._id === id? (name = conservation.conservation.user2.name, link = conservation.conservation.user2._id) : (name = conservation.conservation.user1.name, link = conservation.conservation.user1._id)
                return(
                    <li key={conservation._id}>
                        <Link to={`user/${link}`}><span>{name}</span></Link>
                    <span>{conservation.sender.name}: &nbsp; {conservation.message}</span>
                    </li>
                )
            })}
        </ul>
    )
}

export default MessagePage;