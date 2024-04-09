function solution(arr, k) {
  const uniqueSet = new Set();

  for (const num of arr) {
    uniqueSet.add(num);
  }

  const uniqueArr = [...uniqueSet];

  while (uniqueArr.length < k) {
    uniqueArr.push(-1);
  }

  return uniqueArr.slice(0, k);
}
