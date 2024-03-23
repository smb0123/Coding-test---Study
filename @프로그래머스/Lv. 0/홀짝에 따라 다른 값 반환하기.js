// https://school.programmers.co.kr/learn/courses/30/lessons/181935

// 2024-03-20
// 성공
function solution(n) {
  var answer = 0;

  const isOdd = n % 2 === 1;

  for (let i = 1; i <= n; i++) {
    if (isOdd && i % 2 === 1) {
      answer += i;
      continue;
    }
    if (!isOdd && i % 2 === 0) {
      answer += i ** 2;
      continue;
    }
  }

  return answer;
}
