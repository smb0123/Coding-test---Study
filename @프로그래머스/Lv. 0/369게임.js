// https://school.programmers.co.kr/learn/courses/30/lessons/120891

// 2024-03-21
// 실패
function solution(order) {
  var answer = 0;

  answer = [...order.toString()].filter((num) => num % 3 === 0).length;

  return answer;
}
