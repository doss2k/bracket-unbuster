import { combineReducers } from 'redux';
import teamsReducer from './teamsReducer';

const rootReducer = combineReducers({ teamsReducer });

export default rootReducer;