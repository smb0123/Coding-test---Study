function solution(myString, pat) {
  let replacedString = "";
  for (let i = 0; i < myString.length; i++) {
    if (myString[i] === "A") {
      replacedString += "B";
    } else if (myString[i] === "B") {
      replacedString += "A";
    } else {
      replacedString += myString[i];
    }
  }

  for (let i = 0; i <= replacedString.length - pat.length; i++) {
    const str = replacedString.substr(i, pat.length);

    if (str === pat) {
      return 1;
    }
  }
  return 0;
}
