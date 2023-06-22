import * as Types from "./types";

export const defaultState = {
  premierLeague: {
    fixtures: []
  },
  championship: {
    fixtures: []
  }
};

export const setPLNextGameweekFixtures = fixtures => ({
  type: Types.SET_PL_NEXT_GAMEWEEK,
  payload: fixtures
});
export const setChampNextGameweekFixtures = fixtures => ({
  type: Types.SET_CHAMP_NEXT_GAMEWEEK,
  payload: fixtures
});
