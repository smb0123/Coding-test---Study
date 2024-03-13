function solution(n) {
  var answer = 0;
  for (i = 1; i < n; i++) {
    if (n === i ** 2) {
      return (answer = 1);
    }
  }
  return (answer = 2);
  return answer;
}
