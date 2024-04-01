// https://school.programmers.co.kr/learn/courses/30/lessons/181881

// 2024-03-28
// 성공
function solution(arr) {
  var answer = 0;

  let stop = false;
  while (!stop) {
    stop = false;
    let count = 0;
    arr = arr.map((num) => {
      if (num >= 50 && num % 2 === 0) {
        count++;
        return num / 2;
      } else if (num < 50 && num % 2 === 1) {
        count++;
        return num * 2 + 1;
      }
      return num;
    });
    if (!count) {
      stop = true;
      break;
    }
    answer++;
  }

  return answer;
}
