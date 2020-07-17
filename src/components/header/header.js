import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {logOutUser} from '../../actions';

const Header=({isAuth, logOutUser})=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        {isAuth? <IsLogin logOutUser={logOutUser}/> : <UnLogin/>}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

const IsLogin=({logOutUser})=>{
    return(
            <React.Fragment>
                <li className="nav-item">
                    <Link className="nav-link" to="/friends">Friends</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/messages">Messages</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/search">Search</Link>
                </li>
                <li className="nav-item nav-link" onClick={()=>logOutUser()}>
                    Logout
                </li>
            </React.Fragment>
    );
};
const UnLogin=()=>{
    return(
        <React.Fragment>
            <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
            </li>
        </React.Fragment>
    );
};

const mapStateToProps=(state)=>{
    return{
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({
        logOutUser
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);