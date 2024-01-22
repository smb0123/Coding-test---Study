// https://www.acmicpc.net/problem/2752

// 2024-01-19
// 성공
// 버블정렬
// 백준에 제출하기 위한 템플릿은 만들지 못했다.
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
