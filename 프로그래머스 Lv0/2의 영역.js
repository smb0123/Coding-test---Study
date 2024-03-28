function solution(arr) {
  let start = arr.indexOf(2);
  let end = arr.lastIndexOf(2);
  var answer = arr.slice(start, end + 1);
  return answer.length ? answer : [-1];
}
