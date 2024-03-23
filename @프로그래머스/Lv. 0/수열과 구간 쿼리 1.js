// https://school.programmers.co.kr/learn/courses/30/lessons/181883

// 2024-03-21
// 성공
function solution(arr, queries) {
  var answer = [];

  queries.forEach(([s, e]) => {
    for (let i = s; i <= e; i++) {
      arr[i]++;
    }
  });

  answer = arr;

  return answer;
}
