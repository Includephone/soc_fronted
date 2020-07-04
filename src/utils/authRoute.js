import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const AuthRoute = ({auth, component: Component, ...par})=>{
    //console.log(Component);
    return <Route 
    {...par} 
    render={props=>
        auth? (
        <Component {...props}/>
        ) : (
            props.history.push('/login')
        )
    }/>
}

const mapStateToProps=(state)=>{
    return{
        auth: state.auth.isAuth
    }
}

export default withRouter(connect(mapStateToProps)(AuthRoute));