// https://school.programmers.co.kr/learn/courses/30/lessons/181834

// 2024-03-21
// 성공
function solution(myString) {
  var answer = '';

  answer = [...myString]
    .map((str) => (str.charCodeAt() < 'l'.charCodeAt() ? 'l' : str))
    .join('');

  return answer;
}
