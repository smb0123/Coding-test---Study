function solution(i, j, k) {
  var answer = 0;
  for (let num = i; num <= j; num++) {
    const str = String(num);
    for (const a of str) {
      if (Number(a) === k) {
        answer++;
      }
    }
  }
  return answer;
}
