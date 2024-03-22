// https://school.programmers.co.kr/learn/courses/30/lessons/120842

// 2024-03-22
// 성공
function solution(num_list, n) {
  var answer = [[]];

  const arr = [];
  for (let i = 0; i < num_list.length; i += n) {
    arr.push(num_list.slice(i, i + n));
  }
  answer = arr;

  return answer;
}
