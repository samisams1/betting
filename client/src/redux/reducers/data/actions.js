import * as Types from "./types";
import { API_REST } from "../../types";

export const defaultState = {
  premierLeague: {
    standings: {
      loaded: false,
      data: []
    },
    matches: {
      loaded: false,
      data: []
    }
  },
  championship: {
    standings: {
      loaded: false,
      data: []
    },
    matches: {
      loaded: false,
      data: []
    }
  },
  date: ""
};

/* Action Creators */

export const getMatches = id => ({
  type: API_REST,
  payload: {
    label: "getMatches",
    id: id
  }
});

export const resetStatsData = () => {
  return {
    type: Types.RESET_STATS_DATA,
    payload: defaultState
  };
};

export const setPLStandings = standings => {
  return {
    type: Types.SET_PL_STANDINGS,
    payload: standings
  };
};

export const setPLMatches = matches => {
  return {
    type: Types.SET_PL_MATCHES,
    payload: matches
  };
};

export const setChampStandings = standings => {
  return {
    type: Types.SET_CHAMP_STANDINGS,
    payload: standings
  };
};

export const setChampMatches = matches => {
  return {
    type: Types.SET_CHAMP_MATCHES,
    payload: matches
  };
};

export const setStatsDate = date => {
  return {
    type: Types.SET_STATS_DATE,
    payload: date
  };
};
