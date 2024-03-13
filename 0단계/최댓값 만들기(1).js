function solution(numbers) {
  var answer = 0;

  const sortNumbers = numbers.sort((a, b) => b - a);

  answer = sortNumbers[0] * sortNumbers[1];

  return answer;
}
