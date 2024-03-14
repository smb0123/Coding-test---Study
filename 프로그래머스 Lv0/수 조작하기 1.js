function solution(n, control) {
  var answer = n;
  for (let i of control) {
    if (i == "w") {
      answer++;
    }
    if (i == "s") {
      answer--;
    }
    if (i == "d") {
      answer += 10;
    }
    if (i == "a") {
      answer -= 10;
    }
  }
  return answer;
}
