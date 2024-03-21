// https://school.programmers.co.kr/learn/courses/30/lessons/120897

// 2024-03-21
// 성공
function solution(n) {
  var answer = [];

  for (let i = 1; i <= n / 2; i++) {
    if (n % i !== 0) continue;
    answer.push(i);
  }

  answer.push(n);

  return answer;
}
