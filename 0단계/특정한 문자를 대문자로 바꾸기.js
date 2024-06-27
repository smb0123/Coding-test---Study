function solution(my_string, alp) {
  var answer = "";
  const ALP = alp.toUpperCase();

  for (let i = 0; i < my_string.length; i++) {
    my_string[i] === alp ? (answer += ALP) : (answer += my_string[i]);
  }
  return answer;
}
