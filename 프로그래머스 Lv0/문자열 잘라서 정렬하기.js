function solution(myString) {
  var answer = myString
    .split("x")
    .sort()
    .filter((e) => e);

  return answer;
}
