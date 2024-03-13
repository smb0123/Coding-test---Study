function solution(n, k) {
  var answer = 0;

  const total = 12000 * n + k * 2000;

  n / 10 >= 1 ? (answer = total - Math.floor(n / 10) * 2000) : (answer = total);

  return answer;
}
