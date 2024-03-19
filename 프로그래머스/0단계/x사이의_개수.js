function solution(myString) {
  const splitted = myString.split("x");
  const lengths = splitted.map((str) => str.length);
  return lengths;
}
