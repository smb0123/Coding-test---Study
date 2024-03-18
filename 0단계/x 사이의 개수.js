function solution(myString) {
  var answer = [];

  const SP = myString.split("x");

  for (let i = 0; i < SP.length; i++) {
    answer.push(SP[i].length);
  }

  return answer;
}
