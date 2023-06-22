import { defaultState } from "./actions";
import * as Types from "./types";

export default (state = defaultState, action) => {
  switch (action.type) {
    case Types.SET_PL_NEXT_GAMEWEEK:
      return {
        ...state,
        premierLeague: {
          ...state.premierLeague,
          fixtures: action.payload
        }
      };
    case Types.SET_CHAMP_NEXT_GAMEWEEK:
      return {
        ...state,
        championship: {
          ...state.championship,
          fixtures: action.payload
        }
      };
    default:
      return state;
  }
};
