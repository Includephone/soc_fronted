/* eslint-disable */
import React from 'react';
import {Link} from 'react-router-dom';
import './friends-page.css';

const FriendsPage=({items, id})=>{
    let linkId;
    let name;
    return(
        <ul>
            {items.map((item)=>{
                item.user1._id === id? (
                    linkId = item.user2._id,
                    name = item.user2.name
                ) : (
                    linkId = item.user1._id,
                    name = item.user1.name
                )
                return(
                    <Link to={`/user/${linkId}`} key={item._id}>{name}</Link>
                )
            })}
        </ul>
    )
}

export default FriendsPage;