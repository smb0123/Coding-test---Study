function solution(myString) {
  const splitArr = myString.split("x");

  const sort = splitArr.filter((str) => str !== "").sort();

  return sort;
}
