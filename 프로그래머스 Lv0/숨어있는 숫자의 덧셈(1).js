function solution(my_string) {
  var answer = 0;
  for (let i of my_string) {
    i = Number(i);
    if (i >= 0 && i <= 9) {
      answer += i;
    }
  }
  return answer;
}
