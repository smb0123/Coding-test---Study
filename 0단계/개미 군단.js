function solution(hp) {
  var answer = 0;

  if (hp >= 5) {
    answer += Math.floor(hp / 5);
    hp = hp - Math.floor(hp / 5) * 5;
  }

  if (hp >= 3) {
    answer += Math.floor(hp / 3);
    hp = hp - Math.floor(hp / 3) * 3;
  }

  if (hp >= 1) {
    answer += Math.floor(hp / 1);
  }

  return answer;
}
