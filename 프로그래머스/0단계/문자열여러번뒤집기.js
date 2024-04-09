function solution(my_string, queries) {
  for (let i = 0; i < queries.length; i++) {
    const [start, end] = queries[i];
    const reverse = my_string
      .substring(start, end + 1)
      .split("")
      .reverse()
      .join("");
    my_string =
      my_string.substring(0, start) + reverse + my_string.substring(end + 1);
  }
  return my_string;
}
