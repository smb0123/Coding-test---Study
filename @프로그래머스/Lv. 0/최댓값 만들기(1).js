// https://school.programmers.co.kr/learn/courses/30/lessons/120847

// 2024-03-13
// 성공
function solution(numbers) {
  var answer = 0;

  numbers.sort((a, b) => b - a);

  answer = numbers[0] * numbers[1];

  return answer;
}
