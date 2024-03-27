function solution(my_string, m, c) {
  var answer = "";
  const arr = [];
  let a = [];
  for (let i = 0; i < my_string.length; i++) {
    a.push(my_string[i]);
    if (i % m == m - 1) {
      arr.push(a);
      a = [];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i][c - 1];
  }
  return answer;
}
