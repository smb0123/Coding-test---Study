function solution(a, b) {
  var ab = a.toString() + b.toString();
  var ba = b.toString() + a.toString();
  let answer = Math.max(Number(ab), Number(ba));
  return answer;
}
