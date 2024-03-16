function solution(n) {
  var answer = [];
  for (let i = 1; i <= Math.floor(n ** 0.5); i++) {
    if (n % i == 0) {
      if (i !== n ** 0.5) {
        answer.push(i);
        answer.push(n / i);
      } else {
        console.log(i);
        answer.push(i);
      }
    }
  }
  answer.sort((a, b) => a - b);
  return answer;
}
