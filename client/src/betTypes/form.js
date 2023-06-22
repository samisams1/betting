const WIN = 0;
const DRAW = 1;
const LOST = 2;

const findResult = (form, match) => {
  const HOME_TEAM = match.homeTeam.name;
  const AWAY_TEAM = match.awayTeam.name;

  if (match.score.winner === "HOME_TEAM") {
    form.map(team => team.name === HOME_TEAM && team.form.push(WIN));
    form.map(team => team.name === AWAY_TEAM && team.form.push(LOST));
  } else if (match.score.winner === "AWAY_TEAM") {
    form.map(team => team.name === AWAY_TEAM && team.form.push(WIN));
    form.map(team => team.name === HOME_TEAM && team.form.push(LOST));
  } else {
    form.map(team => team.name === HOME_TEAM && team.form.push(DRAW));
    form.map(team => team.name === AWAY_TEAM && team.form.push(DRAW));
  }
};

export const form = (teams, matches) => {
  let form = [];
  teams.map(team => form.push({ name: team, form: [] }));
  matches.map(match => findResult(form, match));
  return form;
};
