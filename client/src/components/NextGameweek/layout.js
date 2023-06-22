import React, { Fragment } from "react";
import Fixtures from "../Fixtures";

const NextGameweekLayout = ({
  premierLeague,
  pastPremierLeague,
  championship,
  pastChampionship
}) => {
  return (
    <Fragment>
      <Fixtures
        title="Premier League"
        matches={premierLeague}
        pastMatches={pastPremierLeague}
      />
      <Fixtures
        title="Championship"
        matches={championship}
        pastMatches={pastChampionship}
      />
    </Fragment>
  );
};

export default NextGameweekLayout;
