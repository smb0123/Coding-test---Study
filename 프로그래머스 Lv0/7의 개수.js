function solution(array) {
  var answer = 0;
  for (let i of array) {
    for (let j of i.toString()) {
      if (j === "7") {
        answer++;
      }
    }
  }
  return answer;
}
