function solution(my_str, n) {
  var answer = [];
  my_str = my_str.split("");
  while (1) {
    if (my_str.length == 0) {
      break;
    }
    if (my_str.length < n) {
      answer.push(my_str.slice().join(""));
      break;
    } else {
      let str = my_str.splice(0, n).join("");
      answer.push(str);
    }
  }
  return answer;
}
