function solution(myString, pat) {
  var answer = -1;
  myString = myString.toLowerCase();
  pat = pat.toLowerCase();
  if (myString.includes(pat)) {
    answer = 1;
  }
  if (answer == -1) {
    answer = 0;
  }
  return answer;
}
