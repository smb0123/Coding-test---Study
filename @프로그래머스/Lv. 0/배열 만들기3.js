// https://school.programmers.co.kr/learn/courses/30/lessons/181895

// 2024-03-21
// 시작
function solution(arr, intervals) {
  var answer = [];

  intervals.forEach(([start, end]) => {
    answer.push(...arr.slice(start, end + 1));
  });

  return answer;
}
