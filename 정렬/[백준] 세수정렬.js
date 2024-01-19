// https://www.acmicpc.net/problem/2752

function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    let change = null;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        change = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = change;
      }
    }
    if (!change) {
      break;
    }
  }
  return arr;
}

console.log(solution([3, 1, 2, 6, 4, 5]));
