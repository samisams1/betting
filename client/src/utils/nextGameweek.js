export const nextGameweek = data => {
  if (data.length > 0) {
    const currentMatchday = data[0].season.currentMatchday;
    const nextMatchday = currentMatchday + 1;
    return data.filter(match => match.matchday === nextMatchday);
  } else {
    return [];
  }
};
