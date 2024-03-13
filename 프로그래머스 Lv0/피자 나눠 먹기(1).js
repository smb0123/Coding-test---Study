function solution(n) {
  var answer = 0;
  while (1) {
    if (7 * answer >= n) {
      break;
    }
    answer++;
  }
  return answer;
}
