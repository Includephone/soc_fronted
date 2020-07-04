import React, { useState } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {searchUser} from '../../../../actions';

const Search = ({searchUser})=>{
    const [value, changeValue] = useState('');
    const onSubmit=(e)=>{
        e.preventDefault();
        searchUser({
            search: value
        });
    }
    return(
        <form onSubmit={onSubmit}>
            <input type="text" name="search" value={value} onChange={(e)=>changeValue(e.target.value)}/>
            <button>Search</button>
        </form>
    )
}

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({
        searchUser
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(Search);