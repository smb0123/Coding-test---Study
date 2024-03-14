function solution(my_string, is_suffix) {
  var answer = 0;
  let idx = my_string.lastIndexOf(is_suffix);
  if (idx == -1) {
    return (answer = 0);
  }
  let example = my_string.slice(idx);
  if (example === is_suffix) {
    answer = 1;
  }
  return answer;
}

console.log(solution("banana", "ana"));
