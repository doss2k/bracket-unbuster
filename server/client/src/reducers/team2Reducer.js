import * as actionTypes from '../actions/actionTypes';

const initialState = [];
export const team2Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TEAM_2_STATS:
      return {
        ...state,
        team2stats: action.payload.data
      }

    default:
    return state;
  }
}

export default team2Reducer;