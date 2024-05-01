// https://school.programmers.co.kr/learn/courses/30/lessons/181830

// 2024-04-02
// 성공
function solution(arr) {
  var answer = [[]];

  const row = arr.length;
  const column = arr[0].length;

  if (row > column) {
    answer = arr.map((columns) => [...columns, ...Array(row - column).fill(0)]);
  } else {
    answer = [...arr, ...Array(column - row).fill(Array(column).fill(0))];
  }

  return answer;
}
