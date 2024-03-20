// https://school.programmers.co.kr/learn/courses/30/lessons/181875

// 2024-03-20
// 성공
function solution(strArr) {
  var answer = [];

  answer = strArr.map((str, idx) => {
    if (idx % 2 === 1) return str.toUpperCase();
    return str.toLowerCase();
  });

  return answer;
}
