// https://school.programmers.co.kr/learn/courses/30/lessons/120921

// 2024-04-08
// 성공
function solution(A, B) {
  var answer = 0;

  const lengthA = A.length;
  for (let i = 0; i < lengthA; i++) {
    if (A === B) {
      break;
    }
    const pop = A.substring(lengthA - 1);
    A = pop + A.substring(0, lengthA - 1);
    answer++;
  }

  if (A !== B) {
    answer = -1;
  }

  return answer;
}
