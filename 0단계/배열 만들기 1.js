function solution(n, k) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    if (n >= k * i) {
      answer.push(k * i);
    }
  }
  return answer;
}
