import { combineReducers } from 'redux';
import registrationReducer from './registration.reducer'
import usersReducer from './users.reducer';
import authenticationReducer from './authentication.reducer';
import alertReducer from './alert.reducer';

export default combineReducers({
    alerts: alertReducer,
    authentication: authenticationReducer,
    register: registrationReducer,
    user: usersReducer,
})