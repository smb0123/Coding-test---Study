function solution(myString) {
  var answer = "";
  let num = 0;

  const before = "abcdefghijk";

  for (let i = 0; i < myString.length; i++) {
    if (before.includes(myString[i])) {
      answer += "l";
    } else {
      answer += myString[i];
    }
  }
  return answer;
}
