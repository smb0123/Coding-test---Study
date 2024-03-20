// https://school.programmers.co.kr/learn/courses/30/lessons/181891

// 2024-03-20
// 성공
function solution(num_list, n) {
  var answer = [];

  answer = [...num_list.slice(n), ...num_list.slice(0, n)];

  return answer;
}
