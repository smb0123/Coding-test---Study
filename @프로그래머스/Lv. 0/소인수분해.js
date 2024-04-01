// https://school.programmers.co.kr/learn/courses/30/lessons/120852

// 2024-03-29
// 성공
function solution(n) {
  var answer = [];

  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      if (i !== answer[answer.length - 1]) answer.push(i);
      n /= i;
    }
  }

  return answer;
}
