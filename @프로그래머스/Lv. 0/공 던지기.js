// https://school.programmers.co.kr/learn/courses/30/lessons/120843

// 2024-03-29
// 실패
function solution(numbers, k) {
  var answer = 0;

  let count = 1;
  let turn = 1;
  while (count !== k) {
    turn = (turn + 2) % numbers.length;
    count++;
  }

  answer = turn;

  return answer;
}

// 2024-03-29
// 성공
function solution(numbers, k) {
  var answer = 0;

  let count = 1;
  let turn = 1;
  while (count !== k) {
    const nextTurn = turn + 2;
    turn = nextTurn > numbers.length ? nextTurn % numbers.length : nextTurn;
    count++;
  }

  answer = turn;

  return answer;
}
