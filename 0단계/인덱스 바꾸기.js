function solution(my_string, num1, num2) {
  var answer = "";
  let index1 = my_string[num1];
  let index2 = my_string[num2];

  for (let i = 0; i < my_string.length; i++) {
    if (i === num1) {
      answer += index2;
    } else if (i === num2) {
      answer += index1;
    } else {
      answer += my_string[i];
    }
  }

  return answer;
}
