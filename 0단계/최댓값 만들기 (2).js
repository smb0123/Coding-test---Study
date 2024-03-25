function solution(numbers) {
  var answer = 0;
  let preX = 0;
  let afterX = 0;

  numbers.sort((a, b) => a - b);

  preX = numbers[0] * numbers[1];
  afterX = numbers[numbers.length - 1] * numbers[numbers.length - 2];

  answer = preX > afterX ? preX : afterX;

  return answer;
}
