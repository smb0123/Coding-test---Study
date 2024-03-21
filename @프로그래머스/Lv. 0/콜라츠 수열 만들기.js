// https://school.programmers.co.kr/learn/courses/30/lessons/181919

// 2024-03-21
// 성공
function solution(n) {
  var answer = [];

  answer.push(n);
  while (n !== 1) {
    n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    answer.push(n);
  }

  return answer;
}
