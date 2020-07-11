import axios from 'axios';

const searchUser=(data)=>(dispatch)=>{
    axios.post(`http://localhost:5000/api/users/find`, data)
    .then((res)=>{
        dispatch({
            type: 'USER_SEARCH_RESULT',
            payload: res.data.result
        });
    })
    .catch(err=>console.log(err));
}

const profileInfo=(id)=>(dispatch)=>{
    axios.get(`http://localhost:5000/api/users/${id}`)
    .then((res)=>{
        //console.log(res.data.user);
        dispatch({
            type:'PROFILE_INFO',
            payload: res.data.user
        });
    })
    .catch(err=>console.log(err))
}

const getFriendStatus=(id1, id2)=>(dispatch)=>{
    
    axios.post(`http://localhost:5000/api/friends/status`, {
        user1: id1,
        user2: id2
    })
    .then((res)=>{
        let from;
        res.data.from === id1? from = true : from = false;
        dispatch({
            type: 'USER_FRIEND_STATUS',
            payload: {
                status: res.data.status,
                from
            }
        });
    })
    .catch((err)=>console.log(err));
}

const addToFriends=(ids)=>(dispatch)=>{
    axios.post('http://localhost:5000/api/friends/add', {
        user1: ids.id1,
        user2: ids.id2
    })
    .then((res)=>{
        dispatch({
            type:'ADD_TO_FRIEND',
            payload: {
                status: false,
                from: ids.id1
            }
        })
    })
    .catch((err)=>console.log(err));
}

const updateFriendStatus=(ids, action)=>(dispatch)=>{
    axios.put('http://localhost:5000/api/friends/edit', {
        user1: ids.id1,
        user2: ids.id2,
        action
    })
    .then((res)=>{
        dispatch({
            type: 'UPDATE_FRIEND_STATUS',
            payload: {
                status: res.data.status
            }
        })
    })
    .catch((err)=>console.log(err))
}

const getFriendList=(id)=>(dispatch)=>{
    axios.post('http://localhost:5000/api/friends/list', {
        id
    })
    .then((res)=>{
        dispatch({
            type:'GET_FRIEND_LIST',
            payload: res.data.result
        })
    })
    .catch((err)=>console.log(err));
}

export{
    searchUser,
    profileInfo,
    getFriendStatus,
    updateFriendStatus,
    addToFriends,
    getFriendList
}