/* eslint-disable */
import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import UserPage from './user-page';
import {profileInfo, getFriendStatus, updateFriendStatus, addToFriends, newMessage} from '../../../actions';

const UserPageContainer=({profile, yourId, match, profileInfo, getFriendStatus, updateFriendStatus, addToFriends, newMessage})=>{
    const [loading, changeLoading] = useState(true);
    const id = match.params.id;
    useEffect(()=>{
        profile.info.id === id? changeLoading(false): (
            profileInfo(id),
            getFriendStatus(yourId, match.params.id)
            );
    }, [profile.info]);

    const IsFriends=({info, yourId})=>{
        return (
            <button className="btn btn-primary" onClick={()=>updateFriendStatus({id1:yourId, id2:info.id}, false)}>Delete from friends</button>
        )
    }
    
    const WaitFriend=({info, yourId})=>{
        if(info.from){
            return (
            <h2>Awaiting confirmation</h2>
            )
        }
        return (
            <React.Fragment>
                <button className="btn btn-primary" onClick={()=>updateFriendStatus({id1:yourId, id2:info.info.id}, true)}>Accept request</button>
                <button className="btn btn-primary" onClick={()=>updateFriendStatus({id1:yourId, id2:info.info.id}, false)}>Decline request</button>
            </React.Fragment>
        )
    }

    const NotFriends=({info, yourId})=>{
        return <button className="btn btn-primary" onClick={()=>addToFriends({id1: yourId, id2: info.id})}>Add to friend</button>
    }

    const friendStatus=(profile)=>{
        switch(profile.friendStatus){
            case false:
                return <WaitFriend info={profile} yourId={yourId}/>;
            case true:
                return <IsFriends info={profile.info} yourId={yourId}/>
            default:
                return <NotFriends info={profile.info} yourId={yourId}/>;
        }
    }
    return(
        loading? (<h2>Profile is not loading</h2>)
        : (<UserPage profile={profile} friendStatus={friendStatus(profile)} newMessage={newMessage} yourId={yourId}/>)
    )
}

const mapStateToProps=(state)=>{
    return{
        yourId: state.auth.user.id,
        profile: state.user.profile
    }
}

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({
        profileInfo,
        getFriendStatus,
        updateFriendStatus,
        addToFriends,
        newMessage
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPageContainer);