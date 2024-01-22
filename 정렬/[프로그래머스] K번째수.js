// https://school.programmers.co.kr/learn/courses/30/lessons/42748

// 2024-01-17
// 성공
function solution(array, commands) {
  var answer = [];

  for (let i = 0; i < commands.length; i++) {
    const start = commands[i][0] - 1;
    const end = commands[i][1];
    const pick = commands[i][2] - 1;
    let slice = array.slice(start, end);
    slice.sort((a, b) => a - b);
    answer.push(slice[pick]);
  }

  return answer;
}
