function solution(my_string) {
  var answer = [];
  result = "";

  answer.push(...my_string.toLowerCase());
  answer.sort();

  answer.map((el) => (result += el));

  return result;
}
