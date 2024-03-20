function solution(arr1, arr2) {
  const sum1 = arr1.reduce((acc, curr) => acc + curr, 0);
  const sum2 = arr2.reduce((acc, curr) => acc + curr, 0);

  if (arr1.length !== arr2.length) {
    return arr1.length > arr2.length ? 1 : -1;
  } else {
    return sum1 !== sum2 ? (sum1 > sum2 ? 1 : -1) : 0;
  }
}
