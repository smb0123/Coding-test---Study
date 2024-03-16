function solution(myString) {
  var answer = myString.split("x");
  let result = [];
  for (let i of answer) {
    result.push(i.length);
  }
  return result;
}
