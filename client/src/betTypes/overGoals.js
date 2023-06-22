export const overGoals = (
  games,
  selectedTeam,
  selectedVenue,
  selectedGoals
) => {
  const gameTypeFilter = (fixture, selectedVenue) => {
    if (selectedVenue === "Both") {
      return (
        fixture.homeTeam.name === selectedTeam ||
        fixture.awayTeam.name === selectedTeam
      );
    } else if (selectedVenue === "Home") {
      return fixture.homeTeam.name === selectedTeam;
    } else {
      return fixture.awayTeam.name === selectedTeam;
    }
  };

  const matchAPI = (WIN, selectedVenue) => {
    if (selectedVenue === "Both") {
      return (
        (WIN.homeTeam.name === selectedTeam && WIN.score.fullTime.homeTeam) ||
        (WIN.awayTeam.name === selectedTeam && WIN.score.fullTime.awayTeam)
      );
    } else if (selectedVenue === "Home") {
      return WIN.homeTeam.name === selectedTeam && WIN.score.fullTime.homeTeam;
    } else {
      return WIN.awayTeam.name === selectedTeam && WIN.score.fullTime.awayTeam;
    }
  };

  const getTeamFixtures = games.filter(fixture =>
    gameTypeFilter(fixture, selectedVenue)
  );

  return getTeamFixtures.filter(
    win => matchAPI(win, selectedVenue) > selectedGoals
  ).length;
};
