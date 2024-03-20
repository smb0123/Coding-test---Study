function solution(numbers, n) {
  let totalSum = 0;

  for (let num of numbers) {
    totalSum += num;

    if (totalSum > n) {
      return totalSum;
    }
  }
}
