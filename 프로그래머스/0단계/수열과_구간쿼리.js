function solution(arr, queries) {
  for (let query of queries) {
    let [start, end] = query;

    for (let i = start; i <= end; i++) {
      arr[i]++;
    }
  }
  return arr;
}
