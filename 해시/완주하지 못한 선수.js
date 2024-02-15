function solution(participant, completion) {
  const map = new Map();

  for (const name of completion) {
    map.set(name, (map.get(name) || 0) + 1);
  }

  for (const name of participant) {
    const count = map.get(name);
    if (count === undefined || count === 0) {
      return name;
    } else {
      map.set(name, count - 1);
    }
  }
}

console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);
