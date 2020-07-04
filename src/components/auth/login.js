import React, {useState} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loginUser} from '../../actions';

const Login=({auth, loginUser})=>{
    const [email, changeEmail] = useState('');
    const [password, changePassword] = useState('');
    const onSubmit=(e)=>{
        e.preventDefault();
        loginUser({
            email,
            password
        })
    };
    return(
        <React.Fragment>
            <form onSubmit={onSubmit}>
                <div class="form-group">
                    <label for="exampleInputEmail">Email</label>
                    <input type="text" value={email} onChange={(e)=>changeEmail(e.target.value)} name="email" class="form-control" id="exampleInputEmail" placeholder="Email"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" value={password} onChange={(e)=>changePassword(e.target.value)} name="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <button className="btn btn-success" type="submit">Authorization</button>
            </form>
            <button onClick={()=>console.log(auth)}>console log</button>
        </React.Fragment>        
    );
};

const mapStateToProps=(state)=>{
    return{
        auth: state.auth
    }
}

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({
        loginUser
    }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);