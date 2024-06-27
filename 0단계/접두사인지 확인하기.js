function solution(my_string, is_prefix) {
  var answer = 0;
  let pre = is_prefix.length;

  answer = my_string.slice(0, pre) === is_prefix ? 1 : 0;

  return answer;
}
