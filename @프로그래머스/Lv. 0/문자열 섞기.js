// https://school.programmers.co.kr/learn/courses/30/lessons/181942

// 2024-03-21
// 성공
function solution(str1, str2) {
  var answer = '';

  answer = [...str1].map((str, idx) => str + str2[idx]).join('');

  return answer;
}
