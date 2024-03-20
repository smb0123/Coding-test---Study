// https://school.programmers.co.kr/learn/courses/30/lessons/181844

// 2024-03-21
// 성공
function solution(arr, delete_list) {
  var answer = [];

  answer = arr.filter((num) => !delete_list.includes(num));

  return answer;
}
