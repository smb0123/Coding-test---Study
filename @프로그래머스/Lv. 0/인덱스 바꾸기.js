// https://school.programmers.co.kr/learn/courses/30/lessons/120895

// 2024-03-21
// 성공
function solution(my_string, num1, num2) {
  var answer = '';

  const temp = my_string[num1];
  answer = [...my_string];
  answer[num1] = answer[num2];
  answer[num2] = temp;
  answer = answer.join('');

  return answer;
}

// 2024-03-21
// 성공2
function solution(my_string, num1, num2) {
  var answer = '';

  my_string = [...my_string];
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];

  answer = my_string.join('');

  return answer;
}
