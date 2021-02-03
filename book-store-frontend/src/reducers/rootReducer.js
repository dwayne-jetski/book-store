import { combineReducers } from 'redux';
import typeReducer from './typeReducer'

export default combineReducers({
    type: typeReducer
});