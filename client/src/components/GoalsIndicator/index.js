import React from "react";
import GoalsIndicatorLayout from "./layout";

const GoalsIndicator = ({ pastMatches, team, type, isHomeTeam }) => (
  <GoalsIndicatorLayout
    pastMatches={pastMatches}
    team={team}
    type={type}
    isHomeTeam={isHomeTeam}
  />
);

export default GoalsIndicator;
