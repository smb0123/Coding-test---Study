function solution(my_string, num1, num2) {
  var answer = "";
  let firstIndex = my_string[num1];
  let secondIndex = my_string[num2];
  for (let i = 0; i < my_string.length; i++) {
    if (i === num1) {
      answer += secondIndex;
    } else if (i === num2) {
      answer += firstIndex;
    } else {
      answer += my_string[i];
    }
  }
  return answer;
}
