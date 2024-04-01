// https://school.programmers.co.kr/learn/courses/30/lessons/120885

// 2024-03-28
// 성공
function solution(bin1, bin2) {
  var answer = '';

  answer = (Number.parseInt(bin1, 2) + Number.parseInt(bin2, 2)).toString(2);

  return answer;
}
