// https://school.programmers.co.kr/learn/courses/30/lessons/120899

// 2024-03-21
// 성공
function solution(array) {
  var answer = [];

  const max = Math.max(...array);
  answer = [max, array.indexOf(max)];

  return answer;
}
