function solution(sides) {
  const [a, b] = sides.sort((a, b) => a - b);

  const minPossibleSide = b - a + 1;
  const maxPossibleSide = a + b - 1;

  return maxPossibleSide - minPossibleSide + 1;
}
