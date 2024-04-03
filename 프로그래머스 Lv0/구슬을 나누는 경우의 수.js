function solution(balls, share) {
  var answer = factorial(balls) / (factorial(balls - share) * factorial(share));
  return answer;
}

function factorial(num) {
  let mul = BigInt(1);
  for (let i = num; i >= 1; i--) {
    mul *= BigInt(i);
  }
  return mul;
}

console.log(solution(6, 3));
