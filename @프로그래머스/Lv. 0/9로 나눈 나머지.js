// https://school.programmers.co.kr/learn/courses/30/lessons/181914

// 2024-03-21
// 성공
function solution(number) {
  var answer = 0;

  answer = [...number].reduce((pre, curr) => pre + Number(curr), 0) % 9;

  return answer;
}
