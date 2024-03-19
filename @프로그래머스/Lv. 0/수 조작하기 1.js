// https://school.programmers.co.kr/learn/courses/30/lessons/181926

// 2024-03-19
// 성공
function solution(n, control) {
  var answer = 0;

  const controller = {
    w: (n) => n + 1,
    s: (n) => n - 1,
    d: (n) => n + 10,
    a: (n) => n - 10,
  };

  answer = [...control].reduce((pre, curr) => {
    return controller[curr](pre);
  }, n);

  return answer;
}
