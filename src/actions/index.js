import {registerUser, loginUser, logOutUser, setCurrentUser} from './auth';
import {searchUser, profileInfo, getFriendStatus, updateFriendStatus, addToFriends, getFriendList} from './user';
import {getDialogs, getMessagesList, newMessage} from './message';

export {
    registerUser,
    loginUser,
    logOutUser,
    setCurrentUser,
    searchUser,
    profileInfo,
    getFriendStatus,
    updateFriendStatus,
    addToFriends,
    getFriendList,
    getDialogs,
    getMessagesList,
    newMessage
};