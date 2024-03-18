function solution(myString, pat) {
  var answer = 0;

  const MS = myString.toUpperCase();
  const PT = pat.toUpperCase();

  answer = MS.includes(PT) ? 1 : 0;

  return answer;
}
