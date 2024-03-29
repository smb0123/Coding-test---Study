function solution(n) {
  var answer = [];
  let division = 2;
  while (n >= 2) {
    if (n % division == 0) {
      answer.push(division);
      n /= division;
    } else {
      division++;
    }
  }
  answer = [...new Set(answer)];
  return answer;
}
