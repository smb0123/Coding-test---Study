function solution(a, b) {
  var answer = 0;
  if (a % 2 == 1 && b % 2 == 1) {
    answer = a * a + b * b;
  } else if (a % 2 == 1 || b % 2 == 1) {
    answer = 2 * (a + b);
  }
  if (a % 2 !== 1 && b % 2 !== 1) {
    if (a - b >= 0) {
      answer = a - b;
    } else {
      answer = -(a - b);
    }
  }
  return answer;
}
