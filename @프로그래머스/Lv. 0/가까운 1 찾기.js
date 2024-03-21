// https://school.programmers.co.kr/learn/courses/30/lessons/181898

// 2024-03-21
// 성공
function solution(arr, idx) {
  var answer = 0;

  answer = -1;
  for (let i = idx; i < arr.length; i++) {
    if (arr[i]) {
      answer = i;
      break;
    }
  }

  return answer;
}

// 2024-03-21
// 성공
function solution(arr, idx) {
  var answer = 0;

  answer = arr.indexOf(1, idx);

  return answer;
}
