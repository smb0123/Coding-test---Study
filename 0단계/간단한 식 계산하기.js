function solution(binomial) {
  const [a, symbol, b] = binomial.split(" ");

  switch (symbol) {
    case "+":
      return +a + +b;
    case "-":
      return a - b;
    case "*":
      return a * b;
  }
}
