function solution(order) {
  let americanoCount = 0;
  let latteCount = 0;

  for (let item of order) {
    if (item.includes("americano")) {
      americanoCount++;
    } else if (item.includes("cafelatte")) {
      latteCount++;
    } else if (item === "anything") {
      americanoCount++;
    }
  }

  const totalPrice = americanoCount * 4500 + latteCount * 5000;
  return totalPrice;
}
