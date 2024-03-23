// https://school.programmers.co.kr/learn/courses/30/lessons/181831

// 2024-03-21
// 성공
function solution(arr) {
  var answer = 0;

  answer = 1;
  outer: for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] !== arr[j][i]) {
        answer = 0;
        break outer;
      }
    }
  }

  return answer;
}
