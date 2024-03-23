function solution(my_string, m, c) {
  const column = [];

  for (let i = 0; i < my_string.length; i += m) {
    column.push(my_string.substr(i, m));
  }
  let result = "";
  for (let i = 0; i < column.length; i++) {
    result += column[i][c - 1];
  }

  return result;
}
