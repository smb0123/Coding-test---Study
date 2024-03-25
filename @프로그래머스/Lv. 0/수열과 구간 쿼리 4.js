// https://school.programmers.co.kr/learn/courses/30/lessons/181922

// 2024-03-25
// 성공
function solution(arr, queries) {
  var answer = [];

  queries.forEach(([s, e, k]) => {
    arr = arr.map((v, i) => (i >= s && i <= e && i % k === 0 ? v + 1 : v));
  });

  answer = arr;

  return answer;
}
