// https://school.programmers.co.kr/learn/courses/30/lessons/120825

// 2024-03-13
// 실패
function solution(my_string, n) {
  var answer = '';

  answer = my_string
    .split('')
    .map((string) => string + string + string)
    .join('');

  return answer;
}
