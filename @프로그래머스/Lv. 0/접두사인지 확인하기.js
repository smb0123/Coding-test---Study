// https://school.programmers.co.kr/learn/courses/30/lessons/181906

// 2024-03-19
// 성공
function solution(my_string, is_prefix) {
  var answer = 0;

  answer = my_string.startsWith(is_prefix) ? 1 : 0;

  return answer;
}
