function solution(my_string) {
  var answer = [];

  const SP = my_string.split(" ");
  for (let i = 0; i < SP.length; i++) {
    if (SP[i] !== "") {
      answer.push(SP[i]);
    }
  }

  return answer;
}
