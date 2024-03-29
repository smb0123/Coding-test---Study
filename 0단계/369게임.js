function solution(order) {
  let count = 0;
  let orderStr = String(order);

  for (let i = 0; i < orderStr.length; i++) {
    if ((orderStr[i] === "3") | (orderStr[i] === "6") | (orderStr[i] === "9")) {
      count++;
    }
  }

  return count;
}
