function solution(my_string, s, e) {
  var answer = "";
  answer += my_string.slice(0, s);
  answer += my_string
    .slice(s, e + 1)
    .split("")
    .reverse()
    .join("");
  console.log(answer);
  answer += my_string.slice(e + 1);
  return answer;
}
