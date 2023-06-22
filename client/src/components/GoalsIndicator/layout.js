import React from "react";
import { BTTS } from "../../betTypes";
const GoalsIndicatorLayout = ({ pastMatches, team, type, isHomeTeam }) => (
  <span className="[ flex flex-none items-center justify-center ][ text-white bg-green-500 font-bold ][ text-xxs ][ h-5 w-10 rounded-sm ]">
    {BTTS(pastMatches, team, type, isHomeTeam)}
  </span>
);

export default GoalsIndicatorLayout;
