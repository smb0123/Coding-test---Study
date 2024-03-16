function solution(my_string) {
  let arr = [...my_string];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i].toLowerCase()) {
      arr[i] = arr[i].toUpperCase();
    } else {
      arr[i] = arr[i].toLowerCase();
    }
  }
  let answer = arr.join("");
  return answer;
}
