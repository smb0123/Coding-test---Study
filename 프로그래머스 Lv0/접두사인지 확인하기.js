function solution(my_string, is_prefix) {
  var answer = is_prefix == my_string.slice(0, is_prefix.length) ? 1 : 0;

  return answer;
}
