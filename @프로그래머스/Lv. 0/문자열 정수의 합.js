// https://school.programmers.co.kr/learn/courses/30/lessons/181849

// 2024-03-18
// 성공
function solution(num_str) {
  var answer = 0;

  answer = num_str
    .split('')
    .reduce((pre, curr) => Number(pre) + Number(curr), 0);

  return answer;
}
