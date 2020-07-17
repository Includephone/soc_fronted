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
        <form className="form-inline justify-content-center" onSubmit={onSubmit}>
            <input className="form-control w-75" type="text" name="search" value={value} onChange={(e)=>changeValue(e.target.value)}/>
            <button className="btn btn-primary ml-2">Search</button>
        </form>
    )
}

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({
        searchUser
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(Search);