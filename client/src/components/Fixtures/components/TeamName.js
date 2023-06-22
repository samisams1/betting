import React from "react";
import { BTTS } from "../../../betTypes";

const TeamName = ({ team, pastMatches, type }) => (
  <span className="flex-1 text-xs px-2">
    {team.name}
    <span className="text-gray-600 font-semibold pl-1">
      ({BTTS(pastMatches, team.id, type)})
    </span>
  </span>
);

export default TeamName;
