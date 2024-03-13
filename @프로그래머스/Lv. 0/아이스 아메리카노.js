// https://school.programmers.co.kr/learn/courses/30/lessons/120819

// 2024-03-13
function solution(money) {
  var answer = [];

  const iceAmericano = 5500;
  const cup = Math.trunc(money / iceAmericano);
  const remain = money % iceAmericano;

  answer.push(cup);
  answer.push(remain);

  return answer;
}
