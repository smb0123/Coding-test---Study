// https://school.programmers.co.kr/learn/courses/30/lessons/120922

// 2024-04-03
// 성공
function solution(M, N) {
  var answer = 0;

  const min = Math.min(M, N);
  const max = Math.max(M, N);

  answer = min * max - 1;

  return answer;
}
