function solution(myString, pat) {
  const lowerCaseMyString = myString.toLowerCase();
  const lowerCasePat = pat.toLowerCase();

  return lowerCaseMyString.includes(lowerCasePat) ? 1 : 0;
}
