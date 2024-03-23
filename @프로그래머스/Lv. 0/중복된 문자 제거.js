// https://school.programmers.co.kr/learn/courses/30/lessons/120888

// 2024-03-22
// 성공
function solution(my_string) {
  var answer = '';

  answer = [...new Set(my_string)].join('');

  return answer;
}
