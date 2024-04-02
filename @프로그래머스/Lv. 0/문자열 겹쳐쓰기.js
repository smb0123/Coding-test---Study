// https://school.programmers.co.kr/learn/courses/30/lessons/181943

// 2024-04-02
// 성공
function solution(my_string, overwrite_string, s) {
  var answer = '';

  const my_arr = [...my_string];
  my_arr.splice(s, overwrite_string.length, overwrite_string);

  answer = my_arr.join('');

  return answer;
}
