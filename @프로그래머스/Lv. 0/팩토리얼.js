// https://school.programmers.co.kr/learn/courses/30/lessons/120848

// 2024-03-22
// 실패
function solution(n) {
  var answer = 0;

  function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
  }

  for (let i = 1; i < n; i++) {
    if (factorial(i) > n) {
      answer = i - 1;
      break;
    }
  }

  return answer;
}
