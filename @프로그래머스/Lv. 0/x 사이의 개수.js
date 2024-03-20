// https://school.programmers.co.kr/learn/courses/30/lessons/181867

// 2024-03-20
// 성공
function solution(myString) {
  var answer = [];

  answer = myString.split('x').map((str) => str.length);

  return answer;
}
