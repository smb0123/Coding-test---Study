// https://school.programmers.co.kr/learn/courses/30/lessons/120834

// 2024-03-21
// 성공
function solution(age) {
  var answer = '';

  const ages = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

  answer = [...age.toString()].map((num) => ages[num]).join('');

  return answer;
}
