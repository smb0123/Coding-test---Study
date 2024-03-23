function solution(myString, pat) {
  var answer = 0;
  let idx = myString.indexOf(pat);
  let slice;
  while (idx != -1) {
    slice = myString.slice(idx);
    if (slice.indexOf(pat) >= 0) {
      answer++;
    }

    console.log(idx);
  }
  return answer;
}
