import React from "react";
import { connect } from "react-redux";
import NextGameweekLayout from "./layout";

const NextGameweek = ({ fixtures, pastFixtures }) => {
  const { premierLeague, championship } = fixtures;
  return (
    <NextGameweekLayout
      premierLeague={premierLeague.fixtures}
      pastPremierLeague={pastFixtures.premierLeague.matches.data}
      championship={championship.fixtures}
      pastChampionship={pastFixtures.championship.matches.data}
    />
  );
};

const mapStateToProps = state => ({
  fixtures: state.nextGameweek,
  pastFixtures: state.data
});

export default connect(mapStateToProps, null)(NextGameweek);
