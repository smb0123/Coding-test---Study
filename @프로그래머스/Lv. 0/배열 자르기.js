// https://school.programmers.co.kr/learn/courses/30/lessons/120833

// 2024-03-13
// 실패
function solution(numbers, num1, num2) {
  var answer = [];

  answer = numbers.splice(num1, num2);

  return answer;
}

// 2024-03-13
// 성공
function solution(numbers, num1, num2) {
  var answer = [];

  answer = numbers.slice(num1, num2 + 1);

  return answer;
}
