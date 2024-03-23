// https://school.programmers.co.kr/learn/courses/30/lessons/181931

// 2024-03-21
// 성공
function solution(a, d, included) {
  var answer = 0;

  answer = Array(included.length)
    .fill(a)
    .map((v, i) => v + i * d)
    .reduce((pre, curr, idx) => (included[idx] ? pre + curr : pre), 0);

  return answer;
}

// 2024-03-21
// 성공
function solution(a, d, included) {
  var answer = 0;

  answer = included.reduce(
    (acc, isTrue, idx) => (isTrue ? acc + a + d * idx : acc),
    0
  );

  return answer;
}
