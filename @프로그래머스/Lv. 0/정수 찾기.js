// https://school.programmers.co.kr/learn/courses/30/lessons/181840

// 2024-03-15
function solution(num_list, n) {
  var answer = 0;

  answer = num_list.some((num) => num === n) ? 1 : 0;

  return answer;
}
