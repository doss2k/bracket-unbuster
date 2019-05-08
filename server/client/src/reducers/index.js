import { combineReducers } from 'redux';
import teamsReducer from './teamsReducer';
import team1Reducer from './team1Reducer';
import team2Reducer from './team2Reducer';

const rootReducer = combineReducers({ teamsReducer, team1Reducer, team2Reducer });

export default rootReducer;