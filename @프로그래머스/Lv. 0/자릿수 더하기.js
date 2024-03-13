// https://school.programmers.co.kr/learn/courses/30/lessons/120906

// 2024-03-13
function solution(n) {
  var answer = 0;

  answer = n
    .toString()
    .split('')
    .reduce((pre, curr) => Number(pre) + Number(curr), 0);

  return answer;
}
