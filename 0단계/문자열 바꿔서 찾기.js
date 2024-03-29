function solution(myString, pat) {
  var answer = 0;
  let str = "";

  for (let i = 0; i < myString.length; i++) {
    if (myString[i] === "A") {
      answer += "B";
    } else if (myString[i] === "B") {
      answer += "A";
    }
  }

  answer = answer.includes(pat) ? 1 : 0;

  return answer;
}
