// https://school.programmers.co.kr/learn/courses/30/lessons/181852

// 2024-03-19
// 성공
function solution(num_list) {
  var answer = [];

  num_list.sort((a, b) => a - b);
  answer = num_list.slice(5);

  return answer;
}
