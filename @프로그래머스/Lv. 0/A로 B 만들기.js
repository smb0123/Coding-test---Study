// https://school.programmers.co.kr/learn/courses/30/lessons/120886

// 2024-03-22
// 성공
function solution(before, after) {
  var answer = 0;

  answer = Number([...before].sort().join('') === [...after].sort().join(''));

  return answer;
}
