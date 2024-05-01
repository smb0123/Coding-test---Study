// https://school.programmers.co.kr/learn/courses/30/lessons/181858

// 2024-04-02
// 성공
function solution(arr, k) {
  var answer = [];

  const removedDuplication = [...new Set(arr)];

  answer = Array(k).fill(-1);
  for (let i = 0; i < removedDuplication.length; i++) {
    answer[i] = removedDuplication[i];
    if (i + 1 === k) {
      break;
    }
  }

  return answer;
}
