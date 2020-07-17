import React from 'react';
import {Login, Register} from '../../auth';

const HomePage=({userInfo})=>{
    if(userInfo.isAuth){
        return(
            <p>Welcome back, {userInfo.user.name}</p>
        )
    } else{
        return(
                <div className="d-flex justify-content-around">
                    <div>
                        <h3>Login</h3>
                        <Login/>
                    </div>
                    <div>
                        <h3>Register</h3>
                        <Register/>
                    </div>
                </div>
        )
    }
}

export default HomePage;