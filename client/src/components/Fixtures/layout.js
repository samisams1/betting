import React from "react";
import GoalsIndictor from "../GoalsIndicator";
import { TeamName } from "./components";

const FixturesLayout = ({ title, matches, pastMatches }) => (
  <section className="max-w-lg mx-auto mb-8 shadow-md">
    <h3 className="bg-green-500 font-semibold text-sm text-white p-2 border-b-2 border-green-600 rounded-t-sm">
      {title}
    </h3>
    <ul className="w-full bg-white rounded-b-sm">
      {matches.map((match, index) => (
        <li
          key={index}
          className="flex items-center justify-between p-2 border-gray-200 border-b-2 border-solid"
        >
          <TeamName
            team={match.homeTeam}
            pastMatches={pastMatches}
            type="home"
          />

          <div className="flex flex-1 items-center justify-center">
            <GoalsIndictor
              pastMatches={pastMatches}
              team={match.homeTeam.id}
              type="both"
              isHomeTeam={true}
            />
            <span className="text-xs px-2 font-light">vs</span>
            <GoalsIndictor
              pastMatches={pastMatches}
              team={match.awayTeam.id}
              type="both"
              isHomeTeam={false}
            />
          </div>
          <TeamName
            team={match.awayTeam}
            pastMatches={pastMatches}
            type="away"
          />
        </li>
      ))}
    </ul>
  </section>
);

export default FixturesLayout;
