// https://school.programmers.co.kr/learn/courses/30/lessons/181837

// 2024-03-28
// 성공
function solution(order) {
  var answer = 0;

  answer = order.reduce(
    (acc, curr) => acc + (curr.indexOf('cafelatte') !== -1 ? 5000 : 4500),
    0
  );

  return answer;
}
