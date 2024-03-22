// https://school.programmers.co.kr/learn/courses/30/lessons/181905

// 2024-03-22
// 성공
function solution(my_string, s, e) {
  var answer = '';

  const my_arr = [...my_string];
  const reverse = [...my_string].slice(s, e + 1).reverse();
  my_arr.splice(s, e - s + 1, ...reverse);
  answer = my_arr.join('');

  return answer;
}
