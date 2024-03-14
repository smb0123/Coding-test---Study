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

// 2024-03-14
// 성공
function solution(my_string, n) {
  var answer = '';

  answer = my_string
    .split('')
    .map((string) => {
      let str = string;
      for (let i = 1; i < n; i++) {
        str += string;
      }
      return str;
    })
    .join('');

  return answer;
}
