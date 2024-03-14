function solution(num_list) {
  var answer = 0;
  let odd = "";
  let even = "";
  for (let i of num_list) {
    if (i % 2 == 0) {
      even += i.toString();
    } else {
      odd += i.toString();
    }
  }
  answer = Number(odd) + Number(even);
  return answer;
}
