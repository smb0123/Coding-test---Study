function solution(my_string, alp) {
  return my_string
    .split("")
    .map((char) => {
      if (char === alp) {
        return char.toUpperCase();
      } else {
        return char;
      }
    })
    .join("");
}
