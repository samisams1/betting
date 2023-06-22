import { defaultState } from "./actions";
import * as Types from "./types";

export default (state = defaultState, action) => {
  switch (action.type) {
    case Types.RESET_STATS_DATA:
      return {
        ...action.payload
      };
    case Types.SET_PL_STANDINGS:
      return {
        ...state,
        premierLeague: {
          ...state.premierLeague,
          standings: { ...action.payload }
        }
      };
    case Types.SET_PL_MATCHES:
      return {
        ...state,
        premierLeague: {
          ...state.premierLeague,
          matches: { ...action.payload }
        }
      };
    case Types.SET_CHAMP_STANDINGS:
      return {
        ...state,
        championship: {
          ...state.championship,
          standings: { ...action.payload }
        }
      };
    case Types.SET_CHAMP_MATCHES:
      return {
        ...state,
        championship: { ...state.championship, matches: { ...action.payload } }
      };
    case Types.SET_STATS_DATE:
      return {
        ...state,
        date: action.payload
      };
    default:
      return state;
  }
};
