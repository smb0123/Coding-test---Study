function solution(my_string, queries) {
  var answer = "";
  for (let i = 0; i < queries.length; i++) {
    let [start, end] = queries[i];
    let arr = my_string
      .slice(start, end + 1)
      .split("")
      .reverse();
    my_string = my_string.split("");
    my_string.splice(start, end - start + 1, ...arr);
    my_string = my_string.join("");
  }
  return my_string;
}

console.log(
  solution("rermgorpsam", [
    [2, 3],
    [0, 7],
    [5, 9],
    [6, 10],
  ])
);
