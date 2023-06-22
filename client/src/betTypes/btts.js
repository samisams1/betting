export const BTTS = (
  matches = [],
  teamId = 0,
  type = "",
  isHomeTeam = true
) => {
  const teamMatches = matches.filter(
    match => match.homeTeam.id === teamId || match.awayTeam.id === teamId
  );

  if (type === "home") {
    const homeGames = teamMatches.filter(match => match.homeTeam.id === teamId);
    return `${
      homeGames.filter(match => match.score.fullTime.homeTeam > 0).length
    }/${homeGames.length}`;
  } else if (type === "away") {
    const awayGames = teamMatches.filter(match => match.awayTeam.id === teamId);
    return `${
      awayGames.filter(match => match.score.fullTime.awayTeam > 0).length
    }/${awayGames.length}`;
  } else if (type === "both") {
    let games;
    if (isHomeTeam) {
      games = teamMatches.filter(match => match.homeTeam.id === teamId);
    } else {
      games = teamMatches.filter(match => match.awayTeam.id === teamId);
    }

    return `${
      games.filter(
        game =>
          game.score.fullTime.homeTeam > 0 && game.score.fullTime.awayTeam > 0
      ).length
    } / ${
      teamMatches.filter(
        match =>
          match.score.fullTime.homeTeam > 0 && match.score.fullTime.awayTeam > 0
      ).length
    }`;
  } else {
    return 0;
  }
};
