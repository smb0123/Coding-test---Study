function solution(num_list, n) {
  var answer = 0;
  for (let i of num_list) {
    if (i === n) {
      return 1;
    }
  }
  return answer;
}
