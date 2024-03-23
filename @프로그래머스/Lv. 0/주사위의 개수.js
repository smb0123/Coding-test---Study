// https://school.programmers.co.kr/learn/courses/30/lessons/120845

// 2024-03-21
// 성공
function solution(box, n) {
  var answer = 0;

  answer = box.reduce((pre, curr) => pre * Math.trunc(curr / n), 1);

  return answer;
}
