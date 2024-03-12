// https://school.programmers.co.kr/learn/courses/30/lessons/120583

// 2024-03-12
function solution(array, n) {
  var answer = 0;

  answer = array.filter((num) => num === n).length;

  return answer;
}
