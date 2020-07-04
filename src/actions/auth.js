import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';

const registerUser=(data)=>(dispatch)=>{
    axios.post('http://localhost:5000/api/users/register', data)
    .then((user)=>{
        //console.log(user.data);
    })
    .catch((err)=>console.log(err));
};
const loginUser=(data)=>(dispatch)=>{
    axios.post('http://localhost:5000/api/users/login', data)
    .then((res)=>{
        const {token} = res.data;
        localStorage.setItem('jwtToken', token);
        setAuthToken(token);
        const decoded=jwt_decode(token);
        //console.log(decoded);
        dispatch(setCurrentUser(decoded));
    })
    .catch((err)=>console.log(err));
};
const setCurrentUser=(decoded = false)=>{
    return{
        type:'SET_CURRENT_USER',
        payload: decoded
    };
};

const logOutUser=()=>(dispatch)=>{
    localStorage.removeItem('jwtToken');
    //console.log('removed');
    setAuthToken(false);
    dispatch(setCurrentUser(false));
};

export {
    registerUser,
    loginUser,
    logOutUser,
    setCurrentUser
};