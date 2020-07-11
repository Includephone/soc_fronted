import axios from 'axios';

const getConservation=(userId)=>(dispatch)=>{
    axios.post('http://localhost:5000/api/messages/list', {
        user:userId
    })
    .then((res)=>{
        console.log('action conserv')
        dispatch({
            type: 'GET_CONSERVATION_LIST',
            payload: res.data.messages
        });
    })
    .catch(err=>console.log(err));
}

export {
    getConservation
}