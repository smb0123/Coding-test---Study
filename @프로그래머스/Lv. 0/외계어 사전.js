// https://school.programmers.co.kr/learn/courses/30/lessons/120869

// 2024-04-03
// 성공
function solution(spell, dic) {
  var answer = 0;

  spell = spell.sort().join('');
  dic = dic.filter((str) => [...str].sort().join('') === spell);

  answer = dic.length ? 1 : 2;

  return answer;
}
