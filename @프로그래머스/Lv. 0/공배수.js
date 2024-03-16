// https://school.programmers.co.kr/learn/courses/30/lessons/181936

// 2024-03-16
// 성공
function solution(number, n, m) {
  var answer = 0;

  answer = number % n === 0 && number % m === 0 ? 1 : 0;

  return answer;
}
