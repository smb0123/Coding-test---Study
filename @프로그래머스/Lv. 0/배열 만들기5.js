// https://school.programmers.co.kr/learn/courses/30/lessons/181912

// 2024-03-22
// 성공
function solution(intStrs, k, s, l) {
  var answer = [];

  answer = intStrs
    .map((intStr) => Number(intStr.slice(s, s + l)))
    .filter((intStr) => intStr > k);

  return answer;
}
