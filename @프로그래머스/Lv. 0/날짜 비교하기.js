// https://school.programmers.co.kr/learn/courses/30/lessons/181838

// 2024-03-22
// 성공
function solution(date1, date2) {
  var answer = 0;

  const d1 = new Date(...date1);
  const d2 = new Date(...date2);

  answer = d1 < d2 ? 1 : 0;

  return answer;
}
