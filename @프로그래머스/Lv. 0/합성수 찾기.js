// https://school.programmers.co.kr/learn/courses/30/lessons/120846

// 2024-03-21
// 성공
function solution(n) {
  var answer = 0;

  for (let i = 4; i <= n; i++) {
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        answer++;
        break;
      }
    }
  }

  return answer;
}
