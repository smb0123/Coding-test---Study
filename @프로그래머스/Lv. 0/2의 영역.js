// https://school.programmers.co.kr/learn/courses/30/lessons/181894

// 2024-03-26
// 성공
function solution(arr) {
  var answer = [];

  const start = arr.indexOf(2);
  const end = arr.lastIndexOf(2);

  if (start === -1) {
    return [-1];
  }

  answer = arr.filter((_, i) => i >= start && i <= end);

  return answer;
}

// 2024-03-26
// 성공
function solution(arr) {
  var answer = [];

  const start = arr.indexOf(2);
  const end = arr.lastIndexOf(2);

  answer = start === -1 ? [-1] : arr.slice(start, end + 1);

  return answer;
}
