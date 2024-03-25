// https://school.programmers.co.kr/learn/courses/30/lessons/181857

// 2024-03-25
// 실패
function solution(arr) {
  var answer = [];

  let num = 2;
  while (arr.length !== num) {
    if (arr.length > num) {
      num *= 2;
      continue;
    }
    arr = [...arr, ...Array(num - arr.length).fill(0)];
  }

  answer = arr;

  return answer;
}

// 2024-03-25
// 성공
function solution(arr) {
  var answer = [];

  let num = 1;
  while (arr.length !== num) {
    if (arr.length > num) {
      num *= 2;
      continue;
    }
    arr = [...arr, ...Array(num - arr.length).fill(0)];
  }

  answer = arr;

  return answer;
}
