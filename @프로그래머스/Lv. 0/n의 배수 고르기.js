// https://school.programmers.co.kr/learn/courses/30/lessons/120905

// 2024-03-15
function solution(n, numlist) {
  var answer = [];

  answer = numlist.filter((num) => num % n === 0);

  return answer;
}
