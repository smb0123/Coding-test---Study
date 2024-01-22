// https://school.programmers.co.kr/learn/courses/30/lessons/42746

function solution(numbers) {
  var answer = '';

  let length = Math.max(...numbers).toString().length;

  numbers.sort((a, b) => {
    const next = Number(a.toString().padEnd(length, a));
    const previous = Number(b.toString().padEnd(length, b));
    return next - previous;
  });

  for (let i = numbers.length - 1; i >= 0; i--) {
    answer += numbers[i];
  }

  return answer;
}
