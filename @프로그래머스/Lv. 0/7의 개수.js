// https://school.programmers.co.kr/learn/courses/30/lessons/120912

// 2024-03-26
// 성공
function solution(array) {
  var answer = 0;

  answer = array.reduce(
    (acc, curr) => acc + curr.toString().split('7').length - 1,
    0
  );

  return answer;
}

// 2024-03-26
// 성공
function solution(array) {
  var answer = 0;

  answer = array.join('').split('7').length - 1;

  return answer;
}
