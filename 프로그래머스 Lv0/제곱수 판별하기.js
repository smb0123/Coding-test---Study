function solution(n) {
  var answer = 0;
  if (n ** 0.5 % 1 == 0) {
    answer = 1;
  } else {
    answer = 2;
  }
  return answer;
}
