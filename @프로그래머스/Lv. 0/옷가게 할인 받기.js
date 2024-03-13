// https://school.programmers.co.kr/learn/courses/30/lessons/120818

// 2024-03-13
// 실패
function solution(price) {
  var answer = 0;

  if (price >= 100000) {
    answer = Math.trunc(price * 0.95);
  } else if (price >= 300000) {
    answer = Math.trunc(price * 0.9);
  } else if (price >= 500000) {
    answer = Math.trunc(price * 0.8);
  }

  return answer;
}
