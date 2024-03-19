function solution(my_string) {
  const numbers = [];
  for (let i = 0; i < my_string.length; i++) {
    const char = my_string[i];
    if (!isNaN(char)) {
      numbers.push(parseInt(char));
    }
  }
  return numbers.sort((a, b) => a - b);
}
