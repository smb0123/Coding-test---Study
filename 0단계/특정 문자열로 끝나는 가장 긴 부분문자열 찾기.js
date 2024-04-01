function solution(myString, pat) {
  const patIndex = myString.lastIndexOf(pat);

  return myString.slice(0, patIndex + pat.length);
}
