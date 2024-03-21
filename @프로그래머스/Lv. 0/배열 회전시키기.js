// https://school.programmers.co.kr/learn/courses/30/lessons/120844

// 2024-03-21
// 성공
function solution(numbers, direction) {
  var answer = [];

  if (direction === 'right') {
    const pop = numbers.pop();
    numbers.unshift(pop);
  } else {
    const shift = numbers.shift();
    numbers.push(shift);
  }

  answer = numbers;

  return answer;
}
