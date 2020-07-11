import {combineReducers} from 'redux';
import authReducer from './auth';
import userReducer from './user';
import messageReducer from './message';

const reducer= combineReducers({
    auth: authReducer,
    user: userReducer,
    message: messageReducer
});

export default reducer;