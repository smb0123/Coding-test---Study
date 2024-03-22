// https://school.programmers.co.kr/learn/courses/30/lessons/181860

// 2024-03-22
// 성공
function solution(arr, flag) {
  var answer = [];

  flag.forEach((bool, idx) => {
    if (bool) {
      for (let i = 0; i < arr[idx] * 2; i++) {
        answer.push(arr[idx]);
      }
    } else {
      for (let i = 0; i < arr[idx]; i++) {
        answer.pop();
      }
    }
  });

  return answer;
}
