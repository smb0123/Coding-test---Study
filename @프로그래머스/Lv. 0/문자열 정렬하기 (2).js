// https://school.programmers.co.kr/learn/courses/30/lessons/120911

// 2024-03-21
// 성공
function solution(my_string) {
  var answer = '';

  answer = [...my_string.toLowerCase()].sort().join('');

  return answer;
}
