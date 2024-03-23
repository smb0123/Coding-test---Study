// https://school.programmers.co.kr/learn/courses/30/lessons/181872

// 2024-03-22
// 성공
function solution(myString, pat) {
  var answer = '';

  answer = [...myString]
    .slice(0, myString.lastIndexOf(pat) + pat.length)
    .join('');

  return answer;
}
