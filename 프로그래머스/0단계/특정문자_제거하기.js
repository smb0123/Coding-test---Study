function solution(my_string, letter) {
  const parts = my_string.split(letter);

  const result = parts.join("");

  return result;
}
