import React from "react";
import NextGameweek from "../../components/NextGameweek";

const HomeLayout = () => (
  <div className="bg-gray-200 text-gray-600 p-4 antialiased">
    <header className="max-w-lg mx-auto  mb-6">
      <h1 className="mb-2">
        <span className="text-lg font-semibold">Bet Assist</span>
        <span className="text-xs block font-light">by Conor McAfee</span>
      </h1>

      <p className="inline-block font-semibold bg-gray-600 text-white text-xs uppercase tracking-wide p-1 mb-2">
        WIP: This Web App is in Sporadic Development
      </p>

      <p className="text-xs mb-2">
        The number in brackets beside the team name indicates the amount of{" "}
        <span className="font-semibold">Home</span> or{" "}
        <span className="font-semibold">Away</span> games that team has a scored
        at least 1 goal (or more).
      </p>

      <p className="text-xs mb-2">
        The number in the green box is the amount of games the{" "}
        <span className="font-semibold">Home</span> or{" "}
        <span className="font-semibold">Away</span> team was involved in a BTTS
        match whilst playing at <span className="font-semibold">Home</span> or{" "}
        <span className="font-semibold">Away</span>
      </p>
    </header>
    <NextGameweek />
  </div>
);

export default HomeLayout;
