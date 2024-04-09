function solution(arr, queries) {
  const result = [];

  for (const query of queries) {
    const [start, end, k] = query;

    const sortedSubArr = arr.slice(start, end + 1).sort((a, b) => a - b);
    let minGreater = -1;

    for (const num of sortedSubArr) {
      if (num > k) {
        minGreater = num;
        break;
      }
    }

    result.push(minGreater);
  }

  return result;
}
