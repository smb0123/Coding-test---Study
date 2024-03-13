// https://school.programmers.co.kr/learn/courses/30/lessons/120831

// 2024-03-10
function solution(n) {
  var answer = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) continue;
    answer += i;
  }

  return answer;
}
