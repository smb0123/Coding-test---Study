function solution(n) {
  var answer = [];
  let num = n;

  while (num !== 1) {
    answer.push(num);

    if (num % 2 === 0) {
      num /= 2;
    } else {
      num = 3 * num + 1;
    }
  }

  answer.push(1);

  return answer;
}
