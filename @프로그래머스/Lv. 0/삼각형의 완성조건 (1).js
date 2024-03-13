// https://school.programmers.co.kr/learn/courses/30/lessons/120889

// 2024-03-13
function solution(sides) {
  var answer = 0;

  const max = Math.max(...sides);
  answer = sides.reduce((pre, curr) => pre + curr, 0) - max > max ? 1 : 2;

  return answer;
}
