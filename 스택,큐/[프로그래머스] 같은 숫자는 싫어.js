// https://school.programmers.co.kr/learn/courses/30/lessons/12906

// 2024-01-26
function solution(arr) {
  var answer = [];

  arr.reduce((prev, curr) => {
    if (prev !== curr) {
      answer.push(curr);
    }
    return curr;
  }, -1);

  return answer;
}
