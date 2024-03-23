// https://school.programmers.co.kr/learn/courses/30/lessons/120837

// 2024-03-20
// 성공
function solution(hp) {
  var answer = 0;

  function attack(dmg, remain = hp) {
    return [remain % dmg, Math.trunc(remain / dmg)];
  }

  const [remain1, ant1] = attack(5);
  const [remain2, ant2] = attack(3, remain1);
  const [remain3, ant3] = attack(1, remain2);

  answer = ant1 + ant2 + ant3;

  return answer;
}
