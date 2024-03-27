function solution(name, yearning, photo) {
  var answer = [];
  const obj = {};
  for (let i = 0; i < name.length; i++) {
    obj[name[i]] = yearning[i];
  }
  console.log(obj);
  for (let i = 0; i < photo.length; i++) {
    let sum = 0;
    for (let j of photo[i]) {
      if (j in obj) {
        sum += obj[j];
      }
    }
    answer.push(sum);
  }
  return answer;
}

console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
      ["may", "kein", "kain", "radi"],
      ["may", "kein", "brin", "deny"],
      ["kon", "kain", "may", "coni"],
    ]
  )
);
