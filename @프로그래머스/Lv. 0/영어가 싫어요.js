// https://school.programmers.co.kr/learn/courses/30/lessons/120894

// 2024-03-30
// 성공
function solution(numbers) {
  var answer = 0;

  const arr = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  for (let i = 0; i < arr.length; i++) {
    numbers = numbers.replaceAll(arr[i], i);
  }

  answer = Number(numbers);

  return answer;
}
