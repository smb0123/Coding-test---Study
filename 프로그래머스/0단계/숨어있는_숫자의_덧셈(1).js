function solution(my_string) {
  let answer = 0;
  let str = my_string.split("");
  for (i = 0; i < my_string.length; i++) {
    if (parseInt(str[i]) == Number(str[i])) {
      answer += Number(str[i]);
    }
  }
  return answer;
}
