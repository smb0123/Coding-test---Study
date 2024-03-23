function solution(order) {
  const str = order.toString();

  let clap = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "3" || str[i] === "6" || str[i] === "9") {
      clap++;
    }
  }
  return clap;
}
