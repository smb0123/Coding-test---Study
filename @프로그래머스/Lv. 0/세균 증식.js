// https://school.programmers.co.kr/learn/courses/30/lessons/120910

// 2024-03-13
function solution(n, t) {
  var answer = 0;

  answer = Array(t)
    .fill()
    .reduce((pre) => pre * 2, n);

  return answer;
}
