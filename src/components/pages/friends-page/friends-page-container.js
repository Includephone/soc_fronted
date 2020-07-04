import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getFriendList} from '../../../actions';
import FriendsPage from './friends-page';

const FriendsPageContainer=({friendList, id, getFriendList})=>{
    const [loading, changeLoading] = useState(true);
    useEffect(()=>{
        friendList.length>0? changeLoading(false) : getFriendList(id)
    }, [friendList]);
    return(
        loading? (<h2>FriendList is loading</h2>) : (<FriendsPage items={friendList} id={id}/>)
    )
}

const mapStateToProps=(state)=>{
    return {
        friendList : state.user.friendList,
        id: state.auth.user.id
    }
}

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({
        getFriendList
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsPageContainer);