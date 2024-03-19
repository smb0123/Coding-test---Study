// https://school.programmers.co.kr/learn/courses/30/lessons/181854

// 2024-03-19
// 성공
function solution(arr, n) {
  var answer = [];

  const length = arr.length;
  if (length % 2 === 1) {
    answer = arr.map((num, i) => {
      if (i % 2 === 0) return num + n;
      return num;
    });
  } else {
    answer = arr.map((num, i) => {
      if (i % 2 === 1) return num + n;
      return num;
    });
  }
  return answer;
}
