function solution(n) {
  var answer = 1;
  let f = 1;
  while (f <= n) {
    answer++;
    f *= answer;
  }
  return answer - 1;
}
