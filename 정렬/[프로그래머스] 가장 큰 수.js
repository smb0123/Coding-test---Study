// https://school.programmers.co.kr/learn/courses/30/lessons/42746

// 2024-01-21
// 실패
// pad로 자릿수를 맞추어 풀어보려고 했다.
// 테스트 11, 13, 14에서 실패
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

// 2024-01-22
// 성공
function solution(numbers) {
  var answer = '';

  numbers.sort((a, b) => {
    const next = Number(a.toString() + b);
    const previous = Number(b.toString() + a);
    return next - previous;
  });

  for (let i = numbers.length - 1; i >= 0; i--) {
    answer += numbers[i];
  }

  if (answer[0] === '0') {
    answer = '0';
  }

  return answer;
}
