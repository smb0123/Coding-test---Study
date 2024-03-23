// https://school.programmers.co.kr/learn/courses/30/lessons/181866

// 2024-03-21
// 성공
function solution(myString) {
  var answer = [];

  answer = myString
    .split('x')
    .filter((str) => str)
    .sort();

  return answer;
}
