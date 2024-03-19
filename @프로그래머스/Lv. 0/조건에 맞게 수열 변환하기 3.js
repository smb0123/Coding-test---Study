// https://school.programmers.co.kr/learn/courses/30/lessons/181835

// 2024-03-18
// 성공
function solution(arr, k) {
  var answer = [];

  answer = arr.map((num) => {
    if (k % 2 === 1) return num * k;
    return num + k;
  });

  return answer;
}
