// https://school.programmers.co.kr/learn/courses/30/lessons/181888

// 2024-03-19
// 성공
function solution(num_list, n) {
  var answer = [];

  for (let i = 0; i < num_list.length; i++) {
    if (i % n !== 0) continue;
    answer.push(num_list[i]);
  }

  return answer;
}
