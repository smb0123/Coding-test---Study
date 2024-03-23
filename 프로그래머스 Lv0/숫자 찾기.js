function solution(num, k) {
  let stringNum = num.toString();
  var answer = stringNum.indexOf(k.toString()) + 1;
  if (answer == 0) {
    answer = -1;
  }
  return answer;
}
