function solution(my_string) {
  let result = "";
  for (var i = 0; i < my_string.length; i++) {
    if (my_string[i] >= "a" && my_string[i] <= "z") {
      result += my_string[i].toUpperCase();
    } else if (my_string[i] >= "A" && my_string[i] <= "Z") {
      result += my_string[i].toLowerCase();
    }
  }
  return result;
}
