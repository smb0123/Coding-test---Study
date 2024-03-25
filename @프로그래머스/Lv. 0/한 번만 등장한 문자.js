// https://school.programmers.co.kr/learn/courses/30/lessons/120896

// 2024-03-25
// 성공
function solution(s) {
  var answer = '';

  const alphabet = new Map();
  [...s].sort().forEach((v) => {
    alphabet.set(v, (alphabet.get(v) || 0) + 1);
  });

  for (const [key, value] of alphabet) {
    if (value > 1) continue;
    answer += key;
  }

  return answer;
}
