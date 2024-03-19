function solution(my_string) {
  var answer = "";
  let Uper = my_string.toUpperCase();

  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] === Uper[i]) {
      answer += my_string[i].toLowerCase();
    } else {
      answer += my_string[i].toUpperCase();
    }
  }

  return answer;
}
