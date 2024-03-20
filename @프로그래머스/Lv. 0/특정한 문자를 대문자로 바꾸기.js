// https://school.programmers.co.kr/learn/courses/30/lessons/181873

// 2024-03-20
// 성공
function solution(my_string, alp) {
  var answer = '';

  answer = my_string.replaceAll(alp, alp.toUpperCase());

  return answer;
}
