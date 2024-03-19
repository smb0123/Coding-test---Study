// https://school.programmers.co.kr/learn/courses/30/lessons/181853

// 2024-03-19
// 성공
function solution(num_list) {
  var answer = [];

  answer = num_list.sort((a, b) => a - b).slice(0, 5);

  return answer;
}
