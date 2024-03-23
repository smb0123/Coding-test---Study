// https://school.programmers.co.kr/learn/courses/30/lessons/120890

// 2024-03-22
// 실패
function solution(array, n) {
  var answer = 0;

  let min = 99;
  for (let i = 0; i < array.length; i++) {
    const gap = Math.abs(array[i] - n);
    if (gap < min) {
      min = gap;
      answer = array[i];
    }
  }

  return answer;
}

// 2024-03-22
// 성공
function solution(array, n) {
  var answer = 0;

  let min = 99;
  for (let i = 0; i < array.length; i++) {
    const gap = Math.abs(array[i] - n);
    if (gap < min) {
      min = gap;
      answer = array[i];
    } else if (gap === min) {
      answer = answer > array[i] ? array[i] : answer;
    }
  }

  return answer;
}
