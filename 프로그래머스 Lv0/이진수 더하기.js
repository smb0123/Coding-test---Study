function solution(bin1, bin2) {
  var answer = parseInt(bin1, 2) + parseInt(bin2, 2);
  answer = answer.toString(2);
  return answer;
}
