function solution(myString, pat) {
  var answer = [];
  for (let i = 0; i < myString.length; i++) {
    if (myString[i] == "A") {
      answer.push("B");
    } else {
      answer.push("A");
    }
  }
  let result = 0;
  if (answer.join("").includes(pat)) {
    result = 1;
  }
  return result;
}
