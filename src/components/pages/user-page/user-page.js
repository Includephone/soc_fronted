import React from 'react';

const UserPage=({profile, friendStatus})=>{
    console.log(friendStatus);
    return(
        <div>
            <h2>{profile.info.name}</h2>
            {friendStatus}
        </div>
    )
}

export default UserPage;