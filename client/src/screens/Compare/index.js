import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CompareLayout from "./layout";
import { form } from "../../betTypes";
import * as StatsActions from "../../redux/reducers/stats/statsActions";

const Compare = ({
  stats,
  setPLStandings,
  setPLMatches,
  setChampStandings,
  setChampMatches,
  setStatsDate
}) => {
  const [compare, setCompare] = useState(false);
  const [homeTeam, setHomeTeam] = useState(null);
  const [awayTeam, setAwayTeam] = useState(null);

  const [league, setLeague] = useState("premierLeague");
  const [source, setSource] = useState(null);

  const [teams, setTeams] = useState([]);
  const [teamForm, setTeamForm] = useState([]);

  useEffect(() => {
    const fetchStandings = id => {
      fetch(`https://api.football-data.org/v2/competitions/${id}/standings`, {
        method: "get",
        headers: new Headers({
          "X-Auth-Token": `${process.env.REACT_APP_API_KEY}`
        })
      })
        .then(response => response.json())
        .then(data => {
          if (id === 2016) {
            const standings = data.standings[0].table;
            setChampStandings({
              loaded: true,
              data: standings
            });
          } else {
            const standings = data.standings[0].table;
            setPLStandings({
              loaded: true,
              data: standings
            });
          }
          const fetchDate = new Date();
          setStatsDate(fetchDate);
        })
        .catch(error => console.log(error.response));
    };

    const fetchMatches = id => {
      fetch(`https://api.football-data.org/v2/competitions/${id}/matches`, {
        method: "get",
        headers: new Headers({
          "X-Auth-Token": `${process.env.REACT_APP_API_KEY}`
        })
      })
        .then(response => response.json())
        .then(data => {
          if (id === 2016) {
            const matches = data.matches.filter(
              match => match.status === "FINISHED"
            );
            setChampMatches({
              loaded: true,
              data: matches
            });
          } else {
            const matches = data.matches.filter(
              match => match.status === "FINISHED"
            );
            setPLMatches({
              loaded: true,
              data: matches
            });
          }
          const fetchDate = new Date();
          setStatsDate(fetchDate);
        })
        .catch(error => console.log(error.response));
    };

    if (stats.date === "") {
      fetchStandings(2021);
      fetchMatches(2021);
      fetchStandings(2016);
      fetchMatches(2016);
    }
  }, [
    stats.date,
    setChampMatches,
    setPLMatches,
    setChampStandings,
    setPLStandings,
    setStatsDate
  ]);

  useEffect(() => {
    setSource(league);
  }, [league]);

  /*  Generate alphabetical list of teams for select dropdown, 
      this teams array is then used within the "form" function
  */
  useEffect(() => {
    if (source !== null) {
      if (stats[source].length > 0) {
        let getTeams = [];
        stats[source].map(team => getTeams.push(team.team.name));
        setTeams(getTeams.sort());
      }
    }
  }, [source, stats]);

  // Generate Form
  useEffect(() => {
    teams.length > 0 &&
      stats[source].length > 0 &&
      setTeamForm(form(teams, stats[source]));
  }, [source, stats, teams]);

  return (
    <CompareLayout
      compare={compare}
      toggleCompare={data => setCompare(data)}
      homeTeam={homeTeam}
      toggleHomeTeam={homeTeam => setHomeTeam(homeTeam)}
      awayTeam={awayTeam}
      toggleAwayTeam={awayTeam => setAwayTeam(awayTeam)}
      league={league}
      standings={
        source !== null && stats[source].standings.loaded
          ? stats[source].standings.data
          : []
      }
      toggleSetLeague={data => setLeague(data)}
      teamForm={teamForm}
    />
  );
};

const mapStateToProps = state => ({
  stats: state.stats
});

const mapDispatchToProps = dispatch => ({
  setPLStandings: standings => {
    dispatch(StatsActions.setPLStandings(standings));
  },
  setPLMatches: matches => {
    dispatch(StatsActions.setPLMatches(matches));
  },
  setChampStandings: standings => {
    dispatch(StatsActions.setChampStandings(standings));
  },
  setChampMatches: matches => {
    dispatch(StatsActions.setChampMatches(matches));
  },
  setStatsDate: date => {
    dispatch(StatsActions.setStatsDate(date));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Compare);
