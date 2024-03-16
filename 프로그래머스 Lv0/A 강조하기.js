function solution(myString) {
  var answer = "";
  for (let i of [...myString]) {
    if (i === "a") {
      answer += "A";
    } else if (i.toUpperCase() == i && i !== "A") {
      answer += i.toLowerCase();
    } else {
      answer += i;
    }
  }
  return answer;
}
