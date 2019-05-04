import * as actionTypes from '../actions/actionTypes';

const initialState = {}
export const teamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_TEAMS:
      return {
        ...state,
        teams: action.payload.data
      }

    default:
    return state;
  }
}

export default teamsReducer;