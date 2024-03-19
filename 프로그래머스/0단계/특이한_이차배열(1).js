function solution(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(new Array(n).fill(0));
    arr[i][i] = 1;
  }
  return arr;
}
