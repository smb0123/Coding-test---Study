// https://school.programmers.co.kr/learn/courses/30/lessons/120585

// 2024-03-12
function solution(array, height) {
  var answer = 0;

  answer = array.filter((item) => item > height).length;

  return answer;
}
