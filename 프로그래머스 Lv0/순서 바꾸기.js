function solution(num_list, n) {
  var answer = num_list.splice(n);
  answer = [...answer, ...num_list];
  return answer;
}
