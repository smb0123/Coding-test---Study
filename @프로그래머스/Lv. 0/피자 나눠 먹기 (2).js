// https://school.programmers.co.kr/learn/courses/30/lessons/120815

// 2024-03-21
// 성공
function solution(n) {
  var answer = 0;

  let pizza = 6;
  while (!answer) {
    if (pizza % n === 0) {
      answer = pizza / 6;
    }
    pizza += 6;
  }

  return answer;
}
