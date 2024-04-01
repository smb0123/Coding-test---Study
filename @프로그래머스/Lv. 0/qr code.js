// https://school.programmers.co.kr/learn/courses/30/lessons/181903

// 2024-03-26
// 성공
function solution(q, r, code) {
  var answer = '';

  answer = [...code].filter((_, i) => i % q === r).join('');

  return answer;
}
