function solution(numbers) {
  const compareFunction = (a, b) => {
    const strA = String(a);
    const strB = String(b);
    return parseInt(strB + strA) - parseInt(strA + strB);
  };

  numbers.sort(compareFunction);

  if (numbers[0] === 0) {
    return "0";
  }

  return numbers.join('');
}

console.log(solution([6, 10, 2]));