function solution(rank, attendance) {
  var answer = 0;
  const order = {};
  rank.forEach((people, idx) => (order[people] = idx));
  const filterRank = rank.filter((people, idx) => attendance[idx] === true);
  filterRank.sort((a, b) => a - b);
  answer =
    order[filterRank[0]] * 10000 +
    order[filterRank[1]] * 100 +
    order[filterRank[2]];
  return answer;
}

console.log(
  solution([3, 7, 2, 5, 4, 6, 1], [false, true, true, true, true, false, false])
);
