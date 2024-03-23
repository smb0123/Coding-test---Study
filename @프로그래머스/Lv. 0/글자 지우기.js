// https://school.programmers.co.kr/learn/courses/30/lessons/181900

// 2024-03-22
// 성공
function solution(my_string, indices) {
  var answer = '';

  answer = [...my_string].filter((v, i) => !indices.includes(i)).join('');

  return answer;
}
