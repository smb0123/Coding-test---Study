function solution(num_list) {
  var answer = [];
  let odd = 0;
  let even = 0;

  for (let i = 0; i < num_list.length; i++) {
    num_list[i] % 2 === 0 ? even++ : odd++;
  }

  answer.push(even, odd);

  return answer;
}
