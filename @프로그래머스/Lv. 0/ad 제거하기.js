// https://school.programmers.co.kr/learn/courses/30/lessons/181870

// 2024-03-21
// 성공
function solution(strArr) {
  var answer = [];

  answer = strArr.filter((str) => !str.includes('ad'));

  return answer;
}
