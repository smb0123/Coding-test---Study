// https://school.programmers.co.kr/learn/courses/30/lessons/120913

// 2024-03-29
// 성공
function solution(my_str, n) {
  var answer = [];

  const my_arr = [...my_str];
  while (my_arr.length !== 0) {
    answer.push(my_arr.splice(0, n).join(''));
  }

  return answer;
}
