// https://school.programmers.co.kr/learn/courses/30/lessons/120908

// 2024-03-13
function solution(str1, str2) {
  var answer = 0;

  answer = str1.includes(str2) ? 1 : 2;

  return answer;
}
