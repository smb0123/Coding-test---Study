function solution(s) {
  const numbers = s.split(" ");
  let sum = 0;
  let prevNumber = 0;

  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element === "Z") {
      sum -= prevNumber;
    } else {
      const number = parseInt(element);
      sum += number;
      prevNumber = number;
    }
  }

  return sum;
}
