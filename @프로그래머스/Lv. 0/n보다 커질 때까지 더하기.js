// https://school.programmers.co.kr/learn/courses/30/lessons/181884

// 2024-03-19
// 성공
function solution(numbers, n) {
  var answer = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (answer > n) break;
    answer += numbers[i];
  }

  return answer;
}
