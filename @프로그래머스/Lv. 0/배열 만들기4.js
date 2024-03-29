// https://school.programmers.co.kr/learn/courses/30/lessons/181918

// 2024-03-29
// 성공
function solution(arr) {
  var stk = [];

  let i = 0;
  while (i < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[i]);
      i++;
      continue;
    }

    if (stk[stk.length - 1] < arr[i]) {
      stk.push(arr[i]);
      i++;
      continue;
    } else {
      stk.pop();
      continue;
    }
  }

  return stk;
}
