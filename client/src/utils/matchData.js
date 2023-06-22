export const matchData = data => {
  if (data.length > 0) {
    return data.filter(match => match.status === "FINISHED");
  } else {
    return [];
  }
};
