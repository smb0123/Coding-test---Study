// https://school.programmers.co.kr/learn/courses/30/lessons/120822

// 2024-03-13
function solution(my_string) {
  var answer = '';

  for (let i = my_string.length - 1; i >= 0; i--) {
    answer += my_string[i];
  }

  return answer;
}
