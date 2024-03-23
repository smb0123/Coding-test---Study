// https://school.programmers.co.kr/learn/courses/30/lessons/181878

// 2024-03-20
// 성공
function solution(myString, pat) {
  var answer = 0;

  answer = Number(myString.toLowerCase().includes(pat.toLowerCase()));

  return answer;
}
