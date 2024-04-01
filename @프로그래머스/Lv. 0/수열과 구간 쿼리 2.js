// https://school.programmers.co.kr/learn/courses/30/lessons/181923

// 2024-04-02
// 실패
function solution(arr, queries) {
  var answer = [];

  for (let i = 0; i < queries.length; i++) {
    const [s, e, k] = queries[i];

    const filter = arr.filter((v, i) => i >= s && i <= e && i > k);
    const min = filter.length ? Math.min(...filter) : -1;
    answer.push(min);
  }

  return answer;
}
