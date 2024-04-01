// https://school.programmers.co.kr/learn/courses/30/lessons/181859

// 2024-03-30
// 성공
function solution(arr) {
  var answer = [];

  let i = 0;
  while (i < arr.length) {
    if (answer.length === 0) {
      answer.push(arr[i]);
      i++;
      continue;
    }

    if (answer[answer.length - 1] === arr[i]) {
      answer.pop();
      i++;
      continue;
    }

    answer.push(arr[i]);
    i++;
  }

  if (answer.length === 0) {
    answer.push(-1);
  }

  return answer;
}
