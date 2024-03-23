// https://school.programmers.co.kr/learn/courses/30/lessons/181939

// 2024-03-20
// 성공
function solution(a, b) {
  var answer = 0;

  answer =
    a.toString() + b > b.toString() + a
      ? Number(a.toString() + b)
      : Number(b.toString() + a);

  return answer;
}
