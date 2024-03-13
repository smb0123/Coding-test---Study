function solution(my_string) {
  var answer = my_string;
  let vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < vowels.length; i++) {
    answer = answer.split(vowels[i]).join("");
  }

  return answer;
}
