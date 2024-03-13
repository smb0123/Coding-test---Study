function solution(numbers) {
  var answer = 0;
  let sum = 0;
  const len = numbers.length;
  for (let i of numbers) {
    sum += i;
  }
  answer = sum / len;
  return answer;
}
