// https://school.programmers.co.kr/learn/courses/30/lessons/120868

// 2024-03-31
// 성공
function solution(sides) {
  var answer = 0;

  const [a, b] = sides.sort((a, b) => a - b);

  for (let i = b - a + 1; i <= b; i++) {
    answer++;
  }

  for (let i = b + 1; i < a + b; i++) {
    answer++;
  }

  return answer;
}
