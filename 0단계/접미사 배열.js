function solution(my_string) {
  var answer = [];

  for (let i = my_string.length - 1; i > -1; i--) {
    answer.push(my_string.slice(i));
  }

  answer.sort();

  return answer;
}
