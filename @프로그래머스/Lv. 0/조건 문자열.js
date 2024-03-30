// https://school.programmers.co.kr/learn/courses/30/lessons/181934

// 2024-03-30
// 성공
function solution(ineq, eq, n, m) {
  var answer = 0;

  if (ineq === '<') {
    answer = eq === '=' ? n <= m : n < m;
  } else {
    answer = eq === '=' ? n >= m : n > m;
  }

  answer = Number(answer);

  return answer;
}
