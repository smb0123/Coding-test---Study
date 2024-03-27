function solution(my_string) {
  var answer = 0;
  const arr = my_string.split(/[a-zA-Z]/).filter((i) => i !== "");
  for (let i of arr) {
    answer += Number(i);
  }
  return answer;
}
