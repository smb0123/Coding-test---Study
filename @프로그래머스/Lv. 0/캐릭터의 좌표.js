// https://school.programmers.co.kr/learn/courses/30/lessons/120861

// 2024-04-05
// 성공
function solution(keyinput, board) {
  var answer = [];

  answer = [0, 0];
  board = board.map((v) => (v - 1) / 2);

  const controller = {
    left() {
      if (answer[0] <= -board[0]) {
        return;
      }
      answer[0] = (answer[0] || 0) - 1;
    },
    right() {
      if (answer[0] >= board[0]) {
        return;
      }
      answer[0] = (answer[0] || 0) + 1;
    },
    up() {
      if (answer[1] >= board[1]) {
        return;
      }
      answer[1] = (answer[1] || 0) + 1;
    },
    down() {
      if (answer[1] <= -board[1]) {
        return;
      }
      answer[1] = (answer[1] || 0) - 1;
    },
  };

  keyinput.forEach((key) => controller[key]());

  return answer;
}
