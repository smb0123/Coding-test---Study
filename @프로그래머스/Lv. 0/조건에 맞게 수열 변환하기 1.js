// https://school.programmers.co.kr/learn/courses/30/lessons/181882

// 2024-03-18
// 성공
function solution(arr) {
  var answer = [];

  answer = arr.map((num) => {
    if (num >= 50 && num % 2 === 0) {
      return num / 2;
    } else if (num < 50 && num % 2 === 1) {
      return num * 2;
    }
    return num;
  });

  return answer;
}
