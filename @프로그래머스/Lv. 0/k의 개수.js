// https://school.programmers.co.kr/learn/courses/30/lessons/120887

// 2024-03-22
// 성공
function solution(i, j, k) {
  var answer = 0;

  for (let idx = i; idx <= j; idx++) {
    answer += [...idx.toString()].filter((v) => v == k).length;
  }

  return answer;
}
