// https://school.programmers.co.kr/learn/courses/30/lessons/120835

// 2024-03-22
// 성공
function solution(emergency) {
  var answer = [];

  const arr = [...emergency].sort((a, b) => b - a);
  answer = emergency.map((v) => arr.indexOf(v) + 1);

  return answer;
}
