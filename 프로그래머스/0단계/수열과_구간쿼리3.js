function solution(arr, queries) {
  for (const query of queries) {
    const [i, j] = query;
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return arr;
}
