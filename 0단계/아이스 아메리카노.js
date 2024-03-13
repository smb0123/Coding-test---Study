function solution(money) {
  var answer = [];

  const AMERICANO = 5500;

  answer.push(Math.floor(money / AMERICANO));
  answer.push(money % AMERICANO);

  return answer;
}
