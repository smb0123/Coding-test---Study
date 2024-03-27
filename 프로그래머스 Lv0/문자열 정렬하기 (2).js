function solution(my_string) {
  var answer = [];
  let arr = my_string.split("");
  for (let i = 0; i < arr.length; i++) {
    answer.push(arr[i].toLowerCase());
  }
  answer.sort();
  answer = answer.join("");
  return answer;
}

console.log(solution("Bcad"));
