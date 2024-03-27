function solution(n, lost, reserve) {
  var answer = 0;
  let obj = {};
  for (let i = 1; i <= 5; i++) {
    obj[i] = 1;
  }
  for (let i of lost) {
    obj[i]--;
  }
  for (let i = 0; i < reserve.length; i++) {}
  return obj;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
