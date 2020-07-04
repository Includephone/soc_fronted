import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const UserList =({userList = []})=>{
    return (
        <ul>
            {userList.map((user)=>{
                return (
                    <Link to={`/user/${user._id}`} key={user._id}>
                        <li>{user.name}</li>
                    </Link>
                )
            })}
        </ul>
    );
}

const mapStateToProps=(state)=>{
    return{
        userList: state.user.searchList
    }
}

export default connect(mapStateToProps)(UserList);