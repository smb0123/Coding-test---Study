// https://school.programmers.co.kr/learn/courses/30/lessons/181899

// 2024-03-18
// 성공
function solution(start, end_num) {
  var answer = [];

  for (let i = start; i >= end_num; i--) {
    answer.push(i);
  }

  return answer;
}
