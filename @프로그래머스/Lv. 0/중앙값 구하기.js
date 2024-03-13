// https://school.programmers.co.kr/learn/courses/30/lessons/120811

// 2024-03-13
// 성공
function solution(array) {
  var answer = 0;

  array.sort((a, b) => a - b);

  answer = array[Math.trunc(array.length / 2)];

  return answer;
}
