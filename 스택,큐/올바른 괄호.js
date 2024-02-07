function solution(s) {
  var answer = true;

  if (s.includes(")") && s.includes("(")) {
    const cutLeftBracket = s.split("(");
    const CountleftBracket = cutLeftBracket.length - 1;
    const cutRightBracket = s.split(")");
    const CountRightBracket = cutRightBracket.length - 1;
    const firstStr = s[0];
    const lastStr = s[s.length - 1];

    if (
      CountleftBracket === CountRightBracket &&
      firstStr !== ")" &&
      lastStr !== "("
    ) {
      answer = true;
    } else {
      answer = false;
    }
  } else {
    answer = false;
  }

  return answer;
}
