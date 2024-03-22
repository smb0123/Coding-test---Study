// https://school.programmers.co.kr/learn/courses/30/lessons/181924

// 2024-03-22
// 성공
function solution(arr, queries) {
  var answer = [];

  for (let i = 0; i < queries.length; i++) {
    [arr[queries[i][0]], arr[queries[i][1]]] = [
      arr[queries[i][1]],
      arr[queries[i][0]],
    ];
  }

  answer = arr;

  return answer;
}
