import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchTeams = async () => {
  const request = await axios.get('http://localhost:8000/api/ncaa2019');
  console.log(request)
  return {
    type: actionTypes.GET_ALL_TEAMS,
    payload: request
  }
}