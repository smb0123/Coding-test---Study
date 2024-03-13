function solution(n) {
  var answer = 0;

  n < 8 ? (answer = 1) : (answer = Math.ceil(n / 7));

  return answer;
}
