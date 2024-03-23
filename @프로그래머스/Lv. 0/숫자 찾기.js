// https://school.programmers.co.kr/learn/courses/30/lessons/120904

// 2024-03-21
// 성공
function solution(num, k) {
  var answer = 0;

  answer = num.toString().indexOf(k);

  if (answer > -1) answer++;

  return answer;
}
