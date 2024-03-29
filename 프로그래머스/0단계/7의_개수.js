function solution(array) {
  let count = 0;
  for (let num of array) {
    count += num.toString().split("7").length - 1;
  }
  return count;
}
