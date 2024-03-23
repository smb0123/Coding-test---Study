// https://school.programmers.co.kr/learn/courses/30/lessons/181886

// 2024-03-20
// 성공
function solution(names) {
  var answer = [];

  for (let i = 0; i < names.length; i++) {
    if (i % 5 === 0) {
      answer.push(names[i]);
    }
  }

  return answer;
}
