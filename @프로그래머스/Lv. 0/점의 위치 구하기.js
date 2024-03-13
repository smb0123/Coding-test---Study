// https://school.programmers.co.kr/learn/courses/30/lessons/120841

// 2024-03-13
// 성공
function solution(dot) {
  var answer = 0;

  const [x, y] = dot;
  if (x > 0) {
    if (y > 0) answer = 1;
    else answer = 4;
  } else {
    if (y > 0) answer = 2;
    else answer = 3;
  }

  return answer;
}
