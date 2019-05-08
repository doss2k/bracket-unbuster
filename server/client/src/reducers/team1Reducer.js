import * as actionTypes from '../actions/actionTypes';

const initialState = [];
export const team1Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TEAM_1_STATS:
      return {
        ...state,
        team1stats: action.payload.data
      }

    default:
    return state;
  }
}

export default team1Reducer;