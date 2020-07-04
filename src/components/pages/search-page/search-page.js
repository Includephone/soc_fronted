import React from 'react';
import './search-page.css';
import Search from './search';
import UserList from './user-list';

const SearchPage=()=>{
    return(
        <div>
            <Search/>
            <UserList/>
        </div>
    )
}

export default SearchPage;