function solution(n) {
  var answer = 0;
  for (let i = 1; i <= Math.floor(n ** 0.5); i++) {
    if (n % i == 0) {
      answer++;
    }
  }
  if (Math.floor(n ** 0.5) == n ** 0.5) {
    answer = answer * 2 - 1;
  } else {
    answer *= 2;
  }
  return answer;
}
