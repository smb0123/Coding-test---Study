function solution(n) {
  var answer = 1;
  while (1) {
    if ((answer * 6) % n == 0) {
      break;
    }
    answer++;
  }
  return answer;
}
