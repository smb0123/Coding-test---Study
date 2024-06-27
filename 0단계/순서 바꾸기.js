function solution(num_list, n) {
  var answer = [];

  answer.push(...num_list.slice(n));
  answer.push(...num_list.splice(0, n));

  return answer;
}
