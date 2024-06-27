function solution(n) {
  var answer = 0;

  const stringN = n.toString();

  for (let i = 0; i < stringN.length; i++) {
    answer += +stringN[i];
  }

  return answer;
}
