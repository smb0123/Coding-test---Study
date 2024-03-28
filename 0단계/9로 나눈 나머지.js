function solution(number) {
  return number.split("").reduce((prev, el) => prev + +el, 0) % 9;
}
