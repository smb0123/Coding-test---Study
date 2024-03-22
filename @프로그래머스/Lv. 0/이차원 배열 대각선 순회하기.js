// https://school.programmers.co.kr/learn/courses/30/lessons/181829

// 2024-03-22
// 실패
function solution(board, k) {
  var answer = 0;

  for (let i = 0; i < board.length; i++) {
    if (i > k) break;
    for (let j = 0; j < board[i].length; j++) {
      if (i + j > k) {
        break;
      }
      answer += i + j;
    }
  }

  return answer;
}

// 2024-03-22
// 성공
function solution(board, k) {
  var answer = 0;

  for (let i = 0; i < board.length; i++) {
    if (i > k) break;
    for (let j = 0; j < board[i].length; j++) {
      if (i + j > k) {
        break;
      }
      answer += board[i][j];
    }
  }

  return answer;
}
