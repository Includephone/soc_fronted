/* eslint-disable */
import React from 'react';
import {Link} from 'react-router-dom';

const DialogList=({dialogList, id, getMessagesList})=>{
    let name;
    let link;
    let className;
    return(
        <div className="col-4">
            <ul className="list-group">
                {dialogList.map((dialog)=>{
                    dialog.dialog.user1._id === id? (name = dialog.dialog.user2.name, link = dialog.dialog.user2._id) : (name = dialog.dialog.user1.name, link = dialog.dialog.user1._id);
                    dialog.sender._id != id && dialog.read === false ? className = 'list-group-item bg-info' : className='list-group-item';
                    return(
                        <li className={className} key={dialog._id} onClick={()=>getMessagesList(dialog._id, id)}>
                            <span>{name}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default DialogList;