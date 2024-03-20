// https://school.programmers.co.kr/learn/courses/30/lessons/120839

// 2024-03-20
// 성공
function solution(rsp) {
  var answer = '';

  const win = {
    2: 0,
    0: 5,
    5: 2,
  };

  for (let i = 0; i < rsp.length; i++) {
    answer += win[rsp[i]];
  }

  return answer;
}
