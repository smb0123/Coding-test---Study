function solution(myString, pat) {
  var answer = 0;
  const arr = [];
  for (let i = 0; i <= myString.length - pat.length; i++) {
    if (myString.slice(i, i + pat.length) === pat) {
      answer++;
    }
  }

  return answer;
}
