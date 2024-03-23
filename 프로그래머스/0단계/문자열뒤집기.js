function solution(my_string, s, e) {
  const substr = my_string.substring(s, e + 1);
  const reverse = substr.split("").reverse().join("");
  const result =
    my_string.substring(0, s) + reverse + my_string.substring(e + 1);
  return result;
}
