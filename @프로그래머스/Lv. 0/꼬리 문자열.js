// https://school.programmers.co.kr/learn/courses/30/lessons/181841

// 2024-03-21
// 성공
function solution(str_list, ex) {
  var answer = '';

  answer = str_list.filter((str) => !str.includes(ex)).join('');

  return answer;
}
