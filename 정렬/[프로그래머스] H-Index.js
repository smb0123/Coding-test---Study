// https://school.programmers.co.kr/learn/courses/30/lessons/42747

// 2024-01-23
function solution(citations) {
  var answer = 0;

  citations.sort((a, b) => a - b);

  const max = Math.max(...citations);

  for (let i = max; i >= 0; i--) {
    let count = 0;
    for (let j = citations.length - 1; j >= 0; j--) {
      if (i > citations[j]) break;
      count++;
    }
    if (i <= count) {
      answer = i;
      break;
    }
  }

  return answer;
}
