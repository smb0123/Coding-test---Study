// https://school.programmers.co.kr/learn/courses/30/lessons/181880

// 2024-03-22
// 성공
function solution(num_list) {
  var answer = 0;

  function makeOne(num) {
    if (num === 1) return;
    answer++;
    if (num % 2 === 0) {
      makeOne(num / 2);
      return;
    }
    makeOne((num - 1) / 2);
  }

  for (let i = 0; i < num_list.length; i++) {
    makeOne(num_list[i]);
  }

  return answer;
}
