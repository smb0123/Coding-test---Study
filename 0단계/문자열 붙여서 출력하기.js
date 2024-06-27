function solution(my_string) {
  var answer = 0;

  const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  let count = 0;

  for (let i = 0; i < my_string.length; i++) {
    for (let j = 0; j < num.length; j++) {
      if (my_string[i] == num[j]) {
        answer += +my_string[i];
      }
    }
  }

  return answer;
}
