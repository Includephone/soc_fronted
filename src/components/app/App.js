import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from '../header';
import {Register, Login} from '../auth';
import store from '../../store';
import jwt_decode from 'jwt-decode';
import {Provider} from 'react-redux';
import SearchPage from '../pages/search-page';
import UserPageContainer from '../pages/user-page';
import FriendsPageContainer from '../pages/friends-page';
import AuthRoute from '../../utils/authRoute';
import setAuthToken from '../../utils/setAuthToken';
import { logOutUser, setCurrentUser } from '../../actions';

if(localStorage.jwtToken){
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now()/1000;
  if(decoded.exp<currentTime){
    store.dispatch(logOutUser);
    window.location.href="/";
  }
}

const App=()=>{
  return (
    <Provider store={store}>
      <div className="component">
        <Router>
          <Header/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <AuthRoute path="/search" component={SearchPage}/>
          <AuthRoute path="/user/:id" component={UserPageContainer}/>
          <AuthRoute path="/friends" component={FriendsPageContainer}/>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
