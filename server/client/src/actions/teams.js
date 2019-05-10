import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchAllTeams = async () => {
  const request = await axios.get('/api/ncaa2019');
  return {
    type: actionTypes.GET_ALL_TEAMS,
    payload: request
  }
}

export const fetchTeam1Stats = async (teamName) => {
  const request = await axios.get(`/api/ncaa2019/${teamName}`);
  return {
    type: actionTypes.GET_TEAM_1_STATS,
    payload: request
  }
}

export const fetchTeam2Stats = async (teamName) => {
  const request = await axios.get(`/api/ncaa2019/${teamName}`);
  return {
    type: actionTypes.GET_TEAM_2_STATS,
    payload: request
  }
}