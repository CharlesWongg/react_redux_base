import { combineReducers } from 'redux';
import login from './Login';
import user from './Register'

const reducers = {
	login,
	user
};

export default combineReducers({
	...reducers
});