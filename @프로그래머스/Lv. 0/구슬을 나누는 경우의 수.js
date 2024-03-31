// https://school.programmers.co.kr/learn/courses/30/lessons/120840

// 2024-03-31
// 실패
function solution(balls, share) {
  var answer = 0;

  function factorial(n) {
    if (n === 1) return 1;

    return n * factorial(n - 1);
  }

  answer = factorial(balls) / (factorial(balls - share) * factorial(share));

  return answer;
}

// 2024-03-31
// 성공
function solution(balls, share) {
  var answer = 0;

  function factorial(n) {
    if (n <= 1) return 1;

    return n * factorial(n - 1);
  }

  answer = Math.round(
    factorial(balls) / (factorial(balls - share) * factorial(share))
  );

  return answer;
}
