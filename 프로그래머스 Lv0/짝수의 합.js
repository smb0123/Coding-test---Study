function solution(n) {
  var answer = 0;
  answer = Math.floor(n / 2) * (Math.floor(n / 2) + 1);
  return answer;
}
