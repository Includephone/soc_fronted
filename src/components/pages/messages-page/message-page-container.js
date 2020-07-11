import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getConservation} from '../../../actions';
import MessagePage from './message-page';

const MessagePageContainer=({conservationList, id, getConservation})=>{
    const [loading, changeLoading] = useState(true);
    useEffect(()=>{
        conservationList.length>0? changeLoading(false) : getConservation(id)
    }, [conservationList]);
    return (
    loading? (<h2>Message Loading</h2>) : (<MessagePage conservationList={conservationList} id={id}/>)
    );
}

const mapStateToProps=(state)=>{
    return{
        id: state.auth.user.id,
        conservationList: state.message.conservationList
    }
}

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({
        getConservation
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagePageContainer);