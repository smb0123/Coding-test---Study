// https://school.programmers.co.kr/learn/courses/30/lessons/120836

// 2024-03-13
function solution(n) {
  var answer = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer++;
    }
  }

  return answer;
}
