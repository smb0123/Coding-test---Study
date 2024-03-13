function solution(slice, n) {
  var answer = 0;
  while (1) {
    if (slice * answer >= n) {
      break;
    }
    answer++;
  }
  return answer;
}
