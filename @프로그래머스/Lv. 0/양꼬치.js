// https://school.programmers.co.kr/learn/courses/30/lessons/120830

// 2024-03-13
function solution(n, k) {
  var answer = 0;

  const sheep = 12000;
  const drink = 2000;

  answer = n * sheep + drink * (k - Math.trunc(n / 10));

  return answer;
}
