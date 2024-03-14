function solution(num_list) {
  var answer = 0;
  let mul = 1;
  let sum = 0;
  for (let i of num_list) {
    mul *= i;
    sum += i;
  }
  answer = mul < sum * sum ? 1 : 0;
  return answer;
}
