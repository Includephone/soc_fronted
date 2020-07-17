import React from 'react';
import {connect} from 'react-redux';
import HomePage from './home-page';

const HomePageContainer=({auth})=>{
    return(
        <HomePage userInfo={auth}/>
    )
}


const mapStateToProps=(state)=>{
    return{
        auth: state.auth
    }
}

export default connect(mapStateToProps)(HomePageContainer);