// https://school.programmers.co.kr/learn/courses/30/lessons/120817

// 2024-03-10
function solution(numbers) {
  var answer = 0;

  for (let i = 0; i < numbers.length; i++) {
    answer += numbers[i];
  }

  answer /= numbers.length;

  return answer;
}
