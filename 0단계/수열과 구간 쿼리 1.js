function solution(arr, queries) {
  return queries.reduce((prev, cur) => {
    const [str, end] = cur;

    for (let i = str; i <= end; i++) {
      prev[i]++;
    }
    return prev;
  }, arr);
}
