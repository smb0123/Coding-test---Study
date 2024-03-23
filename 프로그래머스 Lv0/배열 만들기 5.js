function solution(intStrs, k, s, l) {
  var answer = [];
  for (let i of intStrs) {
    if (Number(i.slice(s, s + l)) > k) {
      answer.push(Number(i.slice(s, s + l)));
    }
  }
  return answer;
}

console.log(
  solution(["0123456789", "9876543210", "9999999999999"], 50000, 5, 5)
);
