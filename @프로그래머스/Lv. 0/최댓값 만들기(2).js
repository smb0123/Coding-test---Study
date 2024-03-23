// https://school.programmers.co.kr/learn/courses/30/lessons/120862

// 2024-03-21
// 실패
function solution(numbers) {
  var answer = 0;

  let max = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      max = numbers[i] * numbers[j] > max ? numbers[i] * numbers[j] : max;
    }
  }

  answer = max;

  return answer;
}

// 2024-03-21
// 성공
function solution(numbers) {
  var answer = 0;

  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      max = numbers[i] * numbers[j] > max ? numbers[i] * numbers[j] : max;
    }
  }

  answer = max;

  return answer;
}
