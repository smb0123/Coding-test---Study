// https://school.programmers.co.kr/learn/courses/30/lessons/120909

// 2024-03-14
// 성공
function solution(n) {
  var answer = 0;

  answer = Math.sqrt(n) % 1 === 0 ? 1 : 2;

  return answer;
}
