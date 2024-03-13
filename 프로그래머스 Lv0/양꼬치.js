function solution(n, k) {
  var answer = 0;
  const service = Math.floor(n / 10);
  if (service >= k) {
    answer = 12000 * n;
  } else {
    answer = 12000 * n + 2000 * (k - service);
  }
  return answer;
}
