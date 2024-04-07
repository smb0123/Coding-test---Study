// https://school.programmers.co.kr/learn/courses/30/lessons/120880

// 2024-04-08
// 성공
function solution(numlist, n) {
  var answer = [];

  numlist.sort((a, b) => b - a);
  numlist.sort((a, b) => Math.abs(n - a) - Math.abs(n - b));

  answer = numlist;

  return answer;
}
