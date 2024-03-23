// https://school.programmers.co.kr/learn/courses/30/lessons/181908

// 2024-03-20
// 성공
function solution(my_string, is_suffix) {
  var answer = 0;

  answer = Number(my_string.endsWith(is_suffix));

  return answer;
}
