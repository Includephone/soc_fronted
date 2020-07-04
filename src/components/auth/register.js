import React, {useState, useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {registerUser} from '../../actions';

const Register=({registerUser})=>{
    const [name, changeName] = useState('');
    const [email, changeEmail] = useState('');
    const [password, changePassword] = useState('');
    const [password2, changePassword2] = useState('');
    const onSubmit=(event)=>{
        event.preventDefault();
        registerUser({
            name,
            email,
            password,
            password2
        });
    }
    return (
        <form onSubmit={onSubmit}>
            <div class="form-group">
                <label for="exampleInputPassword1">Name</label>
                <input type="text" value={name} onChange={(e)=>changeName(e.target.value)} name="password" class="form-control" id="exampleInputPassword1" placeholder="Name"/>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" value={email} onChange={(e)=>changeEmail(e.target.value)} name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" value={password} onChange={(e)=>changePassword(e.target.value)} name="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Repeat Password</label>
                <input type="password" value={password2} onChange={(e)=>changePassword2(e.target.value)} name="password2" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <button type="submit">Accept</button>
        </form>
    )
};

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({
        registerUser
    }, dispatch);
};
export default connect(null, mapDispatchToProps)(Register);