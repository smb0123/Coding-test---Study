function solution(age) {
  var answer = "";
  let text = "abcdefghij";

  while (age >= 0) {
    const remainder = age % 10;
    answer = text[remainder] + answer;
    age = Math.floor(age / 10);

    if (age <= 0) break;
  }
  return answer;
}
