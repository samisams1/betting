import { API_REST } from "../redux/types";
import {
  setChampMatches,
  setPLMatches,
  setStatsDate
} from "../redux/reducers/data/actions";
import {
  setPLNextGameweekFixtures,
  setChampNextGameweekFixtures
} from "../redux/reducers/nextGameweek/actions";
import { matchData, nextGameweek } from "../utils";

const apiRest = ({ dispatch, getState }) => next => action => {
  if (action.type !== API_REST) {
    return next(action);
  }

  let path, endpoint;
  const { label, id } = action.payload;

  if (!label) {
    throw Error(
      "payload 'label' must be specififed for API_REST middleware action types"
    );
  }

  let url = `https://api.football-data.org/v2/`;

  let headers = new Headers({
    "X-Auth-Token": `${process.env.REACT_APP_API_KEY}`
  });

  switch (label) {
    case "getMatches":
      path = `/competitions/${id}/matches`;
      endpoint = url + path;

      fetch(endpoint, {
        method: "get",
        headers: headers
      })
        .then(response => response.json())
        .then(data => {
          if (id === 2016) {
            const matches = data.matches;
            dispatch(setChampNextGameweekFixtures(nextGameweek(matches)));
            dispatch(
              setChampMatches({
                loaded: true,
                data: matchData(matches)
              })
            );
          } else {
            const matches = data.matches;
            dispatch(setPLNextGameweekFixtures(nextGameweek(matches)));
            dispatch(
              setPLMatches({
                loaded: true,
                data: matchData(matches)
              })
            );
          }
          const fetchDate = new Date();
          dispatch(setStatsDate(fetchDate));
        })
        .catch(error => console.log(error.response));

      break;

    default:
      alert("Something went wrong");
      break;
  }
};

export default apiRest;
