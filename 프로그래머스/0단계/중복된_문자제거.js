function solution(my_string) {
  var answer = "";
  const set = new Set();

  for (let i = 0; i < my_string.length; i++) {
    if (!set.has(my_string[i])) {
      answer += my_string[i];
      set.add(my_string[i]);
    }
  }
  return answer;
}
