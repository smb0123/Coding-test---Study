// https://school.programmers.co.kr/learn/courses/30/lessons/120892

// 2024-03-20
// 성공
function solution(cipher, code) {
  var answer = '';

  for (let i = code - 1; i < cipher.length; i += code) {
    answer += cipher[i];
  }

  return answer;
}
