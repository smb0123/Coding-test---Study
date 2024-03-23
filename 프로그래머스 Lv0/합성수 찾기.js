function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    if (num(i)) {
      answer++;
    }
  }
  return answer;
}

function num(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      count++;
    }
  }
  if (count >= 3) {
    return 1;
  }
}
