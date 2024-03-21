// https://school.programmers.co.kr/learn/courses/30/lessons/120850

// 2024-03-21
// 성공
function solution(my_string) {
  var answer = [];

  answer = [...my_string]
    .filter((str) => Number(str) >= 0)
    .map((str) => Number(str))
    .sort((a, b) => a - b);

  return answer;
}
