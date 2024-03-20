function solution(num, k) {
  const numStr = String(num);

  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] == k) {
      return i + 1;
    }
  }
  return -1;
}
