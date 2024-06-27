function solution(n) {
  var answer = 1;
  let c = 1;

  while (true) {
    if (answer > n) {
      console.log(answer);
      return c - 1;
    }
    c++;
    answer *= c;
  }
}
