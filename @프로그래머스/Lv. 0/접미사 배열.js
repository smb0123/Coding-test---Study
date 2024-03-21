// https://school.programmers.co.kr/learn/courses/30/lessons/181909

// 2024-03-21
// 성공
function solution(my_string) {
  var answer = [];

  for (let i = 0; i < my_string.length; i++) {
    answer.push(my_string.slice(i));
  }

  answer.sort();

  return answer;
}
