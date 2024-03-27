function solution(players, callings) {
  const obj = {};
  players.forEach((num, idx) => (obj[num] = idx));
  let idx = 0;
  for (let i = 0; i < callings.length; i++) {
    idx = obj[callings[i]];
    obj[callings[i]] -= 1;
    obj[players[idx - 1]] += 1;
    [players[idx - 1], players[idx]] = [players[idx], players[idx - 1]];
  }

  return players;
}

console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
);
