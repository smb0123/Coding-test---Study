function solution(array) {
  var answer = [];
  let copy = [...array];
  array.sort((a, b) => a - b);
  let max = array[array.length - 1];
  let idx = copy.indexOf(max);
  answer.push(max);
  answer.push(idx);
  return answer;
}
