function solution(num_list, n) {
  var answer = [];

  const one = num_list.slice(n);
  const two = num_list.splice(0, n);

  for (let i = 0; i < one.length; i++) {
    answer.push(one[i]);
  }

  for (let i = 0; i < two.length; i++) {
    answer.push(two[i]);
  }

  return answer;
}
