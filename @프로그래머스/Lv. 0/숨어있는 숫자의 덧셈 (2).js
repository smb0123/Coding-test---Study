// https://school.programmers.co.kr/learn/courses/30/lessons/120864

// 2024-03-22
// 성공
function solution(my_string) {
  var answer = 0;

  answer = my_string
    .split(/[a-zA-Z]/)
    .reduce((acc, curr) => acc + Number(curr), 0);

  return answer;
}
