function solution(my_string, alp) {
  var answer = my_string.split("");
  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] == alp) {
      answer[i] = answer[i].toUpperCase();
    }
  }
  console.log(answer);
  answer = answer.join("");
  return answer;
}

console.log(solution("programmers", "p"));
