// https://school.programmers.co.kr/learn/courses/30/lessons/181862

// 2024-03-25
// 성공
function solution(myStr) {
  var answer = [];

  answer = myStr.split(/a|b|c/).filter((v) => v);

  if (answer.length === 0) answer.push('EMPTY');

  return answer;
}
