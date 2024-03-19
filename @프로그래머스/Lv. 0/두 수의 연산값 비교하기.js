// https://school.programmers.co.kr/learn/courses/30/lessons/181938

// 2024-03-19
// 성공
function solution(a, b) {
  var answer = 0;

  const str = Number(a.toString() + b);
  const cal = 2 * a * b;

  answer = str > cal ? str : cal;

  return answer;
}
