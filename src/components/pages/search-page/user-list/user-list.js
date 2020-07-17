import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const UserList =({userList = []})=>{
    return (
        <ul className="list-group">
            {userList.map((user)=>{
                return (
                    <Link className="list-group-item text-center" to={`/user/${user._id}`} key={user._id}>
                        {user.name}
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