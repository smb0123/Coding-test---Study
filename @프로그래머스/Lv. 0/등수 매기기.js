// https://school.programmers.co.kr/learn/courses/30/lessons/120882

// 2024-04-06
// 성공
function solution(score) {
  var answer = [];

  const arr = score.map(([eng, math]) => (eng + math) / 2);

  let rank = 1;
  arr.sort((a, b) => b - a);

  const ranking = {};
  for (let i = 0; i < arr.length; i++) {
    if (!ranking[arr[i]]) {
      ranking[arr[i]] = rank;
    }
    rank++;
  }

  for (let i = 0; i < score.length; i++) {
    const [eng, math] = score[i];
    answer.push(ranking[(eng + math) / 2]);
  }

  return answer;
}
