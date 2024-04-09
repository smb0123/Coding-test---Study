function solution(my_string) {
  const string = my_string.split(" ");
  let answer = parseInt(string[0]);

  for (let i = 1; i < string.length; i += 2) {
    const op = string[i];
    const operand = parseInt(string[i + 1]);
    if (op === "+") {
      answer += operand;
    } else if (op === "-") {
      answer -= operand;
    }
  }

  return answer;
}
