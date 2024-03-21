// https://school.programmers.co.kr/learn/courses/30/lessons/181925

// 2024-03-21
// 성공
function solution(numLog) {
  var answer = '';

  const controller = {
    1: 'w',
    '-1': 's',
    10: 'd',
    '-10': 'a',
  };

  for (let i = 0; i < numLog.length - 1; i++) {
    const control = controller[numLog[i + 1] - numLog[i]];
    answer += control;
  }

  return answer;
}
