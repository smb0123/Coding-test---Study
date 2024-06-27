function solution(numbers) {
  var answer = 0;
  const count = numbers.length;

  for (let i = 0; i < numbers.length; i++) {
    answer += numbers[i];
  }

  answer = answer / count;

  return answer;
}
