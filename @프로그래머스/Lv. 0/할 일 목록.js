// https://school.programmers.co.kr/learn/courses/30/lessons/181885

// 2024-03-21
// 성공
function solution(todo_list, finished) {
  var answer = [];

  answer = todo_list.filter((todo, idx) => !finished[idx]);

  return answer;
}
