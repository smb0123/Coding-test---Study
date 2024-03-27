function solution(numLog) {
  var answer = "";
  for (let i = 0; i < numLog.length - 1; i++) {
    if (numLog[i + 1] - numLog[i] == 1) {
      answer += "w";
    }
    if (numLog[i + 1] - numLog[i] == -1) {
      answer += "s";
    }
    if (numLog[i + 1] - numLog[i] == 10) {
      answer += "d";
    }
    if (numLog[i + 1] - numLog[i] == -10) {
      answer += "a";
    }
  }
  return answer;
}
