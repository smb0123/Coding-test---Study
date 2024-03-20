function solution(hp) {
  let generals = Math.floor(hp / 5);
  hp %= 5;
  let soldiers = Math.floor(hp / 3);
  hp %= 3;
  let ants = hp;

  return generals + soldiers + ants;
}
