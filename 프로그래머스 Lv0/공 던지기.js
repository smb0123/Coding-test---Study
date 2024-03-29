function solution(numbers, k) {
  var answer = 0;
  const length = numbers.length;
  while (k > 1) {
    answer += 2;
    k--;
  }
  answer = numbers[answer % length];
  return answer;
}
