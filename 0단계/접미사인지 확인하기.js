function solution(my_string, is_suffix) {
  var answer = 0;
  let M = my_string.length;
  let S = is_suffix.length;

  my_string.includes(is_suffix)
    ? my_string.lastIndexOf(is_suffix) !== M - S
      ? (answer = 0)
      : (answer = 1)
    : (answer = 0);

  return answer;
}
