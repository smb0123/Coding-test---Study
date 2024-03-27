function solution(num_list, n) {
  var answer = [];
  let arr = [];
  for (let i = 0; i < num_list.length; i++) {
    arr.push(num_list[i]);
    if (i % n == n - 1) {
      answer.push(arr);
      arr = [];
    }
  }
  return answer;
}
